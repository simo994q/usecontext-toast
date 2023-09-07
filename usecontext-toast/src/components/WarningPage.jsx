
import { useContext } from 'react'
import { ToastContext } from '../context/ToastContext'
import { ToastPopup } from './ToastPopup'


export const WarningPage = () => {

    const {toast, setToast} = useContext(ToastContext)

    const makePopup = () => {

        setToast({ version: 'warning', message: 'Warning message', popup: true })
        console.log(toast);
        const timeout = setTimeout(() => {
            setToast({ version: 'warning', message: 'Warning message', popup: false })
            console.log(toast);
        }, 3000);
        return () => {
            window.clearInterval(timeout);
        };
    }

    return (
        <>

        <h1>Click button for Warning toast</h1>

        <button onClick={() => makePopup()}>Warning</button>

        <ToastPopup />
        
        </>
    )
}