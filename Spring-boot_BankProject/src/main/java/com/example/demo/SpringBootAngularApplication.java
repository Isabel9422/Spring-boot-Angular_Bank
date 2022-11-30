package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@SpringBootApplication
public class SpringBootAngularApplication {

	public static void main(String[] args) {
		
		ApplicationContext context =SpringApplication.run(SpringBootAngularApplication.class, args);
		
		UserRepository urepo = context.getBean(UserRepository.class);
	
	}

}
