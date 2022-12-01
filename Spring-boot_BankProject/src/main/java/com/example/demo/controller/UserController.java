package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.entity.enums.UserType;
import com.example.demo.repository.UserRepository;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;

	public UserController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	

	@GetMapping("api/users")
	public List<User> GetUsers() {
		return userRepository.findAll();

	}

	@GetMapping("api/users/{id}")
	public ResponseEntity<User> findById(@PathVariable("id") Long id) {
		Optional<User> userOpt = userRepository.findById(id);

		if (userOpt.isPresent()) {
			return ResponseEntity.ok(userOpt.get());
		} else {
			return ResponseEntity.notFound().build();
		}

	}
	
	@PostMapping("api/users")
	public ResponseEntity<User> AddUser(@Valid @RequestBody User user) {
		
		if (userRepository.save(user) != null && !user.validateEmail(user.getEmail())) {
			if (user.getUserType() == null)
				user.setUserType(UserType.guest);
				return ResponseEntity.ok(user);			

		} else {
			return ResponseEntity.badRequest().build();
		}

	}

	@DeleteMapping("api/users/{id}")
	public ResponseEntity DeleteById(@PathVariable("id") Long id) {
		Optional<User> userOpt = userRepository.findById(id);

		if (userOpt.isPresent()) {
			userRepository.deleteById(id);
			return ResponseEntity.ok(userOpt.get());
		} else {
			return ResponseEntity.notFound().build();
		}

	}

	@DeleteMapping("api/users")
	public void DeleteAll() {
		userRepository.deleteAll();
	}

	@PutMapping("api/users/{id}")
	public ResponseEntity updateUser(@RequestBody User user, @PathVariable("id") Long id) {

		if (user.getId() != id) {
			user.setId(id);
		}

		Optional<User> userOpt = userRepository.findById(id);

		if (userOpt.isPresent()) {

			Optional<User> newUser = userOpt.get().updateUser(user, id, userOpt);
			
			userRepository.save(newUser.get());

			return ResponseEntity.ok(newUser);
			
		} else {
			return ResponseEntity.notFound().build();

		}

	}

}
