export const AUTH_TOKEN: string = "auth_token";
export const useAuthToken = () => {
  const authToken = () => localStorage.getItem(AUTH_TOKEN);

  const setAuthToken = (authToken: string) =>
    localStorage.setItem(AUTH_TOKEN, '');

  return [authToken, setAuthToken];
};
