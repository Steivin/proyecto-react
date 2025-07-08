function RegisterPage() {
    return (
         <div className="container mt-4 mb-4 p-4 border rounded bg-light">
        <h1 className="text-center te">Formulario</h1>
        <form action="/formulario" method="post">
            <div className="row g-3 align-items-center">
                <label htmlFor="nombre" className="form-label">Nombres</label>
                <input type="text" className="form-control" id="nombre" name="nombre" />
            </div>
            <div className="row g-3 align-items-center">
                <label htmlFor="apellidos" className="form-label">Apellidos</label>
                <input type="text" className="form-control" id="apellidos" name="apellidos" />
            </div>
            <div className="row g-3 align-items-center">
                <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                <input type="date" className="form-control" id="fechaNacimiento" name="fechaNacimiento" />
            </div>
            <div className="row g-3 align-items-center mt-3">
                <label htmlFor="contraseña" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="contraseña" name="contraseña" />
            </div>
            <div className="row g-3 align-items-center mt-3">
                <label htmlFor="repetirContraseña" className="form-label">Repetir Contraseña</label>
                <input type="password" className="form-control" id="repetirContraseña" name="repetirContraseña" />
            </div>
            <div className="row g-3 align-items-center">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="row g-3 align-items-center">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input type="number" className="form-control" id="telefono" name="telefono" />
            </div>
            <div className="row g-3 align-items-center">
                <label htmlFor="genero" className="form-label">Género</label>
                <select className="form-select" aria-label="Default select example" id="genero" name="genero">
                    <option value="">Seleccione su género</option>
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
                    <option value="3">No define</option>
                </select>
            </div>

            <div className="row g-3 align-items-center">
                <label htmlFor="nacionalidad" className="form-label">Nacionalidad</label>
                <select className="form-select" aria-label="Default select example" id="nacionalidad" name="nacionalidad">
                    <option value="">País</option>
                    <option value="1">Colombia</option>
                    <option value="2">Venezuela</option>
                    <option value="3">Ecuador</option>
                    <option value="4">Otro</option>
                </select>
            </div>
            <div className="row g-3 align-items-center">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
            <div>
                <a href="/">Regresar al inicio</a>
            </div>
        </form>
    </div>
    );
}

export default RegisterPage;