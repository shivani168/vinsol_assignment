import React from "react";
import QuizScreen1 from "./QuizScreen1";
import QuestionScreen from "./QuestionScreen";

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operatorValues: [],
      operandValues: [],
      no_of_questions: 0,
      start: false,
      add: false,
      subtract: false,
      multiply: false,
      divide: false,
    };
  }
  componentDidMount(){
    debugger;
  }
  startQuiz = (
    val,
    no_of_questions,
    add,
    subtract,
    multiply,
    divide,
    operandValues
  ) => {
    this.setState({
      ...this.state,
      start: val,
      no_of_questions: no_of_questions,
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide,
      operandValues: operandValues,
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "100%",
          width: "100%",
          marginLeft: "-10px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "46%",
          }}
        >
          <div
            style={{
              display: this.state.start === false ? "block" : "none",
              width: "100%",
            }}
          >
            <QuizScreen1
              id={1}
              startQuiz={(
                val,
                no_of_questions,
                add,
                subtract,
                multiply,
                divide,
                operandValues
              ) =>
                this.startQuiz(
                  val,
                  no_of_questions,
                  add,
                  subtract,
                  multiply,
                  divide,
                  operandValues
                )
              }
            />
          </div>
          <div
            style={{
              display: this.state.start === true ? "block" : "none",
              width: "100%",
            }}
          >

            <QuestionScreen
              no_of_questions={this.state.no_of_questions}
              operandValue={this.state.operandValues}
              add={this.state.add}
              subtract={this.state.subtract}
              multiply={this.state.multiply}
              divide={this.state.divide}
              start={this.state.start}
            />
          </div>
        </div>
        <div
          style={{
            height: "100%",
            width: "46%",
          }}
        >
          <QuizScreen1
            id={2}
            startQuiz={(
              val,
              no_of_questions,
              add,
              subtract,
              multiply,
              divide,
              operandValues
            ) =>
              this.startQuiz(
                val,
                no_of_questions,
                add,
                subtract,
                multiply,
                divide,
                operandValues
              )
            }
          />
        </div>
      </div>
    );
  }
}
