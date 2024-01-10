'use client';
import { Card, Grid, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import './profile.teacher.css'
import Image from 'next/image';


const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      {/* <DashboardCard title="Sample Page"> */}
      <div className="containerprofile">
        <div className="cardprofile">
            <div className="card-headerprofile"></div>
            <div className="card-bodyprofile">
                <div className="innerprofile">
                    <div style={{fontSize: "18px",letterSpacing: ".5px",marginBottom: "10px"}}>Name<span className="color__grayprofile" style={{marginLeft: "10px"}}>26</span></div>
                    <div className="color__grayprofile" style={{fontSize: "13px",letterSpacing: ".5px"}}>Mobile Number</div>
                    <div className="color__grayprofile" style={{fontSize: "13px",letterSpacing: ".5px"}}>Location</div>
                </div>
            </div>
            <div className="card-footerprofile">
                <div className="innerprofile">
                    <div>4</div>
                    <div className="color__gray">Subjects</div>
                </div>
                <div className="innerprofile">
                    <div>125</div>
                    <div className="color__grayprofile">Quiz</div>
                </div>
                <div className="innerprofile">
                    <div>50</div>
                    <div className="color__grayprofile">Questions</div>
                </div>
            </div>
        </div>
    </div>



      {/* </DashboardCard> */}
    </PageContainer>
  );
};

export default SamplePage;

