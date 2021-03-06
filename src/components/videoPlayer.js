import React, { Component } from 'react';
import videojs from 'video.js';

import '../assets/css/video-js.css';
import '../assets/css/alexandria.videojs.css';

class VideoPlayer extends Component {
	componentDidMount() {
		// instantiate video.js
		this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
			console.log('onPlayerReady', this)
		});
	}

	// destroy player on unmount
	componentWillUnmount() {
		if (this.player) {
			this.player.dispose()
		}
	}
	render() {
		return (
			<video ref={ node => this.videoNode = node } id="my-video" className="video-js vjs-big-play-centered" controls preload="auto" poster="/assets/img/apollo-11-poster.jpg" style={{width: "100%", height: "100%", backgroundSize: "100% 100%", objectFit: "fill"}}>
				<source src="/assets/video/Apollo 11 Demo.mov" type='video/mp4' />
				<p className="vjs-no-js">
					To view this video please enable JavaScript, and consider upgrading to a web browser that
					<a href="http://videojs.com/html5-video-support/" target="_blank" rel="noopener noreferrer">supports HTML5 video</a>
				</p>
			</video>
		);
	}
}

export default VideoPlayer;