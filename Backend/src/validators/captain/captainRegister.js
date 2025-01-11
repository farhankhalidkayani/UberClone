const yup = require("yup");

const captainRegisterSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  vehicle: yup.object().shape({
    color: yup.string().required("Vehicle color is required"),
    plate: yup.string().required("Vehicle plate is required"),
    capacity: yup.number().required("Vehicle capacity is required"),
    vehicleType: yup
      .string()
      .oneOf(["car", "bike", "auto"], "Invalid vehicle type")
      .required("Vehicle type is required"),
  }),
});

module.exports = captainRegisterSchema;
