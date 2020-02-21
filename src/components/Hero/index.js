import React, { useCallback } from 'react'
import './style.css'
import { useSpring, animated as a, interpolate } from 'react-spring'

function Hero() {
    const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
    const icon = xy.interpolate((x, y) => `perspective(400px) rotateY(${x / 50}deg) rotateX(${-y / 50}deg)`)
    const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
    const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [])

    return (
        <section id="home" className="hero is-large" onMouseMove={onMove} onScroll={onScroll}>
            <div id="header" className="hero-body has-text-centered">
                <div className="columns is-centered">
                    <div className="">
                        <figure id="header-icon"className="image is-128x128">
                            <a.img alt="icon" style={{ transform: icon }} transform={icon} className="is-rounded" src={require('../../assets/profile2.jpg')}/>
                        </figure>
                    </div>
                    <div id="header-words" className="">
                        <p className="title">
                            Full-stack Developer
                        </p>
                        <p className="subtitle">
                            I design and build beautiful web applications, and I love what I do.
                        </p>
                    </div>
                    
                   
                </div>
                </div>

        </section>
            )
        }
        
export default Hero;