import { ErrorMessage, useField } from "formik";

interface Props {
   label: string;
   name: string;
   type?: "text" | "email" | "password";
   placeholder?: string;
   [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
   // useField() tiene acceso al context para leer todos los datos que estoy pasando al componente Formik
   const [field] = useField(props);

   return (
      <>
         <label htmlFor={props.id || props.name}>{label}</label>
         <input className="text-input" {...field} {...props} />
         <ErrorMessage name={props.name} component="span" />
         {/* {meta.touched && meta.error && (
            <span className="error">{meta.error}</span>
         )} */}
      </>
   );
};

// * en el field viene todo lo que necesito para el input => onChange, value, onBlur
