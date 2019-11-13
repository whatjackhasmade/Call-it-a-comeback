import React from "react";
import Transition from "./Transition";

//Note that we need to pass location to our functional component  so we have access to it down there in <Transition/>
const Layout = ({ children, location }) => (
	<Transition location={location}>{children}</Transition>
);

export default Layout;
