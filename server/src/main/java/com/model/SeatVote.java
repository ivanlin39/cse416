package com.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "seatvotes")
public class SeatVote {
    @Id
    private int planNum;
    @Field("planType")
    private String planType;
    @Field("points")
    private List<Point> points;

    public int getPlanNum(){return this.planNum;}
    public String getPlanType(){return this.planType;}
    public List<Point> getPoints(){return this.points;}
    public void setPlanNum(int planNum){this.planNum = planNum;}
    public void setPlanType(String planType){this.planType = planType;}
    public void setPoints(List<Point> points){this.points = points;}
    
}
