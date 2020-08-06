import React, { Component } from 'react'
import BasicForm from '../src/basic_form'

class Home extends Component {
    componentDidMount(){
        window.location = 'https://articlesofunity.org/volunteer'
    }

    render() {
        return (
            <div
                className="container"
            />
        )
    }

}

export default Home