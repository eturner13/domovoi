import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard';
import Lights from './pages/lights/lights';

const AppRouter = () => (
    <Router>
        <div>
            <div className="navigation">
            	<NavLink to='/'>
                    Dashboard
                </NavLink>
                <NavLink to='/lights/'>
                    Lights
                </NavLink>
      	    </div>
            <Route path="/" exact component={Dashboard} />
            <Route path="/lights/" component={Lights} />
        </div>
    </Router>
);

export default AppRouter;