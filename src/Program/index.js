import React from 'react';
import './Program.css';
import Explorers from '../Explorers';
import Mountaineers from '../Mountaineers';

function Home() {
  const styleObj = {
  border: 0,
  width: 800,
  height: 600,
  frameborder: 0,
  scrolling: "no",
  }

  return (
    <div className="Home">

      <div className="prog-and-cal">
        <h3>Program & Calendar</h3>
        <p>
          Gan Preschool in San Rafael offers a creative and nurturing environment
          where your child will feel at home. We take an eclectic approach to
          curriculum. By integrating the best concepts in early childhood education
          with the beauty of our Jewish tradition, we create meaningful and
          enriching classroom experiences for our students. Every day the children
          in our care play, learn, and explore in a joyful,  outdoor based
          non-competitive space where they are valued as individuals, and
          recognized for their unique gifts. We support each child as they
          develop independence, confidence, creativity, and self esteem.
        </p>

        <p>
          Our Gan Preschool is a certified Outdoor Classroom Demonstration Site.
          After much hard work, many teacher training hours and ongoing improvements
          to our yard, we received our certification from the Outdoor Classroom
          Project in January 2018.
        </p>

        <p>
          At Gan we offer a morning preschool program that runs from 9:00 am -
          12:30 pm for the younger classes and from 9:00 am - 1:00 pm for our pre-K
          group. Our morning program is divided into two age groups - Explorers and
          Mountaineers. We also offer optional early care from 8:00-9:00 am, and
          aftercare until 4:30 pm.
        </p>
      </div>

      <Explorers />
      <Mountaineers />

      <div className="calendar">
        <iframe title="academic-calendar"
          src="https://calendar.google.com/calendar/embed?src=k02s89279qut6q2n3ia555do1g%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          style={styleObj}></iframe>
      </div>

    </div>
  );
}

export default Home;