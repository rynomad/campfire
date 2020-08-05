import React, { Component } from 'react'
import BasicForm from '../src/basic_form'

class Home extends Component {
    render() {
        return (
            <div
                className="container"
            >
                <BasicForm
                    form_url={'https://airtable.com/embed/shro3pLeO0fN59oRS?backgroundColor=gray'}
                />
            </div>
        )
    }

}

export default Home