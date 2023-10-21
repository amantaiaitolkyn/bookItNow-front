import React from "react";
import { useRouteError } from "react-router-dom";

const HandleError = (props) => {
    const error = useRouteError();
    return <h1>{error.status} {error.error.message} </h1>
}
export default HandleError;