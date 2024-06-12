import React from "react";
import { Formik, Form as FormikForm } from "formik";
import { Button } from "primereact/button";
import PropTypes from "prop-types";
import { ProgressSpinner } from "primereact/progressspinner";

Form.propTypes = {
  children: React.ReactNode,
  // actions: {
  //   type: React.ReactNode,
  //   required: false,
  // },
  defaultActions: {
    type: PropTypes.bool,
    default: true,
    required: false,
  },
  model: PropTypes.object,
  initialValues: PropTypes.object,
  schema: PropTypes.object,
  isEditing: PropTypes.bool,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
};

function Form({
  children,
  defaultActions = true,
  initialValues = {},
  model = {},
  schema,
  isEditing,
  onSubmit,
  onReset,
}) {
  return (
    <Formik
      initialValues={isEditing ? model : initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
      onReset={onReset}
    >
      {({ isSubmitting }) =>
        isSubmitting ? (
          <div className="flex justify-center items-center">
            <ProgressSpinner color="#f00" />
          </div>
        ) : (
          <FormikForm className="rounded-md p-4">
            <div>{children}</div>
            {/* {actions || (
              <div className="flex gap-4 mt-8">
                <Button type="submit" label="Submit" title="Submit" />
                <Button type="reset" label="Reset" title="Reset" outlined />
              </div>
            )} */}

            {defaultActions && (
              <div className="flex gap-4 mt-8">
                <Button type="submit" label="Submit" title="Submit" />
                <Button type="reset" label="Reset" title="Reset" outlined />
              </div>
            )}
          </FormikForm>
        )
      }
    </Formik>
  );
}

export default Form;
