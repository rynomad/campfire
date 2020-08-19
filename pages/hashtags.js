import React, { Component } from 'react'

class Home extends Component {
    componentDidMount() {
        // window.location = 'https://articlesofunity.org/volunteer'
    }

    render() {
        return (
            <>
                <link type="text/css" rel="stylesheet" href="https://www.opavote.com/static/css/widget.css" />
                <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
                <div id="opavote-widget">

                    <div id="opavote-voting" style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <h2>Poll Title</h2>
                        <div id="ballot-0"></div>
                        <div id="vote-button"></div>
                    </div>

                    <div id="opavote-voted">
                        <h2>Poll Results</h2>
                        <div id="opavote-results"></div>
                    </div>

                    <div id="opavote-logo">
                        <p style={{display: 'none'}}>Create your own poll with <a href="https://www.opavote.com">OpaVote</a></p>
                    </div>

                </div>
                <script type="text/javascript" src="https://www.opavote.com/static/js/widget.min.js"></script>
                <script type="text/javascript">election.widget(5453678153564160);</script>
            </>
        )
    }

}

export default Home