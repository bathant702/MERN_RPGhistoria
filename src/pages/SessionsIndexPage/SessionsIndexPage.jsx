import { sessionsIndexRequest } from '../../utilities/sessions-api';
import { useEffect, useState } from 'react'
import SessionsList from '../../components/SessionsList/SessionsList'

export default function SessionsIndexPage(){
    const [sessions, setSessions] = useState([])
    useEffect(()=>{
        console.log('loading...')
        async function getSessions(){
            const sessions = await sessionsIndexRequest();
            setSessions(sessions)
            console.log('session has been obtained')
        }
        getSessions();
    }, [])
    return(
        <>
        <h1>Rpg Sessions</h1>
        <p>Pages to detail your ventures.</p>
        <SessionsList sessions={sessions}></SessionsList>
        </>
    )
}