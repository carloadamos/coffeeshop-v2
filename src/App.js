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
        <div className="drinks__container">
          <div className="drinks__title">drinks</div>
          <div className="drinks__gallery">
            <div className="drinks__gallery-item">
              <img src={require('./assets/img/drink-1.png')} alt="drinks" />
            </div>
            <div className="drinks__gallery-item">
              <img src={require('./assets/img/drink-2.png')} alt="drinks" />
            </div>
            <div className="drinks__gallery-item">
              <img src={require('./assets/img/drink-3.png')} alt="drinks" />
            </div>
          </div>
        </div>
      </section>
      <section id="desserts">
        <div className="desserts__container">
          <div className="desserts__title">desserts</div>
          <div className="desserts__gallery">
            <div className="desserts__gallery-item h-1">
              <img src={require('./assets/img/desserts-1.png')} alt="desserts"/>
            </div>
            <div className="desserts__gallery-item h-2">
              <img src={require('./assets/img/desserts-2.png')} alt="desserts"/>
            </div>
            <div className="desserts__gallery-item h-2">
              <img src={require('./assets/img/desserts-3.png')} alt="desserts"/>
            </div>
            <div className="desserts__gallery-item h-1">
              <img src={require('./assets/img/desserts-4.png')} alt="desserts"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
