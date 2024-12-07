package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.model.SeatVote;
import com.repository.SeatVoteRepository;

@Service
public class SeatVoteService {
    @Autowired
    private SeatVoteRepository seatVoteRepo;

    @Cacheable(value = "myCache", key = "#planType + '-' + #planNum")
    public SeatVote getSeatVoteByPlanTypeAndPlanNum(String planType, int planNum) {
        return seatVoteRepo.findByPlanTypeAndPlanNum(planType, planNum);
    }
}