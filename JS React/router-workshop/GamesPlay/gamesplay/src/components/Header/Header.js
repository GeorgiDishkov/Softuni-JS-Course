import { useAuthContext } from "../../context/AuthContext"

const Header = () => {
    const { isAuthenticated } = useAuthContext();
    console.log(isAuthenticated);
    const LogedUsers = () => {
        return (
            <div id="user">
                <a href="/create">Create Game</a>
                <a href="/logout">Logout</a>
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