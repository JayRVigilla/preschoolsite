import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Program from './Program';
import Staff from './Staff';
import Enrollment from './Enrollment';
import PhotoGallery from './PhotoGallery';
import Contact from './Contact';

function Routes() {
  return (
    <div className="Routes">
      <BrowserRouter>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/staff"><Staff /></Route>
        <Route exact path="/program"><Program /></Route>
        <Route exact path="/enrollment"><Enrollment /></Route>
        <Route exact path="/photo-gallery"><PhotoGallery /></Route>
        <Route exact path="/contact"><Contact /></Route>
      </BrowserRouter>
    </div>
  );
}

export default Routes;