import React from "react";
import { Formik, Form as FormikForm } from "formik";
import { Button } from "primereact/button";

import PropTypes from "prop-types";
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
            <FormikForm className="rounded-md p-4">
              <div>{children}</div>
              <div className="flex gap-4 mt-4">
                <Button label="Submit" />
                <Button label="Reset" />
              </div>
            </FormikForm>
          )
        }
      </Formik>
    </>
  );
}

export default Form;
