import {
   BrowserRouter as Router,
   Switch,
   Route,
   NavLink,
} from "react-router-dom";

import logo from "../logo.svg";

import FormikBasicPage from "../03-forms/pages/FormikBasicPage";
import FormikComponents from "../03-forms/pages/FormikComponents";
import FormikYupPage from "../03-forms/pages/FormikYupPage";
import RegisterPage from "../03-forms/pages/RegisterPage";
import FormikAbstraction from "../03-forms/pages/FormikAbstraction";

export const Navigation = () => {
   return (
      <Router>
         <div className="main-layout">
            <nav>
               <img src={logo} alt="React Logo" />
               <ul>
                  <li>
                     <NavLink to="/register" activeClassName="nav-active" exact>
                        Register
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/formik-basic"
                        activeClassName="nav-active"
                        exact
                     >
                        Formik Basic
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/formik-yup"
                        activeClassName="nav-active"
                        exact
                     >
                        Formik Yup
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/formik-components"
                        activeClassName="nav-active"
                        exact
                     >
                        Formik Components
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/formik-abstraction"
                        activeClassName="nav-active"
                        exact
                     >
                        Formik Abstraction
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/users" activeClassName="nav-active" exact>
                        Users
                     </NavLink>
                  </li>
               </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
            <Switch>
               <Route path="/register">
                  <RegisterPage />
               </Route>
               <Route path="/formik-basic">
                  <FormikBasicPage />
               </Route>
               <Route path="/formik-yup">
                  <FormikYupPage />
               </Route>
               <Route path="/formik-components">
                  <FormikComponents />
               </Route>
               <Route path="/formik-abstraction">
                  <FormikAbstraction />
               </Route>
            </Switch>
         </div>
      </Router>
   );
};
