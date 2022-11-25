package com.example.demo.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.config.JwtUtil;
import com.example.demo.entities.JwtRequest;
import com.example.demo.entities.JwtResponse;
import com.example.demo.entities.User;
//import com.example.demo.entities.JwtResponse;
import com.example.demo.service.UserDetailServiceImp;

@RestController
@CrossOrigin("*")
public class AuthenticateController {

	@Autowired
	private UserDetailServiceImp userDetailService;
	
	@Autowired 
	private JwtUtil jwtUtil;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	
	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtrequest ) throws Exception{
		try {
			authenticate(jwtrequest.getUsername(),jwtrequest.getPassword());
		}
		catch(Exception e) {
			e.printStackTrace();
			throw new Exception("User noot found");
		}
		UserDetails userDetail =this.userDetailService.loadUserByUsername(jwtrequest.getUsername());
		String token=this.jwtUtil.generateToken(userDetail);
		
		
		return ResponseEntity.ok(new JwtResponse(token));
	}


	private void authenticate(String username, String password) {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	
//	this will give you information of current User
	
	
//	The principal is the currently logged in user.
//	However, you retrieve it through the security context which is bound to the current thread
//	\and as such it's also bound to the current request and its session.28-May-2016
	
	
	@GetMapping("/current-user")
	private User currentUser(Principal principal) {
		
		return ((User)userDetailService.loadUserByUsername(principal.getName()));
	}
	
}
