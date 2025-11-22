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
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    setServerError('');
  };

  const validate = () => {
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.nombre.trim()) validationErrors.nombre = 'El nombre es obligatorio.';
    if (!formValues.correo.trim()) {
      validationErrors.correo = 'El correo es obligatorio.';
    } else if (!emailRegex.test(formValues.correo.trim())) {
      validationErrors.correo = 'Correo inválido.';
    }

    if (!formValues.password.trim()) {
      validationErrors.password = 'La contraseña es obligatoria.';
    }

    if (!formValues.edad.trim()) {
      validationErrors.edad = 'La edad es obligatoria.';
    } else if (Number(formValues.edad) < 18) {
      validationErrors.edad = 'Debe ser mayor de edad.';
    }

    return validationErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const response = await fetch("http://localhost:8080/api/v1/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setServerError(errorData.error || "Error en el servidor");
        return;
      }

      // Si llega aquí, el registro fue exitoso
      window.alert("Registro exitoso");
      navigate("/post-registro");

    } catch (error) {
      console.error("Error:", error);
      setServerError("Error al conectar con el servidor");
    }
  };

  return (
    <>
      <div className="container">
        <Header variant="register" />
        <div className="form-content">
          <h1 id="title">REGÍSTRATE</h1>

          {serverError && (
            <p style={{ color: "red", fontWeight: "bold" }}>{serverError}</p>
          )}

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
                  placeholder="Edad"
                  value={formValues.edad}
                  onChange={handleChange}
                />
                {errors.edad && <small className="error">{errors.edad}</small>}
              </div>
            </div>

            <div className="btn-field">
              <button id="signUp" type="submit">Registro</button>
              <Link className="volver" to="/">Volver</Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RegisterPage;
