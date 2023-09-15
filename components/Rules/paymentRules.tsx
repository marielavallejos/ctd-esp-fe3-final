import * as yup from "yup";


const schema = yup.object({
  cardNumber: yup.string().matches(/^[0-9]{16}$/, "El número de la tarjeta debe tener 16 dígitos").required("Este campo es requerido"),
  cardName: yup.string().required("Este campo es requerido"),
  expiryDate: yup.string().required("Este campo es requerido"),
  securityCode: yup.string().matches(/^[0-9]{3}$/, "el código de seguridad debe tener 3 dígitos").required("Este campo es requerido"),
})

export default schema