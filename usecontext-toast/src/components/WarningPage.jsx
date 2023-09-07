
import { useContext, useState } from 'react'
import { ToastContext } from '../context/ToastContext'
import { ToastPopup } from './ToastPopup'


export const WarningPage = () => {

    // const { toast, setToast } = useContext(ToastContext)

    const [toast, setToast] = useState([])

    const [toastId, setToastId] = useState(1)

    const makeToast = (error, msg) => {

        setToastId(toastId + 1)

        const newToast = { error: error + toastId, msg: msg, id: toastId }

        setToast([...toast, newToast])
        
    }

    const removeToast = (id) => {
        setToast(toast.filter(item => item.id !== id));
    }

    return (
        <>

            <h1>Click button for Warning toast</h1>

            <button onClick={() => { makeToast('Warning', 'Warning message'), console.log(toast); }}>Warning</button>

            <div>
                {toast.map(item => {
                    return (
                        <div key={item.id} style={{margin: '8px 0'}}>
                            <div>{item.error}</div>
                            <div onClick={() => removeToast(item.id)}> REMOVE</div>
                        </div>
                    )
                })

                }
            </div>

        </>
    )
}