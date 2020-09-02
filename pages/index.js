import React, { Component } from 'react'
import moment from 'moment'
import YouTubeEmbed from '../src/youtube_embed'


const live = moment("2020-09-02T18:00:00-0700")
const preLive = live.clone().subtract(10, 'minutes')
const smoreLive = preLive.clone().add(30, 'minutes')
const youtube = "https://www.youtube.com/embed/I3c7tHBGW7E"
const democracy = "https://live.remesh.chat/p/7459a1fd-423e-43aa-8437-0068511d4ec8/"
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
                    moment().isBefore(preLive) ? (
                        <YouTubeEmbed
                            src={youtube}
                            button_text={`Join us on ${live.format("dddd, MMMM Do YYYY, h:mm:ss a")}`}
                            isMobile={this.props.isMobile}
                        />
                    ) :  (
                                <YouTubeEmbed
                                    src={youtube}
                                    button_text={'Join the Discussion'}
                                    button_url={democracy}
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