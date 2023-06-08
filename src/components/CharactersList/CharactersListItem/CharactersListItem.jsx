import { Link } from 'react-router-dom'

export default function CharactersListItem({character}){
    return(
        <>
        <p>
            <Link to={`/characters/${character._id}`}>
                {character.name}
            </Link>
        </p>
        </>
    )
}