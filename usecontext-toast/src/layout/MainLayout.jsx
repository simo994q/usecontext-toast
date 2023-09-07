import { LayoutHeader } from "./LayoutHeader"
import { LayoutFooter } from "./LayoutFooter"
import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { ToastContext } from "../context/ToastContext"
import { useEffect } from "react"

export const MainLayout = () => {

    const {toast} = useContext(ToastContext)

    useEffect(() => {
        console.log(toast);
    }, [toast])

    return (
        <>
            <LayoutHeader />
                <Outlet />
            <LayoutFooter />
        </>

    )
}