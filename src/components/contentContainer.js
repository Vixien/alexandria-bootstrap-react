import React, { Component } from 'react';

import AudioContainer from './audioContainer.js';
import VideoPlayer from './videoPlayer.js';
import ImageContainer from './imageContainer.js';
import MarkdownContainer from './markdownContainer.js';
import GameContainer from './gameContainer.js';
import PDFViewer from './pdfViewer.js';
import CodeContainer from './codeContainer.js';

class ContentContainer extends Component {
	render() {
		return (
			<div className="content-container">
				<div id='content' className="content" style={this.props.type === 'text' ? {backgroundColor: "#fff"} : {display: "inline"}}>
					{ this.props.type ===  'audio' ? <AudioContainer /> : '' }
					{ this.props.type ===  'video' ? <VideoPlayer /> : '' }
					{ this.props.type ===  'img' ? <ImageContainer url="/assets/img/bob-ross.jpg" /> : '' }
					{ this.props.type ===  'text' ? <MarkdownContainer /> : '' }
					{ this.props.type ===  'pdf' ? <PDFViewer url="../../pdf/bitcoin.pdf" /> : '' }
					{ this.props.type ===  'game' ? <GameContainer url="http://gabrielecirulli.github.io/2048/" /> : '' }
					{ this.props.type ===  'code' ? <CodeContainer /> : '' }
				</div>
				<div id='paywall' style={{display:"none"}}>
					<div className="d-flex align-items-center justify-content-center text-center paywall-container">
						<div>
							<h4 style={{marginBottom: "0px"}}>To Access this Content</h4>
							<span>please</span>
							<br/>
							<div className="row" style={{marginTop: "15px"}}>
								<div className="col-5">
									<button className="btn btn-outline-success" style={{float:"right", marginLeft: "25px", marginRight: "-25px", padding: "5px"}} onclick="unlockContent()"><span className="icon icon-wallet"	style={{marginRight: "5px"}}></span>Pay 3 bits</button>
								</div>
								<div className="col-2" style={{paddingTop: "5px"}}>
									or
								</div>
								<div className="col-5">
									<button className="btn btn-outline-danger" style={{float:"left", marginRight: "25px", marginLeft: "-25px", padding: "5px"}}><span className="icon icon-controller-play" style={{marginRight: "0px"}}></span>Watch an Ad</button>
								</div>
							</div>
							<a href=""><p style={{margin: "75px 0px -75px 0px", color:"#fff", textDecoration: "underline"}}>How does this work? <span className="icon icon-help-with-circle"></span></p></a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContentContainer;