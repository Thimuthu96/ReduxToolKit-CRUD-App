import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import WidgetTextfield from "../../components/WidgetTextfield";
import WidgetButton from "../../components/WidgetButton";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";
import { updateUser } from "./userSlice";

const UpdateUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const existingUser = users.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];
  console.log("====================================");
  console.log(existingUser);
  console.log("====================================");
  const [values, setValues] = useState({
    name,
    email,
  });

  const navigate = useNavigate();

  const handleUpdateUser = () => {
    setValues({ name: "", email: "" });

    console.log("====================================");
    console.log(values);
    console.log("====================================");

    dispatch(
      updateUser({ id: params.id, name: values.name, email: values.email })
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
      <WidgetButton onClick={handleUpdateUser}>Update</WidgetButton>
    </div>
  );
};

export default UpdateUser;
