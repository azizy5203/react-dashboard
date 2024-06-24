import PropTypes from "prop-types";
import { useField } from "formik";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 py-3">
      <FloatLabel>
        {props?.type == "password" ? (
          <Password
            className="w-full"
            {...field}
            {...props}
            value={field.value || ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
            toggleMask
            feedback={false}
          />
        ) : (
          <InputText
            className="w-full"
            {...field}
            {...props}
            value={field.value || ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )}
        <label>
          <span>{label}</span>
          {props.required && <span className="text-red-500 ms-1">*</span>}
        </label>
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
