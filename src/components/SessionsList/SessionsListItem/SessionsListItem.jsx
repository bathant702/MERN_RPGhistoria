import { Link } from 'react-router-dom'

export default function SessionsListItem({session}){
    return(
        <>
        <p>
            <Link to={`/sessions/${session._id}`}>
                {session.name}
            </Link>
        </p>
        </>
    )
}