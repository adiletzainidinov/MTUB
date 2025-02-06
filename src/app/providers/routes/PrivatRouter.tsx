import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

type Props = {
  component: ReactNode;
  isAuth?: boolean;
  role: string;
  fallBackPath: string;
  isAllowed: string[];
};

const PrivatRouter = ({ component, isAuth, role, fallBackPath, isAllowed }: Props) => {
  if (isAuth && isAllowed.includes(role)) {
    return <>{component}</>;
  }
  return <Navigate to={fallBackPath} />;
};

export default PrivatRouter;