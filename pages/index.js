import React, { Component } from 'react'
import moment from 'moment'
import YouTubeEmbed from '../src/youtube_embed'


const live = moment("2020-08-23T19:00:00-0700")
const preLive = live.clone().subtract(10, 'minutes')
const youtube = "https://www.youtube.com/watch?v=Bh0kauv1lGo&feature=youtu.be"
const democracy = 'https://live.remesh.chat/p/b727e7a2-f9a2-4f4d-9aef-297d89282152'
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
                        // src={youtube}
                        button_text={`Join us on ${live.format("dddd, MMMM Do YYYY, h:mm:ss a")}`}
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