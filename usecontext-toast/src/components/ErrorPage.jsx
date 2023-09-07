
import { useContext, useState } from 'react'
import { ToastContext } from '../context/ToastContext'
import { ToastPopup } from './ToastPopup'


export const ErrorPage = () => {

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

            <h1>Click button for Error toast</h1>

            <button onClick={() => { makeToast('Error', 'Error message'), console.log(toast); }}>Error</button>

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