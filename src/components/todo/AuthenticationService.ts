export const AuthenticationService = {
  registerSuccessfulLogin(username: string, _password: string) {
    console.log("registerSuccessfulLogin");
    sessionStorage.setItem("authenticatedUser", username);
  },

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  },

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");

    if (!user) {
      return false;
    }
    return true;
  },
};
