import React, { PureComponent } from 'react';
import './App.css';
import { NavBar } from "../src/components/NavBar/index"
import { BrowserRouter, Route } from "react-router-dom"
import { dashboard } from "../src/components/NavBar/dashboard/index"

class App extends PureComponent {
  render () {
  return (
    <div>
      <BrowserRouter>
      <Route path="/:id(|admindashboard)">
      <NavBar />
      <Route path="/" component={dashboard} />
      </Route>
      </BrowserRouter>
    </div>
  )
}
}

export default App;
