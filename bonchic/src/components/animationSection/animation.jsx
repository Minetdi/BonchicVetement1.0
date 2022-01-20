import React from 'react'
import { 
    Animator,
    batch,
    ScrollContainer,
    ScrollPage,
    Sticky ,
    Fade,
    FadeIn,
    MoveOut,
    StickyIn,
    ZoomIn
} from 'react-scroll-motion'

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())

function animation() {
    return (
        // <section>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -300))}>
                        <h2>Bienvenu</h2>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Animator animation={ZoomInScrollOut}>
                        <h2>Le monde de la Mode</h2>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        // </section>
    )
}

export default animation
