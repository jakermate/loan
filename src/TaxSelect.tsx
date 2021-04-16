import React from "react"
import styled from "styled-components"
interface Props {
    setTax: (number: string) => void,
    tax: number
}
export default function TaxSelect(props: Props) {

    // function to update position of thumb follower element

    return (
        <TaxSelectStyle>
            <label htmlFor="tax-select">APR</label>
            <div className="slider-wrap">
                <input
                    type="range"
                    name="tax-select"
                    id="tax-select"
                    step={0.1}
                    min={0.99}
                    max={14.99}
                    value={props.tax}
                    onChange={e => props.setTax(e.target.value)}
                />
                <div className="tax-output" style={{
                    background: `linear-gradient(to right, hsl(${140 - props.tax * 10}, 72%, 58%), hsl(${110 - props.tax * 10}, 72%, 58%))`
                }}>{props.tax}%</div>
            </div>

        </TaxSelectStyle>
    )
}
const TaxSelectStyle = styled.div`
  width: 100%;
  
  .slider-wrap{
      display: flex;
      flex-direction: row;
  height: 52px;

  }
  .tax-output{
        color: white;
        text-shadow: 2px 2px 2px rgba(0,0,0,.4);
        padding: 1rem;
        box-shadow: 3px 3px 6px rgba(0,0,0,.3);
        border-radius: 8px;
        font-size: 1rem;
        margin-left: 1rem;
        font-weight: 800;
        min-width: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  input[type="range"] {
    outline: none;
    cursor: pointer;
    :active,
    :focus {
      outline: none;
    }
    background: transparent;
    width: 100%;
    -webkit-appearance: none;

  

    /* TRACK */

    /* webkit */
    ::-webkit-slider-runnable-track {
      width: 100%;
      background-color: rgb(38, 48, 60);

      height: 12px;
      border-radius: 8px;
    }
    ::-webkit-slider-thumb{
        -webkit-appearance: none;
        width: 36px;
        height: 36px;
        transform: translateY(-10px);
        box-shadow: 3px 3px 8px rgba(0,0,0,.4);
        border-radius: 100%;
        background: linear-gradient(to top right, #bbb, #fff);
        border:none;
        position: relative;
    }

    /* mozilla */
    ::-moz-range-track {
      width: 100%;
      background-color: rgb(38, 48, 60);

      height: 12px;
      border-radius: 8px;
    }
    ::-moz-range-progress {
      background: #862ffc;
      height: 100%;
      border-radius: 8px;
      height: 12px;
    }
    ::-moz-range-thumb{
        width: 36px;
        height: 36px;
        box-shadow: 3px 3px 8px rgba(0,0,0,.4);
        border-radius: 100%;
        background: linear-gradient(to top right, #bbb, #fff);
        border:none;
        position: relative;
        
    }



    /* ms */
    ::-ms-fill-lower {
      background: #862ffc;
      height: 100%;
      border-radius: 8px;
      height: 12px;

    }

   
  }
`
