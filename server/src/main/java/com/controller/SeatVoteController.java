package com.controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.SeatVote;
import com.service.SeatVoteService;

@RestController
@CrossOrigin
@RequestMapping("/api/seatVote")
public class SeatVoteController {
    @Autowired
    private SeatVoteService seatVoteService;

    @GetMapping("/{planType}/{planNum}")
    public ResponseEntity<SeatVote> getSeatVoteData(@PathVariable("planType") String planType, @PathVariable("planNum") int planNum) {
        return ResponseEntity.ok(seatVoteService.getSeatVoteByPlanTypeAndPlanNum(planType, planNum));
    }
}
