function ForgotPasswordPage() {
  return (
     <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div class="card shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
            <div class="card-body">
                <h3 class="card-title text-center mb-4">Recuperar Contraseña</h3>
                <form>
                    <div class="mb-3">
                        <label for="inputEmail" class="form-label" id="correo">Correo electrónico</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="usuario@ejemplo.com" />
                    </div>
                    <button type="submit" class="btn btn-success w-100 mb-1" id="send">Enviar al correo</button>
                    <button type="button" class="btn btn-primary w-100 mt-1"><a class="text-white text-decoration-none"
                            href="/">Volver al login</a></button>
                </form>
            </div>



        </div>
      </div>
  );
}
export default ForgotPasswordPage;