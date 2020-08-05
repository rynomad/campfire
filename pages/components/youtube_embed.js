import React, { Component } from 'react'

class GalleryForm extends Component {
    render() {
        return (
            <div
                className="container"
                style={{
                    display: 'flex'
                }}
            >
                <iframe 
                    width="560" 
                    height="315" 
                    src={this.props.src} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                />
            </div>
        )
    }

}

export default GalleryForm