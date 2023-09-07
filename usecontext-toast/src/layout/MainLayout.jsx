import { LayoutHeader } from "./LayoutHeader"
import { LayoutFooter } from "./LayoutFooter"
import { Outlet } from "react-router-dom"

export const MainLayout = ({ children }) => {
    return (
        <>
            <LayoutHeader />
                <Outlet />
            <LayoutFooter />
        </>

    )
}