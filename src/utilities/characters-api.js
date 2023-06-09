import sendRequest from "./send-request";
const BASE_URL = '/api/characters'; //this relating to the routes/api and controller/api. make sure its the same spelling

export async function charactersIndexRequest(){
    return sendRequest(BASE_URL);
}

export async function createCharacterRequest(characterData){
    return sendRequest(BASE_URL, "POST", characterData)
}

export async function getCharacterRequest(characterId){
    return sendRequest(`${BASE_URL}/${characterId}`) 
}

export async function deleteCharacterRequest(characterId){
    return sendRequest(`${BASE_URL}/${characterId}`, "DELETE")
}

export async function updateCharacterRequest(characterId, characterData){
    return sendRequest(`${BASE_URL}/${characterId}`, "PUT", characterData)
}