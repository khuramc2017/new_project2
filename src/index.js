import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WindowDimensions } from './WindowDimensions';
import registerServiceWorker from './registerServiceWorker';

/* Main File */
class Works extends React.Component {
  render() {
    return (
      <div className="row">
        <WindowDimensions
          projectImage={require('./img/python_project_image.jpg')}
          name="My Favorite Movies Website"
          description="Built using Python's Webserver, HTML, and CSS. Displays the list of my favorite movies and tv shows."
          githubLink="https://github.com/khuramc2017/ud036_StarterCode"
          demoLink="#"/>
       <WindowDimensions
          projectImage={require('./img/profile_project_image.jpg')}
          name="Profile of Works Website Without React.JS"
          description="Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers."
          githubLink="https://github.com/khuramc2017/profile_website"
          demoLink="https://khuram-profile-website.herokuapp.com/"/>
       <WindowDimensions
          projectImage={require('./img/project_bark_image.jpg')}
          name="Work in Progress Mobile Project"
          description="Built on the Android platform, this project displays my skill in regards to Android Development. The focus the of this project is to connect dog owner on a walk with their pets."
          githubLink="https://github.com/khuramc2017/mobileClassCapstoneProject"
          demoLink="https://play.google.com/store/apps/details?id=siliconempirellc.barkorbolt_android&hl=en"/>
      <WindowDimensions
          projectImage={require('./img/neighborhood_project_image.jpg')}
          name="Neighborhood Website"
          description="Built a web app that displays a Google Map of an area and various points of interest. Built using the Knockout framework so users can search all included landmarks and select pins for additional information about a landmark is presented from the Zomato API."
          githubLink="https://github.com/khuramc2017/neighborhood_map"
          demoLink="https://my-neighbor-map.herokuapp.com/"/>
      <WindowDimensions
         projectImage={require('./img/coming_soon_image.jpg')}
         name="Item Catalog Website(AWS)"
         description="Developed a content management system using the Flask framework in Python. Authentication is provided via OAuth and all data is stored within a PostgreSQL database. Installed and configured all required software to turn a baseline Ubuntu Amazon Web Services server into a fully functional web application server, including Apache Web Server and PostgreSQL database server."
         githubLink="https://github.com/khuramc2017/item_catalog"
         demoLink="http://ec2-54-86-201-19.compute-1.amazonaws.com/catalog/"/>
     <WindowDimensions
         projectImage={require('./img/website_project_image.png')}
         name="Space Website"
         description="Built using HTML, CSS, JavaScript Libraries and Frameworks, and NASA API."
         githubLink="https://github.com/khuramc2017/my_space_project"
         demoLink="https://space-project-2017.herokuapp.com"/>
     </div>
    );
  }
}

ReactDOM.render(<Works/>, document.getElementById('root'));
registerServiceWorker();
