import Amplitude from "amplitude"
import { useUserQuery } from "../queries/graphql"

import { init, OfflineRetryHandler } from "@amplitude/node"
import { EVENTS } from "../constants"

const API_KEY = process.env.REACT_APP_AMPLITUDE_API_KEY as string

export const amplitude = init(API_KEY, {
    retryClass: new OfflineRetryHandler(API_KEY),
})

export const tracker = (event_type: EVENTS, user_properties?: Object) => {
    amplitude.logEvent({
        event_type,
        user_properties,
        device_id: navigator.userAgent,
        time: new Date().getTime()
    })
}
//const { data, loading, error } = useUserQuery()
// export const amplitude = new Amplitude(
//     process.env.REACT_APP_AMPLITUDE_API_KEY as string
// )
