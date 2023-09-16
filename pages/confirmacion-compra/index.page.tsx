import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';
import CardMedia from '@mui/material/CardMedia';
import { Checkout } from 'types/checkout.type';
import Button from '@mui/material/Button';
import LayoutCheckout from 'components/layouts/layout-checkout';
import LinearProgress from '@mui/material/LinearProgress';

const OrderConfirmationPage = () => {
  const router = useRouter();
  const [orderInfo, setOrderInfo] = useState<Checkout>();

  useEffect(() => {
    const orderInfoStored = localStorage.getItem('orderInfo');

    if (orderInfoStored) {
      setOrderInfo(JSON.parse(orderInfoStored));
    } else{
        router.push('/');
      }
  }, [router]);

  const handleGoIndex = () => {
    router.push('/');
}

  return (
    <Container maxWidth="md" style={{ marginTop: '40px' }}>
      {orderInfo ?
      <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box bgcolor="#4caf50" width="100%" p={2} mb={2} textAlign="center">
          <Typography variant="h4" style={{ color: '#fff', marginBottom: '10px' }}>
            ¡Que disfrutes tu compra!
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center" style={{ height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Información del cómic:
              </Typography>
              <CardMedia
                            component="img"
                            alt={orderInfo?.order.name}
                            image={orderInfo?.order.image}
                            sx={{maxHeight: '200px'}}
                        />
              <Typography variant="h6">{orderInfo?.order.name}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '16px', height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Datos personales:
              </Typography>
              <Typography variant="subtitle1">Nombre: {orderInfo?.customer.name} {orderInfo?.customer.lastname}</Typography>
              <Typography variant="subtitle1">Correo electrónico: {orderInfo?.customer.email}</Typography>

              <Typography variant="h5" gutterBottom style={{ marginTop: '16px' }}>
                Dirección de entrega:
              </Typography>
              <Typography variant="subtitle1">Dirección: {orderInfo?.customer.address.address1}</Typography>
              <Typography variant="subtitle1">Departamento: {orderInfo?.customer.address.address2}</Typography>
              <Typography variant="subtitle1">Ciudad: {orderInfo?.customer.address.city}</Typography>
              <Typography variant="subtitle1">Provincia: {orderInfo?.customer.address.state}</Typography>
              <Typography variant="subtitle1">Código postal: {orderInfo?.customer.address.zipCode}</Typography>

              <Typography variant="h5" gutterBottom style={{ marginTop: '16px' }}>
                Precio pagado por el cómic:
              </Typography>
              <Typography variant="subtitle1"> ${orderInfo?.order.price}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" width="100%" marginTop={2}>
                <Button size="small" variant="outlined" onClick={handleGoIndex}>
                  Volver al inicio
                </Button>
              </Box>
      </>
      : <LinearProgress color="inherit" />
}
    </Container>
  );
};
(OrderConfirmationPage as any).Layout = LayoutCheckout;
export default OrderConfirmationPage;





