
import { useContext } from 'react'
import { ToastContext } from '../context/ToastContext'

export const WarningPage = () => {

    const {toast, setToast} = useContext(ToastContext)



    return (
        <>

        <h1>Click button for Warning toast</h1>

        <button onClick={() => setToast('warning')}>Warning</button>
        
        </>
    )
}