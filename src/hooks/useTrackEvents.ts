import { useUserQuery } from "../queries/graphql"
import { amplitude } from "../utils/amplitude"

export const useTrackEvent = () => {
    console.log('xxxxxxxx')
    const { data, loading, error } = useUserQuery()
    if (data?.user) {
        amplitude.track({
            user_id: data?.user?.id,
            user_properties: {
                ...data?.user,
            },
            event_type: "HHHEY",
        })
    }
    amplitude.track([
        {
            event_type: "some value", // required
            user_id: "some id", // only required if device id is not passed in
            device_id: "some id", // only required if user id is not passed in
            event_properties: {
                //...
            },
            user_properties: {
                //...
            },
        },
        {
            event_type: "another value", // required
            user_id: "some id", // only required if device id is not passed in
            device_id: "some id", // only required if user id is not passed in
            event_properties: {
                //...
            },
            user_properties: {
                //...
            },
        },
    ])
}
