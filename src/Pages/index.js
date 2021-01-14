import Dashboard from "./Dashboard";
import Drugs from "./Drugs/";
import Info from "./Info";

import { Switch, Route } from "react-router-dom";

const Pages = () => {
    return (
        <section className="p-12 flex-1">
            <Switch>
                <Route exact path="/" component={Dashboard}></Route>
                <Route exact path="/drugs" component={Drugs}></Route>
                <Route exact path="/info" component={Info}></Route>
            </Switch>
        </section>
    );
};
export default Pages;
