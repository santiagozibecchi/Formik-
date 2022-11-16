import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";
import formJson from "../data/custom-form.json";

const initialValues: { [key: string]: any } = {};
const requiredFeilds: { [key: string]: any } = {};

for (const input of formJson) {
   initialValues[input.name] = input.value;

   //    console.log({ initialValues });

   if (!input.validations) continue;

   // Esquema de validacion para los campos
   let schema = Yup.string();

   for (const rule of input.validations) {
      if (rule.type === "required") {
         schema = schema.required("Este campo es obligatorio");
      }
      // Otras reglas
      if (rule.type === "minLength") {
         schema = schema.min(
            (rule as any).value || 2,
            `Debe tener al menos ${(rule as any).value} letras`
         );
      }

      if (rule.type === "email") {
         schema = schema.email("Debe ser un email correcto");
      }
   }

   requiredFeilds[input.name] = schema;

   console.log({ requiredFeilds });
}

const validationSchema = Yup.object({ ...requiredFeilds });

export const DynamicForm = () => {
   return (
      <div>
         <h1>DynamicForm</h1>

         <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
               console.log(values);
            }}
            validationSchema={validationSchema}
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
