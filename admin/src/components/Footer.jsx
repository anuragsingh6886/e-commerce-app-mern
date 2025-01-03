import React from 'react';

const Footer = () => {
    return (
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top position-absolute bottom-0 w-100">
            <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg class="bi" width="30" height="24"></svg>
            </a>
            <span class="mb-3 mb-md-0 text-muted">© 2025. All rights reserved.</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
            <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
            <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
            </ul>
        </footer>
    );
};

export default Footer;