import React, { Component } from 'react'
import VideoView from './../components/VideoView'
import './../css/VideoContainer.css'
import axios from 'axios'

const api_url = 'https://live-stream-api.herokuapp.com//v1/videos/info'

class VideoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {results: "",
                  loading: true,
                  error: null}
    this.fetchData = this.fetchData.bind(this)
  }
  componentDidMount() {
    this.fetchData(this.props.params.videoId,
                   this.props.params.platform)
  }
  fetchData(video_id, video_platform) {
    this.setState({loading: true, error: null})
    axios.get(api_url, {
               params: {
                 id: video_id,
                 platform: video_platform
               }})
      .then(res => {
        this.setState({
          loading: false,
          error: null,
          results: res.data
        })
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        })
      })
  }
  goBack(e) {
    e.preventDefault()
    window.history.back()
  }
  render() {
    return (
      <VideoView
        loading={this.state.loading}
        error={this.state.error}
        results={this.state.results}
        id={this.props.params.videoId}
        platform={this.props.params.platform}
        goBack={this.goBack}/>
    )
  }
}

export default VideoContainer
