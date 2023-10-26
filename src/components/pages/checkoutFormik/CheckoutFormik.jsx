import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      repetPassword: '',
    },
    onSubmit: (data) => {
      console.log('se envió');
      console.log(data);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required('Este campo es obligatorio')
        .min(5, 'Debe tener al menos 5 letras')
        .max(20, 'Debe tener máximo 20 caracteres'),
      apellido: Yup.string().required('El campo es obligatorio'),
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

  console.log(errors);

  return (
    <div style={{ padding: '50px' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          label="Apellido"
          variant="outlined"
          name="apellido"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />
        <TextField
          label="Repetir Contraseña"
          variant="outlined"
          name="repetPassword"
          onChange={handleChange}
          error={errors.repetPassword ? true : false}
          helperText={errors.repetPassword}
        />

        <Button variant="contained" type="submit">
          Enviar
        </Button>
        <Button variant={'outlined'} type="button">
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default CheckoutFormik;
