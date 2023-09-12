import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { Controller, useForm } from "react-hook-form"

export const DeliveryForm = () => {
    const {control} = useForm()
    return(
        <Box
        sx={{maxWidth:"500px"}}>
            <Paper>
                <Typography>
                    <form>
                        <Controller
                        name='address'
                        control={control}
                        defaultValue={''}
                        render={({field}) => 
                        <TextField
                        {...field}
                        type='text'
                        label='Dirección'
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                        />}/>
                                                <Controller
                        name='flat'
                        control={control}
                        defaultValue={''}
                        render={({field}) => 
                        <TextField
                        {...field}
                        type='text'
                        label='Departamento'
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                        />}/>
                        <Controller
                        name='city'
                        control={control}
                        defaultValue={''}
                        render={({field}) => 
                        <TextField
                        {...field}
                        type='text'
                        label='Ciudad'
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                        />}/>
                        <Controller
                        name='state'
                        control={control}
                        defaultValue={''}
                        render={({field}) => 
                        <TextField
                        {...field}
                        type='text'
                        label='Provincia'
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                        />}/>
                        <Controller
                        name='ZC'
                        control={control}
                        defaultValue={''}
                        render={({field}) => 
                        <TextField
                        {...field}
                        type='text'
                        label='CP'
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