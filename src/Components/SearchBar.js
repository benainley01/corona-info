import React, { Component } from "react";
import axios from "axios";
import { Input, message } from "antd";
import "antd/dist/antd.css"

const Search = Input.Search

export default class SearchBar extends Component{
    constructor (props){
        super(props)
        this.state = {
            results: [],
            country: ""
        }
    }

    doSearch = value => {
        let country = value
        let usSpellings = ["usa", "USA", "America", "america", "US", "us"]
        if (usSpellings.includes(country)){
            country = "United States of America"
        }

        axios
            .get("https://api.covid19api.com/summary")
            .then(response => {
                for (let i = 0; i<247; i++){
                    if ((response.data.Countries[i].Country) == country){
                        this.setState({
                            results: response.data.Countries[i]
                        })
                        this.props.changeParent("results", this.state.results);
                }
            }
                for (let i = 0; i<247; i++){
                    if ((response.data.Countries[i].Slug) == country){
                        this.setState({
                            results: response.data.Countries[i]
                        })
                        this.props.changeParent("results", this.state.results);
            }
        }
    })
            .catch(error => {console.log(error)})
    if (this.state.results == null){
        message.warning("No results found");
    }
}

    render(){
        return(
            <div className = "SearchBar">
                <Search
                placeholder="Country"
                enterButton="search"
                size="medium"
                onSearch={value => this.doSearch(value)}
                />
            </div>
        );
    }


}