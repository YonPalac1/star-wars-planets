import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRegisterWithEmailPassName } from '../actions/auth';
import useForm from '../hooks/useForm';
import Navbar from '../components/Navbar'

export const Register = () => {

    const dispatch = useDispatch()


    const [formValues, handleInputChange] = useForm({
        name : '',
        email : '',
        password : '',
        password2 : ''
    })

    const {name, email, password, password2} = formValues;

    const handleRegister = e => {
        e.preventDefault();
        dispatch(startRegisterWithEmailPassName(email,password,name))
    }


       return (
        <>
        <Navbar />
            <form className='login-form' onSubmit={handleRegister}> 
            <h3 className='neon'>Registro</h3>
                <label>Ingresar nombre</label>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="i-form"
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
                <label>Ingresar email</label>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="i-form"
                    autoComplete='off'
                    value={email}
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
                <label>Confirmar contraseña</label>
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="i-form"
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="buttons__btn buttons__btn-primary buttons__btn-block mb-5"
                >
                    Register

                </button>
                <label>
                    <Link to="/login">¿Estás registrado/a?</Link>
                </label>
            </form>
        </>
    )
}
