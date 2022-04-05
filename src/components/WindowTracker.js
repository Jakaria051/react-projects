import React from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div style={{ alignContent: "center", textAlign: "center" }}>
      <h1 style={{ marginTop: "30px" }}>Current window width</h1>
      <h1>Window width: {windowWidth}</h1>
    </div>
  );
}
