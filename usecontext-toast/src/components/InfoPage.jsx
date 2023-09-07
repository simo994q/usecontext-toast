
import { useContext } from 'react'
import { ToastContext } from '../context/ToastContext'
import { ToastPopup } from './ToastPopup'

export const InfoPage = () => {

    const {toast, setToast} = useContext(ToastContext)

    const makePopup = () => {

        setToast({ version: 'info', message: 'Info message', popup: true })
        console.log(toast);
        const timeout = setTimeout(() => {
            setToast({ version: 'info', message: 'Info message', popup: false })
            console.log(toast);
        }, 3000);
        return () => {
            window.clearInterval(timeout);
        };
    }

    return (
        <>

        <h1>Click button for info toast</h1>

        <button onClick={() => makePopup()}>Info</button>
        
        <ToastPopup />

        </>
    )
}