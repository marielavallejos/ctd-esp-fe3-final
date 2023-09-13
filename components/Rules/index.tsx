import * as yup from "yup";

// Creamos el schema
export const schema = yup.object({
  firstName: yup.string().required("Este campo es requerido").min(2, "Mínimo 3 caracteres").max(10, "Máximo 15 caracteres"),
  lastName: yup.string().required("Este campo es requerido").min(2, "Mínimo 3 caracteres").max(10, "Máximo 20 caracteres"),
  email: yup.string().required("Este campo es requerido").email("El correo no es válido").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido"),
  adress: yup.string().required("Este campo es requerido").min(2, "Mínimo 3 caracteres").max(10, "Máximo 40 caracteres"),
  department: yup.string().notRequired(),
  city: yup.string().required("Este campo es requerido").min(2, "Mínimo 3 caracteres").max(10, "Máximo 35 caracteres"),
  state: yup.string().required("Este campo es requerido").min(2, "Mínimo 3 caracteres").max(10, "Máximo 35 caracteres"),
  zc: yup.string().required("Este campo es requerido").min(2, "Mínimo 3 caracteres").max(10, "Máximo 10 caracteres"),
  cardNumber: yup.string().matches(/^[0-9]{16}$/, "El número de la tarjeta debe tener 16 dígitos").required("Este campo es requerido"),
  cardName: yup.string().required("Este campo es requerido"),
  expiryDate: yup.string().required("Este campo es requerido"),
  securityCode: yup.string().matches(/^[0-9]{3}$/, "el código de seguridad debe tener 3 dígitos").required("Este campo es requerido"),
})