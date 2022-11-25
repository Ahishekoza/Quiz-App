package com.example.demo.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.demo.service.UserDetailServiceImp;


@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private UserDetailServiceImp userDetailService;
	
	@Autowired 
	private JwtUtil jwtUtil;
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		
		final String requestTokenHeader=request.getHeader("Authorization");
				System.out.println(requestTokenHeader);
		
		String username=null;
		String jwtToken=null;
		
		if(requestTokenHeader!=null && requestTokenHeader.startsWith("Bearer ")) {
			jwtToken=requestTokenHeader.substring(7);
			
			
			try{
				username=this.jwtUtil.extractUsername(jwtToken);
		
			}
			catch(Exception e) {
			   e.printStackTrace();
			}
		}
		else {
			System.out.println("Invalid token");
		}
		
		if(username!= null && SecurityContextHolder.getContext().getAuthentication()==null) {
			final UserDetails userDetail=this.userDetailService.loadUserByUsername(username);
			if(this.jwtUtil.validateToken(jwtToken, userDetail)) {
				
				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetail,null,userDetail.getAuthorities());
//				Retaining new object
				usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
				
				
				
			}
		}
		else {
			System.out.println("Token is not valid");
		}
		filterChain.doFilter(request, response);
		
	}

}
