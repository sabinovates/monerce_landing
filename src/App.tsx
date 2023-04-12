import React, { Suspense } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense>
          <Routes />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
