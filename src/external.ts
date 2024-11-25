import * as yup from "yup";
export const schema = yup.object().shape({
  shopperName: yup.string().required(),
  shopperEmail: yup.string().email().required(),
  shopperPassword: yup.string().min(4).max(15).required(),
  shopperConfirmPassword: yup.string().oneOf([yup.ref("shopperPassword")]),
});

export const schema2 =yup.object().shape({
  businessName: yup.string().required("Business name is required"),
  businessRegNo: yup.string()
    .required("Business reg No is required")
    .max(7, "Your reg No is not complete"),
  businessEmail: yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  businessAddress: yup.string().required("Business address is required"),
  businessID: yup.string().required("Please provide a valid ID"),
  businessDoc: yup.mixed().required("Please provide the ID image"),
})
