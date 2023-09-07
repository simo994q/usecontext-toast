import { ToastContext } from "../context/ToastContext"
import { useContext, useEffect } from "react"

export const ToastPopup = () => {

    const { toast, setToast } = useContext(ToastContext)

    useEffect(() => {
            // noget der laver selve popuppen
    }, [])

    switch (toast) {
        case 'success':
            return (
                <>
                    successtoast
                </>
            )
            break;
        case 'info':
            return (
                <>
                    infotoast
                </>
            )
            break;
        case 'warning':
            return (
                <>
                    warningtoast
                </>
            )
            break;
        case 'error':
            return (
                <>
                    errortoast
                </>
            )
            break;
    }
}