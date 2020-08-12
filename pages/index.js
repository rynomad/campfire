import React, { Component } from 'react'
import YouTubeDemocracyEmbed from '../src/youtube_democracy_embed'
import YouTubeEmbed from '../src/youtube_embed'
import moment from 'moment'

const live = moment("2020-08-12T16:00:00-0700")
const preLive = live.subtract(5, 'minutes')
const youtube = "https://www.youtube.com/embed/YeUOvxX-zLI"
const democracy = youtube //'https://live.remesh.chat/p/027fd798-add5-4d8a-a015-e10bae5e5310'
const embedDemocracy = false;

class Home extends Component {
    componentDidMount(){
        if (moment().isSameOrAfter(preLive)){
            try {
                window.href = democracy
            } catch (e) {
                console.warn('falling back to youtube embed + button')
            }
        }
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