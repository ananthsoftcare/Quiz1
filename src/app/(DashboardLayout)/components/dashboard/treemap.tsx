
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab, Box } from '@mui/material';
import { IconArrowDownRight, IconCurrencyDollar } from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
// import Chart from "react-apexcharts";

const Treemaps = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const errorlight = '#fdede8';

  // chart
  const optionscolumnchart: any = {
    legend: {
      show: false
    },
    chart: {
      height: 350,
      type: 'treemap',
      sparkline: {
        enabled: true
      },
      toolbar:{
        show:false
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
      },
      // formatter: function (text, op) {
      //   return [text, op.value]
      // },
      offsetY: -4
    },
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            {
              from: 90,
              to: 100,
              color: '#6aa84f'
            },
            {
              from: 80,
              to: 89,
              color: '#f1c232'
            },
            {
              from: 70,
              to: 79,
              color: '#e9a35a'
            },
            {
              from: 60,
              to: 70,
              color: '#5387b6'
            },
            {
              from: 50,
              to: 60,
              color: '#99999'
            }
          ]
        }
      }
    }
  }
  const seriescolumnchart: any = [
    {
      data: [
        {
          x: 'Maths',
          y: 91
        },
        {
          x: 'Physics',
          y: 84
        },
        {
          x: 'Chemistry',
          y: 75
        },
        {
          x: 'Biology',
          y: 34
        },
        {
          x: 'Communication',
          y: 63
        },
        {
          x: 'Social Welfare',
          y: 58
        },
      ]
    }
  ]

  return (
    // <DashboardCard
    //     title="Student"
    //     action={
    //         <Fab color="error" size="medium" sx={{ color: '#ffffff' }}>
    //             <IconCurrencyDollar width={24} />
    //         </Fab>
    //     }
    //     footer={
    <DashboardCard title="Peer Student Count"
      middlecontent={
        <Box className="rounded-bars" sx={{padding:0}}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="treemap"
            width={"100%"}
            height={300} />
        </Box>
      }
    />
    //     }
    // >
    // </DashboardCard>
  );
};

export default Treemaps;
