import { createPortal } from "react-dom";

const Portal = ({handleClosePortal, children}) =>{
    return createPortal(
        <div className="portal-container">
            <div onClick={handleClosePortal} className="portal-underlay"/>
            {children}
        </div>,
        document.getElementById('portal')
    )
}

export default Portal;