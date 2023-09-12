import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

interface StepperFormProps {
    activeStep: number; // Especifica el tipo de activeStep como número
    handleNext: () => void;
    handleBack: () => void;
  }
const steps = ['Datos del Cliente', 'Dirección de Envío', 'Información de Pago'];

export const StepperForm: React.FC<StepperFormProps> = ({ activeStep, handleNext, handleBack }) => {
  const handleReset = () => {
    // Aquí puedes agregar lógica de reinicio si es necesario
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <Box sx={{ mt: 2 }}>
          <p>Todos los pasos han sido completados.</p>
          <Button onClick={handleReset}>Reiniciar</Button>
        </Box>
      ) : (
        <Box sx={{ mt: 2 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Atrás
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
          </Button>
        </Box>
      )}
    </Box>
  );
};
