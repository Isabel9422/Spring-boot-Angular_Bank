package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.entity.UserType;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/users")
public class UserController {

	@Autowired
	UserService userService;
	
	
	@GetMapping()
	public List<User> GetUsers() {
		return this.userService.FindAllUsers();
	}

	@GetMapping("/{id}")
	public ResponseEntity<User> findById(@PathVariable("id") Long id) {

		User user = this.userService.FindUser(id);

		if (user != null) {
			return ResponseEntity.ok(user);
		} else {
			return ResponseEntity.notFound().build();
		}

	}
	
	@PostMapping()
	public ResponseEntity<User> AddUser(@Valid @RequestBody User user) {
		
		Optional<UserType> result = this.userService.FindAllUserTypes().stream().parallel()
				.filter(e -> e.getType().equals(user.getUserType().getType()))
				.findAny();

		try {
			if (user != null && !result.isPresent()) {
				User aux = this.userService.saveUser(user);
				return ResponseEntity.ok(aux);

			} else {
				User aux = user;
				aux.setUserType(result.get());
				this.userService.saveUser(aux);
				return ResponseEntity.ok(aux);
			}
		} catch (Exception ex) {
			return ResponseEntity.badRequest().build();
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity DeleteById(@PathVariable("id") Long id) {
		User user = this.userService.deleteUser(id);
		
		if (user !=null) {
			return ResponseEntity.ok(user);
		} else {
			return ResponseEntity.notFound().build();
		}

	}

	@PutMapping("/{id}")
	public ResponseEntity updateUser(@RequestBody User user, @PathVariable("id") Long id) {

		User newuser = this.userService.updateUser(id, user);
		
		if (newuser !=null) {
			return ResponseEntity.ok(newuser);
		} else {
			return ResponseEntity.notFound().build();
		}


	}

}
