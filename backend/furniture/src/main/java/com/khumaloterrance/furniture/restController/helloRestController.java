package com.khumaloterrance.furniture.restController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloRestController {

    @GetMapping("/home")
    public String helloWorld(){
        return "<h1>Hello World</h1>";
    }
}
