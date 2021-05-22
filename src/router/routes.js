import React from "react";
import{
    Routes,
    Route
} from "react-router-dom";

import HomePage from "../pages/HomePage";

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/form" element={<Form />} /> */}
        </Routes>

    )
}

export default MainRoutes;
