import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateSessionRequest } from '../../../utilities/sessions-api';

export default function EditSessionForm({session, setSession, setEditFormIsOpen}){
    const navigate = useNavigate();
    const nameRef = useRef('')
    const dateCreatedRef = useRef('')
    const dungeonMasterRef = useRef('')
    const gameStateRef = useRef('')
    const descriptionRef = useRef('')
    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        const updatedSession = {
            name: nameRef.current.value,
            // dateCreated: dateCreatedRef.current.value,
            // dungeonMaster: dungeonMasterRef.current.checked,
            // gameState: gameStateRef.current.value,
            description: descriptionRef.current.value,
        }
        try{
            const newSession = await updateSessionRequest(session._id, updatedSession)
            setSession(newSession)
            setEditFormIsOpen(false)
        }catch(err){
            setError("Bad Update, Man")
        }
    }
    return(
        <>
        <h3>edit</h3>
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
                <button>Edit Session</button>
            </form>
            </>
    )
}