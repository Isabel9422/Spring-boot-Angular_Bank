package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.entity.UserType;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.UserTypeRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;
	@Autowired
	UserTypeRepository userTypeRepo;

	public List<UserType> FindAllUserTypes() {
		return userTypeRepo.findAll();
	}

	public List<User> FindAllUsers() {
		return userRepo.findAll();
	}

	public UserType FindUserType(Long id) {
		return userTypeRepo.findById(id).get();
	}

	public User FindUser(Long id) {
		return userRepo.findById(id).get();
	}

	public UserType saveUserType(UserType userType) {
		return userTypeRepo.save(userType);
	}

	public User saveUser(User user) {
		return userRepo.save(user);
	}

	public UserType deleteUserType(Long id) {
		UserType aux = userTypeRepo.findById(id).get();
		if (aux != null) {
			userTypeRepo.deleteById(id);
			return aux;
		} else {
			return null;
		}
	}

	public User deleteUser(Long id) {
		User aux = userRepo.findById(id).get();
		if (aux != null) {
			userRepo.deleteById(id);
			return aux;
		} else {
			return null;
		}
	}

	public User updateUser(Long id, User user) {
		Optional<User> userOpt = userRepo.findById(id);

		if (userOpt.isPresent()) {

			Optional<User> newUser = userOpt.map(e-> {
						if(!user.getName().isEmpty()) e.setName(user.getName());
						
						if(!user.getEmail().isEmpty()) e.setEmail(user.getEmail());
						
						if(user.getUserType() != null) { 
							e.setUserType(this.FindAllUserTypes().stream().parallel()
									.filter(u -> u.getType().equals(user.getUserType().getType()))
									.findAny().get());
						}
						return e;
			});

			return userRepo.save(newUser.get());
		} else {
			return null;
		}

	}

	public UserType updateUserType(Long id, UserType userType) {

		Optional<UserType> userTypeOpt = userTypeRepo.findById(id);

		if (userTypeOpt.isPresent()) {

			Optional<UserType> newuserTypeOpt = userTypeOpt.map(e -> {
				if (userType.getId() == null)
					e.setId(id);

				if (!userType.getType().isEmpty())
					e.setType(userType.getType());
				return e;
			});

			return userTypeRepo.save(newuserTypeOpt.get());
		} else {
			return null;
		}

	}

}
