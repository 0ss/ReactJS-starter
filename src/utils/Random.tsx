import React from "react"
import {
    COLOR_MAIN_DARK,
    COLOR_MAIN_LIGHT,
    COLOR_MAIN_MEDIUM_DARK,
    COLOR_MAIN_MEDIUM_LIGHT,
    COLOR_WHITE_LIGHT,
} from "../constants"

const PersonWalkingSvg = React.lazy(() => import("../svgs/PersonWalkingSvg"))
const PersonWithPhoneSvg = React.lazy(
    () => import("../svgs/PersonWithPhoneSvg")
)
const PersonYogaSvg = React.lazy(() => import("../svgs/PersonYogaSvg"))

export const getRandomColor = (): string => {
    const COLORS = [
        COLOR_MAIN_MEDIUM_DARK,
        COLOR_MAIN_DARK,
        COLOR_MAIN_LIGHT,
        COLOR_WHITE_LIGHT,
        COLOR_MAIN_MEDIUM_LIGHT,
    ]

    return COLORS[Math.floor(Math.random() * COLORS.length)]
}

export default () => {
    const PersonSvg = [
        <PersonWalkingSvg />,
        <PersonWithPhoneSvg />,
        <PersonYogaSvg />,
    ]

    return PersonSvg[Math.floor(Math.random() * PersonSvg.length)]
}
