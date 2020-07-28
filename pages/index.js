import React, { Component } from 'react'
import { isMobile, isTablet } from 'react-device-detect'

class Home extends Component {
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        console.log('orientation', this.props.isPortrait, this.props.isLandscape)
        this.setState({
            stack: (isMobile || isTablet) && (window.screen.width > window.screen.height)
        })
        setInterval(() => { 
            const isLandscape = window.screen.width > window.screen.height

            if (isLandscape && this.state.stack){
                this.setState({
                    stack: false,
                })
            } else if (!isLandscape && !this.state.stack){
                this.setState({
                    stack: true
                })
            }
        }, 200)
    }

    render(){
        return (
            <>
            <p>
                Overlay {JSON.stringify(this.state)} 
            </p>
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
                    height : this.state.stack ? '30%' : '100%'
                }}>
                <iframe
                    class="airtable-embed"
                    src="https://airtable.com/embed/shrIc9Wxe7GnRs3Hp?backgroundColor=gray&viewControls=off"
                    frameborder="0"
                    onmousewheel=""
                    style={{
                        width : '100%',
                        height: '100%'
                    }}
                />
                </div>
                <div style={{
                    flexGrow: 4,
                    height : this.state.stack ? '70%' : '100%'
                }}>
                <iframe
                    class="airtable-embed"
                    src="https://airtable.com/embed/shrkkkgpxxbC8H5Ru?backgroundColor=blue"
                    frameborder="0"
                    onmousewheel=""
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
                </div>
    
            </div>
            </>
        )
    }
   
}

export default Home