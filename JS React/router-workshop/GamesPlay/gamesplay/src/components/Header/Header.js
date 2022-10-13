import { useAuthContext } from "../../context/AuthContext"
import { logoutApi } from "../../util/apiReqests";

const Header = () => {
    const { logout } = useAuthContext();
    const { isAuthenticated } = useAuthContext();
    const LogedUsers = () => {
        return (
            <div id="user">
                <a href="/create">Create Game</a>
                <a href="/logout" onClick={onLogout}>Logout</a>
            </div>
        )
    }

    const GuestUsers = () => {
        return (
            <div id="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
        )
    }

    const onLogout = async (e) => {
        e.preventDefault();
        logoutApi();
        logout();
    }

    return (

        < header >
            {/* <!-- Navigation --> */}
            < h1 > <a className="home" href="/">GamesPlay</a></h1>
            <nav>
                <a href="/cataloge">All games</a>
                {
                    isAuthenticated ? <LogedUsers />
                        : <GuestUsers />
                }
            </nav>
        </header >
    )
}

export default Header;