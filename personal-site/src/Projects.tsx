import React from 'react';
import { Grid, Box } from '@material-ui/core'
import './Projects.css';

const Project = () => {
    return (
        <Box className="projects-page grid2">
            <Grid container className="flexpls">
                <Grid item xs={8} sm={8} md={8} >
                    <h1>Projects</h1>
                </Grid>
                <Grid item xs={4} sm={4} md={4} >
                    <a href="/" className="btn2">go back</a>
                </Grid>
                <Grid xs={12} sm={6} md={4} className="project">
                    <a href="https://github.com/Heitor-Santos/CupManager" className="wrap">
                        <span className="new ty">An app to manage street soccer cups</span>
                        <span className="old ty">Cup Manager</span>
                    </a>
                </Grid>
                <Grid xs={12} sm={6} md={4} className="project">
                    <a href="https://github.com/Heitor-Santos/YouTube-Album-Downloader" className="wrap">
                        <span className="new ty">An website to download YouTube video and split it into MP3 files</span>
                        <span className="old ty">YouTube Album Downloader</span>
                    </a>
                </Grid>
                <Grid xs={12} sm={6} md={4} className="project">
                    <a href="https://github.com/Heitor-Santos/Liquidificador" className="wrap">
                        <span className="new ty">A python script to generate different combinations of exams</span>
                        <span className="old ty">Liquidificador</span>
                    </a>
                </Grid>
                <Grid xs={12} sm={6} md={4} className="project">
                    <a href="https://github.com/Heitor-Santos/SoftBroom" className="wrap">
                        <span className="new ty">A python script to move files according to ther extensions.</span>
                        <span className="old ty">Soft Broom</span>
                    </a>
                </Grid>
            </Grid>
        </Box >
    )
}
export default Project;