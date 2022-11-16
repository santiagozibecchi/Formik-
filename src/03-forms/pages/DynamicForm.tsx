import { Formik, Form } from "formik";
import { MyTextInput } from "../components";
import formJson from "../data/custom-form.json";

export const DynamicForm = () => {
   return (
      <div>
         <h1>DynamicForm</h1>

         <Formik
            initialValues={{
               name: "",
            }}
            onSubmit={(values) => {
               console.log(values);
            }}
         >
            {(formik) => (
               <Form>
                  {formJson.map(({ type, name, placeholder, label }) => {
                     return (
                        <MyTextInput
                           key={name}
                           label={label}
                           name={name}
                           type={type as any}
                           placeholder={placeholder}
                        />
                     );
                  })}

                  <button type="submit">Enviar</button>
               </Form>
            )}
         </Formik>
      </div>
   );
};
