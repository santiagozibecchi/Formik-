import { useFormik } from "formik";
import "../styles/styles.css";

const FormikBasicPage = () => {
   const { handleChange, values, handleSubmit } = useFormik({
      initialValues: {
         firstName: "Santiago",
         lastName: "",
         email: "",
      },
      onSubmit: (values) => {
         console.log(values);
      },
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
