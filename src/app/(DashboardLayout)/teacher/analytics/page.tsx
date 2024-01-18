'use client'
import { Grid, Box, Card } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import AvgParticipate from './AvgParticipate';
import Participate from './Participate';
import Performance from './Performance';
import Performers from "./Performers";
import PeertoPeer from './PeertoPeer';
import Avgcorrectans from './Avgcorrectans';
import TopPerformers from './TopPerformers';
import Wrongansfeed from './Wrongansfeed';
import { usePathname, useRouter } from 'next/navigation';
import '../analytics.css'
import './style.css'

const TeacherDashboard = () => {


  const router = useRouter();
  const pathname = usePathname();
  return (
    <PageContainer title="Analytics" description="this page is about Analytics">
      <div style={{ display: "flex", padding: 7 }}>
        <Grid container spacing={1} item xs={12}>
          <Grid item xs={12} lg={8.3}>
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
            </select>
          </Grid>
          <Grid item xs={12} lg={3.7}>
            <div style={{ justifyContent: "end" }}>
              <span onClick={() => router.push("/teacher/content")} className='pillbutton' style={pathname == "/teacher/content" ? { backgroundColor: "#a39c9c", color: "#2f2f2f" } : { backgroundColor: "#cfcdcd", color: "#2f2f2f" }} >Content</span>&emsp;
              <span onClick={() => router.push("/teacher/analytics")} className='pillbutton' style={pathname == "/teacher/analytics" ? { backgroundColor: "#a39c9c", color: "#2f2f2f" } : { backgroundColor: "#cfcdcd", color: "#2f2f2f" }} >Analytics</span>&emsp;
              <span onClick={() => router.push("/teacher/manage")} className='pillbutton' style={pathname == "/teacher/manage" ? { backgroundColor: "#a39c9c", color: "#2f2f2f" } : { backgroundColor: "#cfcdcd", color: "#2f2f2f" }} > Manage</span>
            </div>
          </Grid>
        </Grid>
      </div>
      <Box>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} lg={6}>
              <AvgParticipate />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Participate />
            </Grid>
            <Grid item xs={12} lg={5} >
              {/* <Performers /> */}
              <Performance />
            </Grid>
            <Grid container item xs={12} lg={2}><br />
              <div className="card1" style={{ width: 180, height: 90, padding: 15, textAlign: 'center', fontSize: 16 }} >
                No. of Students:<br /> <b>40</b>
              </div>
              <div className='card1' style={{ width: 180, height: 90, padding: 15, textAlign: 'center', fontSize: 16 }}>
                Total number of Quizzes:<br /> <b>45</b>
              </div><br />
            </Grid>
            <Grid container item xs={12} lg={5}>
              <TopPerformers />
            </Grid>
            <Grid container item xs={12} spacing={1} lg={12} >
              <Grid item xs={12} lg={2.4}>
                <div className="card1" style={{ height: 90, padding: 15, textAlign: 'center', fontSize: 16 }}>
                  <div > No. of Chapters:<br /> <b>56</b></div>
                </div>
              </Grid>
              <Grid item xs={12} lg={2.4}>
                <div className="card1" style={{ height: 90, padding: 15, textAlign: 'center', fontSize: 16 }}>
                  <div >No. of Topics:<br /> <b>340</b></div>
                </div>
              </Grid>
              <Grid item xs={12} lg={2.4}>
                <div className="card1" style={{ height: 90, padding: 15, textAlign: 'center', fontSize: 16 }}>
                  <div >No. of Questions: <br /><b>902</b></div>
                </div>
              </Grid>
              <Grid item xs={12} lg={2.4}>
                <div className="card1" style={{ padding: 5, height: 90, textAlign: 'center', fontSize: 16 }}>
                  <div >Total No. of Questions/ Queries:<br /><b>30</b></div>
                </div>
              </Grid>
              <Grid item xs={12} lg={2.4}>
                <div className="card1" style={{ padding: 5, height: 90, textAlign: 'center', fontSize: 16 }}>
                  <div >Total No. of Answers: <br /><b>239</b></div>
                </div>
              </Grid>
              <Grid container item xs={12} spacing={2} lg={12}>
                <Grid item xs={12} lg={4}>
                  <PeertoPeer />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Avgcorrectans />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Wrongansfeed />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer >
  )
}

export default TeacherDashboard;
