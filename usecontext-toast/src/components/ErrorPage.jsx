
import { useContext } from 'react'
import { ToastContext } from '../context/ToastContext'
import { ToastPopup } from './ToastPopup'


export const ErrorPage = () => {

    const {toast, setToast} = useContext(ToastContext)

    const makePopup = () => {

        setToast({ version: 'error', message: 'Error message', popup: true })
        console.log(toast);
        const timeout = setTimeout(() => {
            setToast({ version: 'error', message: 'Error message', popup: false })
            console.log(toast);
        }, 3000);
        return () => {
            window.clearInterval(timeout);
        };
    }

    return (
        <>

        <h1>Click button for Error toast</h1>

        <button onClick={() => makePopup()}>Error</button>

        <ToastPopup />
        
        </>
    )
}