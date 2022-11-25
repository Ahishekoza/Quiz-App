package com.example.demo.helper;



public class UserFoundException extends Exception {

	/**
	 * 
	 */
	public UserFoundException() {
		super("User is already present in the DB");
	}
	
	public UserFoundException(String msg) {
		super(msg);
	}

}
