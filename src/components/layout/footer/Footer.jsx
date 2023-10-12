import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";


export const Footer = () => {
  return (
    <>
      <Outlet />

      <Typography
        color={'secondary'}
        fontSize="13px"
        align="center"
        marginTop="1rem"
        marginBottom="20px"
      >
        Created by CSDigital. Todos los derechos reservados{' '}
      </Typography>
    </>
  );
}

export default Footer

