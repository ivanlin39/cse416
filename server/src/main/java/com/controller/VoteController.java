package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;

import com.fasterxml.jackson.databind.JsonNode;
import com.service.VoteService;

@RestController
@CrossOrigin
@RequestMapping("/api/vote")
public class VoteController {
    @Autowired 
    private VoteService voteService;

    @GetMapping()
    public ResponseEntity<JsonNode> getVote(){
        try{
            JsonNode populuation;
            populuation = voteService.getMarylandRaceVote();
            return ResponseEntity.ok(populuation);
        }catch(IOException e){
            return ResponseEntity.internalServerError().build();
        }
    }
}
