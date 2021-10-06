import { config } from "dotenv"

config() // env variables parse
export const enum ROUTES {
    HOME = "/",

    SIGN_UP = "/signup",
    SIGN_IN = "/signin",
    RESET_PASSWORD = "/reset-password/:token",
    PROJECT = "/project/:id",
    PROJECT_TEAM = "project/:id/team",
    ANALYTICS = "project/:id/analytics",
    HELP = "/help",
}

export const enum EVENTS {
    INIT = "Entered",
    SIGN_UP = "Sign Up",
    SIGN_IN = "Sign In",
    RESET_PASSWORD = "Reset Password",
    PROJECT = "Visit Project",
    PROJECT_TEAM = "Project Team",
    HELP = "Help",
}
/**
 * COLORS
 */

export const COLOR_MAIN_DARK = "#424874"
export const COLOR_MAIN_MEDIUM_DARK = "#A6B1E1"
export const COLOR_MAIN_MEDIUM_LIGHT = "#DCD6F7"
export const COLOR_MAIN_LIGHT = "#F4EEFF"
export const COLOR_WHITE_LIGHT = "#F1F1F1"
export const COLOR_ISSUE = "var(--light-red)"
export const COLOR_IDEA = "var(--yellow)"
export const COLOR_OTHER = "var(--dull-gray)"

/**
 * ENV
 */
export const REACT_APP_GRAPHQL_URL = process.env.REACT_APP_GRAPHQL_URL
export const REACT_APP_GOOGLE_CLIENT_ID = process.env
    .REACT_APP_GOOGLE_CLIENT_ID as string
export const REACT_APP_GOOGLE_CALLBACK_URL =
    process.env.REACT_APP_GOOGLE_CALLBACK_URL
export const REACT_APP_GOOGLE_CLIENT_SECRET =
    process.env.REACT_APP_GOOGLE_CLIENT_SECRET
