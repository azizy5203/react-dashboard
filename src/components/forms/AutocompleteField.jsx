import PropTypes from "prop-types";
import { useField, useFormikContext } from "formik";
import { AutoComplete } from "primereact/autocomplete";
import { useState } from "react";

function AutocompleteField({ items, itemTitle, ...props }) {
  const [field, , helpers] = useField(props);
  const { setFieldValue } = useFormikContext();
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (event) => {
    const query = event.query.toLowerCase();
    const filtered = items.filter((item) =>
      item[itemTitle].toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
  };

  const handleChange = (e) => {
    setFieldValue(props.name, e.value);
    helpers.setTouched(true);
  };

  return (
    <div>
      <AutoComplete
        {...field}
        {...props}
        value={field.value || ""}
        onChange={handleChange}
        onBlur={field.onBlur}
        suggestions={filteredItems}
        completeMethod={handleSearch}
        field={itemTitle}
        dropdown
        className="w-full"
      />
    </div>
  );
}

AutocompleteField.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  itemTitle: PropTypes.string.isRequired,
};

export default AutocompleteField;
