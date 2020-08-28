import React, { Component } from 'react'
import moment from 'moment'
import YouTubeEmbed from '../src/youtube_embed'


const live = moment("2020-08-28T09:00:00-0700")
const preLive = live.clone().add(45, 'minutes')
const smoreLive = preLive.clone().add(30, 'minutes')
const youtube = "https://www.youtube.com/embed/HHl6NzH7p7g"
const democracy = 'https://live.remesh.chat/p/e0840494-b4bf-48a2-9b7c-00a61ca9575c'
const smores = 'https://zoom.us/j/98695814291?pwd=d3Vpa0lDUU1kUDIwN3c1akJUL2VHQT09'
const embedDemocracy = false;
class Home extends Component {
    componentDidMount() {
        // if (moment().isSameOrAfter(live)){
        //     try {
        //         window.location.href = democracy
        //     } catch (e) {
        //         console.warn('falling back to youtube embed + button')
        //     }
        // }
    }

    render() {
        return (
            <div
                className="container"
                style={{
                    position: 'fixed',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    top: '0'
                }}
            >
                {
                    moment().isBefore(live) ? (
                        <YouTubeEmbed
                            src={youtube}
                            button_text={`Join us on ${live.format("dddd, MMMM Do YYYY, h:mm:ss a")}`}
                            isMobile={this.props.isMobile}
                        />
                    ) :  (
                                <YouTubeEmbed
                                    src={youtube}
                                    isMobile={this.props.isMobile}
                                />
                            )
                }
            </div>
        )
    }
}


Home.getInitialProps = ({ req }) => {
    let userAgent;
    if (req) { // if you are on the server and you get a 'req' property from your context
        userAgent = req.headers['user-agent'] // get the user-agent from the headers
        let isMobile = Boolean(userAgent.match(
            /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        ))

        const host = req.headers.host

        return { isMobile, host }
    }

    return {}
}

export default Home