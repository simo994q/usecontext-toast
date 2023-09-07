import { NavLink } from "react-router-dom"

export const LayoutHeader = () => {
    return (
        <>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/info'>Info</NavLink>
                <NavLink to='/warning'>Warning</NavLink>
                <NavLink to='/error'>Error</NavLink>
            </div>
        </>
    )
}