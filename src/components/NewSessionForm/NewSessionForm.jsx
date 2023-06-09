import { useRef, useState } from 'react';
import { createSessionRequest } from '../../utilities/sessions-api';
import { useNavigate, useParams } from "react-router-dom";

export default function NewSessionForm(){
    const navigate = useNavigate();
    const nameRef = useRef('')
    const dateCreatedRef = useRef('')
    const dungeonMasterRef = useRef('')
    const gameStateRef = useRef('')
    const descriptionRef = useRef('')
    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        setError('')
        const newSession = {
            name: nameRef.current.value,
            // dateCreated: dateCreatedRef.current.value,
            // dungeonMaster: dungeonMasterRef.current.checked,
            // gameState: gameStateRef.current.value,
            description: descriptionRef.current.value,
        }
        try{
            const newSessionResponse = await createSessionRequest(newSession)
            navigate('/sessions')
        }catch(err){
            setError(err)
        }
        
    }
    return (
        <>
            { error && <p>{JSON.stringify(error)}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' id="name" ref={nameRef} />
                {/* <label htmlFor='dateCreated'>Date Created: </label>
                <input type='number' id='dateCreated' ref={dateCreatedRef} />
                <label htmlFor='dungeonMaster'>Dungeon Master: </label>
                <input type='checkbox' id='dungeonMaster' ref={dungeonMasterRef} />
                <label htmlFor='gameState'>Game State: </label>
                <input type='text' id='gameState' ref={gameStateRef} /> */}
                <label htmlFor='description'>Description: </label>
                <input type='text' id='description' ref={descriptionRef} />
                <button>Create the RPG Session</button>
            </form>
        </>
    )
}