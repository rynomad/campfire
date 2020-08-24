import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class GalleryForm extends Component {
    render() {
        return (
            <div
                className="container"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    height: '100%'
                }}
            >
                <iframe 
                    width="560" 
                    height="315" 
                    style={{
                        maxWidth: '100%'
                    }}
                    src={this.props.src} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />
                {this.props.button_text && <Button variant="contained" href={this.props.button_url} target="_blank" rel="noreferrer" style={{
                    cursor: this.props.button_url ? 'pointer' : 'default'
                }}>
                    {this.props.button_text}
                </Button>}
            </div>
        )
    }

}

export default GalleryForm