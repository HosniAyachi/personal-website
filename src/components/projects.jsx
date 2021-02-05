import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/proj1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="">Song recommendations with word2vec</a></h3>
											<span style={{fontWeight:"bold"}}>Gustave Eiffel University | JAN 2021</span><br/>
											<span>
											Developed a word2vec network to build a playlist completion tool starting from a Deezer playlist dataset containing 100000 playlists using <b>Keras</b> and <b>Scikit-Learn</b>.
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/proj2.jpg)'}}>
									<div className="desc">
										<div className="con">
										<h3><a href="">Bank of Taiwan: Client behavior prediction</a></h3>
											<span style={{fontWeight:"bold"}}>ESPRIT ENGINEERING SCHOOL  |  SEP 2019 - Dec 2019</span><br/>
											<span>
											Performed Data Manipulation, Visualisation, Analysis and then, Modeling with <b>Python libraries(Numpy, Pandas, Scikit-Learn)</b> in order to predict whether the clients were going to pay their dues next month or not..
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/proj3.jpg)'}}>
									<div className="desc">
										<div className="con">
										<h3><a href="">Game of thrones: Data visualization with R</a></h3>
											<span style={{fontWeight:"bold"}}>Gustave Eiffel University | DEC 2020</span><br/>
											<span>
											Worked on a Game of Thrones dataset to perform Data Manipulation using <b>Dplyr</b> and Data Visualization through plots and cartography (spatial data) using <b>ggplot2</b>.											
											</span>
											<span>
											Deployed all the visualization realized into an interactive <b>Shiny</b> application with four tabs.
											</span>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 04</a></h3>
											<span>Application</span>
										</div>
									</div>
								</div>
							</div> */}
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>							
										</div>
									</div>
								</div>
							</div> */}
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>											
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</section>
      </div>
    )
  }
}
