import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    useEffect(() => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector("#" + burger.dataset.target);

        burger.addEventListener("click", function () {
            burger.classList.toggle("is-active");
            nav.classList.toggle("is-active");
        });
    });

    return (
        <nav
            className="navbar is-transparent"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <Link
                    className="navbar-item"
                    to={{
                        pathname: "/"
                    }}
                >Commons Stack</Link>
                <a
                    role="button"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navMenu"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div id="navMenu" className="navbar-menu">
                <div className="navbar-end">
                    <Link
                        className="navbar-item text"
                        to={{
                            pathname: "/hatch"
                        }}
                    >Hatch Curve</Link>
                    <Link
                        className="navbar-item text"
                        to={{
                            pathname: "/wallet"
                        }}
                    >Wallet</Link>
                    <Link
                        className="navbar-item text"
                        to={{
                            pathname: "/bonding"
                        }}
                    >Voting tokens</Link>
                    <Link
                        className="navbar-item text"
                        to={{
                            pathname: "/"
                        }}
                    >Voting</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
