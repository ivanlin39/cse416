package com.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.model.Ensemble;

@Repository
public interface EnsembleRepository extends MongoRepository<Ensemble, String> {

}
