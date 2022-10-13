import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext';
import { loginApi } from '../../util/apiReqests'


const Login = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    async function onLogin(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        const authData = Object.fromEntries(formData);
        const result = await loginApi(authData);
        console.log(result);
        login(result);

        navigate(`/`)
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onLogin} method="POST">

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default Login;
