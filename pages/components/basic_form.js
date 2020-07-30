import React, { Component } from 'react'
import { isMobile, isTablet } from 'react-device-detect'

class GalleryForm extends Component {
    render() {
        return (
            <div
                className="container"
            >
                    <iframe
                        class="airtable-embed"
                        src={this.props.form_url}
                        frameborder="0"
                        onmousewheel=""
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'fixed',
                            top: '0',
                            bottom: '0',
                            left: '0',
                            right: '0'
                        }}
                    />
            </div>
        )
    }

}

export default GalleryForm