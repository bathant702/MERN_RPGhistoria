import { useNavigate, useParams } from "react-router-dom";
import { getSessionRequest, deleteSessionRequest } from "../../utilities/sessions-api";
import { useEffect, useState } from 'react';
import SessionDetail from "../../components/SessionDetail/SessionDetail"

export default function SessionDetailPage(){
    let { sessionId } = useParams();
    const [session, setSession] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        async function getSession(){
            const session = await getSessionRequest(sessionId);
            if(session){
                setSession(session)
                setTimeout(()=>{
                    setLoading(false)
                }, 1000)
            }else{
                setError('No Session Found')
                setLoading(false)
            }
        }
        getSession()
    }, [])

    async function handleDelete(e){
        const deleteResponse = await deleteSessionRequest(session._id);
        if(deleteResponse.data === 'success'){
            navigate('/sessions')
        }
    }
    return (
        <>
        <h1>And the story was foretold...</h1>
        { loading ? <p>Loading....</p>
        :
        error ? <p>{error}</p> 
        :
        <SessionDetail session={session} handleDelete={handleDelete} setSession={setSession}></SessionDetail>
        }
        </>
    )
}