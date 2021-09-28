


const AUTH_TOKEN = "auth_token"
export const useAuthToken = () => {

    const authToken = localStorage.getItem(AUTH_TOKEN)

    const setAuthToken = (authToken: string) => localStorage.setItem(AUTH_TOKEN, authToken)

    const removeAuthToken = () => localStorage.removeItem(AUTH_TOKEN)

    return [authToken, setAuthToken, removeAuthToken]
}
