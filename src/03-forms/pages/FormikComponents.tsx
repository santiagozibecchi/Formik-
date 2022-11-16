import { useFormik, Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

// interface FormValues {
//    firstName: string;
//    lastName: string;
//    email: string;
// }

// * getFieldProps: Esta colocando por detras el name, onChange y onBlur

const FormikComponents = () => {
   // const {
   //    // handleChange,
   //    // values,
   //    // handleBlur,
   //    handleSubmit,
   //    errors,
   //    touched,
   //    getFieldProps,
   // } = useFormik({
   //    initialValues: {
   //       firstName: "",
   //       lastName: "",
   //       email: "",
   //    },
   //    onSubmit: (values) => {
   //       console.log(values);
   //    },
   //    validationSchema: Yup.object({
   //       firstName: Yup.string()
   //          .max(15, "Debe tener 15 caracteres o menos")
   //          .required("Requerido"),
   //       lastName: Yup.string()
   //          .max(15, "Debe tener 15 caracteres o menos")
   //          .required("Requerido"),
   //       email: Yup.string()
   //          .email("El correo no tiene un formato válido")
   //          .required("Requerido"),
   //    }),
   // });

   return (
      <div>
         <h1>Formik Components</h1>

         <Formik
            initialValues={{
               firstName: "",
               lastName: "",
               email: "",
            }}
            onSubmit={(values) => {
               console.log(values);
            }}
            validationSchema={Yup.object({
               firstName: Yup.string()
                  .max(15, "Debe tener 15 caracteres o menos")
                  .required("Requerido"),
               lastName: Yup.string()
                  .max(15, "Debe tener 15 caracteres o menos")
                  .required("Requerido"),
               email: Yup.string()
                  .email("El correo no tiene un formato válido")
                  .required("Requerido"),
            })}
         >
            {(formik) => (
               <Form>
                  <label htmlFor="firstName">First Name</label>
                  <Field name="firstName" type="text" />
                  <ErrorMessage name="firstName" component="span" />

                  <label htmlFor="lastName">Last Name</label>
                  <Field name="lastName" type="text" />
                  <ErrorMessage name="lastName" component="span" />

                  <label htmlFor="email">Email</label>
                  <Field name="email" type="text" />
                  <ErrorMessage name="email" component="span" />

                  <button type="submit">Submit</button>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default FormikComponents;
