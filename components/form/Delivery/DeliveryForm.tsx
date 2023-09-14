import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useForm, useFormContext } from "react-hook-form";
import { CustomInputs } from "../Inputs/CustomInputs";
import { ErrorMessage } from '@hookform/error-message';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "dh-marvel/components/Rules/deliveryRules";
import Button from "@mui/material/Button";


interface Props {
    data: any,
    updateData: (newData: any) => void,
    handleNext: () => void,
    handlePrev: () => void
}

const DeliveryForm = ({ data, updateData, handleNext, handlePrev }:Props) => {
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
        updateData({ deliveryData: dataValues });
        handleNext()
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{maxWidth:"600px", mt:2}}>
        <CustomInputs
            name='address'
            control={control}
            defaultValue={data.address}
            type='text'
            label='Dirección'
        />
        <Typography variant="caption" color="red">
        <ErrorMessage  errors={errors} name="address"/>
        </Typography>
          <CustomInputs
          name='apartment'
          control={control}
          defaultValue={data.apartment}
          type='text'
          label='Deprtamento'
          />
          <Typography variant="caption" color="red">
          <ErrorMessage errors={errors} name="apartment"/>
          </Typography>
        <CustomInputs
            name='city'
            control={control}
            defaultValue={data.city}
            type='text'
            label='Ciudad'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="city"/>
        </Typography>
        <CustomInputs
            name='province'
            control={control}
            defaultValue={data.province}
            type='text'
            label='Provincia'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="province"/>
        </Typography>
        <CustomInputs
            name='zipCode'
            control={control}
            defaultValue={data.zipCode}
            type='text'
            label='Código postal'
        />
        <Typography color="red">
        <ErrorMessage errors={errors} name="zipCode"/>
        </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
        <Button variant="contained" onClick={handlePrev} sx={{ mr: 1 }}>Atrás</Button>
        <Button variant="contained" type="submit" sx={{ mr: 1 }}>Siguiente</Button>
        </Box>
        </form>
    )
}

export default DeliveryForm