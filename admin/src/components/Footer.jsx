import React from 'react';
import { BsTwitterX, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top position-fixed bottom-0 w-100 bg-black">
            <div class="col-md-4 d-flex align-items-center">
                <span class="mb-md-3 mb-md-0 text-white ms-3">© 2025. All rights reserved.</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex mx-3">
                <li class="ms-3">
                    <a class="text-white" href="#"><BsTwitterX /></a>
                </li>
                <li class="ms-3">
                    <a class="text-white" href="#"><BsFacebook /></a>
                </li>
                <li class="ms-3">
                    <a class="text-white" href="#"><BsInstagram /></a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;