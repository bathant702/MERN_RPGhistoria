import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateCharacterRequest } from '../../../utilities/characters-api';

export default function EditCharacterForm({character, setCharacter, setEditFormIsOpen}){
    const navigate = useNavigate();
    const nameRef = useRef('')
    const dateCreatedRef = useRef('')
    const activeCharacterRef = useRef('')
    const rpgRaceRef = useRef('')
    const descriptionRef = useRef('')
    const hpInitSpeedRef = useRef('')
    const traitsRef = useRef('')
    const skillsRef = useRef('')
    const classAbilitiesRef = useRef('')
    const featsMagicSpecRef = useRef('')
    const gearRef = useRef('')
    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        const updatedCharacter = {
            // name: nameRef.current.value,
            // dateCreated: dateCreatedRef.current.value,
            // activeCharacter: activeCharacterRef.current.checked,
            // race: rpgRaceRef.current.value,
            description: descriptionRef.current.value,
            // hpInitSpeed: hpInitSpeedRef.current.value,
            // traits: traitsRef.current.value,
            // skills: skillsRef.current.value,
            // classAbilities: classAbilitiesRef.current.value,
            // featsMagicSpec: featsMagicSpecRef.current.value,
            gear: gearRef.current.value    
        }
        try{
            const newCharacter = await updateCharacterRequest(character._id, updatedCharacter)
            setCharacter(newCharacter)
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
            {/* <input type='text' id="name" ref={nameRef} />
                <label htmlFor='dateCreated'>Date Created: </label>
                <input type='number' id='dateCreated' ref={dateCreatedRef} />
                <label htmlFor='activeCharacter'>Active Character: </label>
                <input type='checkbox' id='activeCharacter' ref={activeCharacterRef} />
                <label htmlFor='race'>Race: </label>
                <input type='text' id='race' ref={rpgRaceRef} /> */}
                <label htmlFor='description'>Description: </label>
                <input type='text' id='description' ref={descriptionRef} />
                {/* <label htmlFor='hpInitSpeed'>HP, Initiative, & Speed: </label>
                <input type="text" id="hpInitSpeed" ref={hpInitSpeedRef} />
                <label htmlFor="traits">Traits: </label>
                <input type="text" id="traits" ref={traitsRef} />
                <label htmlFor="skills">Skills: </label>
                <input type="text" id="skills" ref={skillsRef} />
                <label htmlFor='classAbilities'>Class Abilities: </label>
                <input type="text" id="classAbilities" ref={classAbilitiesRef}/>
                <label htmlFor='featsMagicSpec'>Feats, Magic, & Special Abilities: </label>
                <input type="text" id="featsMagicSpec" ref={featsMagicSpecRef}/> */}
                <label htmlFor='gear'>Gear & Items: </label>
                <input type="text" id="gear" ref={gearRef}/>
                <button>Edit Character</button>
            </form>
            </>
    )
}