import SessionsListItem from './SessionsListItem/SessionsListItem'

export default function SessionsList({sessions}){
    const sessionsComponents = sessions.map(session =><SessionsListItem key={session._id} session={session}></SessionsListItem>)
    return (
        <>
            {sessionsComponents}
        </>
    )
}