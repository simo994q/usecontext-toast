
import { useContext } from 'react'
import { ToastContext } from '../context/ToastContext'

export const ErrorPage = () => {

    const {toast, setToast} = useContext(ToastContext)



    return (
        <>

        <h1>Click button for Error toast</h1>

        <button onClick={() => setToast('error')}>Error</button>
        
        </>
    )
}