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
        setTimeout(() => {
            this.setState({
                stack: (isMobile || isTablet) && !watcher.matches
            })
        }, 0)

        watcher.addListener((w) => {

            const isLandscape = w.matches

            if (isLandscape && this.state.stack) {
                console.log("unstackit")
                this.setState({
                    stack: false,
                })
            } else if (!isLandscape && !this.state.stack) {
                console.log("stackit")
                this.setState({
                    stack: true
                })
            }
        })
    }

    render() {
        const _mobile = this.props.isMobile || isMobile || isTablet

        const flexWrap = this.state.stack && _mobile ? 'wrap' : 'no-wrap'
        const maxWidth = !this.state.stack && _mobile  ? '60%' : undefined

        const flexGrow = _mobile ? 4 : 1;

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
                    flexWrap,
                }}
            >
                <div style={{
                    flexGrow,
                    height: this.state.stack ? '50%' : '100%',
                    maxWidth,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <iframe
                        width="560"
                        height="315"
                        style={{
                            maxWidth: '100%'
                        }}
                        src={this.props.youtube}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div style={{
                    flexGrow: 1,
                    background: 'blue',
                    height: this.state.stack ? '50%' : '100%'
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%'
                    }} />
                    {/* <iframe
                        className="democracy-embed"
                        src={this.props.democracy}
                        frameborder="0"
                        onmousewheel=""
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                    /> */}
                </div>
            </div>
        )

    }

}

export default GalleryForm