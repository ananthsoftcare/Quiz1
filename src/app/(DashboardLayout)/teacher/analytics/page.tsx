'use client'
import { Grid, Box, Card, IconButton } from '@mui/material';
import { useState } from 'react';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import AvgParticipate from './AvgParticipate';
import Participate from './Participate';
import Performance from './Performance';
import Performers from "./Performers";
import PeertoPeer from './PeertoPeer';
import Avgcorrectans from './Avgcorrectans';
import Wrongansfeed from './Wrongansfeed';
import { usePathname, useRouter } from 'next/navigation';
import '../analytics.css'
import './style.css'
import WrongansfeedFilter from '../filterAnalytics/Wrongansfeedfilter';
import AvgcorrectansFilter from '../filterAnalytics/Avgcorrectansfilter';
import PeertoPeerFilter from '../filterAnalytics/PeertoPeerfilter';
import PerformanceFilter from '../filterAnalytics/Performancefilter';
import ParticipateFilter from '../filterAnalytics/Participatefilter';
import AvgParticipateFilter from '../filterAnalytics/AvgParticipatefilter';
import PerformersFilter from '../filterAnalytics/Performersfilter';


const TeacherDashboard = () => {
  const [chapter1, setChapter1] = useState(true)
  const [chapter2, setChapter2] = useState(true)
  const [chapter3, setChapter3] = useState(true)
  const [chapter4, setChapter4] = useState(true)
  const [displayMain, setDisplayMain] = useState(true)

  const onStudentChange = (e: any) => {
    if (e.target.value === "All") {
      setDisplayMain(true)
    }
    else if (e.target.value === "Raju") {
      setDisplayMain(false)
    }
    else if (e.target.value === "Krishna") {
      setDisplayMain(true)
    }
    else if (e.target.value === "Velu") {
      setDisplayMain(true)
    }
    else if (e.target.value === "Saravana") {
      setDisplayMain(false)
    }
    else {
      setDisplayMain(false)
    }
  }
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

  const router = useRouter();
  const pathname = usePathname();
  return (
    <PageContainer title="Analytics" description="this page is about Analytics" >
      <Grid container spacing={1} item xs={12} lg={12} marginBottom={1}>
        <Grid item xs={12} lg={0.8}>
          <div style={{ paddingTop: 23 }}>
            <span style={{ fontWeight: 'bold', color: '#713593' }}> Filter By  </span>
          </div>
        </Grid>
        <Grid item xs={12} lg={2.5}>
          {/* <b> Filter By  </b> */}
          <span style={{ fontWeight: 'bold', color: '#073763' }}>Chapter</span>
          <select name="Chapter" id="Chapter" >
            <option value="All">All</option>
            <option value="Chapter 1">Chapter 1</option>
            <option value="Chapter 2">Chapter 2</option>
            <option value="Chapter 3">Chapter 3</option>
            <option value="Chapter 4">Chapter 4</option>
            <option value="Chapter 5">Chapter 5</option>
          </select>
        </Grid>
        <Grid item xs={12} lg={2.5}>
          <span style={{ fontWeight: 'bold', color: '#faa917' }}>Topic</span>
          <select name="Topic" id="Topic">
            <option value="All">All</option>
            <option value="Analytical Essay">Analytical Essay</option>
            <option value="Argumentative Essay">Argumentative Essay</option>
            <option value="Endpoints">Endpoints (Root)</option>
            <option value="City">City Config</option>
          </select>
        </Grid>
        <Grid item xs={12} lg={2.5}>
          <span style={{ fontWeight: 'bold', color: '#a5cd39' }}>Student</span>
          <select name="Topic" id="Topic" onChange={onStudentChange}>
            <option value="All">All</option>
            <option value="Raju">Raju</option>
            <option value="Krishna">Krishna</option>
            <option value="Saravana">Saravana</option>
            <option value="Velu">Velu</option>
          </select>
        </Grid>
        <Grid item xs={12} lg={3.7} justifyContent={'flex-end'} alignItems={'flex-end'} textAlign={'end'}>
          <div style={{ paddingTop: 23 }}>
            <span onClick={() => router.push("/teacher/content")} className='pillbutton' style={pathname == "/teacher/content" ? { backgroundColor: "#a39c9c", color: "#2f2f2f" } : { backgroundColor: "#cfcdcd", color: "#2f2f2f" }} >Content</span>&emsp;
            <span onClick={() => router.push("/teacher/analytics")} className='pillbutton' style={pathname == "/teacher/analytics" ? { backgroundColor: "#a39c9c", color: "#2f2f2f" } : { backgroundColor: "#cfcdcd", color: "#2f2f2f" }} >Analytics</span>&emsp;
            <span onClick={() => router.push("/teacher/manage")} className='pillbutton' style={pathname == "/teacher/manage" ? { backgroundColor: "#a39c9c", color: "#2f2f2f" } : { backgroundColor: "#cfcdcd", color: "#2f2f2f" }} > Manage</span>
          </div>
        </Grid>
      </Grid>
      {
        displayMain ? (
          <Box>
            <Grid item xs={12} lg={12}>
              <Grid container spacing={1}>
                {chapter2 ? (
                  <><Grid item xs={12} lg={6}>
                    <AvgParticipate />
                  </Grid><Grid item xs={12} lg={6}>
                      <Participate />
                    </Grid></>
                ) : ""}
                {chapter3 ? (
                  <><Grid item xs={12} lg={5}>
                    <Performance />
                  </Grid><Grid container item xs={12} lg={2} spacing={0.25} style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row", alignContent: "space-evenly" }}>
                      <div className="card1" style={{ width: 200, height: 100, padding: 15, textAlign: 'center', alignContent: 'center', fontSize: 16 }}>
                        No. of Students <b>40</b>
                      </div>
                      <div className='card1' style={{ width: 200, height: 100, padding: 15, textAlign: 'center', fontSize: 16 }}>
                        Total number of Quizzes:<br /> <b>45</b>
                      </div><br />
                    </Grid><Grid container item xs={12} lg={5}>
                      <Performers />
                      {/* <TopPerformers /> */}
                    </Grid></>) : ""}

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
                    <div className="card1" style={{ padding: 10, height: 90, textAlign: 'center', fontSize: 16 }}>
                      <div >Total No. of Answers: <br /><b>239</b></div>
                    </div>
                  </Grid>
                </Grid>

                {chapter4 ? (
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
                ) : ""}

              </Grid>
            </Grid>
          </Box>
        ) :
          <Box>
            <Grid item xs={12} lg={12}>
              <Grid container spacing={1}>
                {chapter2 ? (
                  <><Grid item xs={12} lg={6}>
                    <AvgParticipateFilter />
                  </Grid><Grid item xs={12} lg={6}>
                      <ParticipateFilter />
                    </Grid></>
                ) : ""}
                {chapter3 ? (
                  <><Grid item xs={12} lg={5}>
                    <PerformanceFilter />
                  </Grid><Grid container item xs={12} lg={2} spacing={0.25} style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row", alignContent: "space-evenly" }}>
                      <div className="card1" style={{ width: 200, height: 100, padding: 15, textAlign: 'center', alignContent: 'center', fontSize: 16 }}>
                        No. of Students<br /> <b>1</b>
                      </div>
                      <div className='card1' style={{ width: 200, height: 100, padding: 15, textAlign: 'center', fontSize: 16 }}>
                        Total number of Quizzes:<br /> <b>5</b>
                      </div><br />
                    </Grid><Grid container item xs={12} lg={5}>
                      <PerformersFilter />
                      {/* <TopPerformers /> */}
                    </Grid></>) : ""}

                <Grid container item xs={12} spacing={1} lg={12} >
                  <Grid item xs={12} lg={2.4}>
                    <div className="card1" style={{ height: 90, padding: 15, textAlign: 'center', fontSize: 16 }}>
                      <div > No. of Chapters:<br /> <b>20</b></div>
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={2.4}>
                    <div className="card1" style={{ height: 90, padding: 15, textAlign: 'center', fontSize: 16 }}>
                      <div >No. of Topics:<br /> <b>40</b></div>
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={2.4}>
                    <div className="card1" style={{ height: 90, padding: 15, textAlign: 'center', fontSize: 16 }}>
                      <div >No. of Questions: <br /><b>92</b></div>
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={2.4}>
                    <div className="card1" style={{ padding: 5, height: 90, textAlign: 'center', fontSize: 16 }}>
                      <div >Total No. of Questions/ Queries:<br /><b>130</b></div>
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={2.4}>
                    <div className="card1" style={{ padding: 10, height: 90, textAlign: 'center', fontSize: 16 }}>
                      <div >Total No. of Answers: <br /><b>109</b></div>
                    </div>
                  </Grid>
                </Grid>

                {chapter4 ? (
                  <Grid container item xs={12} spacing={2} lg={12}>
                    <Grid item xs={12} lg={4}>
                      <PeertoPeerFilter />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <AvgcorrectansFilter />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <WrongansfeedFilter />
                    </Grid>
                  </Grid>
                ) : ""}

              </Grid>
            </Grid>
          </Box>
      }
    </PageContainer >
  )
}

export default TeacherDashboard;
