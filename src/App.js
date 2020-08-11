import React, { Component } from "react";
import Header from "./components/Header";

import About from "./containers/About";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// import Picture from "./containers/Picture";
import Fileupload from "./containers/Fileupload";
import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/fileupload" component={Fileupload} />
        </Switch>
        {this.props.children}
      </div>
    );
  }
}

export default App;

// import React, { useState } from "react";
// import Header from "./components/Header";
// import Temp from "./Temp";
// import Home from "./containers/Home";
// import About from "./containers/About";

// function App() {
//   const [comp, setComp] = useState(Home);

//   return (
//     <>
//       <header>
//         <button onClick={() => setComp(About)}>About</button>
//         {/* <button onClick={() => setComp(NotFound)}>Users</button> */}
//       </header>
//       <hr />
//       <main children={comp} />
//     </>
//   );
// }

// export default App;
