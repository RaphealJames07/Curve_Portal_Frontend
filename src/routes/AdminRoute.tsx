import {Navigate} from "react-router-dom";

interface Props {
    children?: React.ReactNode;
    element?: React.ReactNode;
}

const AdminRoute: React.FC<Props> = ({element, children}) => {
    const isUser = true;
    const isLoggedIn = "yes";

    return isUser && isLoggedIn ? (
        children ? (
            <>{children}</>
        ) : (
            <>{element}</>
        )
    ) : (
        <Navigate to="/" replace />
    );
};

export default AdminRoute;
