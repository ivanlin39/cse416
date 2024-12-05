package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Ensemble;
import com.repository.EnsembleRepository;

@Service
public class EnsembleService {
    @Autowired
    private EnsembleRepository ensembleRepo;

    public Ensemble getEnsembleById(String planType){
        return ensembleRepo.findById(planType).orElse(null);
    }
}
