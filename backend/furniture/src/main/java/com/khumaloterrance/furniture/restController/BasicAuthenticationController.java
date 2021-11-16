package com.khumaloterrance.furniture.restController;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicAuthenticationController {

    @GetMapping(value = "/basicauth")
    public ResponseEntity<String> basicAuth(){
        HttpHeaders httpHeaders = new HttpHeaders();

        httpHeaders.setContentType(org.springframework.http.MediaType.TEXT_PLAIN);
        return  new ResponseEntity<String>("\" You are authenticated \"", httpHeaders, HttpStatus.OK);
    }
    //eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTYzMjE0NjYxNCwiaWF0IjoxNjMxNTQxODE0fQ.WZpWSRrcth2DOm1YWFVreO_fXwEVQx501PkUX16HPNk0mLoN_o00N8gegj2LOPIJkFo6I7Umj8khvRH1--TwbA
}
