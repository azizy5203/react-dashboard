import PropTypes from "prop-types";
import { useField, useFormikContext } from "formik";
import { Dropdown } from "primereact/dropdown";

function ListField({ items, itemTitle, itemValue, ...props }) {
  const [field, meta, helpers] = useField(props);
  const { setFieldValue } = useFormikContext();

  // Map items to format expected by Dropdown component
  const formattedItems = items.map((item) => ({
    label: item[itemTitle],
    value: item[itemValue],
  }));

  const handleChange = (e) => {
    console.log("e: ", e);
    setFieldValue(props.name, e.value);
    helpers.setTouched(true);
  };

  return (
    <div className="flex flex-col gap-2 py-3">
      <Dropdown
        {...field}
        {...props}
        value={field.value || ""}
        onChange={handleChange}
        onBlur={field.onBlur}
        options={formattedItems}
      />
      {meta.touched && meta.error && (
        <small className="text-red-400">{meta.error}</small>
      )}
    </div>
  );
}

ListField.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  itemTitle: PropTypes.string.isRequired,
  itemValue: PropTypes.string.isRequired, // Add itemValue as required prop
};

export default ListField;
