import { createContext, useState } from "react";

export const ToastContext = createContext(null)

export const ToastContextProvider = ({children}) => {

    const [toast, setToast] = useState({version: 'success', message: 'Success message', popup: false})

    return (
        <>
            <ToastContext.Provider value={{toast, setToast}}>
                {children}
            </ToastContext.Provider>
        </>
    )
}