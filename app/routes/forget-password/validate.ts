export function validate(
  email: string,
  password: string,
  confirmPassword: string,
) {
  let errors: { email?: string; password?: string } = {};

  if (!email) {
    errors.email = "Email is required.";
  } else if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (!password) {
    errors.password = "Password is required.";
  } else if (password !== confirmPassword) {
    errors.password = "Confirm password must match password.";
  }

  return Object.keys(errors).length ? errors : null;
}
