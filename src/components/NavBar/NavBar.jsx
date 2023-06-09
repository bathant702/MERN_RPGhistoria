import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';

export default function NavBar({setUser, user}){
    function handleLogOut() {
        logOut();
        setUser(null);
    }
    return(
        <>
            <nav>
            <span>Welcome, {user.name}</span>
                &nbsp; | &nbsp;
                <Link to="/sessions">View your RPG Sessions</Link>
                &nbsp; | &nbsp;
                <Link to="/sessions/new">Add an RPG Session</Link>
                &nbsp; | &nbsp;
                <Link to="/characters">View your Characters</Link>
                &nbsp; | &nbsp;
                <Link to="/characters/new">Add a Character</Link>
                &nbsp; | &nbsp;
                &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
            </nav>
        </>
    )
}