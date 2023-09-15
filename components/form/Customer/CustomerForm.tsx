import Box from "@mui/material/Box"
import { ErrorMessage } from '@hookform/error-message';
import Typography from "@mui/material/Typography"
import { useForm } from "react-hook-form"
import React from "react";
import { CustomInputs } from "../Inputs/CustomInputs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "dh-marvel/components/Rules/cutomerRules";
import Button from "@mui/material/Button";

interface Props{
    data: any,
    updateData: (newData: any) => void,
    handleNext: () => void
}

const CustomerForm = ({ data, updateData, handleNext }:Props) => {
    type DataForm = yup.InferType<typeof schema>
    
    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm<DataForm>({ resolver: yupResolver(schema), defaultValues: {} });

    const onSubmit = async (data: any) => {
        const dataValues = getValues();
        updateData({ customerData: dataValues });
        handleNext()
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box
        sx={{maxWidth:"600px", mt:2}}>
        <CustomInputs
            name='name'
            control={control}
            defaultValue={data.name}
            type='text'
            label='Nombre'
        />
        <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="name"/>
        </Typography>
        <CustomInputs
            name='lastName'
            control={control}
            defaultValue={data.lastName}
            type='text'
            label='Apellido'
        />
        <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="lastName"/>
        </Typography>
        <CustomInputs
            name='email'
            control={control}
            defaultValue={data.email}
            type='email'
            label='E-mail'
        />
        <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="email"/>
        </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
        <Button variant="outlined" sx={{ mr: 1, color:'grey.500' }}>Atrás</Button>
        <Button variant="contained" type="submit" sx={{ mr: 1 }}>Siguiente</Button>
        </Box>
        </form>
    )
}

export default CustomerForm