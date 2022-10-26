import React from 'react';
import { TbBrandFacebook, TbBrandInstagram, TbBrandTwitter, TbBrandLinkedin } from "react-icons/tb";
import './footer.css';

export const Footer = () => {
    return (
        <div className="size">
            <footer class="text-center text-white mask-custom2 shadow-0">
                <div class="container p-4 pb-0">
                    <section class="mb-4">
                    <a
                        class="btn btn-dark btn-floating m-1"
                        href="https://www.facebook.com/"
                        role="button"
                        target="_blank">
                        <TbBrandFacebook size={'1.5em'} color="white"/>
                    </a>
                    <a
                        class="btn btn-dark btn-floating m-1"
                        href="https://twitter.com/"
                        role="button"
                        target="_blank">
                        <TbBrandInstagram size={'1.5em'} color="white"/>
                    </a>
                    <a
                        class="btn btn-dark btn-floating m-1"
                        href="https://www.instagram.com/"
                        role="button"
                        target="_blank">
                        <TbBrandTwitter size={'1.5em'} color="white"/>
                    </a>
                    <a
                        class="btn btn-dark btn-floating m-1"
                        href="https://linkedin.com/"
                        role="button"
                        target="_blank">
                        <TbBrandLinkedin size={'1.5em'} color="white"/>
                    </a>
                    </section>
                </div>
                <div class="text-center p-3 text-black">
                    © 2020 Copyright: <b>ticketail.com</b>
                </div>
            </footer>
        </div>
    )
}
