import { createContext, useState } from "react";

export const ToastContext = createContext(null)

export const ToastContextProvider = ({children}) => {

    const [toast, setToast] = useState(null)

    return (
        <>
            <ToastContext.Provider value={{toast, setToast}}>
                {children}
            </ToastContext.Provider>
        </>
    )
}