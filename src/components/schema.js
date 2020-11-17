import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(3, "username must be 3 chars long"),
  email: yup
    .string()
    .email("Must be valid email address")
    .required("Must include email address"),

  role: yup.string().oneOf(["funder", "funderaiser"], "role is required")
});

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: Yup.string()
    .required("Password is Required")
    .min(8, "Passwords must be at least 8 characters long.")
});
