import { useState} from 'react';
import EditCharacterForm from './EditCharacterForm/EditCharacterForm';

export default function CharacterDetail({character, handleDelete, setCharacter}){
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
                <h3>{character.name}</h3>
                <p>Description: {character.description}</p>
                <p>Gear: {character.gear}</p>
                <button onClick={handleDelete}>DELETE {character.name}</button>
                <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close Editor" : "Edit"}
                </button>
                { editFormIsOpen && 
                    <EditCharacterForm character={character} setCharacter={setCharacter} setEditFormIsOpen={setEditFormIsOpen}></EditCharacterForm>
                }
            </div>
        </>
    )
}