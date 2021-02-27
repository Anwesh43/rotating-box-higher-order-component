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
