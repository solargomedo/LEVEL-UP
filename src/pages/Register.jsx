import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const initialForm = {
  nombre: '',
  correo: '',
  password: '',
  edad: '',
};

const RegisterPage = () => {
  const [formValues, setFormValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!formValues.nombre.trim()) {
      validationErrors.nombre = 'El nombre es obligatorio.';
    }

    if (!formValues.correo.trim()) {
      validationErrors.correo = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(formValues.correo.trim())) {
      validationErrors.correo = 'Ingresa un correo electrónico válido.';
    }

    if (!formValues.password.trim()) {
      validationErrors.password = 'La contraseña es obligatoria.';
    } else if (!passwordRegex.test(formValues.password.trim())) {
      validationErrors.password = 'Debe tener al menos 6 caracteres, una letra y un número.';
    }

    if (!formValues.edad.trim()) {
      validationErrors.edad = 'La edad es obligatoria.';
    } else {
      const numericAge = Number(formValues.edad);
      if (Number.isNaN(numericAge) || numericAge < 18) {
        validationErrors.edad = 'Eres menor de edad.';
      }
    }

    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      let message = 'Registro exitoso';
      if (formValues.correo.trim().toLowerCase().endsWith('@duocuc.cl')) {
        message += '\n¡Obtienes un 20% de descuento de por vida por tu correo @duocuc.cl!';
      }
      window.alert(message);
      navigate('/post-registro');
    }
  };

  return (
    <>
      <div className="container">
        <Header variant="register" />
        <div className="form-content">
          <h1 id="title">REGÍSTRATE</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <div className="input-field">
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Nombre"
                  value={formValues.nombre}
                  onChange={handleChange}
                />
                {errors.nombre && <small className="error">{errors.nombre}</small>}
              </div>
              <div className="input-field">
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="Correo electrónico"
                  value={formValues.correo}
                  onChange={handleChange}
                />
                {errors.correo && <small className="error">{errors.correo}</small>}
              </div>
              <div className="input-field">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  value={formValues.password}
                  onChange={handleChange}
                />
                {errors.password && <small className="error">{errors.password}</small>}
              </div>
              <div className="input-field">
                <input
                  id="edad"
                  name="edad"
                  type="number"
                  min="1"
                  placeholder="Edad"
                  value={formValues.edad}
                  onChange={handleChange}
                />
                {errors.edad && <small className="error">{errors.edad}</small>}
              </div>
            </div>
            <div className="btn-field">
              <button id="signUp" type="submit">
                Registro
              </button>
              <Link className="volver" to="/">
                Volver
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
