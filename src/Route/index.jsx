import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context";

  export default function ProtectedRoute({ redirectTo }) {
    const { user } = useAuth();
    console.log(user);
    
    return user.userId ? <Outlet /> : <Navigate to={redirectTo} />;
}
