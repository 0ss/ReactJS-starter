import { useLocation, useParams } from "react-router-dom";

export const useProjectLocation = (): string => {
  const { id } = useParams<{ id: string }>();
  return `/project/${id}`;
};
