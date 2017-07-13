import React, { Component } from 'react';

/* Card Style */
const divStyle2 = {
  textAlign: 'center',
};

/* Generates a Card */
export class WorkCard extends React.Component {
  render() {
    return (
            <div className="card card-inverse card-success m-2">
              <img className="card-img-top" src={this.props.projectImage} alt="Card image cap"/>
              <div className="card-block">
                <h4 className="card-title" style={divStyle2}>{this.props.name}</h4>
                <p className="card-text">Project Details: {this.props.description}</p>
              </div>
              <div className="card-block">
                <a href={this.props.githubLink} className="card-link">GitHub Link</a>
                <a href={this.props.demoLink} className="card-link">Live Demo link</a>
              </div>
            </div>
    );
  }
}
