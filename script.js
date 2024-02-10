import React, {
useState,
useEffect } from
"https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const Stoppuhr = () => {
  const [laufendeZeit, setLaufendeZeit] = useState(0);
  const [gestartet, setGestartet] = useState(false);

  useEffect(() => {
    let timer;

    if (gestartet) {
      timer = setInterval(() => {
        setLaufendeZeit(prevZeit => prevZeit + 1);
      }, 10);
    }

    return () => clearInterval(timer);
  }, [gestartet]);

  const startStop = () => {
    setGestartet(!gestartet);
  };

  const reset = () => {
    setLaufendeZeit(0);
    setGestartet(false);
  };

  const formatiereZeit = () => {
    let millisekunden = ("0" + laufendeZeit % 100).slice(-2);
    let sekunden = ("0" + Math.floor(laufendeZeit / 100) % 60).slice(-2);
    let minuten = ("0" + Math.floor(laufendeZeit / 6000) % 60).slice(-2);

    return `${minuten}:${sekunden}.${millisekunden}`;
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { id: "zeitanzeige" }, formatiereZeit()), /*#__PURE__*/
    React.createElement("div", { id: "button-container" }, /*#__PURE__*/
    React.createElement("button", { onClick: startStop }, gestartet ? "Stop" : "Start"), /*#__PURE__*/
    React.createElement("button", { onClick: reset }, "Reset"))));



};

ReactDOM.render( /*#__PURE__*/React.createElement(Stoppuhr, null), document.getElementById("root"));