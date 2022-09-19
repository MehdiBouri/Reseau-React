import React from "react";
import "../css/register.css";
import { Formik, Field, Form } from "formik";

export default function RegisterForm() {

    return (
        <div className="register">
      <h1>Register</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
      >
        <div classname="form">
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
              <Field
                id="password"
                name="password"
                placeholder="Confirmez le mot de passe..."
                type="password"
              />
            </div>
            <div className="input-container">

            <Field
                id="name"
                name="name"
                placeholder="Nom..."
                type="text"
              />
            <Field
                id="surname"
                name="surname"
                placeholder="prenom..."
                type="text"
              />
            </div>
            <div className="button-container">
              <button type="submit" class="btn">
                S'inscrire
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
    )
}