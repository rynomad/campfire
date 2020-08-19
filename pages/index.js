import React, { Component } from 'react'
import moment from 'moment'

const live = moment("2020-08-19T15:00:00-0700")
const preLive = live.clone().subtract(10, 'minutes')
const youtube = "https://www.youtube.com/watch?v=Bh0kauv1lGo&feature=youtu.be"
const democracy = 'https://live.remesh.chat/p/3876f6c0-b81f-4b3b-95cb-60bba1e6f124'
const embedDemocracy = false;

class Home extends Component {
    componentDidMount(){
        if (window.location.host === 'democracy.articlesofunity.org'){
            window.location.href = democracy
        } else {
            window.location.href = youtube
        }
        // if (moment().isSameOrAfter(live)){
        //     try {
        //         window.location.href = democracy
        //     } catch (e) {
        //         console.warn('falling back to youtube embed + button')
        //     }
        // }
    }

    render() {
        return null
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