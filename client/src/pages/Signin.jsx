import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthImage from '../images/auth-image.jpg';
import AuthDecoration from '../images/auth-decoration.png';

function Signin() {
  // Corrección: Variables de estado dentro del componente funcional
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Necesitas 'useNavigate' para la navegación

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/login/`,
        {
          "email": email,
          "password": password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('Token', response.data.token);
        sessionStorage.setItem('tipoUsuario', response.data.user_type);
        setTimeout(() => {
          navigate('/dashboard/principal');
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main className="bg-white dark:bg-slate-900">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">
            {/* Header */}
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link className="block" to="/">
                  {/* SVG Logo */}
                </Link>
              </div>
            </div>

            <div className="max-w-sm mx-auto w-full px-4 py-8">
              <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">
                ¡Bienvenido! ✨
              </h1>
              {/* Form */}
              <form onSubmit={handleFormSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      className="form-input w-full"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                    <input
                      id="password"
                      className="form-input w-full"
                      type="password"
                      autoComplete="on"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <Link className="text-sm underline hover:no-underline" to="/reset-password">
                      ¿Olvidaste la contraseña?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="text-sm">
                  ¿No tienes una cuenta?{' '}
                  <Link
                    className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                    to="/signup"
                  >
                    Registrarse
                  </Link>
                </div>
                {/* Warning */}
                <div className="mt-5">
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="object-cover object-center w-full h-full"
            src={AuthImage}
            width="760"
            height="1024"
            alt="Authentication"
          />
          <img
            className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block"
            src={AuthDecoration}
            width="218"
            height="224"
            alt="Authentication decoration"
          />
        </div>
      </div>
    </main>
  );
}

export default Signin;
