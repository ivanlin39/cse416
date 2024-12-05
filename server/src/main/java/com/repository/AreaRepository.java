package com.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.model.Area;

@Repository
public interface AreaRepository extends MongoRepository<Area, String>{
    
}
