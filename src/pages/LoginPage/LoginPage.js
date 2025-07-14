import React from 'react';
import Swal from 'sweetalert2';
import  { auth, googleProvider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const usuarios = [
  { email: "chus@gmail.com", password: "123" },
  { email: "maria@correo.com", password: "mar123" },
  { email: "carlos@correo.com", password: "car123" },
  { email: "laura@correo.com", password: "lau123" },
  { email: "andres@correo.com", password: "and123" },
  { email: "camila@correo.com", password: "cam123" },
  { email: "david@correo.com", password: "dav123" },
  { email: "paula@correo.com", password: "Pau123" },
  { email: "jose@correo.com", password: "jos123" },
  { email: "valentina@correo.com", password: "val123" }
];


function LoginPage() {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire("Campos vacíos", "Por favor llena todos los campos.", "warning");
      return;
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(email)) {
      Swal.fire("Correo inválido", "Por favor escribe un correo válido.", "error");
      return;
    }

    const usuarioValido = usuarios.find(u => u.email === email && u.password === password);
  if (usuarioValido) {
      Swal.fire({
        title: "¡Bienvenido!",
        text: "Inicio de sesión exitoso.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      }).then(() => {
        navigate("/dashboard");
      });
    } else {
      Swal.fire("Error", "Correo o contraseña incorrectos.", "error");
    }
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: '¡Bienvenido!',
          text: `Sesion inciada con ${user.email}`,
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          window.location.href = '/dashboard';
        });
      })
      .catch(error => {
        console.error(error);
        Swal.fire("Error", "No se pudo iniciar sesión con Google", "error");
      });
  };

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="usuario@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
            <button type="submit" className="btn btn-primary w-100 mb-2">Entrar</button>
            <button type="button" className="btn btn-danger w-100" onClick={handleGoogleLogin}>Iniciar con Google</button>
          </form>
        </div>
        <div className="card-footer text-center">
          <small className="text-muted">
            ¿No tienes cuenta? <a href="/register">Regístrate</a>
          </small>
          <br />
          <small className="text-muted">
            ¿Olvidaste tu contraseña? <a href="/forgot">Recuperar Contraseña</a>
          </small>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;

