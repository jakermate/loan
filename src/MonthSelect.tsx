import React, { useEffect } from 'react'
// import {} from 'styled-components/cssprop'
import styled from 'styled-components'
interface MonthProps {
    setMonths: (number: number) => void,
    months: number
}
export default function MonthSelect(props: MonthProps) {
    useEffect(() => {
        let containerEl = document.getElementById('month-select')
        let buttonEl = document.getElementById(`months-${props.months}`)
        console.log(buttonEl?.offsetLeft)
        // @ts-ignore
        let indEl = document.getElementById('indicator')

        // determine order of animations
        // @ts-ignore
        if (parseFloat(indEl?.style.left) > buttonEl?.offsetLeft){
            // @ts-ignore
            indEl.style.left = `${buttonEl?.offsetLeft}px`
            setTimeout(() => {
                // @ts-ignore
                indEl.style.right = `${containerEl.clientWidth - buttonEl?.offsetLeft - buttonEl?.offsetWidth}px`
            }, 200)
            return
        }


        // @ts-ignore
        indEl.style.right = `${containerEl.clientWidth - buttonEl?.offsetLeft - buttonEl?.offsetWidth}px`
        setTimeout(()=>{

        // @ts-ignore
        indEl.style.left = `${buttonEl?.offsetLeft}px`
        }, 100)


    }, [props.months])
    return (
        <MonthSelectStyle id="month-select">

            <ul>
                <li id="months-12">
                    <button onClick={e => props.setMonths(12)}>
                        12
                    </button>
                </li>
                <li id="months-24">
                    <button onClick={e => props.setMonths(24)}>
                        24
                    </button>
                </li>
                <li id="months-36">
                    <button onClick={e => props.setMonths(36)}>
                        36
                    </button>
                </li>
                <li id="months-48">
                    <button onClick={e => props.setMonths(48)}>
                        48
                    </button>
                </li>
                <li id="months-60">
                    <button onClick={e => props.setMonths(60)}>
                        60
                    </button>
                </li>
                <li id="months-72">
                    <button onClick={e => props.setMonths(72)}>
                        72
                    </button>
                </li>
                <li id="months-84">
                    <button onClick={e => props.setMonths(84)}>
                        84
                    </button>
                </li>
            </ul>
            <div id="month-indicator-container">
                <div id="indicator" className="indicator"></div>
            </div>
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
        padding: 0 12px;
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

        
    }
    #month-indicator-container{
            position: absolute;
            pointer-events: none;
            top:0;
            left:0;
            bottom:0;
            right:0;
            padding: 4px;
            .indicator{
                background: white;
                
                position: absolute;
                
                border-radius: 2rem;
                top:8px;
                bottom: 8px;
                transition: left .4s ease-in-out, right .4s  ease-in-out;
            }
        }
`