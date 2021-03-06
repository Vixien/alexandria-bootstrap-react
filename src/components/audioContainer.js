import React, { Component } from 'react';

import WaveSurferPlayer from './waveSurferPlayer.js';

class AudioContainer extends Component {
	render() {
		return (
			<div className="container" style={{paddingTop: "20px"}}>
				<div className="row">
					<div className="col-4"><img src="/assets/img/album-artwork.jpg" style={{width: "100%", height: "auto"}} alt="" /></div>
					<div className="col-8" style={{paddingTop: "50px"}}>
						<WaveSurferPlayer />
						<div id="waveform-timeline" style={{marginBottom: "10px"}}></div>
						<div className="btn-group d-flex justify-content-center">
							<button className="btn btn-sm btn-outline-secondary btn-white"><span className="icon icon-controller-jump-to-start"></span></button>
							<button className="btn btn-sm btn-outline-secondary btn-white"><span className="icon icon-controller-fast-backward"></span></button>
							<button className="btn btn-sm btn-outline-secondary btn-white"><span className="icon icon-controller-play"></span></button>
							<button className="btn btn-sm btn-outline-secondary btn-white"><span className="icon icon-controller-paus"></span></button>
							<button className="btn btn-sm btn-outline-secondary btn-white"><span className="icon icon-controller-fast-forward"></span></button>
							<button className="btn btn-sm btn-outline-secondary btn-white"><span className="icon icon-controller-next"></span></button>
						</div>
					</div>
				</div>
				<div className="row" style={{marginTop: "20px"}}>
					<div className="col-6">
						<table className="table table-sm">
							<thead style={{display: "none"}}>
								<tr>
									<th></th>
									<th></th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Tiny Human - 4:20</td>
									<td style={{display: "flex", height: "100%", justifyContent: "center", alignItems: "center"}}><button className="btn btn-sm btn-outline-success">2 bits</button></td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Garnet - 3:23</td>
									<td style={{display: "flex", height: "100%", justifyContent: "center", alignItems: "center"}}><button className="btn btn-sm btn-outline-success">2 bits</button></td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>Amythest - 5:15</td>
									<td style={{display: "flex", height: "100%", justifyContent: "center", alignItems: "center"}}><button className="btn btn-sm btn-outline-info">Free</button></td>
								</tr>
								<tr>
									<th scope="row">4</th>
									<td>Steven - 4:13</td>
									<td style={{display: "flex", height: "100%", justifyContent: "center", alignItems: "center"}}><button className="btn btn-sm btn-outline-success">3 bits</button></td>
								</tr>
								<tr>
									<th scope="row">5</th>
									<td>Pearl - 1:23</td>
									<td style={{display: "flex", height: "100%", justifyContent: "center", alignItems: "center"}}><button className="btn btn-sm btn-outline-success">2 bits</button></td>
								</tr>
								<tr>
									<th scope="row">6</th>
									<td>The Most Amazing Song Ever! - 13:43</td>
									<td style={{display: "flex", height: "100%", justifyContent: "center", alignItems: "center"}}><button className="btn btn-sm btn-outline-success">5 bits</button></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-6">
						<table className="table table-sm">
							<thead style={{display: "none"}}>
								<tr>
									<th></th>
									<th></th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">7</th>
									<td>Apollo 17 - 12:43</td>
									<td style={{display: "flex", height: "100%", justifyContent: "center", alignItems: "center"}}><button className="btn btn-sm btn-outline-success">3 bits</button></td>
								</tr>
								<tr>
									<th scope="row">8</th>
									<td>Content Access - 3:23</td>
									<td style={{display: "flex", height: "100%", justifyContent: "center", alignItems: "center"}}><button className="btn btn-sm btn-outline-success">1 bit</button></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default AudioContainer;