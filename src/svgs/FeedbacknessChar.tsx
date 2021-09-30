import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import FeedbacknessCharImage from "./feedbackness-char.png";

interface FeedbacknessCharProps {
  width: string;
}

export const FeedbacknessChar: React.FC<FeedbacknessCharProps> = ({
  width,
}) => {
  return (
    <Link to={ROUTES.HOME}>
      <img width={width} src={FeedbacknessCharImage} alt="feedbackness logo" />
    </Link>
  );
};
