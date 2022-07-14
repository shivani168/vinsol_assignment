import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function QuizScreen1(props) {
  const [state, setState] = React.useState({
    no_of_questions: "",
    operands: "",
    add: false,
    subtract: false,
    multiply: false,
    divide: false,
  });

  const updateNumberOfQuestions = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      no_of_questions: value,
    });
  };

  const updateOperandValue = (event) => {
    const value = event.target.value;
    var finalValue = value.split(/[ ,]+/).join(",");
    setState({
      ...state,
      operands: finalValue,
    });
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.checked,
    });
  };

  const startQuiz = (val) => {
    var operands = state.operands;
    var operandArray = operands.split(",");
    var convertToInt = operandArray.map((values) => {
      return parseInt(values);
    });
    props.startQuiz(
      val,
      parseInt(state.no_of_questions),
      state.add,
      state.subtract,
      state.multiply,
      state.divide,
      convertToInt
    );
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid white",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <text
        style={{
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        {props.id === 1 ? "Quiz 1" : "Quiz 2"}
      </text>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <div>
          <text
            style={{
              fontSize: "14px",
            }}
          >
            1. Number of questions you want to attempt in this quiz
          </text>
        </div>
        <div>
          <text
            style={{
              fontSize: "10px",
              color: "gray",
            }}
          >
            &nbsp;(The quiz cannot have more than 20 questions)*
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
            value={state.no_of_questions}
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
            onChange={updateNumberOfQuestions}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <div>
          <text
            style={{
              fontSize: "14px",
            }}
          >
            2. Enter numbers 0-15 for operands
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
            placeholder="10, 2"
            value={state.operands}
            style={{
              width: "10vw",
              color: "rgb(105, 105, 105)",
              fontWeight: "500",
              textAlign: "start",
              padding: "5px 10px",
              borderRadius: "5px",
              boxShadow: "#2e2626 0px 0px 2px 0px",
              border: "none",
              background: "none",
            }}
            onChange={updateOperandValue}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <div>
          <text
            style={{
              fontSize: "14px",
            }}
          >
            3. Please select the operators you want use in this quiz
          </text>
        </div>
        <div style={{ display: "flex", marginLeft: "15px", marginTop: "-5px" }}>
          <FormControlLabel
            control={
              <Checkbox
                name="add"
                checked={state.add}
                onChange={handleChange}
              />
            }
            label="+"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="subtract"
                checked={state.subtract}
                onChange={handleChange}
              />
            }
            label="-"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="multiply"
                checked={state.multiply}
                onChange={handleChange}
              />
            }
            label="*"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="divide"
                checked={state.divide}
                onChange={handleChange}
              />
            }
            label="/"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Button
          type="submit"
          style={{
            borderRadius: "50px",
            color:
              state.no_of_questions != "" &&
              state.operands != "" &&
              (state.add !== false ||
                state.subtract !== false ||
                state.multiply !== false ||
                state.divide !== false)
                ? "darkorange"
                : "white",
            fontWeight: "500",
            textTransform: "capitalize",
            background:
              state.no_of_questions != "" &&
              state.operands != "" &&
              (state.add !== false ||
                state.subtract !== false ||
                state.multiply !== false ||
                state.divide !== false)
                ? "#DCDCDC"
                : "darkorange",
            pointerEvents:
              state.no_of_questions != "" &&
              state.operands != "" &&
              (state.add !== false ||
                state.subtract !== false ||
                state.multiply !== false ||
                state.divide !== false)
                ? "auto"
                : "none",
          }}
          onClick={() => {
            startQuiz(true);
          }}
        >
          Start quiz
        </Button>
      </div>
    </div>
  );
}
