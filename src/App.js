import logo from "./logo.svg";
import "./App.css";
import WrapperScreen from "./components/WrapperScreen";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <WrapperScreen />
    </div>
  );
}

export default App;
