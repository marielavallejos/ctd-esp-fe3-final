import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from "react";
import CustomerForm from "./Customer/CustomerForm";
import DeliveryForm from "./Delivery/DeliveryForm";
import PaymentForm from "./Payment/PaymentForm";
import StepperForm from '../Stepper/StepperForm';
import { Comic } from 'types/marvelAPI';
import { checkoutPayment } from 'services/checkout/checkout.service';
import FormSnackbar from '../Snackbar/FormSnackbar';
import router from 'next/router';

interface Props {
    comic: Comic
}

const initialData = {
    customerData: {
        name: "",
        lastName: "",
        email: "",
    },
    deliveryData: {
        address: "",
        apartment: "",
        city: "",
        province: "",
        zipCode: "",
    },
    paymentData: {
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        securityCode: "",
    },
    order: {
        name: "",
        image: "",
        price: ""
    }
}

const initialCheckoutData = {
    customer: {
        name: "",
        lastname: "",
        email: "",
        address: {
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipCode: "",
        },
    },
    card: {
        number: "",
        cvc: "",
        expDate: "",
        nameOnCard: "",
    },
    order: {
        name: "",
        image: "",
        price: 0,
    },
}

const Forms = ({comic}: Props) => {
    const [data, setData] = useState(initialData);  

    const handleData = (newData: any) => {
        setData((prevData) => ({ ...prevData, ...newData }));
    };
    const [currentStep, setCurrentStep] = useState(0);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleNext = () => {
        if(currentStep >= 2){
            return;
        } else{
            setCurrentStep(currentStep+1);
        }
    };

    const handlePrev = () => {
        if(currentStep <= 0){
            return;
        } else{
            setCurrentStep(currentStep-1);
        }
    };

    const submitData = async ({paymentData}:any) => {
        try{
        const dataCkeckout = {
            customer: {
                name: data.customerData.name,
                lastname: data.customerData.lastName,
                email: data.customerData.email,
                address: {
                    address1: data.deliveryData.address,
                    address2: data.deliveryData.apartment,
                    city: data.deliveryData.city,
                    state: data.deliveryData.province,
                    zipCode: data.deliveryData.zipCode,
                },
            },
            card: {
                number: paymentData.cardNumber,
                cvc: paymentData.securityCode,
                expDate: paymentData.expiryDate,
                nameOnCard: paymentData.cardName,
            },
            order: {
                name: comic.title,
                image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                price: comic.price,
            },
        }

        const response = await checkoutPayment(dataCkeckout);
        if (response.error) {
            console.error('Error al procesar la compra:', response.message);
            setSnackbarOpen(true);
            return;
          }
    
          localStorage.setItem('orderInfo', JSON.stringify(dataCkeckout));
    
          router.push('/confirmacion-compra');
        } catch (error) {
          console.error('Error al procesar la compra:', error);
        }
      };

    return(
        <>
        <Box sx={{ my: "40px", width: "500px", ml:"2%" }}>
            <StepperForm activeStep={currentStep}/>
            {currentStep === 0 && <CustomerForm data={data.customerData} updateData={handleData} handleNext={() => handleNext()}/>}
            {currentStep === 1 && <DeliveryForm data={data.deliveryData} updateData={handleData} handleNext={() => handleNext()} handlePrev={() => handlePrev()}/>}
            {currentStep === 2 && <PaymentForm data={data.paymentData} handlePrev={() => handlePrev()} submitData={(paymentData) => submitData({paymentData})}/>}
            <FormSnackbar open={snackbarOpen} handleClose={() => setSnackbarOpen(false)} />
        </Box>
        </>
)
}
export default Forms