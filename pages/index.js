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
                    />
                ) : embedDemocracy ? (
                    <YouTubeDemocracyEmbed
                        youtube={youtube}
                        democracy={democracy}
                    />
                ) : (
                    <YouTubeEmbed
                        src={youtube}
                        button_text={"Join the Discussion"}
                        button_url={democracy}
                    />
                )
            }
            </div>
        )
    }
}

export default Home