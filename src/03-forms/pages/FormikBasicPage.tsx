import { useFormik, FormikErrors } from "formik";
import "../styles/styles.css";

interface FormValues {
   firstName: string;
   lastName: string;
   email: string;
}

const FormikBasicPage = () => {
   const validate = ({ firstName, lastName, email }: FormValues) => {
      const errors: FormikErrors<FormValues> = {};

      if (!firstName) {
         errors.firstName = "Required";
      } else if (firstName.length >= 15) {
         errors.firstName = "Must be 15 characters or less";
      }

      if (!lastName) {
         errors.firstName = "Required";
      } else if (firstName.length >= 10) {
         errors.firstName = "Must be 10 characters or less";
      }

      if (!email) {
         errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
         errors.email = "Invalid email address";
      }

      return errors;
   };

   const { handleChange, values, handleSubmit } = useFormik({
      initialValues: {
         firstName: "Santiago",
         lastName: "",
         email: "",
      },
      onSubmit: (values) => {
         console.log(values);
      },
      validate,
   });

   return (
      <div>
         <h1>Formik tutorial</h1>
         <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="firstName">First Name</label>
            <input
               onChange={handleChange}
               type="text"
               name="firstName"
               value={values.firstName}
            />
            <span>First Name is required</span>

            <label htmlFor="lastName">Last Name</label>
            <input
               onChange={handleChange}
               type="text"
               name="lastName"
               value={values.lastName}
            />
            <span>Last Name is required</span>

            <label htmlFor="email">Email</label>
            <input
               onChange={handleChange}
               type="email"
               name="email"
               value={values.email}
            />
            <span>Email is required</span>
            <span>Check email</span>

            <button type="submit">Submit</button>
         </form>
      </div>
   );
};

export default FormikBasicPage;
