
import { useContext } from 'react'
import { ToastContext } from '../context/ToastContext'

export const SuccessPage = () => {

    const {toast, setToast} = useContext(ToastContext)



    return (
        <>

        <h1>Click button for success toast</h1>

        <button onClick={() => setToast('success')}>Success</button>
        
        </>
    )
}