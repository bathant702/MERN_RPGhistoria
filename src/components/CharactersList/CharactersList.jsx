import CharactersListItem from './CharactersListItem/CharactersListItem'

export default function CharactersList({characters}){
    const charactersComponents = characters.map(character =><CharactersListItem key={character._id} character={character}></CharactersListItem>)
    return (
        <>
            {charactersComponents}
        </>
    )
}