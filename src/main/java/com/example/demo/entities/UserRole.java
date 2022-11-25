package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class UserRole {

	public Long getUserRoleId() {
		return userRoleId;
	}


	public void setUserRoleId(Long userRoleId) {
		this.userRoleId = userRoleId;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public RoleId getRoleId() {
		return roleId;
	}


	public void setRoleId(RoleId roleId) {
		this.roleId = roleId;
	}


	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long userRoleId;
	
//	One role to one user
	@ManyToOne(fetch=FetchType.EAGER)
	private User user;
	
	
	@ManyToOne
	private RoleId roleId;
	
	
	
}
