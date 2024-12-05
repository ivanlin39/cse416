package com.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "seatvotes")
public class SeatVote {
    @Id
    private int planNum;
    private String planType;
    private Point[] points;

    public int getPlanNum(){return this.planNum;}
    public String getPlanType(){return this.planType;}
    public Point[] getPoints(){return this.points;}
    public void setPlanNum(int planNum){this.planNum = planNum;}
    public void setPlanType(String planType){this.planType = planType;}
    public void setPoints(Point[] points){this.points = points;}
    
}
