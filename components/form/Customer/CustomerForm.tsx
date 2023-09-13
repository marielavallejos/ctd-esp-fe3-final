import Box from "@mui/material/Box"
import { ErrorMessage } from '@hookform/error-message';
import Typography from "@mui/material/Typography"
import { Controller, useFormContext } from "react-hook-form"
import React from "react";
import { CustomInputs } from "../Inputs/CustomInputs";

const CustomerForm = () => {
    const {control, formState:{errors}} = useFormContext()
    
    return(
        <Box
        sx={{maxWidth:"600px", mt:2}}>
        <CustomInputs
            name='firstName'
            control={control}
            defaultValue=""
            type='text'
            label='Nombre'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="name"/>
        </Typography>
        <CustomInputs
            name='lastName'
            control={control}
            defaultValue=""
            type='text'
            label='Apellido'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="lastName"/>
        </Typography>
        <CustomInputs
            name='email'
            control={control}
            defaultValue=""
            type='text'
            label='E-mail'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="email"/>
        </Typography>
        </Box>
    )
}

export default CustomerForm