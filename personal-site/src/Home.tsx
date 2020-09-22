import React from 'react';
import './Home.css';
import { Grid, Box } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { Icon } from '@iconify/react';
import lastfmIcon from '@iconify/icons-mdi/lastfm';
import letterboxdIcon from '@iconify/icons-simple-icons/letterboxd';
import { GitHub } from '@material-ui/icons';

const Cow = () => {
  return (
    <div className="cow">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__) <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(oo) <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / - - - - - - \/ <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|   <br />
        &nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/\ - &nbsp;-&nbsp; -&nbsp; /\ <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~~   <br />
    </div>
  )
}
function Home() {
  return (
    <Box className="home-page">
      <Grid container className="grid">
        <Grid item sm={6} md={4}>
          <h1>heitor</h1>
          <p>I'm a 21 years old computer science student at CIn.<br />
            I like music and web development.<br />
            Find me on the web:<br />
            <a href="https://www.instagram.com/heitor__santos/" className="icon"><InstagramIcon /></a>
            <a href="https://github.com/Heitor-Santos" className="icon"><GitHub /></a>
            <a href="https://www.linkedin.com/in/heitorsilvas/" className="icon"><LinkedInIcon /></a>
            <a href="mailto: hss2@cin.ufpe.br" className="icon"><AlternateEmailIcon /></a>
            <a href="http://last.fm/pt/user/tuto_" className="icon"><Icon height="24" icon={lastfmIcon} /></a>
            <a href="https://letterboxd.com/TutoFoS/" ><Icon height="24" icon={letterboxdIcon} /></a>
          </p>
          <a href="/projects" id="pass" className="btn">
            see my projects
          </a>
        </Grid>
        <Grid item sm={6} md={8} className="box-center">
          <div>
            <Cow />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..."Have you mooed today?"...</span>
          </div>
        </Grid>
      </Grid >
    </Box>
  );
}

export default Home;
