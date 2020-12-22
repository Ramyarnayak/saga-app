// // import React, { Component, PropTypes } from 'react';

// // class App extends Component {
// //   render() {
// //     return (
// //       <div className="container-fluid text-center">
// //         {this.props.children}
// //       </div>
// //     );
// //   }
// // }
// // // App.propTypes = {
// // //   children: PropTypes.object.isRequired
// // // };

// // export default App;
 

// import React from 'react';
// import Navbar from './components/Navbar';
// import './App.css';
// import Home from './components/pages/Home';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';
// import NewsPage from './components/pages/NewsPage';


// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
   
//         <Switch>
//           <Route path='/' exact component={Home} />
//           <Route path='/services' component={Services} />
//           <Route path='/products' component={Products} />
//           <Route path='/news' component={NewsPage} />
//           <Route path='/sign-up' component={SignUp} />

//         </Switch>
//       </Router>
   
//     </>
//   );
// }

// export default App;



import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './movie/components/layout/Navbar';
import Footer from './movie/components/layout/Footer';

import Landing from './movie/components/home/Landing';
import Movie from './movie/components/home/Movie';

import store from './movie/store2';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
