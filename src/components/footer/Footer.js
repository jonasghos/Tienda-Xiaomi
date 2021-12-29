import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';


export const Footer = () => {
    return (
        <div class="footer">
            <div class="footer--bar">
                <ul class="footer--btn">
                    <Link to={"https://web.whatsapp.com/"} className=" btn-nav"><BsFacebook/></Link>
                    <Link to={"https://www.instagram.com/"} className=" btn-nav"><BsInstagram/></Link>
                    <Link to={"https://www.facebook.com/"} className=" btn-nav"><BsWhatsapp/></Link>
                </ul>
            </div>
            <div class="footer--copyright text-center">
                <p class="footer__copyright--text"><i class="far fa-copyright"></i> Tienda Mi. All rights reserved.</p>
            </div>
            <div class="footer--link text-end">
                <a href="https://www.linkedin.com/in/jonasgho/" class="nick ">By JonasG</a>
            </div>
    </div>
    )
}
