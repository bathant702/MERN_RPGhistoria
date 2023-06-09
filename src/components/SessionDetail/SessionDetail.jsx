import { useState} from 'react';
import EditSessionForm from './EditSessionForm/EditSessionForm';


export default function SessionDetail({session, handleDelete, setSession}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    function toggleEditForm(){
        setEditFormIsOpen((prevState) => {
            return !prevState
            }
        )
    }
    return (
        <>
            <div>
                <h3>{session.name}</h3>
                <p>Description: {session.description}</p>
                <button onClick={handleDelete}>DELETE {session.name}</button>
                <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close Editor" : "Edit"}
                </button>
                { editFormIsOpen && 
                    <EditSessionForm session={session} setSession={setSession} setEditFormIsOpen={setEditFormIsOpen}></EditSessionForm>
                }
            </div>
        </>
    )
}