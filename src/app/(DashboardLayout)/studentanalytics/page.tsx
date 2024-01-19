'use client'
import { Grid, Box, Card } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import Performance from './Performance';
import QuizSession from "./QuizSession"
import Avgcorrectans from './Avgcorrectans';
import TopPerformers from './TopPerformers';
import "./style.css"
import ReasonNeg from './ReasonNeg';
import ReasonProp from './ReasonProp';

const StudentAnalytics = () => {
  return (
    <PageContainer title="Analytics" description="this page is about Analytics">
      <Box>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} lg={6}>

              <div className='card2' style={{ padding: 10, marginBottom:10, width: '100%', height: 60, textAlign: 'center', fontSize: 16 }} >
               <b> Filter By  </b>   &nbsp;&nbsp;
                <select name="Chapter" id="Chapter">
                  <option value="All">Chapter: All</option>
                  <option value="Chapter 1">Chapter 1</option>
                  <option value="Chapter 2">Chapter 2</option>
                  <option value="Chapter 3">Chapter 3</option>
                  <option value="Chapter 4">Chapter 4</option>
                  <option value="Chapter 5">Chapter 5</option>
                </select>&nbsp;&nbsp;&nbsp;
                <select name="Topic" id="Topic">
                  <option value="All">Topic: All</option>
                  <option value="Analytical Essay">Analytical Essay</option>
                  <option value="Argumentative Essay">Argumentative Essay</option>
                  <option value="Endpoints (Root)">Endpoints (Root)</option>
                  <option value="City Config">City Config</option>
                </select>
              </div>
              <Performance />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Grid item>
                <div className="card" style={{ padding: 10,marginBottom:10, width: '100%', height: 60, textAlign: 'center', fontSize: 18 }} >
                  Overall Score  <b>70%</b>
                </div>
              </Grid>
              <Grid item>
                <QuizSession /></Grid>
              {/* <TopPerformers /> */}
            </Grid><br />
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
            <Grid container item xs={12} spacing={1} lg={12} display={'flex'}>
              <Grid item lg={6}>
                <TopPerformers />
              </Grid>
              <Grid item lg={6}>
                <Avgcorrectans />
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={1} lg={12} display={'flex'}>
              <Grid item xs={12} lg={6}>
                <ReasonNeg />
              </Grid>
              <Grid item xs={12} lg={6}>
                <ReasonProp />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer >
  )
}

export default StudentAnalytics;
