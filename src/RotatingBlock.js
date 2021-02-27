import React from 'react'
import {
    useDimension, 
    useAnimatedScale, 
    useStyle
} from './hooks'

const RotatingBlock = ({children}) => {
    const {scale, start} = useAnimatedScale()
    const {w, h} = useDimension()
    const {blockStyle} = useStyle(w, h, sccale)
    return (
        <div style = {blockStyle()}>
            {children}
        </div>
    )
}

export default RotatingBlock 