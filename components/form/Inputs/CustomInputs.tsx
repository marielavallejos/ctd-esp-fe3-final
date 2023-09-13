import { TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

interface Props {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  control: Control<any>;
  defaultValue?: string;
  error?: boolean;
  message?: string;
  textFieldProps?: Record<string, any>;
}

export const CustomInputs = ({
  name,
  control,
  defaultValue,
  type,
  label,
  required,
  textFieldProps,
  error,
  message,
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          variant="outlined"
          fullWidth
          required={required}
          error={error}
          helperText={message}
          sx={{ mb: 2 }}
          {...textFieldProps}
        />
      )}
    />
  );
};