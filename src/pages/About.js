import { Grid } from '@material-ui/core'
import { Paper } from '@mui/material'
import React from 'react'

function About() {
    return (
       <div style={{display:'flex',justifyContent:'center',alignContent:'center',padding:'100px'}}>
        <Paper elevation={3}>
            Simple At a glance news website with title cards displayed
            API used: News API
        </Paper>
        </div>
    )
}

export default About
