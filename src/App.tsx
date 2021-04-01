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
import { Bar, Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';
function App() {
  // constants
  const nationalAverage = 563
  // state
  const [basePrice, setBasePrice] = useState(0)
  const [taxRate, setTaxRate] = useState(1.99)
  const [totalCost, setTotalCost] = useState(0)
  const [months, setMonths] = useState(60)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [taxPayed, setTaxPayed] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  // callback on user inputs to recalculate outputs
  useEffect(() => {
  }, [])

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

  function setTax(newTaxRate: string) {
    setTaxRate(parseFloat(newTaxRate))
  }






  // chart data
  const averageData = {
    labels: ["You", "Average"],
    datasets: [
      {

        backgroundColor: ["#4e2ffc", "#862FFC"],
        data: [monthlyPayment > 0 ? monthlyPayment : 1, nationalAverage]
      },

    ],

  }
  const TaxesPayedData = {
    labels: ["Base Price", "Taxes"],
    datasets: [
      {

        backgroundColor: ["#2ffc4a", "#862FFC"],
        data: [basePrice > 0 ? basePrice : 1, taxPayed > 0 ? taxPayed : 1]
      },

    ],
    borderWidth: 3
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
              <BasePriceInput
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
            <Doughnut
              data={TaxesPayedData}

              options={{ maintainAspectRatio: true, legend: { position: "right", align: "start" } }}
            />
            <div className="subheader">
              Taxes contributed to {taxPayed > 0 ? ((taxPayed / totalPrice) * 100).toFixed(0) : 0}% of the overall cost.
            </div>
          </OutputBox>
          <OutputBox>
            <h2>Other</h2>
            <Bar
              data={averageData}

              options={{ maintainAspectRatio: true, legend: { display: false } }}
            />

          </OutputBox>
          <OutputBox>
            <h2>Versus USA Average</h2>
            <Bar
              data={averageData}

              options={{
                maintainAspectRatio: true, legend: { display: false }, scales: {
                  xAxes: [{
                    gridLines: {
                      display: false
                    }
                  }],
                  yAxes: [{
                    ticks: {
                      display: false
                    },
                    gridLines: {
                      display: false
                    }
                  }]
                }
              }}
            />
            <div className="subheader">
              Your average payment is {Math.abs((nationalAverage - monthlyPayment) / nationalAverage * 100).toFixed(0)}% {monthlyPayment < nationalAverage ? "lower" : "higher"} than the national average
            </div>
          </OutputBox>

        </OutputsGrid>
      </section>
    </div>
  )
}

const OutputsGrid = styled.div`
  margin: -8rem auto 0 auto;
  display: grid;
  grid-gap: 2rem;
  max-width: 1024px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  /* justify-items: center; */
`

const OutputBox = styled.div`
  background: white;
  border-radius: 18px;
  padding: 2rem;
  /* min-width: 220px; */
  position: relative;
  box-shadow: 0 4px 8px rgba(0,0,0,.1);
  h2{
    margin:  0 0 2rem 0;
    text-align: left;
  }
  .subheader{
    margin-top: 1.3rem;
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
const BasePriceInput = styled.input`
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
  ::before{
    content: 'hi'
  }
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




function GithubLink() {
  return (
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


