package com.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;

import com.fasterxml.jackson.databind.JsonNode;
import com.service.BorderService;

@RestController
@CrossOrigin
@RequestMapping("/api/border")
public class BorderController {
    @Autowired 
    private BorderService borderService;

    @GetMapping("/{initials}")
    public ResponseEntity<JsonNode> getBorder(@PathVariable("initials") String initial){
        try{
            JsonNode borderData;
            if(initial.equals("USA")){
                borderData = borderService.getUSBorder();
            }else if(initial.equals("MD")){
                borderData = borderService.getMarylandBorder();
            }else{
                return ResponseEntity.badRequest().build();
            }
            return ResponseEntity.ok(borderData);
        }catch(IOException e){
            return ResponseEntity.internalServerError().build();
        }
    }
}
