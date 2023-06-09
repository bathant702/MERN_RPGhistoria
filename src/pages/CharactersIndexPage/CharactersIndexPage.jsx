import { charactersIndexRequest } from '../../utilities/characters-api';
import { useEffect, useState } from 'react'
import CharactersList from '../../components/CharactersList/CharactersList';

export default function CharactersIndexPage(){
    const [characters, setCharacter] = useState([])
    useEffect(()=>{
        console.log('loading...')
        async function getCharacters(){
            const characters = await charactersIndexRequest();
            setCharacter(characters)
            console.log('character has been obtained')
        }
        getCharacters();
    }, [])
    return(
        <>
        <h1>Your Characters</h1>
        <p>Please choose a role:</p>
        <CharactersList characters={characters}></CharactersList>
        </>
    )
}