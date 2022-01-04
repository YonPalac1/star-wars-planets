import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useForm from '../hooks/useForm';
import {startGoogleLogin, startLoginEmailPass} from '../actions/auth';
import Navbar from '../components/Navbar'

export const Login = () => {
    const dispatch = useDispatch();

    const [formValue, handleInputChange] = useForm({
        email : '',
        password : '',
    })

    const {email, password} = formValue;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPass(email,password))
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

       return (
        <>
            <Navbar />
            <form className='login-form' onSubmit={handleLogin}>
            <h3 className='neon'>Login</h3>
                <label>Ingresar nombre</label>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="i-form"
                    autoComplete='off'
                    onChange={handleInputChange}
                />
                <label>Ingresar contraseña</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="i-form"
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="buttons__btn buttons__btn-primary buttons__btn-block"
                >
                    Login

                </button>
                <div className="auth__social-networks">
                    <label>
                        <p>Login con Google</p>
                    </label>
                    <div
                        className="google-btn"
                        onClick = {handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Logueate con Google</b>
                        </p>
                    </div>
                </div>
                <label>
                    <Link to="/register">Registrate</Link>
                </label>
            </form>
        </>
    )
}
