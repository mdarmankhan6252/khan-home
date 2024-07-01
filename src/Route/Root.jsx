import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import UserNav from "../components/Nav/UserNav";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <UserNav></UserNav>
            <hr />
            <Nav></Nav>
            <Outlet></Outlet> 
            <Footer></Footer>           
        </div>
    );
};

export default Root;