import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import FeedbacknessImage from "./feedbackness-char.png";

interface FeedbacknessProps {
  width: string;
}

export const Feedbackness: React.FC<FeedbacknessProps> = ({ width }) => {
  return (
    <Link to={ROUTES.HOME}>
      <img width={width} src={FeedbacknessImage} alt="feedbackness logo" />
    </Link>
  );
};
