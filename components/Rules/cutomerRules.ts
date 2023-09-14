import * as yup from "yup";

// Creamos el schema
const schema = yup.object({
  name: yup.string().required("Este campo es requerido").min(2, "Mínimo 3 caracteres").max(30, "Máximo 30 caracteres"),
  lastName: yup.string().required("Este campo es requerido").min(2, "Mínimo 3 caracteres").max(30, "Máximo 30 caracteres"),
  email: yup.string().required("Este campo es requerido").email("El correo no es válido").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido"),
})

export default schema