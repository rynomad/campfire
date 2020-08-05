import React, { Component } from 'react'
import { isMobile, isTablet } from 'react-device-detect'

class GalleryForm extends Component {
    constructor() {
        super()
        this.state = {
            show: 'form'
        }
    }

    componentDidMount() {

        const watcher = window.matchMedia('(orientation: landscape)')

        this.setState({
            stack: (isMobile || isTablet) && !watcher.matches
        })

        watcher.addListener((w) => {
            const isLandscape = w.matches

            if (isLandscape && this.state.stack) {
                this.setState({
                    stack: false,
                })
            } else if (!isLandscape && !this.state.stack) {
                this.setState({
                    stack: true
                })
            }
        })
    }

    render() {
        if (!(isMobile || isTablet)){
            return (
                <div
                    className="container"
                    style={{
                        position: 'fixed',
                        bottom: '0',
                        top: '0',
                        left: '0',
                        right: '0',
                        display: 'flex',
                        flexWrap: 'wrap',
                        zIndex: -1
                    }}
                >
                    <div style={{
                        flexGrow: 4,
                        height: this.state.stack ? '50%' : '100%'
                    }}>
                        <iframe
                            class="airtable-embed"
                            src={this.props.gallery_url}
                            frameborder="0"
                            onmousewheel=""
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </div>
                    <div style={{
                        flexGrow: 1,
                        height: this.state.stack ? '50%' : '100%'
                    }}>
                        <iframe
                            class="airtable-embed"
                            src={this.props.form_url}
                            frameborder="0"
                            onmousewheel=""
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </div>
                </div>
            )
        } else if (this.state.show === 'form'){
            return (
                <div
                    className="container"
                    style={{
                        position: 'fixed',
                        bottom: '0',
                        top: '0',
                        left: '0',
                        right: '0',
                        display: 'flex',
                        flexWrap: 'wrap-reverse',
                        zIndex: -1
                    }}
                >
                    <div style={{
                        flexGrow: 1,
                        width: '100%',
                        height: this.state.stack ? '10%' : '100%'
                    }} onClick={() => {
                        this.setState({
                            show: 'gallery'
                        })
                    }}>
                       <p style={{
                           width : '100%'
                       }}>
                           Gallery
                        </p>
                    </div>
                    <div style={{
                        flexGrow: 4,
                        width: '100%',
                        height: this.state.stack ? '90%' : '100%'
                    }}>
                        <iframe
                            class="airtable-embed"
                            src={this.props.form_url}
                            frameborder="0"
                            onmousewheel=""
                            style={{
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </div>
                </div>
            )
        } else if (this.state.show === 'gallery') {
            return (
                <div
                    className="container"
                    style={{
                        position: 'fixed',
                        bottom: '0',
                        top: '0',
                        left: '0',
                        right: '0',
                        display: 'flex',
                        flexWrap: 'wrap-reverse',
                        zIndex: -1
                    }}
                >
                    <div style={{
                        flexGrow: 1,
                        height: this.state.stack ? '90%' : '100%',
                        width: '100%'
                    }}>
                        <iframe
                            class="airtable-embed"
                            src={this.props.gallery_url}
                            frameborder="0"
                            onmousewheel=""
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </div>
                    <div style={{
                        flexGrow: 4,
                        height: this.state.stack ? '10%' : '100%',
                        width: '100%'
                    }}
                        onClick={() => {
                            this.setState({
                                show: 'form'
                            })
                        }}
                    
                    >
                        <p style={{
                            width : '100%'
                        }}>
                            Form
                        </p>
                    </div>
                </div>
            )
        }

   
    }

}

export default GalleryForm