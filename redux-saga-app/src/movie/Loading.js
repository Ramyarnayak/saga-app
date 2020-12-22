import React, { Component } from 'react'
import FormSearch from './FormSearch'
import {connect} from 'react-redux'

import Spinner from './Spinner';
import MoviesContainer  from './MoviesContainer';

export class Loading extends Component {
    render() {
   const loading = this.props;
        return (
            <div>
       <FormSearch/>
       {loading ? <Spinner/>: <MoviesContainer/>}
       {/* <MoviesContainer/> */}
            </div>
        )
    }
}
const mapStateToProps = state =>({
    loading:state.movies.loading
})

export default connect(mapStateToProps)(Loading);
