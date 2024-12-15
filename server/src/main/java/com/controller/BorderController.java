package com.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Border;
import com.service.BorderService;

@RestController
@CrossOrigin
@RequestMapping("/api/border")
public class BorderController {
    @Autowired 
    private BorderService borderService;

    @GetMapping("/{plan}")
    public Border getBorder(@PathVariable("plan") String plan){
        return borderService.getBorderData(plan);
    }

    @PostMapping()
    public Border addGeo(){
        return borderService.addBorder();
    }
}
