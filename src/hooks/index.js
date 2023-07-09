import React from "react";

import { UserProvider } from "./UserContext";
import { CardProvider } from "./CardContext";


const AppProvider = ({children}) => 
<CardProvider>
<UserProvider>{children}</UserProvider>
</CardProvider>
export default AppProvider