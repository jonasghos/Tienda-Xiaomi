import logo_title from '../images/logo-title-1.png'
import { CartWidget } from './icons/CartWidget'
import { Link } from 'react-router-dom'
export const NavBar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div class="container-nav">
                    <div class="row row-one">
                        <div class="col-sm-8 text-center form-search">
                            <form >
                                    <input type="text" name="" placeholder="¿Que estas Buscando?" class="form-text"/>
                            </form>
                        </div>
                        <div class="col-sm-4 btns">
                                <Link to= {"/cart"}><CartWidget ></CartWidget></Link>
                        </div>
                    </div>
                    <div class="row row-two">
                        <div class="col-sm-3">
                            <Link to="/"><img src={logo_title} id="logo-title"></img></Link>
                        </div>
                        <div class="col-sm-9 ">
                            <ul class="ul-items">
                                <li class="ul-li"><Link to= "/" class="li-item">Inicio</Link></li>
                                <li class="ul-li nav-item dropdown">
                                    <a class="li-item nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link to={"/productos/smartphones"} class="dropdown-item">Smartphones</Link></li>
                                        <li><Link to={"/productos/smartwatch"} class="dropdown-item" >Smartwatch</Link></li>
                                        <li><Link to={"/productos/headphones"} class="dropdown-item" >Headphones</Link></li>
                                    </ul>
                                </li>
                                <li class="ul-li"><Link class="li-item" to= "/" >Conctacto</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </header>
    )

}

