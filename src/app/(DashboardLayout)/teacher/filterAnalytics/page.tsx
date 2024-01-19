'use client'
import { Grid, Box, Card } from '@mui/material';
import { useState } from 'react';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import AvgParticipate from './AvgParticipatefilter';
import Participate from './Participatefilter';
import Performance from './Performancefilter';
import Performers from "./Performersfilter";

import Avgcorrectans from './Avgcorrectansfilter';
import Wrongansfeed from './Wrongansfeedfilter';
import { usePathname, useRouter } from 'next/navigation';
import '../analytics.css'
import './style.css'
import PeertoPeerFilter from './PeertoPeerfilter';
import AvgcorrectansFilter from './Avgcorrectansfilter';
import AvgParticipateFilter from './AvgParticipatefilter';
import ParticipateFilter from './Participatefilter';
import PerformanceFilter from './Performancefilter';
import PerformersFilter from './Performersfilter';
import WrongansfeedFilter from './Wrongansfeedfilter';
const TeacherDashboardFilter = () => {
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

  const router = useRouter();
  const pathname = usePathname();
  return (
   

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
                    No. of Students <b>40</b>
                  </div>
                  <div className='card1' style={{ width: 200, height: 100, padding: 15, textAlign: 'center', fontSize: 16 }}>
                    Total number of Quizzes:<br /> <b>45</b>
                  </div><br />
                </Grid><Grid container item xs={12} lg={5}>
                  <PerformersFilter />
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
   
  )
}

export default TeacherDashboardFilter;
