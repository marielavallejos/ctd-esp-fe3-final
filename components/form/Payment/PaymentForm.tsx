import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useForm, useFormContext } from "react-hook-form";
import { CustomInputs } from "../Inputs/CustomInputs"
import { ErrorMessage } from "@hookform/error-message"
import schema from "components/Rules/paymentRules";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";

interface Props {
    data: any,
    handlePrev: () => void,
    submitData: (data:any) => void
}

const PaymentForm = ({ data, handlePrev, submitData }: Props) => {
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
        submitData(dataValues);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box
        sx={{maxWidth:"600px", mt:2}}>
        <CustomInputs
            name='cardNumber'
            control={control}
            defaultValue={data.cardNumber}
            type='number'
            label='Número de tarjeta'
        />
        <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="cardNumber"/>
        </Typography>
        <CustomInputs
            name='cardName'
            control={control}
            defaultValue={data.cardName}
            type='text'
            label='Nombre como aparece en la tarjeta'
        />
        <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="cardName"/>
        </Typography>
        <CustomInputs
            name='expiryDate'
            control={control}
            defaultValue={data.expiryDate}
            type='text'
            label='Vencimiento'
        />
        <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="expiryDate"/>
        </Typography>
        <CustomInputs
            name='securityCode'
            control={control}
            defaultValue={data.securityCode}
            type='password'
            label='CVC'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="securityCode"/>
        </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
        <Button variant="contained" onClick={handlePrev} sx={{ mr: 1 }}>Atrás</Button>
        <Button variant="contained" type="submit" sx={{ mr: 1 }}>Siguiente</Button>
        </Box>
        </form>
    )
}

export default PaymentForm