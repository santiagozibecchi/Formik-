import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

const RegisterPage = () => {
   const {
      formData,
      onChange,
      name,
      password1,
      email,
      password2,
      resetForm,
      isValidEmail,
   } = useForm({
      name: "",
      email: "",
      password1: "",
      password2: "",
   });

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formData);
   };

   return (
      <div>
         <h1>Register Page</h1>

         <form onSubmit={handleSubmit} noValidate>
            <input
               name="name"
               onChange={(e) => onChange(e)}
               value={name}
               type="text"
               placeholder="Name"
               className={`${name.trim().length <= 0 && "has-error"}`}
            />
            {name.trim().length <= 0 && <span>Este campo es necesario</span>}
            <input
               name="email"
               onChange={onChange}
               value={email}
               type="email"
               placeholder="Email"
               className={`${!isValidEmail(email) && "has-error"}`}
            />
            {!isValidEmail(email) && <span>Email no válido</span>}

            <input
               name="password1"
               onChange={onChange}
               value={password1}
               type="password"
               placeholder="Password"
            />
            {password1.trim().length <= 0 && (
               <span>Este campo es necesario</span>
            )}
            {password1.trim().length < 6 && password1.trim().length > 0 && (
               <span>La contraseña tiene que tener 6 caracteres</span>
            )}

            <input
               name="password2"
               onChange={onChange}
               value={password2}
               type="password"
               placeholder="Repeat password"
            />
            {password2.trim().length <= 0 && (
               <span>Este campo es necesario</span>
            )}
            {password2.trim().length > 0 && password1 !== password2 && (
               <span>Las contraseñas no coinciden</span>
            )}

            <button type="submit">Create</button>
            <button onClick={resetForm}>Reset Form</button>
         </form>
      </div>
   );
};

export default RegisterPage;
