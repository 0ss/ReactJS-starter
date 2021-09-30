import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants'
import FeedbacknessCharImage from './feedbackness-char.png'
interface Props {
    
}

export const FeedbacknessChar = (props: Props) => {
    return (
        <Link to={ROUTES.HOME}>
        <img
          width={220}
          src={FeedbacknessCharImage}
          alt="feedbackness logo"
        />
      </Link>
    )
}
