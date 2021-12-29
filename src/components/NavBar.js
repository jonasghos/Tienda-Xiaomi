import logo_title from '../images/logo-title-1.png'
import { CartWidget } from './icons/CartWidget'
import { Link } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi';
export const NavBar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-nav nav">
                    <div className="col-sm-2 ">
                        <Link to="/"><img src={logo_title} id="logo-title"></img></Link>
                    </div>
                    <div className="col-sm-6 btn-li">
                            <Link to={"/productos/smartphones"} className=" btn-nav">Smartphones</Link>
                            <Link to={"/productos/smartwatch"} className="  btn-nav" >Smartwatch</Link>
                            <Link to={"/productos/headphones"} className=" btn-nav" >Headphones</Link>                        
                    </div>
                    <div className="col-sm-3 text-center form-search">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-dark btn-search" type="submit"><BiSearchAlt2/></button>
                        </form>
                        </div>
                    <div className="col-sm-1 btns">
                                <Link to= {"/cart"}><CartWidget ></CartWidget></Link>
                    </div>
                </div>
            </nav>
        </header>
    )

}

