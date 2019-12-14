import React from 'react';

import './About.css';
import ProfilePicture from '../../resources/images/profile_picture.jpg';

function About() {
    return (
        <div className="About">
            <div className="profile-picture">
                <img src={ProfilePicture} />
            </div>
            <div className="about-text">
                <h1>Mission</h1>
                <p>To progress the medical field through the use of explainable artificial intelligence </p>
                <h2>Research Focus</h2>
                <p>Applied Machine Learning, Explainable Artificial Intelligence, Semi-Supervised Learning, Meta-Learning</p>
                <h2>Background</h2>
                <p>I grew up in a suburban town call Springfield Township east of Akron, Ohio. I graduated from Springfield High School in 2015 and completed a BS in computer science in May 2019 at Kent State University. Currently, I am pursuing a Ph.D. in computer science at The Ohio State University.</p>
            </div>
            <div className="contact-form">
                <h1>Contact</h1>
                <p>You can contact me at either my personal email (<a href="mailto:davidecarlyn@gmail.com">davidecarlyn@gmail.com</a>) or at my university email (<a href="mailto:carlyn.1@osu.edu">carlyn.1@osu.edu</a>)</p>
            </div>
        </div>
    )
}

export default About;