import axios from "axios";

export const getBoxAndWhisker = async () => {
    try{
        const response = await axios.get(`http://localhost:8080/api/boxAndWhisker/${planType}`);
        console.log(response.data);
        return response.data;
    }catch(error){
        console.error('Error fetching box and whisker data:', error);
    }
}

export const getSeatVotes = async () => {
    try{
        const response = await axios.get(`http://localhost:8080/api/seatVote`);
        console.log(response.data);
        return response.data;
    }catch(error){
        console.error('Error fetching seat vote CSV:', error);
    }
}

export const getDistrictPlan = async (planType, planNumber) => {
    try{
        const response = await axios.get(`http://localhost:8080/api/districtPlan/${planType}/${planNumber}`);
        console.log(response.data);
        return response.data;
    }catch(error){
        console.error('Error fetching district plan:', error);
    }
}
export const getEnsembleSummary = async (planType) => {
    try{
        const response = await axios.get(`http://localhost:8080/api/ensemble/${planType}`);
        return response.data;
    }catch(error){
        console.error('Error fetching ensemble data:', error)
    }
}

export const getAreaDataAsync = async(pageName) => {
    try{
        const response = await axios.get(`http://localhost:8080/api/area/${pageName}`);
        return response.data;
    }catch(error){
        console.error('Error fetching map data:', error)
    }
}

export const getBorderAsync = async (plan) => {
    try{
        const response = await axios.get(`http://localhost:8080/api/border/${plan}`);
        return response.data;
    }catch(error){
        console.error('Error fetching border data:', error);
    }
}

const sumPopulationByDistrict = (data) => {
    const raceSum = []
    let id=1;
    Object.keys(data.population).forEach((race) =>{
        const temp = {}
        const sum = Object.values(data.population[race]).reduce((acc, curr) => acc + curr, 0);
        temp["value"] = sum;
        temp["id"] = id;
        temp["label"] = (race.length===13) ?  "Two Or More Race" : race.charAt(0).toUpperCase() + race.slice(1);;
        id++;
        raceSum.push(temp);
    })
    return raceSum;
}

export const getVotePopulation = async () => {
    try{
        const response = await axios.get("http://localhost:8080/api/vote");
        return sumPopulationByDistrict(response.data);
    }catch(error){
        console.error('Error fetching vote data:', error);
    }
}