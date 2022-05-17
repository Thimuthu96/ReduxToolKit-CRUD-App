import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import WidgetTextfield from "../../components/WidgetTextfield";
import WidgetButton from "../../components/WidgetButton";
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });

    console.log("====================================");
    console.log(values);
    console.log("====================================");

    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );

    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <WidgetTextfield
        label="User Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter name here" }}
      />
      <br />
      <WidgetTextfield
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "Enter email here" }}
      />
      <WidgetButton onClick={handleAddUser}>Submit</WidgetButton>
    </div>
  );
};

export default AddUser;
