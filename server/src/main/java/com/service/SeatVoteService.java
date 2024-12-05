package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.SeatVote;
import com.repository.SeatVoteRepository;

@Service
public class SeatVoteService {
    @Autowired
    private SeatVoteRepository seatVoteRepo;

    public SeatVote getSeatVoteByPlanTypeAndPlanNum(String planType, int planNum) {
        System.out.println(seatVoteRepo.findByPlanTypeAndPlanNum(planType, planNum).getPoints()[30].getRepSeats());
        return seatVoteRepo.findByPlanTypeAndPlanNum(planType, planNum);
    }
}