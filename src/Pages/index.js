import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Dashboard from "./Dashboard";
import Drugs from "./Drugs/";
import DrugsDetail from "./Drugs/Detail/";
import { Switch, Route, useLocation } from "react-router-dom";

const Pages = () => {
    const location = useLocation();
    // mengatasi error node
    const nodeRef = React.useRef(null);

    return (
        <section className="p-12 flex-1">
            <SwitchTransition mode="out-in">
                <CSSTransition
                    nodeRef={nodeRef}
                    key={location.key}
                    classNames="fade"
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                >
                    <Switch location={location}>
                        <Route exact path="/" component={Dashboard}></Route>
                        <Route exact path="/drugs" component={Drugs}></Route>
                        <Route exact path="/drugs/detail/:id" component={DrugsDetail}></Route>
                        {/* <Route exact path="/info" component={DrugsEdit}></Route> */}
                    </Switch>
                </CSSTransition>
            </SwitchTransition>
        </section>
    );
};
export default Pages;
