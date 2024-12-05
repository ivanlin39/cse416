package com.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.model.SeatVote;

@Repository
public interface SeatVoteRepository extends MongoRepository<SeatVote, Integer> {
    @Query("{ 'planType': ?0, 'planNum': ?1 }")
    SeatVote findByPlanTypeAndPlanNum(String planType, Integer planNum);
}
