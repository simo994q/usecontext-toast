
import { useContext } from 'react'
import { ToastContext } from '../context/ToastContext'

export const InfoPage = () => {

    const {toast, setToast} = useContext(ToastContext)



    return (
        <>

        <h1>Click button for info toast</h1>

        <button onClick={() => setToast('info')}>Info</button>
        
        </>
    )
}