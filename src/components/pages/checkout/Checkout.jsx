import { useState } from 'react';
import "./checkout.css"

const Checkout = () => {
  //    const [ nombre, setNombre ] = useState("")
  //    const [ apellido, setApellido ] = useState("")
  //    const [ email, setEmail ] = useState("")

  //   const capturarNombre = (e) => {
  //     setUserInfo( { ...userInfo, nombre: e.target.value  } )
  //   };

  //   const capturarApellido = (e) => {
  //     setUserInfo( { ...userInfo, apellido: e.target.value  } )

  //   };

  //   const capturarEmail = (e) => {
  //     setUserInfo( { ...userInfo, email: e.target.value  } )

  //   };
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

    console.log(userInfo);
  };

  console.log(errors);

  return (
    <div>
      <h1>Este es el Checkout</h1>

      <form onSubmit={handleSubmit}>
        {/* <input type="text" name="nombre" onChange={ (e)=>setNombre(e.target.value) }  /> */}

        <input
          style={{ marginLeft: '15px' }}
          type="text"
          name="nombre"
          onChange={handleChange}
          placeholder="Nombre"
        />
        <span
          style={{ color: 'crimson', fontSize: ' 0.5rem', paddingLeft: '3px' }}
        >
          {errors.nombre}
        </span>
        <input
          type="text"
          name="apellido"
          onChange={handleChange}
          placeholder="Apellido"
        />
        <span
          style={{ color: 'crimson', fontSize: ' 0.5rem', paddingLeft: '3px' }}
        >
          {errors.apellido}
        </span>

        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="email"
        />
        <span
          style={{ color: 'crimson', fontSize: ' 0.5rem', paddingLeft: '3px' }}
        >
          {errors.email}
        </span>

        <button>Enviar</button>
        <button 
          type="button"
          variant="contained" 
          onClick={() => console.log('se cancelo')}
        >
          Cancelar
        </button>
      </form>

      {/* <button onClick={}></button> */}
    </div>
  );
};

export default Checkout;






