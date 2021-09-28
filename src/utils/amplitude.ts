import Amplitude from "amplitude"
import { useUserQuery } from "../queries/graphql"


//const { data, loading, error } = useUserQuery()
export const amplitude = new Amplitude(
    process.env.REACT_APP_AMPLITUDE_API_KEY as string, 
)
