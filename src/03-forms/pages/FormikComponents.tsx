import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

// * getFieldProps: Esta colocando por detras el name, onChange y onBlur

const FormikComponents = () => {
   return (
      <div>
         <h1>Formik Components</h1>

         <Formik
            initialValues={{
               firstName: "",
               lastName: "",
               email: "",
               terms: false,
               jobType: "",
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
               terms: Yup.boolean().oneOf(
                  [true],
                  "Debe aceptar las condiciones"
               ),
               jobType: Yup.string()
                  .notOneOf(["it-junior"], "Esta opcion no es permitida")
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

                  <label htmlFor="jobType">Job Type</label>
                  <Field name="jobType" as="select">
                     <option value="">Pick somethings</option>
                     <option value="developer">Developer</option>
                     <option value="designer">Designer</option>
                     <option value="it-senior">IT Senior</option>
                     <option value="it-junior">IT Junior</option>
                  </Field>
                  <ErrorMessage name="jobType" component="span" />

                  <label>
                     Terms and conditions
                     <Field name="terms" type="checkbox" />
                  </label>
                  <ErrorMessage name="terms" component="span" />

                  <button type="submit">Submit</button>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default FormikComponents;
