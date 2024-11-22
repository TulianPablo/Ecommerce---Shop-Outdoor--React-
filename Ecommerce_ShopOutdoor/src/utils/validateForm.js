import { object, string, number, mixed } from "yup"

let userSchema = object({
  fullname: string().required("el campo nombre es requerido"),
  dni: number().required("el campo dni es requerido"),
  phone: mixed().required("el campo telefono es requerido"),
  email: string().email("el campo email no tiene el formato correcto").required("el campo email es requerido"),
  direction: string().required("el campo dirección es requerido"),
  country: string().required("el campo pais es requerido"),
})

const validateForm = async(dataForm) => {

  try{
    await userSchema.validate(dataForm)
    return { status: "success" }
  }catch(error){
    return { status: "error", message: error.message }
  }

}

export default validateForm