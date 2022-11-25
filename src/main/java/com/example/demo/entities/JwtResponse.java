package com.example.demo.entities;

public class JwtResponse {

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	String token;

	public JwtResponse(String token) {
		super();
		this.token = token;
	}

	public JwtResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
