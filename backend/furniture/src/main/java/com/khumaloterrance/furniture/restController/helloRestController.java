package com.khumaloterrance.furniture.restController;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class helloRestController {

    @GetMapping(value = "/home")
    public ResponseEntity<String> helloWorld(){
        HttpHeaders httpHeaders = new HttpHeaders();

        httpHeaders.setContentType(org.springframework.http.MediaType.TEXT_PLAIN);
        return  new ResponseEntity<String>("\" Hello World \"", httpHeaders, HttpStatus.OK);
    }
}
