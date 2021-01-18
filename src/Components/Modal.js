import { HiExclamation } from "react-icons/hi";
import { useContext, useState, useMemo, useRef } from "react";
import { ModalContext } from "./Context";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

function Modal(Props) {
    const nodeRef = useRef(null);
    const { setModal } = useContext(ModalContext);
    // todo add reducer
    const modal = useMemo(
        () => ({
            isActive: Props.isActive,
            title: Props.title,
            type: Props.type,
            content: Props.content,
        }),
        [Props.isActive, Props.type, Props.content, Props.title]
    );

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={modal.isActive}
            timeout={300}
            classNames="fade"
            unmountOnExit
            
        >
            <div
                className={classNames(
                    "fixed",
                    "z-50",
                    "top-0",
                    "bottom-0",
                    "right-0",
                    "left-0",
                    "flex",
                    "items-center",
                    "justify-center"
                )}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                        className="fixed inset-0 transition-opacity"
                        aria-hidden="true"
                    >
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>

                    <div
                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <HiExclamation className="h-6 w-6 text-red-600" />
                            </div> */}
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3
                                        className="text-lg leading-6 font-medium text-gray-900"
                                        id="modal-headline"
                                    >
                                        {modal.title}
                                    </h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            {modal.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                onClick={() => setModal({ isActive: false })}
                                type="button"
                                className={classNames(
                                    {
                                        "bg-red-600 hover:bg-red-700":
                                            modal.type === "danger",
                                        "bg-red-600 hover:bg-red-700":
                                            modal.type === "danger",
                                        "bg-green-600 hover:bg-green-700":
                                            modal.type === "success",
                                        "bg-green-600 hover:bg-green-700":
                                            modal.type === "success",
                                        "bg-yellow-600 hover:bg-yellow-700":
                                            modal.type === "warning",
                                        "bg-yellow-600 hover:bg-yellow-700":
                                            modal.type === "warning",
                                    },
                                    "w-full",
                                    "inline-flex",
                                    "justify-center",
                                    "rounded-md",
                                    "border",
                                    "border-transparent",
                                    "shadow-sm",
                                    "px-4",
                                    "py-2",
                                    "text-base",
                                    "font-medium",
                                    "text-white",
                                    "focus:outline-none",
                                    "focus:ring-2",
                                    "focus:ring-offset-2",
                                    {
                                        "focus:ring-red-500":
                                            modal.type === "danger",
                                        "focus:ring-green-500":
                                            modal.type === "success",
                                        "focus:ring-yellow-500":
                                            modal.type === "warning",
                                    },
                                    "sm:ml-3",
                                    "sm:w-auto",
                                    "sm:text-sm"
                                )}
                            >
                                Deactivate
                            </button>
                            <button
                                onClick={() => setModal({ isActive: false })}
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
         </CSSTransition>
    );
}

export default Modal;
