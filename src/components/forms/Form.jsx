import { Formik, Form as FormikForm } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

Form.propTypes = {
  children: React.ReactNode,
  model: PropTypes.object,
  initialValues: PropTypes.object,
  schema: PropTypes.object,
  //   isSubmitting: PropTypes.bool,
  isEditing: PropTypes.bool,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
};

function Form({
  children,
  initialValues,
  model,
  schema,
  isEditing,
  onSubmit,
  onReset,
}) {
  return (
    <>
      <Formik
        initialValues={isEditing ? model : initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
        onReset={onReset}
      >
        {({ values, errors, isSubmitting }) =>
          isSubmitting ? (
            <ProgressSpinner />
          ) : (
            <FormikForm> {children}</FormikForm>
          )
        }
      </Formik>
    </>
  );
}

export default Form;
