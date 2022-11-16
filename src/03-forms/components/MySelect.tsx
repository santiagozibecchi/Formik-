import { useField } from "formik";

interface Props {
   label: string;
   name: string;
   placeholder?: string;
   [x: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {
   // useField() tiene acceso al context para leer todos los datos que estoy pasando al componente Formik
   const [field, meta] = useField(props);

   return (
      <>
         <label htmlFor={props.id || props.name}>{label}</label>
         <select className="text-input" {...field} {...props} />
         {meta.touched && meta.error && (
            <span className="error">{meta.error}</span>
         )}
      </>
   );
};

// * en el field viene todo lo que necesito para el input => onChange, value, onBlur
