import logo_title from '../images/logo-title-1.png'
import users from '../images/user_acount.png'
import { CartWidget } from './icons/CartWidget'
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
                            <div class="">
                                <button class="btn-user" href="https://xiaomistorear.com/" target="_blanck"><img src={users} id="users"></img></button>
                                <button class="btn-basket"><CartWidget/></button>
                            </div>
                        </div>
                    </div>
                    <div class="row row-two">
                        <div class="col-sm-3">
                            <a href="https://xiaomistorear.com/"><img src={logo_title} id="logo-title"></img></a>
                        </div>
                        <div class="col-sm-9 ">
                            <ul class="ul-items">
                                <a href="" class="li-item">Inicio</a>
                                <a href="" class="li-item">Productos</a>
                                <a href="" class="li-item">Smartphones</a>
                                <a href="" class="li-item">Conctacto</a>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </header>
    )

}

