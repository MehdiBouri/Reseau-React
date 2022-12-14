import React from "react";
import "../css/login.css";
import { Formik, Field, Form } from "formik";

export default function LoginForm() {
  //const [errorMessages, setErrorMessages] = useState({});
  //const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="login">
      <h1>Connexion</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
      >
        <div className="form">
          <Form>
            <div className="input-container">
              {/*<label htmlFor="email">E-mail...</label>*/}
              <Field
                id="email"
                name="email"
                placeholder="E-mail..."
                type="email"
              />
            </div>
            <div className="input-container">
              {/*<label htmlFor="password">Mot de passe...</label>*/}
              <Field
                id="password"
                name="password"
                placeholder="Mot de passe..."
                type="password"
              />
            </div>
            <div className="button-container">
              <button type="submit" className="btn">
                Se connecter
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
}
