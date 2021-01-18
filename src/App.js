import React from "react";
import Modal from "./Components/Modal";
import Sidebar from "./Components/Sidebar/";
import { ModalContext } from "./Components/Context";
// import all pages
import Pages from "./Pages";

function App() {
    const [modal, setModal] = React.useState({
        isActive: false,
        type: "",
        title: "",
        content: "",
    });

    const modalHandler = React.useMemo(() => ({
        getModal: () => {
            return modal;
        },
        setModal: (value) => {
            setModal(value);
        },
    }));

    return (
        <ModalContext.Provider value={modalHandler}>
            <Modal
                type={modal.type}
                isActive={modal.isActive}
                title={modal.title}
                content={modal.content}
            />
            <div className="grid grid-cols-main grid-rows-main bg-white-50">
                <div>
                    <Sidebar />
                </div>
                <div className="w-full overflow-auto">
                    <Pages />
                </div>
            </div>
        </ModalContext.Provider>
    );
}

export default App;
