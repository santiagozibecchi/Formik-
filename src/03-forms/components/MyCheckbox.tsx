import { useField } from "formik";

interface Props {
   label: string;
   name: string;
   [x: string]: any;
}

const MyCheckbox = ({ label, ...props }: Props) => {
   // useField() tiene acceso al context para leer todos los datos que estoy pasando al componente Formik
   const [field, meta] = useField({ ...props, type: "checkbox" });

   return (
      <>
         <label>
            <input type="checkbox" {...field} {...props} />
            {label}
         </label>
         {meta.touched && meta.error && (
            <span className="error">{meta.error}</span>
         )}
      </>
   );
};

export default MyCheckbox;

// * en el field viene todo lo que necesito para el input => onChange, value, onBlur
