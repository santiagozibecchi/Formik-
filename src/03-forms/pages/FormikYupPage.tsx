import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

interface FormValues {
   firstName: string;
   lastName: string;
   email: string;
}

const FormikYupPage = () => {
   const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
      useFormik({
         initialValues: {
            firstName: "",
            lastName: "",
            email: "",
         },
         onSubmit: (values) => {
            console.log(values);
         },
         validationSchema: Yup.object({
            firstName: Yup.string()
               .max(15, "Debe tener 15 caracteres o menos")
               .required("Requerido"),
            lastName: Yup.string()
               .max(15, "Debe tener 15 caracteres o menos")
               .required("Requerido"),
            email: Yup.string()
               .email("El correo no tiene un formato válido")
               .required("Requerido"),
         }),
      });

   return (
      <div>
         <h1>Formik YUP</h1>
         <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="firstName">First Name</label>
            <input
               onChange={handleChange}
               type="text"
               onBlur={handleBlur}
               name="firstName"
               value={values.firstName}
            />
            {touched.firstName && errors.firstName && (
               <span>{errors.firstName}</span>
            )}

            <label htmlFor="lastName">Last Name</label>
            <input
               onChange={handleChange}
               type="text"
               onBlur={handleBlur}
               name="lastName"
               value={values.lastName}
            />
            {touched.lastName && errors.lastName && (
               <span>{errors.lastName}</span>
            )}

            <label htmlFor="email">Email</label>
            <input
               onChange={handleChange}
               type="email"
               onBlur={handleBlur}
               name="email"
               value={values.email}
            />
            {touched.email && errors.email && <span>{errors.email}</span>}

            <button type="submit">Submit</button>
         </form>
      </div>
   );
};

export default FormikYupPage;
