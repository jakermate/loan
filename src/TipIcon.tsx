import React from 'react'
import question from './question.svg'
interface Props {
    tip: string
}
export default function TipIcon(props: Props) {
    return (
        <div style={{
            height: "20px",
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
        }}>

                <img src={question} alt="tooltip-icon" width={20} style={{
                }} />
        </div>
    )
}
