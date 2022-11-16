import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";

const initialValues: { [key: string]: any } = {};

for (const input of formJson) {
   initialValues[input.name] = input.value;
}

export const DynamicForm = () => {
   return (
      <div>
         <h1>DynamicForm</h1>

         <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
               console.log(values);
            }}
         >
            {(formik) => (
               <Form noValidate>
                  {/* Basado en el type determino que tipo de control voy a regresar */}
                  {formJson.map(
                     ({ type, name, placeholder, label, options }) => {
                        if (
                           type === "input" ||
                           type === "password" ||
                           type === "email"
                        ) {
                           return (
                              <MyTextInput
                                 key={name}
                                 label={label}
                                 name={name}
                                 type={type as any}
                                 placeholder={placeholder}
                              />
                           );
                        } else if (type === "select") {
                           return (
                              <MySelect key="name" label={label} name={name}>
                                 <option value="">Selecciona una opción</option>
                                 {options?.map(({ id, label }) => (
                                    <option key={id} value={id}>
                                       {label}
                                    </option>
                                 ))}
                              </MySelect>
                           );
                        }

                        throw new Error(`El type "${type}" no es soportado`);
                     }
                  )}

                  <button type="submit">Enviar</button>
               </Form>
            )}
         </Formik>
      </div>
   );
};
