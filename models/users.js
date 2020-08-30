const mongoose = require("mongoose");
const yup = require("yup");
const { validateEmail } = require("../utils/utils");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
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

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
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
exports.User = mongoose.model("Users", userSchema);
