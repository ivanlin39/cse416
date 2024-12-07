package com.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.model.BoxAndWhisker;

@Repository
public interface BoxAndWhiskerRepository extends MongoRepository<BoxAndWhisker, String>{
    @Query("{ 'planType': ?0, 'category': ?1 }")
    BoxAndWhisker findByPlanTypeAndCategory(String planType, BoxAndWhisker.Category category);
}
