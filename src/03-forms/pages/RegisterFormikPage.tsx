import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
   const { handleSubmit, errors, touched, getFieldProps, handleReset } =
      useFormik({
         initialValues: {
            name: "",
            email: "",
            password1: "",
            password2: "",
         },
         onSubmit: (values) => {
            console.log(values);
         },
         validationSchema: Yup.object({
            name: Yup.string()
               .min(2, "Debe contener al menos 2 letras")
               .max(15, "Debe contener como máximo 15 letras")
               .required("El nombre es requerido"),
            email: Yup.string()
               .email("El correo no tiene un formato válido")
               .required("El correo es requerido"),
            password1: Yup.string()
               .min(6, "La contraseña debe tener al menos 6 caracteres")
               .required("La contraseña es requerida"),
            password2: Yup.string()
               .required("Verificar contraseña")
               .oneOf(
                  [Yup.ref("password1"), null],
                  "Las contraseñas no coinciden"
               ),
         }),
      });

   return (
      <div>
         <h1>Register Formik Page</h1>

         <form onSubmit={handleSubmit} noValidate>
            <label>Ingrese su nombre</label>
            <input type="text" {...getFieldProps("name")} />
            {touched.name && errors.name && <span>{errors.name}</span>}

            <label>Ingrese su correo</label>
            <input type="email" {...getFieldProps("email")} />
            {touched.email && errors.email && <span>{errors.email}</span>}

            <label>Ingrese una contraseña</label>
            <input type="password" {...getFieldProps("password1")} />
            {touched.password1 && errors.password1 && (
               <span>{errors.password1}</span>
            )}

            <label>Compruebe su contraseña</label>
            <input type="password" {...getFieldProps("password2")} />
            {touched.password2 && errors.password2 && (
               <span>{errors.password2}</span>
            )}

            <button type="submit">Create</button>
            <button onClick={handleReset}>Resetear Formulario</button>
         </form>
      </div>
   );
};
