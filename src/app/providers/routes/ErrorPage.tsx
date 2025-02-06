// import React from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Typography, Button, Container, Box } from '@mui/material';

// const ErrorPage: React.FC = () => {
//   const navigate = useNavigate();

//   const handleBackClick = () => {
//     navigate(-1);
//   };

//   return (
//     <Container>
//       <Box textAlign="center" padding="50px">
//         <Typography variant="h1" gutterBottom>
//           Page Not Found
//         </Typography>
//         <Typography variant="h6" gutterBottom>
//           Sorry, the page you are looking for does not exist.
//         </Typography>
//         <Typography variant="h6" gutterBottom>
//           Извините, страница, которую вы ищете, не существует.
//         </Typography>
//         <Button variant="contained" color="primary" onClick={handleBackClick} style={{ marginTop: '20px' }}>
//           Назад
//         </Button>
//         <Button variant="contained" color="secondary" component={Link} to="/" style={{ marginTop: '20px', marginLeft: '10px' }}>
//           Перейти на главную страницу
//         </Button>
//       </Box>
//     </Container>
//   );
// }

// export default ErrorPage;