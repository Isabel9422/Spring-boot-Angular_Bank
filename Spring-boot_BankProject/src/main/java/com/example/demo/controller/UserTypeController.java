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

import com.example.demo.entity.UserType;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/userTypes")
public class UserTypeController {

	@Autowired
	UserService userService;

	@GetMapping()
	public List<UserType> GetUsersTypes() {
		return this.userService.FindAllUserTypes();

	}

	@GetMapping("/{id}")
	public ResponseEntity<UserType> findById(@PathVariable("id") Long id) {
		
		UserType userType = this.userService.FindUserType(id);

		if (userType != null) {
			return ResponseEntity.ok(userType);
		} else {
			return ResponseEntity.notFound().build();
		}

	}

	@PostMapping()
	public ResponseEntity<UserType> AddUserType(@Valid @RequestBody UserType userType) {

		Optional<UserType> result = this.GetUsersTypes().stream().parallel()
				.filter(e -> e.getType().equals(userType.getType()))
				.findAny();

		try {
			if (userType != null && !result.isPresent()) {
				UserType aux = this.userService.saveUserType(userType);
				return ResponseEntity.ok(aux);

			} else {
				return ResponseEntity.ok(result.get());
			}
		} catch (Exception ex) {
			return ResponseEntity.badRequest().build();
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity DeleteById(@PathVariable("id") Long id) {
		UserType userType = this.userService.deleteUserType(id);
				
		if (userType !=null) {
			return ResponseEntity.ok(userType);
		} else {
			return ResponseEntity.notFound().build();
		}

	}

	@PutMapping("/{id}")
	public ResponseEntity updateUser(@RequestBody UserType userType, @PathVariable("id") Long id) {

		UserType newuserType = this.userService.updateUserType(id, userType);
		
		if (userType !=null) {
			return ResponseEntity.ok(newuserType);
		} else {
			return ResponseEntity.notFound().build();
		}

	}
}
