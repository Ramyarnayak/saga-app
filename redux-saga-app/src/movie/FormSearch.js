import React, { Component } from 'react'
import { searchMovie, fetchMovies,   setLoading} from './searchActions'
import {connect} from 'react-redux'

export class FormSearch extends Component {

   ChangeHandle = e =>{

      this.props.searchMovie([e.target.value])
    }

    onSubmit = e =>{ 
        e.preventDefault();
        this.props.fetchMovies(this.props.text)
        this.props.setLoading();
    }
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search"/> Search for a movie, TVseries..
                       </h1> 
                       <form id="searchform"
                       onSubmit ={this.onSubmit}>
                            <input 
                            type="text"
                            className="form-control"
                            name="searchText"
                            // value={this.text}
                            placeholder="Search Movies, TV Series ..."
                            onChange={this.ChangeHandle}
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
const mapStateToProps = state => ({
    text : state.movies.text
})


export default connect(mapStateToProps,{searchMovie, fetchMovies, setLoading })(FormSearch);
