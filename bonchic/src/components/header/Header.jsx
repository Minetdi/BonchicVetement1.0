import React, { useRef, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingBasketRounded";
import gsap, { Power3 } from "gsap";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';



function Header() {
    let logoItem = useRef(null);
    let TextItem = useRef(null);
    const useStyle = makeStyles((theme) => ({
        appbar: {
            // color: 'transparent',
            backgroundColor: 'rgba(216, 234, 236, 0.9)',
            boxShadow: '0 15px 30px 15px rgba(216, 234, 236) ',
        },
    }));

    const classes = useStyle();
    return (
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className="header" >
                    <img
                        src="./Bonchic-logo.png" alt=""
                        className="header_logo"
                        ref={(el) => {
                            logoItem = el;
                        }}
                    ></img>

                    <div className="header_search">
                        <input className="header_searchInput" type="text" />

                        <SearchIcon className="header_searchIcon" />
                    </div>
                    <div className="header_nav">
                        <div className="header_option">
                            <span className="welcome_msg"> Sign In</span>
                        </div>
                        <hr />
                        <div className="header_option">
                            <ShoppingCart />
                        </div>
                        
                    </div>
                </Toolbar>
            </AppBar>
    );
}

export default Header;
