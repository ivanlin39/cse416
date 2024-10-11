import axios from "axios";

export const getBorderAsync = async (name) => {
    try{
        const response = await axios.get(`http://localhost:8080/api/border/${name}`);
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