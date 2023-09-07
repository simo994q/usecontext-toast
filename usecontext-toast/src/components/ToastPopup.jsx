import { ToastContext } from "../context/ToastContext"
import { useContext, useEffect } from "react"
import { ToastMessage } from "./ToastMessage"

export const ToastPopup = () => {

    const { toast, setToast } = useContext(ToastContext)

    
    return (
        <>
            <ToastMessage version={toast.version} message={toast.message} popup={toast.popup}/>
        </>
    )

}