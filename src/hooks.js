import { useState, useEffect } from 'react'

const scGap = 0.02 
const delay = 20 
export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)

    return {
        scale,
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prevScale) =>{
                        if (prevScale + scGap > 1) {
                            clearInterval(interval)
                            setAnimated(false)
                            return 0 
                        } 
                        return prevScale + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
    })
    return {
        w, h
    }
}

export const useStyle = (w, h, scale) => {
    const size = Math.min(w, h) / 10
    const width = `${size}px`
    const height = `${size}px`
    const background = 'indigo'
    const fontSize = `${size / 10}px`
    const color = 'white'
    const display = 'flex'
    const alignItems = 'center'
    const justifyContent = 'center'
    const WebkitTransform = `rotate(${360 * scale}deg)` 
    return {
        blockStyle() {
            return {
                color, 
                background, 
                width, 
                height, 
                fontSize, 
                color, 
                WebkitTransform,
                display, 
                alignItems, 
                justifyContent
            }
        }
    }
}
