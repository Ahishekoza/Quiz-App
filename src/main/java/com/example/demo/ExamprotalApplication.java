package com.example.demo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import java.util.HashSet;
//import java.util.Set;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//
////import java.util.HashSet;
//import java.util.Set;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//////
//import com.example.demo.entities.RoleId;
//import com.example.demo.entities.User;
//import com.example.demo.entities.UserRole;
//import com.example.demo.service.Services;

@SpringBootApplication
public class ExamprotalApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExamprotalApplication.class, args);
	}

//	@Autowired
//	private BCryptPasswordEncoder bCryptPasswordEncoder;
//	
//	
//	@Autowired
//	public Services service;
//	
//	@Override
//	public void run(String... args) throws Exception {
//		// TODO Auto-generated method stub
//		
//		User user=new User();
//		user.setFirstName("Abhishek");
//		user.setLastName("Oza");
//		user.setEmail("abhishekoza11@gmail.com");
//		user.setPassword(this.bCryptPasswordEncoder.encode("pranjal"));
//		user.setPhone("7841838287");
//		user.setUsername("Abhishek");
//		
//		
//		RoleId roleId=new RoleId();
//		roleId.setRoleId(44L);
//		roleId.setRoleName("Admin");
//		
//		
//		Set<UserRole> userRoleSet=new HashSet<>();
//		UserRole userRole=new UserRole();
//		userRole.setUser(user);
//		userRole.setRoleId(roleId);
//		
//		userRoleSet.add(userRole);
//		
//		
//		service.createUser(user, userRoleSet);
//		
//	}

}
