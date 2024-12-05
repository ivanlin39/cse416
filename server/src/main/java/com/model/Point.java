package com.model;

import org.springframework.data.mongodb.core.mapping.Field;

public class Point {
    @Field("votes")
    private double votes;
    @Field("repSeats")
    private double repSeats;
    @Field("demSeats")
    private double demSeats;

    public double getVotes(){return this.votes;}
    public double getRepSeats(){return this.repSeats;}
    public double getDemSeats(){return this.demSeats;}
    public void setVotes(double votes){this.votes = votes;}
    public void setRepSeats(double repSeats){this.repSeats = repSeats;}
    public void setDemSeats(double demSeats){this.demSeats = demSeats;}

}
