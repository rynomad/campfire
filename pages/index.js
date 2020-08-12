import React, { Component } from 'react'
import YouTubeDemocracyEmbed from '../src/youtube_democracy_embed'
import YouTubeEmbed from '../src/youtube_embed'
import moment from 'moment'

const live = moment("2020-08-12T16:00:00-0700")
const preLive = live.clone().subtract(10, 'minutes')
const youtube = "https://www.youtube.com/embed/YeUOvxX-zLI"
const democracy = 'https://live.remesh.chat/p/3876f6c0-b81f-4b3b-95cb-60bba1e6f124'
const embedDemocracy = false;

class Home extends Component {
    componentDidMount(){
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
                ) : embedDemocracy ? (
                    <YouTubeDemocracyEmbed
                        youtube={youtube}
                        democracy={democracy}
                        isMobile={this.props.isMobile}
                    />
                ) : (
                    <YouTubeEmbed
                        src={youtube}
                        button_text={"Join the Discussion"}
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
      
      return { isMobile }
    } 

    return {}
  }

export default Home