import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          textAlign: 'center',
          padding: '1rem',
          backgroundColor: '#FFFAFA',
          marginTop: '1.5rem',
        }}
      >
        <Typography
          sx={{ fontWeight: 'bold', fontSize: '1rem', color: '#D81B60' }}
        >
          Click Course{' '}
        </Typography>

        <Box sx={{ marginTop: '0.5rem', color: '#6C3483',marginBottom:"0.5rem" }}>
          <a
            href="https://www.instagram.com/coty_s21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              sx={{
                transition: 'color 0.3s',
                '&:hover': {
                  color: '#D81B60',
                },
              }}
            />
          </a>

          <a href="https://www.facebook.com/coty.sanchez1" target="_blank">
            <FacebookIcon
              sx={{
                transition: 'color 0.3s',
                '&:hover': {
                  color: '#D81B60',
                },
              }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/constanzasanchezd"
            target="_blank"
          >
            <LinkedInIcon
              sx={{
                transition: 'color 0.3s',
                '&:hover': {
                  color: '#D81B60',
                },
              }}
            />
          </a>
        </Box>

        <Typography
          sx={{ fontWeight:"bold", fontSize: '0.7rem', color: 'grey' }}
        >
          La Estanzuela. La Calera, Argentina
        </Typography>
        <Typography
          sx={{ fontWeight: 'bold', fontSize: '0.7rem', color: 'grey' }}
        >
          +54 9 3517180042
        </Typography>
        <Typography
          sx={{ fontWeight: 'bold', fontSize: '0.7rem', color: 'grey' }}
        >
          info@clickcourse.com
        </Typography>

        <Typography
          sx={{
            color: '#6C3483',
            fontWeight: 'bold',
            fontSize: '0.7rem',
            marginTop: '1rem',
            fontStyle: "italic",
          }}
        >
          &copy; {new Date().getFullYear()} CSDigital. All rights reserved
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer

