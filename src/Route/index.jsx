import React, {useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";
  import  { useAuth }  from "../context";

export default function ProtectedRoute({ redirectTo }) {
    const {user} = useAuth();

    return user ? <Outlet /> : <Navigate to={redirectTo} />;
}
