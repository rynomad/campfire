import React, { Component } from 'react'
import YouTubeDemocracyEmbed from './components/youtube_democracy_embed'
import YouTubeEmbed from './components/youtube_embed'
import moment from 'moment'

const live = moment("2020-08-05T17:50:00-0700")
const youtube = "https://www.youtube.com/embed/BXPVe-YHDzo"
const democracy = 'https://live.remesh.chat/p/99ea20b8-2a8e-451d-afc3-5371821dbc9e'
const embedDemocracy = false;

class Home extends Component {
    render() {
        return (
            <div
                className="container"
                style={{
                    backgroundImage: 'url("backdrop.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'fixed',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    top: '0'
                }}
            >
            {
                moment().isBefore(live) ? (
                    <>
                        <h1 style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 'xx-large'
                        }}> Join Us Here </h1>
                        <h1 style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 'xx-large'
                        }}> 6 PM Pacific </h1>
                        <h1 style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 'xx-large'
                        }}> August 5th </h1>
                    </>
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