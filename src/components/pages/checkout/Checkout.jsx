import { useState } from 'react';
import { customTheme } from '../../../themeConfig';
import "./checkout.css"
import { Button, TextField } from '@mui/material';

const Checkout = () => {
  
  const [userInfo, setUserInfo] = useState({
    nombre: '',
    apellido: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    nombre: null,
    apellido: null,
    email: null,
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
  };

  

  return (
    <div>
      <h1
        style={{
          marginLeft: '20px',
          color: '#D81B60',
          fontFamily: 'Arial',
          fontWeight: '200',
          marginBottom: '15px',
        }}
      >
        Este es el Checkout
      </h1>

      <form onSubmit={handleSubmit}>
        <TextField
          style={{ marginLeft: '20px', }}
          type="text"
          name="nombre"
          onChange={handleChange}
          placeholder="Nombre"
          >
        </TextField>
        <span
          style={{
            display: 'flex',
            color: 'crimson',
            fontSize: ' 0.5rem',
            marginLeft: '5px',
          }}
        >
          {errors.nombre}
        </span>
        <TextField
          style={{ marginLeft: '20px', marginTop: '5px' }}
          type="text"
          name="apellido"
          onChange={handleChange}
          placeholder="Apellido"
          >
        </TextField>
       
        <span
          style={{
            display: 'flex',
            color: 'crimson',
            fontSize: ' 0.5rem',
            paddingLeft: '3px',
          }}
        >
          {errors.apellido}
        </span>

        <TextField
          style={{ marginLeft: '20px', marginTop: '5px' }}
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        >
        </TextField>
        <span
          style={{
            display: 'flex',
            color: 'crimson',
            fontSize: ' 0.5rem',
            paddingLeft: '3px',
          }}
        >
          {errors.email}
        </span>

        <Button
          style={{ marginLeft: '20px', marginTop: '10px' }}
          type="button"
          variant="contained"
          size="small"
          onClick={() => console.log("se envio")}
        >
          Enviar
        </Button>
        <Button
          style={{ marginRight: '10px', marginLeft: "10px", marginTop: "10px" }}
          type="button"
          variant="contained"
          size='small'
          onClick={() => console.log('se cancelo')}
        >
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;






