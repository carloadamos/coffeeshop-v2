import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <section id="hero">
        <nav>
          <ul>
            <li>drinks</li>
            <li>desserts</li>
            <li>contact us</li>
          </ul>
        </nav>
      </section>
      <section id="drinks">
        <div className="drinks__title">drinks</div>
        <div className="drinks__products">
          <div className="drinks__card" id="drink-1">
            <div className="darken"></div>
          </div>
          <div className="drinks__card" id="drink-2">
            <div className="darken"></div>
          </div>
          <div className="drinks__card" id="drink-3">
            <div className="darken"></div>
          </div>
        </div>
      </section>
      <section id="desserts">

      </section>
      <section id="footer">

      </section>
    </div>
  );
}

export default App;
