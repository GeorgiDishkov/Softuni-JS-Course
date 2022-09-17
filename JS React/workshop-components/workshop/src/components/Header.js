const Header = ({
    router
}) => {

    return (
        <header onClick={router}>
            <h1><a className="home" href="/">GamesPlay</a></h1>
            <nav>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/create">Create Game</a>
                <a href="/logout">Logout</a>
                <a href="/catalog">All games</a>
            </nav>
        </header>
    )

}

export default Header;