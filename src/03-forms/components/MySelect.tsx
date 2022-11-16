import { ErrorMessage, useField } from "formik";

interface Props {
   label: string;
   name: string;
   placeholder?: string;
   [x: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {
   const [field] = useField(props);

   return (
      <>
         <label htmlFor={props.id || props.name}>{label}</label>
         <select className="text-input" {...field} {...props} />
         <ErrorMessage name={props.name} component="span" />
      </>
   );
};

// * en el field viene todo lo que necesito para el input => onChange, value, onBlur
