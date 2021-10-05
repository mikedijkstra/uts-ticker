import React from 'react';
import './info.css';
import {
    Link
  } from "react-router-dom";

function About() {
    return (
        <div className='infoPage'>
            <div><Link className="linkButton1" to="/">Headlines</Link></div>

        <h1 className="infoText">About Citizen J</h1>
                
        <h2 className="infoText">
        <em>Citizen J</em> is an art-as-activism collaboration between art  collective Make or Break and UTS Journalism and IT students who are interested in understanding media subjectivity and the tools being developed and used by big business and the State to influence our understanding of truth. This project enables students to play with a series of critical and creative tools - including media anlysis, language shaping, news scraping, futuring, speculative writing and machine learning - to generate a speculative future newsfeed in the form of a continuous stream of headlines displayed across LED news tickers located on campus at UTS Library and a digital hack of the UTS Art website.
        <br>
        </br>
        <br>
        </br>
        <em>Citizen J</em> is an offshoot of Make or Break’s ongoing project <em>Influence Operation (2019-)</em> which to date has invited citizens to join a series of focused workshops to adopt strategies of power to influence the news in real time. For Citizen J, Make or Break worked with students across 3 half day sessions to live build the project from the ground up, sharing skills and knowledges in pursuit of questions around truth, influence and subjectivity.
        <br>
        </br>
        <br>
        </br>
        For more information about the artists, visit <a href="http://www.makeorbreakart.com">makeorbreakart.com</a>
        </h2>
        </div>
    );
  }

export default About;