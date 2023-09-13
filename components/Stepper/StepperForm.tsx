import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';

interface Props {
  activeStep: number;
}

const steps = ['Datos del Cliente', 'Dirección de Envío', 'Información de Pago'];

const StepperForm = ({activeStep}:Props) => {
  return (
      <Box sx={{maxWidth:"600px", mt:2}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </Box>
  );
};

export default StepperForm;