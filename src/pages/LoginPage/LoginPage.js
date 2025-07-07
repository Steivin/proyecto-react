function LoginPage() {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
          <form id="loginForm">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="usuario@ejemplo.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Contraseña"
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberCheck"
              />
              <label className="form-check-label" htmlFor="rememberCheck">
                Recuérdame
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Entrar</button>
          </form>
        </div>
        <div className="card-footer text-center">
          <small className="text-muted">
            ¿No tienes cuenta? <a href="./html/formulario.html">Regístrate</a>
          </small>
          <br />
          <small className="text-muted">
            ¿Olvidaste tu contraseña? <a href="./html/recuperar.html">Recuperar Contraseña</a>
          </small>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;

