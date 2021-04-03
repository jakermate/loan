import React from "react"
import question from "./question.svg"
import ReactTooltip from "react-tooltip"
interface Props {
  tip: string
}
export default function TipIcon(props: Props) {
  return (
    <div
      style={{
        height: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      data-tip={props.tip}
    >
      <ReactTooltip ></ReactTooltip>
      <img src={question} alt="tooltip-icon" width={20} style={{}} />
    </div>
  )
}
