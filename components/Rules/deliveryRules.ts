import * as yup from "yup";


const schema = yup.object({
  address: yup.string().required("Este campo es requerido").min(2, "Mínimo 3 caracteres").max(40, "Máximo 40 caracteres"),
  apartment: yup.string().notRequired(),
  city: yup.string().required("Este campo es requerido").min(2, "Mínimo 3 caracteres").max(35, "Máximo 35 caracteres"),
  province: yup.string().required("Este campo es requerido").min(2, "Mínimo 3 caracteres").max(35, "Máximo 35 caracteres"),
  zipCode: yup.string().required("Este campo es requerido").min(2, "Mínimo 3 caracteres").max(10, "Máximo 10 caracteres"),
})

export default schema