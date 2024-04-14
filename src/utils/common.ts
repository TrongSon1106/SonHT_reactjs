export const convertPlaceHolderName = (title: string) => {
  switch (title) {
    case "email":
      return "Email";
    case "phone":
      return "Số điện thoại";
    case "password":
      return "Nhập mật khẩu";
    case "rePassword":
      return "Nhập lại mật khẩu";
    case "name": 
    return "Tên người dùng"
  }
};

export const signUpError = (err: any, email: string) => {
  switch (err.code) {
    case "auth/email-already-in-use":
      return `Email address ${email} already in use.`;
    case "auth/invalid-email":
      return `Email address ${email} is invalid.`;
    case "auth/operation-not-allowed":
      return "err during sign up.";
    case "auth/weak-password":
      return "Password is not strong enough. Add additional characters including special characters and numbers.";
    default:
      return err.message;
  }
};

export const signInError = (err: any, email: string) => {
  switch (err.code) {
    case "auth/invalid-email":
      return `Email address ${email} is not valid`;
    case "auth/user-disabled":
      return `Your user account is disabled`;
    case "auth/user-not-found":
      return `Email address ${email} is not found`;
    case "auth/wrong-password":
      return `Wrong password`;
    default:
      return err.message;
  }
};

