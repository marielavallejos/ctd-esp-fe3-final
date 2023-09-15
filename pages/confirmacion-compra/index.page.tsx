import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

const ConfirmacionCompraPage = () => {
  const router = useRouter();

  if (!router.query.comicTitle) {
    if (typeof window !== 'undefined') {
      router.push('/');
    }
    return null;
  }

  const comicTitle = router.query.comicTitle as string;
  const comicImage = router.query.comicImage as string;
  const customerData = {
    name: router.query.name as string,
    lastName: router.query.lastName as string,
    email: router.query.email as string,
  };
  const deliveryData = {
    address: router.query.address as string,
    apartment: router.query.apartment as string,
    city: router.query.city as string,
    province: router.query.province as string,
    zipCode: router.query.zipCode as string,
  };
  const price = router.query.price as string;

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" color="primary">
          ¡Que disfrutes tu compra!
        </Typography>
        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
          <Typography variant="h5">Detalles del cómic</Typography>
          {/* <img src={comicImage} alt={comicTitle} style={{ maxWidth: '100%' }} /> */}
          <Typography variant="h6">{comicTitle}</Typography>
          <Typography variant="body1">Precio: ${price}</Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
          <Typography variant="h5">Datos personales</Typography>
          <Typography variant="body1">Nombre: {customerData.name} {customerData.lastName}</Typography>
          <Typography variant="body1">Email: {customerData.email}</Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
          <Typography variant="h5">Dirección de entrega</Typography>
          <Typography variant="body1">Dirección: {deliveryData.address}</Typography>
          <Typography variant="body1">Apartamento: {deliveryData.apartment}</Typography>
          <Typography variant="body1">Ciudad: {deliveryData.city}</Typography>
          <Typography variant="body1">Provincia: {deliveryData.province}</Typography>
          <Typography variant="body1">Código postal: {deliveryData.zipCode}</Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default ConfirmacionCompraPage;

