import { useLocation } from "react-router-dom";

const HeaderController = () => {

    const { pathname } = useLocation();

    const scrollFunc = () => {
        if (pathname === '/') {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        } 
    }


    return {scrollFunc};
}



export default HeaderController;
