import React from 'react'
import {
    useDimension, 
    useAnimatedScale, 
    useStyle
} from './hooks'

const RotatingBlock = ({children}) => {
    const {scale, start} = useAnimatedScale()
    const {w, h} = useDimension()
    const {blockStyle} = useStyle(w, h, scale)
    return (
        <div style = {blockStyle()} onClick = {start}>
            {children}
        </div>
    )
}

export default RotatingBlock 