package com.service;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;
import java.nio.charset.StandardCharsets;
import java.io.IOException;

@Service
public class VoteService {
    private final ObjectMapper objectMapper = new ObjectMapper();

    public JsonNode getMarylandRaceVote() throws IOException{
        String jsonString = readJsonFile("MarylandVoting.json");
        return objectMapper.readTree(jsonString);
    }

    private String readJsonFile(String filename) throws IOException {
        ClassPathResource resource = new ClassPathResource(filename);
        return StreamUtils.copyToString(resource.getInputStream(), StandardCharsets.UTF_8);
    }
}
