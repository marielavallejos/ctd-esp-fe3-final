import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useFormContext } from "react-hook-form";
import CustomerForm from "./Customer/CustomerForm";
import DeliveryForm from "./Delivery/DeliveryForm";
import PaymentForm from "./Payment/PaymentForm";
import StepperForm from '../Stepper/StepperForm';

const steps = ['Datos del Cliente', 'Dirección de Envío', 'Información de Pago'];

const Forms = () => {
    const {handleSubmit} = useFormContext();
    const [currentStep, setCurrentStep] = useState(1);
    const onSubmit = (data:any) => console.log(data)

    const handleNext = () => {
        if(currentStep >= 3){
            return;
        } else{
            setCurrentStep(currentStep+1);
        }
    };

    const handleBack = () => {
        if(currentStep <= 1){
            return;
        } else{
            setCurrentStep(currentStep-1);
        }
    };

    handleSubmit(onSubmit)

    return(
        <>
        <Box>
            <StepperForm activeStep={currentStep}/>
        </Box>
        <Box sx={{ my: "40px"}}>
                <form >
                    <Typography sx={{ mt: 2, mb: 1 }}>
                            {currentStep === 1 && <CustomerForm/>}
                            {currentStep === 2 && <DeliveryForm />}
                            {currentStep === 3 && <PaymentForm />}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    {currentStep > 1 && <Button variant="outlined" color="inherit" disabled={currentStep === 1} onClick={handleBack} sx={{ mr: 1 }}>Volver</Button>}
                    {currentStep < 3 && <Button variant="outlined" color="inherit" onClick={handleNext} sx={{ mr: 1 }}>Siguiente</Button>}
                    {currentStep === 3 && <Button variant="outlined" color="inherit" type="submit" onClick={handleNext} sx={{ mr: 1 }}>Enviar</Button>}
                    </Box>
                </form>
        </Box>
        </>
)
}
export default Forms