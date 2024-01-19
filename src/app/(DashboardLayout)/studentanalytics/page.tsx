'use client'
import { Grid, Box, Card, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import Performance from './Performance';
import QuizSession from "./QuizSession"
import Avgcorrectans from './Avgcorrectans';
import TopPerformers from './TopPerformers';
import "./style.css"
import ReasonNeg from './ReasonNeg';
import ReasonProp from './ReasonProp';
import { useState } from 'react';
import { sassFalse } from 'sass';

const StudentAnalytics = () => {

  const [chapter1, setChapter1] = useState(true)
  const [chapter2, setChapter2] = useState(true)
  const [chapter3, setChapter3] = useState(true)
  const [chapter4, setChapter4] = useState(true)


  const onChangeChapter = (e: any) => {
    if (e.target.value === "Chapter 1") {
      setChapter3(false)
      setChapter2(false)
      setChapter4(false)
    }
    else if (e.target.value === "All") {
      setChapter3(true)
      setChapter2(true)
      setChapter4(true)
      setChapter1(true)
    }
    else if (e.target.value === "Chapter 2") {
      setChapter1(false)
      setChapter2(false)
      setChapter4(true)
      setChapter3(true)
    } else if (e.target.value === "Chapter 3") {
      setChapter3(false)
      setChapter2(true)
      setChapter4(false)
      setChapter1(true)
    } else if (e.target.value === "Chapter 4") {
      setChapter3(true)
      setChapter2(false)
      setChapter4(true)
      setChapter1(false)
    }
  }

  const onTopicChange = (e: any) => {
    if (e.target.value === "Analytical Essay") {
      setChapter3(false)
      setChapter2(false)
      setChapter4(false)
    }
    else if (e.target.value === "All") {
      setChapter3(true)
      setChapter2(true)
      setChapter4(true)
      setChapter1(true)
    }
    else if (e.target.value === "Argumentative Essay") {
      setChapter1(true)
      setChapter2(false)
      setChapter4(true)
      setChapter3(true)
    } else if (e.target.value === "Endpoints") {
      setChapter3(false)
      setChapter2(false)
      setChapter4(false)
    } else if (e.target.value === "City") {
      setChapter3(true)
      setChapter2(false)
      setChapter4(true)
    }
  }


  
  return (
    <PageContainer title="Analytics" description="this page is about Analytics">
      <Typography><h3 style={{color:'#713593'}}>Your Analytics of Maths - Level 1</h3></Typography>
      <Box>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} lg={6}>

              <div className='card2' style={{ padding: 10, marginBottom: 10, width: '100%', height: 60, textAlign: 'center', fontSize: 16 }} >
                <b> Filter By  </b>   &nbsp;&nbsp;
                <select name="Chapter" id="Chapter" onChange={onChangeChapter}>
                  <option value="All">Chapter: All</option>
                  <option value="Chapter 1">Chapter 1</option>
                  <option value="Chapter 2">Chapter 2</option>
                  <option value="Chapter 3">Chapter 3</option>
                  <option value="Chapter 4">Chapter 4</option>
                  <option value="Chapter 5">Chapter 5</option>
                </select>&nbsp;&nbsp;&nbsp;
                <select name="Topic" id="Topic" onChange={onTopicChange}>
                  <option value="All">Topic: All</option>
                  <option value="Analytical Essay">Analytical Essay</option>
                  <option value="Argumentative Essay">Argumentative Essay</option>
                  <option value="Endpoints">Endpoints (Root)</option>
                  <option value="City">City Config</option>
                </select>
              </div>
              <Performance />
            </Grid>
            
            <Grid item xs={12} lg={6}>
              <Grid item>
                <div className="card" style={{ padding: 10, marginBottom: 10, width: '100%', height: 60, textAlign: 'center', fontSize: 18 }} >
                  Overall Score  <b>70%</b>
                </div>
              </Grid>
              <Grid item>
                <QuizSession /></Grid>
              {/* <TopPerformers /> */}
            </Grid><br />
            {chapter2 ? (
              <Grid container item xs={12} spacing={1} lg={12} >
                <Grid item xs={12} lg={2.4}>
                  <div className="card1" style={{ height: 90, padding: 15, textAlign: 'center', fontSize: 16 }}>
                    Total No. of Quiz Sessions <br /> <b>40</b>
                  </div></Grid><Grid item xs={12} lg={2.4}>
                  <div className='card1' style={{ height: 90, padding: 15, textAlign: 'center', fontSize: 16 }}>
                    Successful Sessions: <br /> <b>35</b>
                  </div></Grid><Grid item xs={12} lg={2.4}>
                  <div className="card1" style={{ height: 90, padding: 15, textAlign: 'center', fontSize: 16 }}>
                    <div > No. of Chapters:<br /> <b>56</b></div>
                  </div></Grid><Grid item xs={12} lg={2.4}>
                  <div className="card1" style={{ height: 90, padding: 15, textAlign: 'center', fontSize: 16 }}>
                    <div >No. of Topics: <br /><b>340</b></div>
                  </div></Grid><Grid item xs={12} lg={2.4}>
                  <div className="card1" style={{ height: 90, padding: 15, textAlign: 'center', fontSize: 16 }}>
                    <div >No. of Questions: <br /><b>902</b></div>
                  </div></Grid>
                {/* <TopPerformers /> */}
              </Grid>
            ) : ""}
            {chapter3 ? (
              <Grid container item xs={12} spacing={1} lg={12} display={'flex'}>
                <Grid item lg={6} style={{ height: 370, width: '100%' }}>
                  <TopPerformers />
                </Grid>
                <Grid item lg={6}>
                  <Avgcorrectans />
                </Grid>
              </Grid>
            ) : ""}
            {chapter4 ? (
              <Grid container item xs={12} spacing={1} lg={12} display={'flex'}>
                <Grid item xs={12} lg={6}>
                  <ReasonNeg />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <ReasonProp />
                </Grid>
              </Grid>
            ) : ""}
          </Grid>
        </Grid>
      </Box>
    </PageContainer >
  )
}

export default StudentAnalytics;
