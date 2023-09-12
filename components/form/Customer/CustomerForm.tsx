import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { Controller, useForm } from "react-hook-form"

export const CustomerForm = () => {
    const {control} = useForm()
    return(
        <Box
        sx={{maxWidth:"500px"}}>
            <Paper>
                <Typography>
                    <form>
                        <Controller
                        name='name'
                        control={control}
                        defaultValue={''}
                        render={({field}) => 
                        <TextField
                        {...field}
                        type='text'
                        label='Nombre'
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                        />}/>
                                                <Controller
                        name='lastname'
                        control={control}
                        defaultValue={''}
                        render={({field}) => 
                        <TextField
                        {...field}
                        type='text'
                        label='Apellido'
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                        />}/>
                                                <Controller
                        name='email'
                        control={control}
                        defaultValue={''}
                        render={({field}) => 
                        <TextField
                        {...field}
                        type='text'
                        label='Email'
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