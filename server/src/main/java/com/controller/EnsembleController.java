package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Ensemble;
import com.service.EnsembleService;

@RestController
@CrossOrigin
@RequestMapping("/api/ensemble")
public class EnsembleController {
    @Autowired
    private EnsembleService ensembleService;
    
    @GetMapping("/{planType}")
    public ResponseEntity<Ensemble> getEnsembleData(@PathVariable("planType") String planType){
        return ResponseEntity.ok(ensembleService.getEnsembleById(planType));
    }
}
