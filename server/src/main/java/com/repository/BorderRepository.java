package com.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.model.Border;

@Repository
public interface BorderRepository extends MongoRepository<Border, String>{
    @Query("{'_class': ?0}")
    Border findByClass(String cls);
}
