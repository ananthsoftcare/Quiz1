'use client'
import { Grid, Box, Card } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import ProfitExpenses from '@/app/(DashboardLayout)/components/dashboard/ProfitExpenses';
import TrafficDistribution from '@/app/(DashboardLayout)/components/dashboard/TrafficDistribution';
import UpcomingSchedules from '@/app/(DashboardLayout)/components/dashboard/UpcomingSchedules';
import TopPayingClients from '@/app/(DashboardLayout)/components/dashboard/TopPayingClients';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import ProductSales from '@/app/(DashboardLayout)/components/dashboard/ProductSales';
import TeacherBooks from '@/app/(DashboardLayout)/teacher/DashboardComponents/TeacherBooks';
import CumulativeParticipation from '../DashboardComponents/CumulativeParticipation';
import AverageClassPerform from '../DashboardComponents/AverageClassPerform';
import FAB from '../../components/dashboard/Fab';
import ParticipationInClass from '../DashboardComponents/ParticipationInClass';
import FABTeacher from '../DashboardComponents/TeacherFab';


const TeacherDashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <TeacherBooks />
          </Grid>
          <Grid item xs={12} lg={6}>

            <CumulativeParticipation />
            {/* <AverageClassPerform /> */}
          </Grid>

          {/* <Grid item xs={12}>
            <DashboardBooks />
          </Grid> */}
          {/* <Grid item xs={12} lg={8}>
            <ProfitExpenses />
          </Grid> */}
          <Grid item xs={12} lg={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <ParticipationInClass />
              </Grid>
              <Grid item xs={12} lg={6}>
                <AverageClassPerform />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} >
            <TopPayingClients />
          </Grid> */}
          {/* <Grid item xs={12}>
            <FABTeacher />
          </Grid> */}
        </Grid>
      </Box>
    </PageContainer >
  )
}

export default TeacherDashboard;
