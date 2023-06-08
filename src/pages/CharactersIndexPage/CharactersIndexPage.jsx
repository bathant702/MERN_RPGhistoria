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
        <h1>Character Index</h1>
        <p>If you can see this, its just not displaying CharactersList</p>
        <CharactersList characters={characters}></CharactersList>
        </>
    )
}