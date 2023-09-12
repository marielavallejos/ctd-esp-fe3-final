import React, { useState } from 'react';
import { NextPage } from 'next';
import Container from '@mui/material/Container';
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout';
import { CustomerForm } from 'components/form/Customer/CustomerForm';
import { DeliveryForm } from 'components/form/Delivery/DeliveryForm';
import { PaymentForm } from 'components/form/Payment/PaymentForm';
import { StepperForm } from 'dh-marvel/components/Stepper/Stepper';
import Button from '@mui/material/Button';

const steps = [
  { label: 'Datos del Cliente', component: <CustomerForm /> },
  { label: 'Dirección de Envío', component: <DeliveryForm /> },
  { label: 'Información de Pago', component: <PaymentForm /> },
];

const CheckoutPage: NextPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <LayoutCheckout>
      <Container maxWidth="md">
        <StepperForm
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
        /> 
        {steps[activeStep].component} 
        <div>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Atrás
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
          </Button>
        </div>
      </Container>
    </LayoutCheckout>
  );
};

export default CheckoutPage;
