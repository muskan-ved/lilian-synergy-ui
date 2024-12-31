import * as Yup from "yup";

const emailRules = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRules = /^[A-Za-z ]*$/;
const phoneRules = /^\+?[0-9\s()-]{10,20}$/;

export const contactValidations = Yup.object({
  email: Yup.string()
    .required("Email is a required field")
    .matches(emailRules, "Email must be a valid email")
    .email("Email must be a valid email"),
  name: Yup.string()
    .required("Name is a required field")
    .matches(nameRules, "Please enter a valid name"),
  phone: Yup.string()
    .required("Phone is a required field")
    .matches(phoneRules, "Please enter a valid telephone number"),
  budget: Yup.string().required("Budget is a required field"),
  typeOfService: Yup.string().required("Type of Service is a required field"),
  objective: Yup.string().required("Objective is a required field"),
  message: Yup.string().required("Message is a required field"),
  terms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});
