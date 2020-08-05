import React, { Component } from 'react'
import YouTubeDemocracyEmbed from '../src/youtube_democracy_embed'
import YouTubeEmbed from '../src/youtube_embed'
import moment from 'moment'

const live = moment()//moment("2020-08-05T17:50:00-0700")
const youtube = "https://www.youtube.com/embed/BXPVe-YHDzo"
const democracy = 'https://live.remesh.chat/p/99ea20b8-2a8e-451d-afc3-5371821dbc9e'
const embedDemocracy = true;

class Home extends Component {
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
                        button_text={"Join us at 6PM Pacific, August 5th"}
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