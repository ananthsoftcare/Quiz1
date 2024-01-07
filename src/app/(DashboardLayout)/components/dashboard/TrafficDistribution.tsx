import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, Avatar, Box } from "@mui/material";
import { IconArrowUpLeft } from "@tabler/icons-react";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";


const TrafficDistribution = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const error = theme.palette.error.main;
  const secondary = theme.palette.secondary.light;
  const successlight = theme.palette.success.light;

  // chart
  // const optionscolumnchart: any = {
  //   chart: {
  //     width: 380,
  //     type: 'donut',
  //     dropShadow: {
  //       enabled: true,
  //       color: '#111',
  //       top: -1,
  //       left: 3,
  //       blur: 3,
  //       opacity: 0.2
  //     }
  //   },
  //   stroke: {
  //     width: 0,
  //   },
  //   plotOptions: {
  //     pie: {
  //       donut: {
  //         labels: {
  //           show: true,
  //           total: {
  //             showAlways: true,
  //             show: true
  //           }
  //         }
  //       }
  //     }
  //   },
  //   labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
  //   dataLabels: {
  //     dropShadow: {
  //       blur: 3,
  //       opacity: 0.8
  //     }
  //   },
  //   fill: {
  //     type: 'pattern',
  //     opacity: 1,
  //     pattern: {
  //       enabled: true,
  //       style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
  //     },
  //   },
  //   states: {
  //     hover: {
  //       filter: 'none'
  //     }
  //   },
  //   theme: {
  //     palette: 'palette2'
  //   },
  //   title: {
  //     // text: "Favourite Movie Type"
  //   },
  //   responsive: [{
  //     breakpoint: 480,
  //     options: {
  //       chart: {
  //         width: 200
  //       },
  //       legend: {
  //         position: 'bottom'
  //       }
  //     }
  //   }]
  // };
  // const seriescolumnchart: any = [5368, 3500, 4106];
  const seriescolumnchart: any = [92, 97, 95, 88, 99]
  const optionscolumnchart: any = {
    chart: {
      height: 'auto',
      type: 'polarArea'
    },
    labels: ['Maths', 'Biology', 'Chemistry', 'Physics', 'Communication'],
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      position: 'bottom'
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 0
        },
      }
    },
    theme: {
      mode: 'light',
      palette: 'palette10',
      monochrome: {
        enabled: false,
        color: '#255aee',
        shadeTo: 'light',
        shadeIntensity: 0.65
      }
    }
  }

  return (
    <DashboardCard title="Student Quiz"
      middlecontent={
        <Chart
          options={optionscolumnchart}
          series={seriescolumnchart}
          type='polarArea'
          width={"100%"}
          height="325px"
        />
      }>
    </DashboardCard >
  );
};

export default TrafficDistribution;
