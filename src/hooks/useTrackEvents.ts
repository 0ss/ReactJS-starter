import { useUserQuery } from "../queries/graphql"
import { amplitude } from "../utils/amplitude"


export const useTrackEvent = () => {
    const { data, loading, error } = useUserQuery()

    amplitude.track({
        user_id: data?.user?.id,
        user_properties: {
            ...data?.user
        },
        event_type:'HHHEY',
    })
    
}
