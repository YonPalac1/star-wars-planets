import useForm from "../hooks/useForm";

import "./styles.css";


function FormWithHook() {
    const [formState, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
        reset()
    }

    return (
        <div>
            <h4>FormWithHook</h4>
            <hr />
            <div className="row">
                <div className="col-12 col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 mx-auto mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    className="form-control"
                                    placeholder="tu nombre"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-12 mx-auto mb-3">
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    className="form-control"
                                    placeholder="tu email"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-12 mx-auto mb-3">
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    className="form-control"
                                    placeholder="****"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
                <div className="col-12 col-md-6">
                <div className="alert alert-info ">
          En este ejemplo se implementa la creación un custom Hook, llamado <b>useForm</b> en el cual se dispone toda la lógica para manejar la captura de información del formulario.
        </div>
                </div>

            </div>


        </div>
    );
}

export default FormWithHook;
