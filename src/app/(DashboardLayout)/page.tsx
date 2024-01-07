'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import ProfitExpenses from '@/app/(DashboardLayout)/components/dashboard/ProfitExpenses';
import TrafficDistribution from '@/app/(DashboardLayout)/components/dashboard/TrafficDistribution';
import UpcomingSchedules from '@/app/(DashboardLayout)/components/dashboard/UpcomingSchedules';
import TopPayingClients from '@/app/(DashboardLayout)/components/dashboard/TopPayingClients';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import ProductSales from '@/app/(DashboardLayout)/components/dashboard/ProductSales';
import DashboardBooks from './components/dashboard/DashBoardBook';
import RadialBarChart from './components/dashboard/RadialBarChart';
import Content from './components/contentview/page';


const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <DashboardBooks />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ProfitExpenses />
          </Grid>

          {/* <Grid item xs={12}>
            <DashboardBooks />
          </Grid> */}
          {/* <Grid item xs={12} lg={8}>
            <ProfitExpenses />
          </Grid> */}
          <Grid item xs={12} lg={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4}>
                <TrafficDistribution />
                {/* <RadialBarChart /> */}
              </Grid>
              <Grid item xs={12} lg={4}>
                <ProductSales />
              </Grid>
              <Grid item xs={12} lg={4}>
                <UpcomingSchedules />
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid item xs={12} >
            <TopPayingClients />
          </Grid> */}
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
