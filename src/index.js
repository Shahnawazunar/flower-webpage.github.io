import React from "react";
import  ReactDOM  from "react-dom/client";
import MyApp from "./MyApp";
import { BrowserRouter } from "react-router-dom";


const display = ReactDOM.createRoot(document.getElementById("root"))

display.render(

<React.StrictMode>
   <BrowserRouter>
   <MyApp/>
   </BrowserRouter>
</React.StrictMode>
)