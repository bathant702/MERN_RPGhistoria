import sendRequest from "./send-request";
const BASE_URL = '/api/sessions'; //this relating to the routes/api and controller/api. make sure its the same spelling

export async function sessionsIndexRequest(){
    return sendRequest(BASE_URL);
}

export async function createSessionRequest(sessionData){
    return sendRequest(BASE_URL, "POST", sessionData)
}

export async function getSessionRequest(sessionId){
    return sendRequest(`${BASE_URL}/${sessionId}`) 
}

export async function deleteSessionRequest(sessionId){
    return sendRequest(`${BASE_URL}/${sessionId}`, "DELETE")
}

export async function updateSessionRequest(sessionId, sessionData){
    return sendRequest(`${BASE_URL}/${sessionId}`, "PUT", sessionData)
}