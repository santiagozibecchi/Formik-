import { Formik, Form } from "formik";
import * as Yup from "yup";
// import { MyCheckbox } from "../components/MyCheckbox";
// import { MySelect } from "../components/MySelect";
// import { MyTextInput } from "../components/MyTextInput";

import { MyCheckbox, MySelect, MyTextInput } from "../components";

import "../styles/styles.css";

// * getFieldProps: Esta colocando por detras el name, onChange y onBlur

const FormikAbstraction = () => {
   return (
      <div>
         <h1>Formik Abstraction</h1>

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
                  <MyTextInput
                     label="First Name"
                     name="firstName"
                     placeholder="Ingrese su nombre"
                  />
                  <MyTextInput
                     label="Last Name"
                     name="lastName"
                     placeholder="Ingrese su apellido"
                  />
                  <MyTextInput
                     label="Email"
                     name="email"
                     placeholder="Ingrese su correo"
                  />

                  <MySelect name="jobType" label={"Job Type"}>
                     <option value="">Pick somethings</option>
                     <option value="developer">Developer</option>
                     <option value="designer">Designer</option>
                     <option value="it-senior">IT Senior</option>
                     <option value="it-junior">IT Junior</option>
                  </MySelect>

                  <MyCheckbox label="Términos y condiciones" name="terms" />

                  <button type="submit">Submit</button>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default FormikAbstraction;
