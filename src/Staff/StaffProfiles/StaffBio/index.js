import React from 'react';
import { Collapse, Button, Card, CardImg, CardText, } from 'reactstrap'; // modded version first collapse in docs
import './StaffBio.css';


/** Bio cards for each staff member
 * Picture and name are rendered
 * by clicking on the card Bootstrap Collapse is triggered
 * showing the staff member blurb.
*/
function StaffBio() {
  return (
    <div className="StaffBio">
      <h1>StaffBio Component</h1>

      {/* <div>

        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="staff member" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" class="btn btn-primary">Learn more...</a>
          </div>
        </div>

      </div> */}
    </div>
  );
}

export default StaffBio;