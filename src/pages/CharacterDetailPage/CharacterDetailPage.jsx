import { useNavigate, useParams } from "react-router-dom";
// import { getMovieRequest, deleteMovieRequest } from "../../utilities/movies-api";
import { getCharacterRequest, deleteCharacterRequest } from "../../utilities/characters-api";
import { useEffect, useState } from 'react';
// import MovieDetail from "../../components/MovieDetail/MovieDetail";
import CharacterDetail from "../../components/CharacterDetail/CharacterDetail";

export default function CharacterDetailPage(){
    let { characterId } = useParams();
    const [character, setCharacter] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        async function getCharacter(){
            const character = await getCharacterRequest(characterId);
            if(character){
                setCharacter(character)
                setTimeout(()=>{
                    setLoading(false)
                }, 1000)
            }else{
                setError('No Character Found')
                setLoading(false)
            }
        }
        getCharacter()
    }, [])

    async function handleDelete(e){
        const deleteResponse = await deleteCharacterRequest(character._id);
        if(deleteResponse.data === 'success'){
            navigate('/characters')
        }
    }
    return (
        <>
        <h1>Here's a character</h1>
        { loading ? <p>Loading....</p>
        :
        error ? <p>{error}</p> 
        :
        <CharacterDetail character={character} handleDelete={handleDelete} setCharacter={setCharacter}></CharacterDetail>
        }
        </>
    )
}