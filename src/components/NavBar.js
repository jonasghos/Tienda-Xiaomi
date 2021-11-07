import logo_title from '../images/logo-title-1.png'
import users from '../images/user_acount.png'
import basket from '../images/basket_buy.png'
export const NavBar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div class="container-nav">
                    <div class="row">
                        <div class="col-sm">
                            <a href="https://xiaomistorear.com/"><img src={logo_title} id="logo-title"></img></a>
                        </div>
                        <div class="col-sm text-center">
                            <form autocomplete="off">
                                <div>
                                    <input type="text" name="" placeholder="Buscar"/>
                                </div>
                            </form>
                        </div>
                        <div class="col-sm btns">
                            <div class="">
                                <button class="btn-user" href="https://xiaomistorear.com/" target="_blanck"><img src={users} id="users"></img></button>
                                <button class="btn-basket"><img src={basket} id="basket" ></img ></button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </header>
    )

}

