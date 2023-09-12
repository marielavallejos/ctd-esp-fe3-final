import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { Controller, useForm } from "react-hook-form"

export const PaymentForm = () => {
    const {control} = useForm()
    return(
        <Box
        sx={{maxWidth:"500px"}}>
            <Paper>
                <Typography>
                    <form>
                        <Controller
                        name='card-number'
                        control={control}
                        defaultValue={''}
                        render={({field}) => 
                        <TextField
                        {...field}
                        type='text'
                        label='Número de tarjeta'
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                        />}/>
                                                <Controller
                        name='card-name'
                        control={control}
                        defaultValue={''}
                        render={({field}) => 
                        <TextField
                        {...field}
                        type='text'
                        label='Nombre como aparece en la tarjeta'
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                        />}/>
                        <Controller
                        name='expire date'
                        control={control}
                        defaultValue={''}
                        render={({field}) => 
                        <TextField
                        {...field}
                        type='text'
                        label='Fecha de expiración'
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                        />}/>
                        <Controller
                        name='security code'
                        control={control}
                        defaultValue={''}
                        render={({field}) => 
                        <TextField
                        {...field}
                        type='text'
                        label='Codigo de seguridad'
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                        />}/>
                    </form>
                </Typography>
            </Paper>
        </Box>
    )
}