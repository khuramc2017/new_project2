import React, { Component } from 'react';
import { WorkCard } from './WorkCard';

/* Card Style for phones */
const mobileDivStyle = {
  width: '98%',
};

/* Card Style for tablets */
const tabletDivStyle = {
  width: '45%',
};

/* Card Style for Desktop */
const desktopDivStyle = {
  width: '32%',
};

/*
 * Component Class of which generates the apporiate size based
 * on the screen size for the card.
 * Got this from here: https://stackoverflow.com/questions/19014250
 *                          /reactjs-rerender-on-browser-resize
 */
export const WindowDimensions = React.createClass({
    render: function() {
        if(this.state.width < 768) {
          return (
                  <div class="col-md-4" style={mobileDivStyle}>
                    <WorkCard projectImage={this.props.projectImage}
                              name={this.props.name}
                              description={this.props.description}
                              githubLink={this.props.githubLink}
                              demoLink={this.props.demoLink}/>
                  </div>
                );
        } else if(this.state.width > 767 && this.state.width < 1200) {
          return (
                  <div class="col-md-4" style={tabletDivStyle}>
                    <WorkCard projectImage={this.props.projectImage}
                              name={this.props.name}
                              description={this.props.description}
                              githubLink={this.props.githubLink}
                              demoLink={this.props.demoLink}/>
                  </div>
                );
        } else {
          return (
                  <div class="col-md-4" style={desktopDivStyle}>
                    <WorkCard projectImage={this.props.projectImage}
                              name={this.props.name}
                              description={this.props.description}
                              githubLink={this.props.githubLink}
                              demoLink={this.props.demoLink}/>
                  </div>
                );
        }
    },
    updateDimensions: function() {

    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        this.setState({width: width, height: height});
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    },
    componentWillMount: function() {
        this.updateDimensions();
    },
    componentDidMount: function() {
        window.addEventListener("resize", this.updateDimensions);
    },
    componentWillUnmount: function() {
        window.removeEventListener("resize", this.updateDimensions);
    }
});
