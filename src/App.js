import Sidebar from "./Components/Sidebar/";

// import all pages
import Pages from "./Pages";

function App() {
    return (
        <div className="grid grid-cols-main grid-rows-main bg-white-50">
            <div>
                <Sidebar />
            </div>
            <div className="w-full overflow-auto">
                <Pages />
            </div>
        </div>
    );
}

export default App;
