import React from "react";
import { useRef, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Timer from "../components/Timer";

export default function QuestionScreen(props) {
  const [state, setState] = React.useState({
    answer: "",
    time: 0,
    currentCounter: 1,
  });

  const updateAnswerValue = (event) => {
    const value = event.target.value;
    setState({
      answer: value != "" ? parseInt(value) : value,
    });
  };

  const updateCurrentCounter = () => {
    setState((prevState) => ({
      currentCounter: prevState.currentCounter + 1,
    }));
  };

  var item1 =
    props.operandValue[Math.floor(Math.random() * props.operandValue.length)];

  var valuesForItem2 = props.operandValue.reverse();

  var item2 = valuesForItem2[Math.floor(Math.random() * valuesForItem2.length)];

  var operators = [];
  if (props.add === true) {
    operators.push("+");
  }
  if (props.subtract === true) {
    operators.push("-");
  }
  if (props.multiply === true) {
    operators.push("*");
  }
  if (props.divide === true) {
    operators.push("/");
  }

  var operatorValue = operators[Math.floor(Math.random() * operators.length)];
  var x = setInterval(function () {
    var now = new Date().getTime();

    var seconds = Math.floor((now % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = seconds;

    // If the count down is over, write some text
    if (seconds < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  console.log("currentCounter", state.currentCounter);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid white",
        padding: "10px",
        borderRadius: "25px",
      }}
    >
      <Timer />

      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <text> Question {state.currentCounter}:</text>
        </div>
        <div
          style={{
            marginLeft: "10px",
          }}
        >
          <text>
            {item1} {operatorValue} {item2} = ?
          </text>
        </div>
        <div
          style={{
            marginLeft: "10px",
          }}
        >
          <input
            type="text"
            autocomplete="off"
            placeholder="10"
            value={state.answer}
            style={{
              width: "2vw",
              color: "rgb(105, 105, 105)",
              fontWeight: "500",
              textAlign: "start",
              padding: "5px 10px",
              borderRadius: "5px",
              boxShadow: "#2e2626 0px 0px 2px 0px",
              border: "none",
              background: "none",
            }}
            onChange={updateAnswerValue}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: "10px",
        }}
      >
        <Button
          type="submit"
          style={{
            borderRadius: "50px",
            color: "white",
            textTransform: "capitalize",
            background:
              state.answer !== 0 && state.answer != ""
                ? //  &&
                  // props.no_of_questions.length > state.currentCounter
                  "gray"
                : "#dcdcdc",
            pointerEvents:
              state.answer !== 0 && state.answer != ""
                ? //  &&
                  // props.no_of_questions.length > state.currentCounter
                  "auto"
                : "none",
          }}
          onClick={() => updateCurrentCounter()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
