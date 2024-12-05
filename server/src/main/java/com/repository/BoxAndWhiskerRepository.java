package com.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.model.BoxAndWhisker;

@Repository
public interface BoxAndWhiskerRepository extends MongoRepository<BoxAndWhisker, String>{
    @Query("{ 'planType': ?0, 'category': ?1 }")
    List<BoxAndWhisker> findByPlanTypeAndCategory(String planType, BoxAndWhisker.Category category);
}
