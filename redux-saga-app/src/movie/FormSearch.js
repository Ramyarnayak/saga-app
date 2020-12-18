import React, { Component } from 'react'
import { searchMovie } from './searchActions'
import {connect} from 'react-redux'

export class FormSearch extends Component {

    onChange = e=>{
      this.props.searchMovie(e.target.value);
    }
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search"/> Search for a movie, TVseries..
                       </h1> 
                       <form id="searchform">
                            <input 
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search Movies, TV Series ..."
                            onChange={this.onChange}
                            />
                            <button type="submit" className="btn btn-primary btn-bg mt-3">
                                Search
                            </button>

                        </form>

                    </div>
                    </div>
            </div>
        );
    }
}
const mapStateatoProps = state => ({
    text : state.movies.text
})


export default connect (mapStateatoProps, (searchMovie))(FormSearch);
