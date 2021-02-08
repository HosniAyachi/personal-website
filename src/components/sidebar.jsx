import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/me.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Hosni AYACHI</a></h1>
              <span className="email"><i className="icon-mail"></i> hosniayachi@outlook.com</span>
            </div><br />
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li><br />
                  <li><a href="#about" data-nav-section="about">About</a></li><br />
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/hosni-ayachi-17629712a/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>          <a href="https://github.com/HosniAyachi" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
          
              </ul>
            </nav>
            <div className="colorlib-footer">
              
              <p><small>
                <b>Open</b> for a 4 to 6 months internship, starting from April 2021 <br />
                <b>Ouvert</b> à un stage de 4 à 6 mois à partir d'Avril 2021
              </small></p><br/>
              <p><small>
                Feel free to contact me: <br />
                <b>Phone:</b> +33 7 58 54 57 99<br/>
                <b>E-mail:</b> hosniayachi@outlook.com  <br/>
              </small></p> <br/> 
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
