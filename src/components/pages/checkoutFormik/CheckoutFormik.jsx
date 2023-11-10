/*import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: '',
      telefono: '',
      email: '',
      password: '',
      repetPassword: '',
    },
    onSubmit: (data) => {
      
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required('Este campo es obligatorio')
        .min(5, 'Debe tener al menos 5 letras')
        .max(20, 'Debe tener máximo 20 caracteres'),
      telefono: Yup.string().required('El campo es obligatorio'),
      email: Yup.string()
        .email('El correo no parece válido, debe contener @')
        .required('El campo es obligatorio'),
      password: Yup.string()
        .required('El campo es obligatorio')
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            'La Contraseña debe tener mínimo una mayúscula, una minúscula y números',
        }),
      repetPassword: Yup.string()
        .required('Este campo es obligatorio')
        .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
    }),
  });

  

  return (
    <div style={{ padding: '50px' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ display: 'flex', marginTop: '5px' }}
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          style={{ display: 'flex', marginTop: '5px' }}
          label="Telefono"
          variant="outlined"
          name="telefono"
          onChange={handleChange}
          error={errors.telefono ? true : false}
          helperText={errors.telefono}
        />
        <TextField
          style={{ display: 'flex', marginTop: '5px' }}
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          style={{ display: 'flex', marginTop: '5px' }}
          label="Contraseña"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />
        <TextField
          style={{ display: 'flex', marginTop: '5px' }}
          label="Repetir Contraseña"
          variant="outlined"
          name="repetPassword"
          onChange={handleChange}
          error={errors.repetPassword ? true : false}
          helperText={errors.repetPassword}
        />

        <Button style={{ marginTop: '10px' }} variant="contained" type="submit">
          Enviar
        </Button>
        <Button
          style={{ marginTop: '10px', marginLeft: '5px' }}
          variant={'outlined'}
          type="button"
        >
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default CheckoutFormik;
*/