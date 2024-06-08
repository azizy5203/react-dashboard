import PropTypes from "prop-types";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { useField } from "formik";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 py-3">
      <FloatLabel>
        <InputText
          className="w-full"
          {...field}
          {...props}
          value={field.value || ""}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
        <label>{label}</label>
      </FloatLabel>
      {meta.touched && meta.error && (
        <small className="text-red-400">{meta.error}</small>
      )}
    </div>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextField;
