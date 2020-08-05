import React, { Component } from 'react'
import GalleryForm from './components/gallery_form'
import moment from 'moment'

const live = moment("Wed Aug 05 2020 18:50:00 GMT-0600 (Mountain Daylight Time)")
const democracy = 'https://live.remesh.chat/p/99ea20b8-2a8e-451d-afc3-5371821dbc9e'
const embed = false;

class Home extends Component {
    componentDidMount(){
        if (moment().isAfter(live) && !embed){
            window.location = democracy
        }
    }

    render() {
        return (
            <div
                className="container"
                style={{
                    backgroundImage: 'url("backdrop.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'fixed',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    top: '0'
                }}
            >
                {moment().isBefore(live)? (
                    <h1 style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 'xxx-large'
                    }}> Coming Soon </h1>
                ) : (<GalleryForm
                    gallery_url={"https://www.youtube.com/embed/BXPVe-YHDzo"}
                    form_url={democracy}
                />)}
            </div>
        )
    }
}

export default Home