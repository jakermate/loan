import React from 'react'
// import {} from 'styled-components/cssprop'
import styled from 'styled-components'
interface MonthProps{
    setMonths: (number: number) => void,
    months: number
}
export default function MonthSelect(props: MonthProps) {
  
    return (
        <MonthSelectStyle>

            <ul>
                <li>
                    <button onClick={e => props.setMonths(12)}>
                        12
                    </button>
                </li>
                <li>
                    <button onClick={e => props.setMonths(24)}>
                        24
                    </button>
                </li>
                <li>
                    <button onClick={e => props.setMonths(36)}>
                        36
                    </button>
                </li>
                <li>
                    <button onClick={e => props.setMonths(48)}>
                        48
                    </button>
                </li>
                <li>
                    <button onClick={e => props.setMonths(60)}>
                        60
                    </button>
                </li>
                <li>
                    <button onClick={e => props.setMonths(72)}>
                        72
                    </button>
                </li>
                <li>
                    <button onClick={e => props.setMonths(84)}>
                        84
                    </button>
                </li>
            </ul>
            <div id="month-indicator-container"></div>
        </MonthSelectStyle>
    )
}
const MonthSelectStyle = styled.div`
position: relative;
    background: linear-gradient(to right, #4e2ffc, #862FFC);
    height: 4rem;
    border-radius: 2rem;
    width: 100%;
    box-shadow: 0 4px 16px rgba(0,0,0,.3);
    overflow: hidden;
    margin-bottom: 1rem;
    ul{
        display: flex;
        flex-direction: row;
        margin: 0;
        list-style: none;
        height: 100%;
        align-items: center;
        justify-content: space-around;
        padding: 0 8px;
        li{
            display: block;
            font-weight: 700;
            font-size: 1rem;
            height: 100%;
            flex-basis: 1;
            flex-grow: 1;
            button{
                height: 100%;
                width: 100%;
                display: flex;
                border: none;
                background: none;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: 700;
                font-size: 1rem;
                cursor: pointer;
            }
        }

        #month-indicator-container{
            width: 100%;
            position: absolute
            height: 100%;
        }
    }
`