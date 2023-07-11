import { useState, useContext } from "react";
import styles from "./actions.module.css";
import { MenuItem, Select } from "@mui/material";
import { useAddToCartMutation } from "../../../datafetching/api";
import Context from "../../../Context";

const ACTIONS = ({ id, options }) => {


  const { colors, storages } = options;
  const { setCartItems } = useContext(Context);
  const [validationMsg, setValidationMsg] = useState("");
  const [formData, setFormData] = useState({
    id: id,
    colorCode: colors.length === 1 ? colors[0].code : "x",
    storageCode: storages.length === 1 ? storages[0].code : "x",
  });

  const colorMenuItems = colors.map((color) => {
    return (
      <MenuItem sx={{ width: "220px" }} key={color.code} value={color.code}>
        {color.name}
      </MenuItem>
    );
  });

  const colorMenuItemsWithEmptyOption = [
    ...colorMenuItems,
    <MenuItem style={{ display: "none" }} key="emptyoption" value="x">
      Select a color
    </MenuItem>,
  ];

  const storageMenuItems = storages.map((storage) => {
    return (
      <MenuItem sx={{ width: "220px" }} key={storage.code} value={storage.code}>
        {storage.name}
      </MenuItem>
    );
  });

  const storageMenuItemsWithEmptyOption = [
    ...storageMenuItems,
    <MenuItem sx={{ display: "none" }} key="emptyoption" value="x">
      Select storage
    </MenuItem>,
  ];

  const onMutation = (data) => {
    setCartItems((prev) => prev + data.data.count);
    setValidationMsg("Item Added !");

  };

  const onMutationError = (err) => {
    setValidationMsg(err.message);
  };

  const {
    mutate,
    isLoading: isMutating,
    isError: mutationIsError,
    error: mutationError,
  } = useAddToCartMutation(onMutation, onMutationError, formData);

  const handleChange = (name, value) => {
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (data) => {
    if (data.colorCode === "x" || data.storageCode === "x") {
      setValidationMsg("Select a color and a storage please");
      return;
    }
    mutate();
  };

  return (
    <form
      className={styles.actionsContainer}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {validationMsg ? (
        <p className={styles.validationMsg}>{validationMsg}</p>
      ) : (
        <p className={styles.validationMsg}></p>
      )}

      <div className={styles.selectContainer}>
        <Select
          autoWidth
          name="colorCode"
          className={styles.select}
          onChange={(e) => {
            const name = e.target.name;
            const value = e.target.value;
            handleChange(name, value);
          }}
          value={formData.colorCode}
        >
          {colorMenuItemsWithEmptyOption}
        </Select>
        <Select
          autoWidth
          className={styles.select}
          name="storageCode"
          onChange={(e) => {
            const name = e.target.name;
            const value = e.target.value;
            handleChange(name, value);
          }}
          value={formData.storageCode}
        >
          {storageMenuItemsWithEmptyOption}
        </Select>
      </div>
      {isMutating ? (
        <p>Loading</p>
      ) : (
        <button
          className={styles.placeOrderBtn}
          onClick={() => handleSubmit(formData)}
        >
          Place Order
        </button>
      )}
    </form>
  );
};

export default ACTIONS;
