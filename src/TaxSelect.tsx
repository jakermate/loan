import React from "react"
import styled from "styled-components"
interface Props {
    setTax: (number: string) => void,
    tax: number
}
export default function TaxSelect(props: Props) {

    // function to update position of thumb follower element
    function updateFollower() {

    }
    return (
        <TaxSelectStyle>
            <label htmlFor="tax-select">APR</label>
            <input
                type="range"
                name="tax-select"
                id="tax-select"
                step={0.1}
                min={0.99}
                max={14.99}
                value={props.tax}
                onChange={e => props.setTax(e.target.value)}
                onInput={e => updateFollower()}
            />
            <div className="slider-follower"></div>
        </TaxSelectStyle>
    )
}
const TaxSelectStyle = styled.div`
  width: 100%;
  input[type="range"] {
    outline: none;
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
        width: 36px;
        height: 36px;
        background: white;
        border:none;
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
    }

    .slider-follow{
        position: absolute;
        bottom: 0;

    }
  }
`
