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
                <Link to="/sessions">View Sessions</Link>
                &nbsp; | &nbsp;
                <Link to="/sessions/new">Add a RPG Session</Link>
                &nbsp; | &nbsp;
                <Link to="/characters">View Characters</Link>
                &nbsp; | &nbsp;
                <Link to="/characters/new">Add a Character</Link>
                &nbsp; | &nbsp;
                <span>Welcome, {user.name}</span>
                &nbsp; | &nbsp;
                &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
            </nav>
        </>
    )
}