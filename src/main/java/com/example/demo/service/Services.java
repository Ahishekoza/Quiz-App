package com.example.demo.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.entities.UserRole;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;

@Service
public class Services {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	
	public User createUser(User user,Set<UserRole> userRole) throws Exception {
//     checking weather the user name is present in User or not 
		 User local=this.userRepository.findByUsername(user.getUsername());
		if(local!=null) {
			System.out.println("User already present");
			throw new Exception("User Present");
		}
		else {
//			If user is present then add user Role and user RoleId
			for(UserRole ur: userRole) {
				
				
//				 UserRole will fetch all the roles from roleId
				roleRepository.save(ur.getRoleId());
			}
//			Adding user role in users
			user.getUserRole().addAll(userRole);
			local=userRepository.save(user);
			
		}
		return local;
		
	}
	
//	Get the User 
	public User getUser(String username) {
		return userRepository.findByUsername(username);
	}
	
//	Delete the User
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}
}

