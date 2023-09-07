

export const ToastMessage = (props) => {

    // className={style.toastContainer + props.version} 

    console.log(props.popup);

    return (
        <>
            <div style={{opacity: props.popup ? 1 : 0}}>
                <p>{props.version}</p>
                <p>{props.message}</p>
            </div>
        </>
    )
}