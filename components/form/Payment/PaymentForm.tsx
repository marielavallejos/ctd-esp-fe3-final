import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useFormContext } from "react-hook-form";
import { CustomInputs } from "../Inputs/CustomInputs"
import { ErrorMessage } from "@hookform/error-message"

const PaymentForm = () => {
    const {
        control,
        formState: { errors },
      } = useFormContext();
    return(
        <Box
        sx={{maxWidth:"600px", mt:2}}>
        <CustomInputs
            name='cardNumber'
            control={control}
            defaultValue=""
            type='text'
            label='Dirección'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="cardNumber"/>
        </Typography>
        <CustomInputs
            name='cardName'
            control={control}
            defaultValue=""
            type='text'
            label='Dirección'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="cardName"/>
        </Typography>
        <CustomInputs
            name='expiryDate'
            control={control}
            defaultValue=""
            type='text'
            label='Dirección'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="expiryDate"/>
        </Typography>
        <CustomInputs
            name='securityCode'
            control={control}
            defaultValue=""
            type='text'
            label='Dirección'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="securityCode"/>
        </Typography>
        </Box>
    )
}

export default PaymentForm