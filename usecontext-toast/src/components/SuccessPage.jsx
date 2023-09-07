
import { useContext, useState } from 'react'
import { ToastContext } from '../context/ToastContext'

import { ToastPopup } from './ToastPopup'

export const SuccessPage = () => {

    const { toast, setToast } = useContext(ToastContext)

    const makePopup = () => {

        setToast({ version: 'success', message: 'Success message', popup: true })
        console.log(toast);
        const timeout = setTimeout(() => {
            setToast({ version: 'success', message: 'Success message', popup: false })
            console.log(toast);
        }, 3000);
        return () => {
            window.clearInterval(timeout);
        };
    }

    return (
        <>

            <h1>Click button for success toast</h1>

            <button onClick={() => makePopup()}>Success</button>

            <ToastPopup />
        </>
    )
}