import { ErrorMessage, useField } from "formik";

interface Props {
   label: string;
   name: string;
   [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
   // useField() tiene acceso al context para leer todos los datos que estoy pasando al componente Formik
   const [field] = useField({ ...props, type: "checkbox" });

   return (
      <>
         <label>
            <input type="checkbox" {...field} {...props} />
            {label}
         </label>
         <ErrorMessage name={props.name} component="span" />
      </>
   );
};

// * en el field viene todo lo que necesito para el input => onChange, value, onBlur
