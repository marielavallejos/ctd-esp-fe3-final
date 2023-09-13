import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useFormContext } from "react-hook-form";
import { CustomInputs } from "../Inputs/CustomInputs";
import { ErrorMessage } from '@hookform/error-message';

const DeliveryForm = () => {
    const {control, formState: { errors } } = useFormContext();
    return(
        <Box sx={{maxWidth:"600px", mt:2}}>
        <CustomInputs
            name='address'
            control={control}
            defaultValue=""
            type='text'
            label='Dirección'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="address"/>
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <CustomInputs
          name='apartment'
          control={control}
          defaultValue=""
          type='text'
          label='Deprtamento'
          />
          <Typography color="red">
          <ErrorMessage errors={errors} name="apartment"/>
          </Typography>
          <CustomInputs
          name='floor'
          control={control}
          defaultValue=""
          type='text'
          label='Piso'
          />
        </Box>
<Typography color="red">
        <ErrorMessage errors={errors} name="floor"/>
        </Typography>
        <CustomInputs
            name='city'
            control={control}
            defaultValue=""
            type='text'
            label='Ciudad'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="city"/>
        </Typography>
        <CustomInputs
            name='province'
            control={control}
            defaultValue=""
            type='text'
            label='Provincia'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="province"/>
        </Typography>
        <CustomInputs
            name='zc'
            control={control}
            defaultValue=""
            type='text'
            label='Código postal'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="zc"/>
        </Typography>
        </Box>
    )
}

export default DeliveryForm