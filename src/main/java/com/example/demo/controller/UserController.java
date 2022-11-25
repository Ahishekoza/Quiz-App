package com.example.demo.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.RoleId;
import com.example.demo.entities.User;
import com.example.demo.entities.UserRole;
import com.example.demo.helper.UserFoundException;
import com.example.demo.service.Services;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired 
	private Services service;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	
	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception {
		
		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		
		Set<UserRole>roles=new HashSet<>();
		
		RoleId roldId=new RoleId();
		roldId.setRoleId(45L);
		roldId.setRoleName("Normal");
		
		
		UserRole userRole=new UserRole();
		userRole.setRoleId(roldId);
		userRole.setUser(user);
		
		
		roles.add(userRole);
		
		return this.service.createUser(user, roles);
		
	}
	
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username")String username) {
		
		return this.service.getUser(username);
		
	}
	
	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable("id") Long id) {
		
		this.service.deleteUser(id);
	}
	
//	@ExceptionHandler(UserFoundException.class)
//	public ResponseEntity<?>exceptionHandler(UserFoundException ex){
//		return ResponseEntity<>;
//	}

}
