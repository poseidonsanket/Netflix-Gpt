export const checkValidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!isEmailValid) return "Please enter a Valid Email ID";
  if (!isPasswordValid) return "Please enter a valid password. Your password must meet the following criteria : (At least 8 characters in length. Contains a combination of letters (both uppercase and lowercase), numbers, and special characters.";
  if (!isNameValid) return "Please enter a valid name";

  return null;
};
