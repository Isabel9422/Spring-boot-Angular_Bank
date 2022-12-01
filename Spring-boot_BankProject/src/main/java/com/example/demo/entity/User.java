package com.example.demo.entity;


import java.util.Optional;

import com.example.demo.entity.enums.UserType;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@NotEmpty
	@Size(min=3, max=20)
	private String name;

	@NotNull
	@Email
	private String email;
	
	private UserType userType;
	
	public User() {
		this.name = "";
		this.email = "";
		this.userType = null;
		}

	public User(String name, String email, UserType userType) {
		this.name = name;
		this.email = email;
		this.userType = userType;
	}

	public User(User objUser) {
		this.name = objUser.name;
		this.email = objUser.email;
		this.userType = objUser.userType;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public UserType getUserType() {
		return userType;
	}

	public void setUserType(UserType userType) {
		this.userType = userType;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", userType=" + userType + "]";
	}
	
	public Optional<User> updateUser(User user, Long id, Optional<User> userOpt) {
		Optional<User> newUser = userOpt.map(e-> {
			if(!user.getName().isEmpty()) e.setName(user.getName());
			
			if(!user.getEmail().isEmpty()) e.setEmail(user.getEmail());
			
			if(user.userType != null) e.setUserType(user.getUserType());
			return e;
		});
		return newUser;
	}
	
}
