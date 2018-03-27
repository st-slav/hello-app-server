package ru.mamsta.learn.helloapp.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class AppController {

	@GetMapping(value = "factorial")
	public ResponseEntity<Long> getFactorial(@RequestParam("number") Long num) {
		long result = 1;
		for (long i = 1; i <= num; i++) {
			result *= i;
		}
		return new ResponseEntity<Long>(result, HttpStatus.OK);
	}

	@GetMapping("helloworld")
	public ResponseEntity<Data<String>> helloworld() {
		return new ResponseEntity<Data<String>>(new Data<String>("Hello world!!"), HttpStatus.OK);
	}
	
	@PostMapping(value = "user", produces = "application/json; charset=UTF-8")
	public ResponseEntity<User> sendUser(@RequestBody User user) {
		return new ResponseEntity<User>(new User(user.getName() + "server", user.getAge() + 10), HttpStatus.OK);
	}
}
