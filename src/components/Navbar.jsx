import React from 'react';

function Navbar(props) {
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className={"pt-2"}>
                    <img alt={"company=logo"} src={"../img/logo.svg"}/>
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href={"#"} className="hover:text-darkGrayishBlue">Product</a>
                    <a href={"#"} className={"hover:text-darkGrayishBlue"}>Pricing</a>
                    <a href={"#"} className={"hover:text-darkGrayishBlue"}>Resources</a>
                    <a href={"#"} className={"hover:text-darkGrayishBlue"}>Careers</a>
                    <a href={"#"} className={"hover:text-darkGrayishBlue"}>Contact Us</a>
                </div>
                <a href={"#"} className={"hidden md:block p-2 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"}>
                    Get Started
                </a>

            </div>

        </nav>
    );
}

export default Navbar;