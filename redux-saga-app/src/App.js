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





import React from 'react'
import Footer from './movie/Footer'
import Navbar1 from './movie/Navbar1'
import './App.css'
import Loading from './movie/Loading'
import store from './movie/store2';
import { Provider } from 'react-redux'

function App() {

  return (
    <div>
      <Provider store={store}>
      <Navbar1/>
      <Loading/>
      <Footer/>
      </Provider>
     
    </div>
  )
}

export default App
