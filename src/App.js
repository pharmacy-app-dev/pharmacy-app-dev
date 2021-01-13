import Sidebar from "./Components/Sidebar/";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import all pages
import Pages from "./Pages";

function App() {
    return (
        <div className="flex bg-white-50">
            <Sidebar />
            <Pages />
        </div>
    );
}

export default App;
