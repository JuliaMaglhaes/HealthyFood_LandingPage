import React from "react";
import{
    Routes,
    Route,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import Form from "../pages/Form";


const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastro" element={<Form />} />
        </Routes>

    )
}

export default MainRoutes;
