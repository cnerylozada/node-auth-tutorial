const mongoose = require("mongoose");
const yup = require("yup");
const { validateEmail } = require("../utils/utils");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validateEmail(v),
      message: "Enter a valid email",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 8,
  },
});

exports.validateUser = (user) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .test("validate-email", "Enter a valid email", (v) => validateEmail(v))
      .required(),
    password: yup.string().min(5).max(8).required(),
  });
  return schema.validate(user, { abortEarly: false });
};
exports.Users = mongoose.model("Users", userSchema);
