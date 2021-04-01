import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import styled from "styled-components"
import * as Formula from "./formula/formula"
import tax from './tax.svg'
import comma from 'comma-number'
import github from './github-link.svg'
import MonthSelect from './MonthSelect'
import TaxSelect from "./TaxSelect"
function App() {
  // state
  const [basePrice, setBasePrice] = useState(0)
  const [taxRate, setTaxRate] = useState(1.99)
  const [totalCost, setTotalCost] = useState(0)
  const [months, setMonths] = useState(60)
  // callback on user inputs to recalculate outputs
  useEffect(() => {
    console.log(basePrice)
  }, [basePrice, taxRate, totalCost])

  // input validation

  // base price
  function validateBasePrice(newValue: string) {
    // save cursor position
    // remove leading zeros, commas, and parse into float number
    newValue = newValue.replaceAll(",", "").replace(/^0+/g, "")
    console.log(newValue)
    // if input is emptied, replace with 0
    if (newValue.length === 0) {
      setBasePrice(0)
      return
    }
    let asNumber = parseFloat(newValue)
    if (isNaN(asNumber)) return
    setBasePrice(asNumber)
  }

  // months
  function validateMonths(monthString: string) {
    if (monthString.length === 0 || monthString === "0") {
      setMonths(0)
      return
    }
    let asNumber = parseFloat(monthString)
    if (isNaN(asNumber)) return
    setMonths(asNumber)
  }

  function monthBlur(e: React.FormEvent<EventTarget>) {
    let target = e.target as HTMLInputElement
    if (target.value === "0") setMonths(1)
  }

  function setTax(newTaxRate: string){
    setTaxRate(parseFloat(newTaxRate))
  }
  return (
    <div className="App">
      <header className="App-header">
        <GithubLink></GithubLink>
        <section id="header-content">
          <div id="header-intro" style={{
            marginTop: '4rem'
          }}>
            <img src={tax} alt="" style={{
              width: "80px"
            }} />
            <h2>Car Loan Calculator</h2>
          </div>
          <div id="input-section">
            <Form>
              <label htmlFor="base-price">Base Price ($)</label>
              <NumberInput
                type="text"
                name="base-price"
                id="base-price"
                onChange={(e) => validateBasePrice(e.target.value)}
                value={comma(basePrice.toString())}
              />
              <label htmlFor="base-price">Months</label>

              {/* <NumberInput
                type="text"
                name="months"
                id="months"
                onChange={(e) => validateMonths(e.target.value)}
                value={months.toString()}
                onBlur={(e) => monthBlur(e)}
              /> */}
              <MonthSelect setMonths={setMonths} months={months}></MonthSelect>
              <TaxSelect tax={taxRate} setTax={setTax}></TaxSelect>
            </Form>
          </div>
        </section>
        
      </header>
      <section id="outputs-wrapper" style={{
        padding: "4rem"
      }}>
        <OutputsGrid id="outputs-grid">
              <OutputBox>
                <h2>Taxes Payed</h2>
              </OutputBox>
              <OutputBox>
              <h2>Other</h2>

              </OutputBox>
              <OutputBox>
              <h2>Versus USA Average</h2>

              </OutputBox>

        </OutputsGrid>
      </section>
    </div>
  )
}

const OutputsGrid = styled.div`
  margin: -8rem auto 0 auto;
  display: flex;
  grid-gap: 2rem;
  max-width: 1024px;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  flex-wrap: wrap;

  /* justify-items: center; */
`

const OutputBox = styled.div`
  background: white;
  min-height: 200px;
  border-radius: 8px;
  align-self: center;
  flex: 1 1 0;
  padding: 2rem;
  /* min-width: 220px; */
  position: relative;
  box-shadow: 0 4px 8px rgba(0,0,0,.3);
  max-width: 380px;
  min-width: 220px;
  h2{
    margin: 0;
  }
`


export default App

// style
const Form = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: start;
  text-align: left;
  margin-bottom: 10rem;
  width: 100%;
  label{
    font-weight: 500;
    font-size: 1rem;
    color: #a1b8f3;
    margin: 0 1rem 1rem 0;
  }
`
const NumberInput = styled.input`
  width: 100%;
  padding: 1rem; 
  box-sizing: border-box;
  margin-bottom: 1rem;
  background-color: rgb(38, 48, 60);
  color: white;
  border-radius: 2rem;
  font-size: 1.3rem;
  font-weight: 500;
  outline: none;
  border: none;
  ::active, :focus{
    outline:none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`




function GithubLink(){
  return(
    <GithubLinkStyle>
      <a href="github.com/jakermate/loan" target="_blank" rel="noreferrer">
        <img src={github} alt="github-icon" width={80} />
      </a>
    </GithubLinkStyle>
  )
}
const GithubLinkStyle = styled.div`
  position: absolute;
  top:0;
  transition: all .12s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  right:0;
  background-color: none;
  :hover{
    transform: translate(-6px, 6px) scale(1.2);
  }
`


