import React, { Component } from 'react'
import GalleryForm from './components/gallery_form'

class Home extends Component {
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
                <GalleryForm
                    gallery_url={"https://www.youtube.com/embed/BXPVe-YHDzo"}
                    form_url={'https://live.remesh.chat/p/99ea20b8-2a8e-451d-afc3-5371821dbc9e'}
                />
            </div>
        )
    }
}

export default Home