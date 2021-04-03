import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import styled from "styled-components"
import * as Formula from "./formula/formula"
import tax from "./tax.svg"
import comma from "comma-number"
import github from "./github-link.svg"
import MonthSelect from "./MonthSelect"
import TaxSelect from "./TaxSelect"
import { Bar, Doughnut } from "react-chartjs-2"
import TipIcon from "./TipIcon"
import close from "./close.svg"
function App() {
  // constants
  const nationalAverage = 563
  // state
  const [basePrice, setBasePrice] = useState(0)
  const [taxRate, setTaxRate] = useState(1.99)
  const [months, setMonths] = useState(60)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [taxPayed, setTaxPayed] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  // input validation

  // base price
  function validateBasePrice(newValue: string) {
    // save cursor position
    // remove leading zeros, commas, and parse into float number
    newValue = newValue.replaceAll(",", "").replace(/^0+/g, "")
    // return if number too high
    // if input is emptied, replace with 0
    if (newValue.length === 0) {
      setBasePrice(0)
      return
    }
    let asNumber = parseFloat(newValue)
    if (asNumber > 999999999999) return
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

  // calculations
  function getTotal() {
    // formula for accrued total (principle + interest) A = P(1 + rt)
    return Math.round(basePrice * (1 + (taxRate / 100) * (months / 12)))
  }
  function getTaxPayed() {
    // I = A - P
    return Math.round(getTotal() - basePrice)
  }
  function getMonthly() {
    // pymnt(month) = A / months
    return Math.round(getTotal() / months)
  }
  // callback on user inputs to recalculate outputs
  useEffect(() => {
    setTotalPrice(getTotal())
    setTaxPayed(getTaxPayed())
    setMonthlyPayment(getMonthly())
  }, [basePrice, months, taxRate])

  // chart data
  const averageData = {
    labels: ["You", "Average"],
    datasets: [
      {
        backgroundColor: ["#4e2ffc", "#862FFC"],
        data: [monthlyPayment > 0 ? monthlyPayment : 1, nationalAverage],
      },
    ],
  }
  const TaxesPayedData = {
    labels: ["Base Price", "Taxes"],
    datasets: [
      {
        backgroundColor: ["#2ffc4a", "#862FFC"],
        data: [basePrice > 0 ? basePrice : 1, taxPayed > 0 ? taxPayed : 1],
      },
    ],
    borderWidth: 3,
  }

  return (
    <div className="App">
      <header className="App-header">
        <GithubLink></GithubLink>
        <HeaderContent id="header-content" style={{}}>
          <div
            id="header-intro"
            style={{
              marginTop: "4rem",
            }}
          >
            <img
              src={tax}
              alt=""
              style={{
                width: "80px",
              }}
            />
            <h2>Car Loan Calculator</h2>
          </div>
          <div id="input-section">
            <Form>
              <div className="label-wrapper">
                <label htmlFor="base-price">Loan Amount ($)</label>
                <TipIcon tip="This should be the amount of the loan, not the total price of the vehicle purchase."></TipIcon>
              </div>
              <div className="input-wrap" style={{}}>
                <BasePriceInput
                  type="text"
                  name="base-price"
                  id="base-price"
                  onChange={(e) => validateBasePrice(e.target.value)}
                  value={comma(basePrice.toString())}
                />
                {basePrice > 0 && (
                  <div className="abs-button-wrap">
                    <button onClick={(e) => setBasePrice(0)}>
                      <img src={close} alt="" width={16} />
                    </button>
                  </div>
                )}
              </div>

              <div className="label-wrapper">
                <label htmlFor="base-price">Months</label>
                <TipIcon tip="Duration of the loan in months. The average new loan duration in the US is 67 months."></TipIcon>
              </div>
              <MonthSelect setMonths={setMonths} months={months}></MonthSelect>
              <TaxSelect tax={taxRate} setTax={setTax}></TaxSelect>
            </Form>
          </div>
          {/* @ts-ignore */}
          <SummaryGrid>
            <SummaryBox>
              <h2 className="stat-large">{comma(totalPrice)}</h2>
              <h4>Total Cost</h4>
            </SummaryBox>
            <SummaryBox>
              <h2 className="stat-large">{comma(monthlyPayment)}</h2>
              <h4>Monthly</h4>
            </SummaryBox>
            <SummaryBox>
              <h2 className="stat-large">{comma(taxPayed)}</h2>
              <h4>Taxes and Fees</h4>
            </SummaryBox>
          </SummaryGrid>
          <div className="tag" style={{}}>
            *All values are estimates and should only be used as but part of
            your car shopping research.
          </div>
        </HeaderContent>
      </header>
      <section
        id="outputs-wrapper"
        style={{
          padding: "4rem",
        }}
      >
        <OutputsGrid
          id="outputs-grid"
          style={{
            transition: `all .2s linear`,
            transform: `${
              basePrice > 0 ? "translateY(0px)" : "translateY(10px)"
            }`,
            opacity: basePrice > 0 ? 1 : 0,
          }}
        >
          <OutputBox>
            <h2>Taxes and Fees Payed</h2>
            <Doughnut
              data={TaxesPayedData}
              options={{
                maintainAspectRatio: true,
                legend: { position: "right", align: "start" },
              }}
            />
            <div className="subheader">
              Taxes and Fees contributed to{" "}
              {taxPayed > 0 ? ((taxPayed / totalPrice) * 100).toFixed(0) : 0}%
              of the overall cost.
            </div>
          </OutputBox>
          <OutputBox>
            <h2>Other</h2>
            <Bar
              data={averageData}
              options={{
                maintainAspectRatio: true,
                legend: { display: false },
              }}
            />
          </OutputBox>
          <OutputBox>
            <h2>Versus USA Average</h2>
            <Bar
              data={averageData}
              options={{
                maintainAspectRatio: true,
                legend: { display: false },
                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      ticks: {
                        display: false,
                      },
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                },
              }}
            />
            <div className="subheader">
              Your average payment is{" "}
              {Math.abs(
                ((nationalAverage - monthlyPayment) / nationalAverage) * 100
              ).toFixed(0)}
              % {monthlyPayment < nationalAverage ? "lower" : "higher"} than the
              national average
            </div>
          </OutputBox>
        </OutputsGrid>
      </section>
    </div>
  )
}
const HeaderContent = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .tag {
    margin-bottom: 8rem;
    font-size: 0.6rem;
    color: #b3bcd0;
  }
`
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  h2 {
    margin: 0 0 2rem 0;
    text-align: left;
  }
  .subheader {
    margin-top: 1.3rem;
  }
`
const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 150px));
  margin-top: 4rem;
  grid-gap: 0.6rem;
  margin-bottom: 2rem;
  justify-content: center;
`
const SummaryBox = styled.div`
  min-height: 10px;
  background: #384052;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0.5rem;
  h2.stat-large {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 400;
  }
  h4 {
    font-size: 0.7rem;
    color: #8997bb;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0.6rem 0 0 0;
  }
  @media (max-width: 520px) {
    h2.stat-large {
      font-size: 1rem;
    }
    h4 {
      font-size: 0.5rem;
    }
  }
  @media (min-width: 520px) {
    padding: 1rem;
  }
`

export default App

// style
const Form = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: start;
  text-align: left;
  min-width: 320px;
  max-width: 420px;
  @media (min-width: 640px) {
    min-width: 400px;
  }
  label {
    font-weight: 500;
    font-size: 1rem;
    color: #a1b8f3;
  }
  .label-wrapper {
    margin: 0 0 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
      opacity: 0.5;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
  .input-wrap {
    position: relative;
    margin-bottom: 1rem;
  }
  .abs-button-wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;

    justify-content: center;
    align-items: center;
    button {
      padding: .4rem;
      margin-right: 1rem;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`
const BasePriceInput = styled.input`
  width: 100%;
  padding: 1rem 1.4rem;
  box-sizing: border-box;
  background-color: rgb(49, 64, 82);
  color: white;
  border-radius: 2rem;
  font-size: 1.3rem;
  font-weight: 500;
  outline: none;
  border: none;
  /* color: #b7adec; */
  ::before {
    content: "hi";
  }
  ::active,
  :focus {
    outline: none;
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
      <a href="https://github.com/jakermate/loan" target="_blank" rel="noreferrer">
        <img src={github} alt="github-icon" width={80} />
      </a>
    </GithubLinkStyle>
  )
}
const GithubLinkStyle = styled.div`
  position: absolute;
  top: 0;
  transition: all 0.12s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  right: 0;
  background-color: none;
  :hover {
    transform: translate(-6px, 6px) scale(1.2);
  }
`
