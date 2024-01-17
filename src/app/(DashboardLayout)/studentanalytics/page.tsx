'use client'
import { Grid, Box, Card } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import AvgParticipate from './QuizSession';
import Participate from './Participate';
import Performance from './Performance';
import PeertoPeer from './PeertoPeer';
import QuizSession from "./QuizSession"
import Avgcorrectans from './Avgcorrectans';
import TopPerformers from './TopPerformers';
import Wrongansfeed from './Wrongansfeed';
import "./style.css"
import ReasonNeg from './ReasonNeg';
import ReasonProp from './ReasonProp';

const TeacherDashboard = () => {
  return (
    <PageContainer title="Analytics" description="this page is about Analytics">
      <Box>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} lg={6}>
              Filter By: &nbsp;

              <select name="Chapter" id="Chapter">
                <option value="All">All</option>
                <option value="Chapter 1">Chapter 1</option>
                <option value="Chapter 2">Chapter 2</option>
                <option value="Chapter 3">Chapter 3</option>
                <option value="Chapter 4">Chapter 4</option>
                <option value="Chapter 5">Chapter 5</option>
              </select>&nbsp;
              <select name="Topic" id="Topic">
                <option value="All">All</option>
                <option value="Analytical Essay">Analytical Essay</option>
                <option value="Argumentative Essay">Argumentative Essay</option>
                <option value="Endpoints (Root)">Endpoints (Root)</option>
                <option value="City Config">City Config</option>
              </select><br /><br /><br />

              <Performance />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Grid item display={'flex'}>
                <div className="card1" style={{ width: "100%", height: 80, fontSize: 16 }} >
                  Overall Score<b>&nbsp;&nbsp;69%</b>
                </div>
              </Grid>
              <QuizSession />
              {/* <TopPerformers /> */}
            </Grid>
            <Grid container item xs={12} spacing={1} lg={12} >
              <Grid container item xs={12} lg={4}>
                <div className="card1" style={{ width: 130, height: 90, padding: 15, fontSize: 16 }} >
                  Total No. of Quiz Sessions  <b>40</b>
                </div>
                <div className='card1' style={{ width: 130, height: 90, padding: 15, fontSize: 16 }}>
                  Successful Sessions:  <b>35</b>
                </div>
                <TopPerformers />
              </Grid>
              <Grid container item xs={12} spacing={1} lg={8} display={'flex'}>
                <Grid item lg={2}>
                  <div className="card1" style={{ width: '90%', height: 90, padding: 15 }}>
                    <div > No. of Chapters: <b>56</b></div>
                  </div>&nbsp;
                  <div className="card1" style={{ width: '90%', height: 90, padding: 15 }}>
                    <div >No. of Topics: <b>340</b></div>
                  </div>&nbsp;
                  <div className="card1" style={{ width: '90%', height: 90, padding: 15 }}>
                    <div >No. of Questions: <b>902</b></div>
                  </div>&nbsp;
                </Grid>
                <Grid item xs={12} lg={5} >
                  <div className="card1" style={{ padding: 5, width: '100%' }}>
                    <div >Peer to Peer participation Questions raised and answered:<b>30</b></div>
                  </div>
                  <PeertoPeer />
                </Grid>
                <Grid item xs={12} lg={5} >
                  <div className="card1" style={{ padding: 5, width: '100%' }}>
                    <div >Avg. time spent on a quiz question <b>2.39 Min</b></div>
                  </div>
                  <Avgcorrectans />
                </Grid>
              </Grid>

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

export default TeacherDashboard;
