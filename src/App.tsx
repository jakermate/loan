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
import { Bar, Doughnut, Line } from "react-chartjs-2"
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
  const monthlyChartData = {
    labels: Array.from({ length: months }, (_, i) => `${i}`),
    datasets: [
      {
        // backgroundColor: ["#2ffc4a", "#862FFC"],
        data: Array.from({ length: months }, (_, i) => `${totalPrice - i * monthlyPayment}`),
      },
    ],
    borderWidth: 3

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

  // input field methods
  function blurInput(){
    document.querySelectorAll('.input-field-wrapper').forEach(el=>{
      el.classList.toggle('active', false)
    })
  }
  function focusInput(){
    document.querySelectorAll('.input-field-wrapper').forEach(el=>{
      el.classList.toggle('active', true)
    })
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
            <h2 className="title">Car Loan Calculator</h2>
            <p className="subtitle">Estimate your monthly payment and total interest payed.</p>
          </div>
          <div id="input-section" style={{
            boxSizing: 'border-box',
            width: "100%"
          }}>

            <Form>
              <div style={{
                fontSize: "1.5rem",
                marginBottom: '1rem',
                fontWeight: 700
              }}>
                Customise Loan Formula
                <hr />
              </div>
              {/* Base Price */}
              <InputSection>
                <div className="label-wrapper">
                  <label htmlFor="base-price">Loan Amount ($)</label>
                  {/* <TipIcon tip="This should be the amount of the loan, not the total price of the vehicle purchase."></TipIcon> */}
                </div>
                <InputFieldWrapper className="input-field-wrapper" onClick={e => document.getElementById('base-price')?.focus()}>
                <BasePriceInput
                  type="text"
                  name="base-price"
                  id="base-price"
                  onBlur={e => blurInput()}
                  onFocus={e => focusInput()}

                  onChange={(e) => validateBasePrice(e.target.value)}
                  value={basePrice}
                />
                {basePrice > 0 && (
                  <div className="abs-button-wrap">
                    <button onClick={(e) => setBasePrice(0)}>
                      <img src={close} alt="" width={16} />
                    </button>
                  </div>
                )}
                </InputFieldWrapper>
                
                <Hint hint={"This is the price of the car you are purchasing, minus your down payment amount."}></Hint>

              </InputSection>

              {/* Month Selection */}
              <InputSection>

                <div className="label-wrapper">
                  <label htmlFor="base-price">Months</label>
                  {/* <TipIcon tip="Duration of the loan in months. The average new loan duration in the US is 67 months. Loan periods of 72 or more months are usually only available as incentives on new car purchases."></TipIcon> */}
                </div>
                <MonthSelect setMonths={setMonths} months={months}></MonthSelect>
                <Hint hint={"It's best not to take a loan longer than 36 months for used cars, and 60 months for new cars.  The longer your loan duration, the more you will pay in interest beyond the price of the car."}></Hint>
              </InputSection>

              {/* TaxSelection */}
              <InputSection>
                <TaxSelect tax={taxRate} setTax={setTax}></TaxSelect>
                <Hint hint={"New car purchases typically incentivise their purchase by offering lower interest rates than you can typically get on a used car purchase.  This will be partially based upon your credit score."}></Hint>

              </InputSection>
            </Form>
            <SummaryContainer>
            <h2>
              Purchase Summary
            </h2>
            <SummaryGrid>
              <SummaryBox>
                <h2 className="stat-large"><span className="dollar">$</span>{comma(totalPrice)}</h2>
                <h4>Total Cost</h4>
              </SummaryBox>
              <SummaryBox>
                <h2 className="stat-large"><span className="dollar">$</span>{comma(monthlyPayment)}</h2>
                <h4>Monthly</h4>
              </SummaryBox>
              <SummaryBox>
                <h2 className="stat-large"><span className="dollar">$</span>{comma(taxPayed)}</h2>
                <h4>Taxes and Fees</h4>
              </SummaryBox>
            </SummaryGrid>
          </SummaryContainer>
          </div>
          {/* @ts-ignore */}
          
          <div className="tag" style={{
            marginTop: "1rem"
          }}>
            *All values are estimates and should only be used as but part of
            your car shopping research.
          </div>
        </HeaderContent>

      </header>

      <OutputsWrapper
        id="outputs-wrapper"
        style={{
        }}
      >
        <OutputsGrid
          id="outputs-grid"
          style={{
            transition: `all .2s linear`,
            transform: `${basePrice > 0 ? "translateY(0px)" : "translateY(10px)"
              }`,
            opacity: basePrice > 0 ? 1 : 0,
          }}
        >
          <OutputBox>
            {
              basePrice > 0 ?
                <div className="box-content-wrap">
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
                </div>
                :
                <Placeholder></Placeholder>

            }


          </OutputBox>
          <OutputBox>
            {
              basePrice > 0 ?
                <div className="box-content-wrap">
                  <h2>Remaining Balance Over {months} Months</h2>
                  <Line
                    data={monthlyChartData}
                    options={{
                      maintainAspectRatio: true,
                      legend: { display: false },
                    }}
                  />
                </div>
                :
                <Placeholder></Placeholder>
            }


          </OutputBox>
          <OutputBox>
            {
              basePrice > 0 ?
                <div className="box-content-wrap">
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
                              // display: false,
                              beginAtZero: true
                            },
                            gridLines: {
                              // display: false,
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
                </div>
                :
                <Placeholder></Placeholder>
            }


          </OutputBox>
        </OutputsGrid>
      </OutputsWrapper>
      <InfoSection>
        <div>

          <h2>How to use the loan calculator.</h2>
          <p>While this aims to help you in your car shopping, please note that there a many hidden costs and fees that may or may not apply to your purchase.</p>
          <p>Some examples:</p>
          <ul>
            <li><strong>Delivery Fee</strong> (usually around $800 USD)</li>
            <li><strong>Title, License, or Registration Fees</strong></li>
            <li><strong>Local Taxes</strong></li>
          </ul>
          <p>As a result, it's impossible for this calulator to account for everything you may be charged while purchasing a vehicle.</p>
        </div>
        <div>
          <h2>Typical Interest Rates</h2>
          <p>If you know your credit score, you can use the table below to estimate the interest rate you'll be offered by your lender.</p>
          <Table>
            <thead>
              <tr>
                <th>Credit Score</th>
                <th>APR (New Purchase)</th>
                <th>APR (Used Purchase)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="credit-score">
                  <div className="bracket-name">Super Prime</div>
                  <div className="bracket-range">720-880</div>
                </td>
                <td>3.65%</td>
                <td>4.29%</td>
              </tr>
              <tr>
                <td className="credit-score">
                  <div className="bracket-name">Prime</div>
                  <div className="bracket-range">660-719</div>
                </td>
                <td>4.68%</td>
                <td>6.04%</td>
              </tr>
              <tr>
                <td className="credit-score">
                  <div className="bracket-name">Nonprime</div>
                  <div className="bracket-range">620-659</div>
                </td>
                <td>7.65%</td>
                <td>11.26%</td>
              </tr>
              <tr>
                <td className="credit-score">
                  <div className="bracket-name">Subprime</div>
                  <div className="bracket-range">580-619</div>
                </td>
                <td>11.92%</td>
                <td>17.74%</td>
              </tr>
              <tr>
                <td className="credit-score">
                  <div className="bracket-name">Deep Subprime</div>
                  <div className="bracket-range">0-579</div>
                </td>
                <td>14.39%</td>
                <td>20.45%</td>
              </tr>
              <tr>
                <td className="footer" colSpan={3}><em>Sourced from Experian.com</em>
                  <div style={{
                    fontSize: 12,
                    color: "#b3bcd0",
                    marginTop: 6
                  }}>All values provided are averages, and do not take into account promotional offers available at dealers.</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <h2>About Auto Loans</h2>
          <p>This is where you learn about auto loans.</p>
          <p>You'll learn more here.</p>
        </div>
        <div>
          <h2>New vs. Used</h2>
          <p>This is where you learn about auto loans.</p>
          <p>You'll learn more here.</p>
        </div>
      </InfoSection>
      <FooterView>
        <div>
          Built in <a href="https://github.com/facebook/react">ReactJS</a> by <a href="https://github.com/jakermate">Jake Miller</a>
        </div>
        <div className="copy">&copy; 2021</div>
      </FooterView>
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
 
  .title{
    margin-bottom: 0rem !important;
  }
  .subtitle{
    font-size: 1rem;
    margin: 1rem 0 2rem 0 ;
  }
  .tag {
    margin-bottom: 8rem;
    font-size: 0.6rem;
    color: #b3bcd0;
  }
  hr{
    opacity: .3
  }
  #input-section{
    display: flex;
    flex-direction: column;
    max-width: 420px;
    justify-content: start;
    align-items: flex-start;
    @media(min-width: 768px){
      flex-direction: row;
      max-width: 768px;
    }
  }
`
const OutputsWrapper = styled.section`
  padding: 1rem;
  @media(min-width: 420px){
    padding: 2rem;
  }
  /* @media(min-width: 720px){
    padding: 4rem;
  } */
`
const OutputsGrid = styled.div`
  margin: -8rem auto 0 auto;
  display: grid;
  grid-gap: 2rem;
  max-width: 1280px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  /* justify-items: center; */
`

const OutputBox = styled.div`
  background: white;
  border-radius: 2rem;
  padding: 2rem;
  /* min-width: 220px; */
  position: relative;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  h2 {
    margin: 0 0 2rem 0;
    text-align: left;
    font-weight: bold;
  }
  .subheader {
    margin-top: 1.6rem;
    font-weight: 500;
    color: #454850;
  }
  .box-content-wrap{
    width: 100%;
    height: 100%;
  }
`
const SummaryContainer = styled.div`
 box-shadow: 0 4px 16px -4px rgba(0,0,0,.3);
  background: rgba(100,100,100,.1);
  padding: 1rem;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 2rem;

  margin-bottom: 2rem;
  h2{
  margin: 0;
  font-size: 1.7rem;
  font-weight: 800;
  margin-bottom: 1rem;

}
@media(min-width: 768px){
  margin-top: 0;
  margin-left: 1rem;
  max-width: 280px;
  text-align: left;
  h2{
    font-size: 1.2rem;
  }
}
`
const SummaryGrid = styled.div`
display: flex;
    flex-direction: column;
    text-align: left;
  @media(min-width: 768px){
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  grid-gap: 0.6rem;
 
`
const SummaryBox = styled.div`
  min-height: 10px;
  background: #384052;
  border-radius: 8px;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0.5rem;
  .dollar{
    color: #acb6ce;
    font-size: 1rem;
    /* display: inline-block; */
  }
  @media(min-width: 768px){
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items:flex-start;
  }
  h2.stat-large {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 700;
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
  width: 100%;
  box-shadow: 0 4px 16px -4px rgba(0,0,0,.3);
  background: rgba(100,100,100,.1);
  padding: 1.5rem 1rem;
  box-sizing: border-box;
  border-radius: 16px;
  @media (min-width: 640px) {
    min-width: 400px;
  padding: 1.5rem 1rem;

  }
  label {
    font-weight: 600;
    font-size: 1rem;
    color: #b7c6ee;
  }
  .label-wrapper {
    margin: 0 0 .7rem 0;
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
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      padding: .8rem;
      background: none;
      border: none;
      transition: all .1s linear;
      :hover{
        transform: scale(1.2);
      }
      outline: none;
      cursor: pointer;
    }
  }
`
const BasePriceInput = styled.input`
  width: 100%;
  height: 100%;
  background: none;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  flex:1;
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
const InputFieldWrapper = styled.div`
  padding: 1rem .4rem 1rem 1rem;
  width: 100%;
  cursor: text;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: rgb(49, 64, 82);
  color: white;
  height: 52px;
  border-radius: 8px;
  &.active{
    background-color: rgb(68, 84, 104);
    box-shadow: 0 0 6px rgba(96, 153, 223, 0.445);
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

const InfoSection = styled.section`
  max-width: 840px;
  text-align: left;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media(min-width: 1024px){
    padding: 0;
  }
  h2{
    margin: 2rem 0;
    font-weight: 900;
    font-size: 2rem;
  }
  p{

  }
`

const FooterView = styled.footer`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to bottom, #212a3d, #1a2335);
  color: white;

  .copy{
    font-size: 10px;
    margin-top: .4rem;
  }
  a{
    text-decoration: none;
    font-weight: bold;
    :visited{
      color: white;
    }
  }
`

function Placeholder() {
  return (
    <div>

    </div>
  )
}

function Hint(props: any) {
  return (
    <HintPara>
      {props.hint}
    </HintPara>
  )
}
const HintPara = styled.p`
  /* margin-top: 8px; */
  font-size: 12px;
  color: #a1b8f3;
`
const InputSection = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`
const Table = styled.table`
  background: linear-gradient(to bottom, #212a3d, #1a2335);
color: white;
/* border-radius: 16px; */
border-collapse: collapse;
width: 100%;
box-shadow: 0 4px 6px #23242733;
  td, th{
    padding: 1rem;
    border: 1px solid #555b69;
  }
  .bracket-name{
    font-weight: 700;
    margin-bottom: 6px;
  }
  .footer{
  }
  th{
    background-color: #862FFC;
  }
  tr:nth-child(even){
    background-color: #28334b;
  }
  tbody{
    border-radius: 2rem;
  }
 
`