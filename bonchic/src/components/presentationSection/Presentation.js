import React, { useEffect, useRef } from 'react'
import './Presentation.css'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollScene } from 'scrollscene'
import {
    batch,
    ScrollContainer,
    ScrollPage,

    FadeIn,
  
    StickyIn,
    ZoomIn
} from 'react-scroll-motion';

import {makeStyles} from '@material-ui/core/styles';

import Fade from 'react-reveal/Fade';

// import { Controller, Scene } from 'react-scrollmagic'
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";


const useStyle = makeStyles((theme) => ({
    appbar: {
        background: 'transparent',
    },
}));

function Presentation() {



    const classes = useStyle();

    return (
        <>
            <ScrollContainer>
                <ScrollPage page={2}>
                    {/* <Animator> */}
                    <section id="block" className={classes.appbar} elevation={0}>
                        {/* <Tween from={{ x: 200, opacity: 0}} > */}
                        <blockquote className="quote">
                            "On prime la valeur"
                            <span></span>
                        </blockquote>
                        {/* </Tween> */}
                        <Fade bottom cascade>
                            <img id="photo1" src="bonchic.vetements_227943794_341308664375034_5946800677867307502_n.jpg" />
                        </Fade>
                            
                        
                        <Fade bottom cascade>
                            <img id="photo2" src="bonchic.vetements_239718264_551375662674780_2484413626755515127_n.jpg" />
                        </Fade>
                       
                        <Fade bottom cascade>
                            <img id="photo3" src="bonchic.vetements_244514702_3924722014295678_8958097518363223396_n.webp.jpg" />
                        </Fade>
                        <div id="box"></div>
                    </section>
                    {/* </Animator> */}
                </ScrollPage>
            </ScrollContainer>

            <section>

            </section>
        </>

    );
}




export default Presentation


