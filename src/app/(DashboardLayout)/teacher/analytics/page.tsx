'use client'
import { Grid, Box, Card } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import AvgParticipate from './AvgParticipate';
import Participate from './Participate';
import Performance from './Performance';
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
      <div style={{ justifyContent: "end", display: "flex" }}>
        <span onClick={() => router.push("/teacher/content")} className='pillbutton' style={pathname == "/teacher/content" ? { backgroundColor: "#a39c9c", color: "#2f2f2f" } : { backgroundColor: "#cfcdcd", color: "#2f2f2f" }} >Content</span>&emsp;
        <span onClick={() => router.push("/teacher/analytics")} className='pillbutton' style={pathname == "/teacher/analytics" ? { backgroundColor: "#a39c9c", color: "#2f2f2f" } : { backgroundColor: "#cfcdcd", color: "#2f2f2f" }} >Analytics</span>&emsp;
        <span onClick={() => router.push("/teacher/manage")} className='pillbutton' style={pathname == "/teacher/manage" ? { backgroundColor: "#a39c9c", color: "#2f2f2f" } : { backgroundColor: "#cfcdcd", color: "#2f2f2f" }} > Manage</span>
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
            <Grid item xs={12} lg={6} >
              <Performance />
            </Grid>
            <Grid container item xs={12} lg={6}>
              <div className="card1" style={{ width: 230, height: 90 }} >
                No. of Students: <b>40</b>
              </div>
              <div className='card1' style={{ width: 230, height: 90 }}>
                Total number of Quizzes: <b>500</b>
              </div><br />

              <TopPerformers />
            </Grid>
            <Grid container item xs={12} spacing={1} lg={12} display={'flex'}>
              <Grid item lg={2}>
                <div className="card1" style={{ width: '90%', height: 90, padding: 15 }}>
                  <div > No. of Chapters: <b>56</b></div>
                </div>&nbsp;
                <div className="card1" style={{ width: '90%', height: 90, padding: 15 }}>
                  <div >No. of Topics: <b>500</b></div>
                </div>&nbsp;
                <div className="card1" style={{ width: '90%', height: 90, padding: 15 }}>
                  <div >No. of Questions: <b>500</b></div>
                </div>&nbsp;
              </Grid>
              <Grid item xs={12} lg={3} >
                <div className="card1" style={{ padding: 5, width: '90%' }}>
                  <div >Total No. of Questions / Queries:<b>556</b></div>
                </div>
                <PeertoPeer />
              </Grid>
              <Grid item xs={12} lg={3} >
                <div className="card1" style={{ padding: 5, width: '90%' }}>
                  <div >Total No. of Answers: <b>200</b></div>
                </div>&nbsp;
                <Avgcorrectans />
              </Grid>
              <Grid item xs={12} lg={4}>
                <Wrongansfeed />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer >
  )
}

export default TeacherDashboard;
