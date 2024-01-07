import React from "react";
import { MenuItem, Box, IconButton, Menu, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  "Action",
  "Another Action",
  "Something else here",
];

const ProfitExpenses = () => {
  // menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.error.main;

  //chart
  const optionscolumnchart: any = {
    options: {
      chart: {
        type: 'line',
      },
      fill: {
        opacity: 0.1
      },
      dropShadow: {
        enabled: false,
        top: 0,
        left: 0,
        blur: 0,
        opacity: 0
      },
      dataLabels: {
        dropShadow: false,
        enabled: true,
        style: {
          textShadow: false,
          textOutline: false
        }
      },

      grid: {
        strokeDashArray: 0,
        borderColor: "rgba(0,0,0,0.1)",
      },

      stroke: {
        show: true,
        curve: 'stepline',
        lineCap: 'butt',
        colors: undefined,
        width: 0,
        dashArray: 0,
        height: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
        ],
      },
    },
  };
  const seriescolumnchart: any = [
    {
      name: "Maths",
      data: [10, 41, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Physics",
      data: [40, 91, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "Biology",
      data: [55, 71, 42, 55, 62, 44, 62, 51],
    },
    {
      name: "Chemistry",
      data: [0, 58, 22, 35, 12, 30, 42, 31],
    },
    {
      name: "Communication",
      data: [100, 35, 10, 25, 42, 64, 82, 91],
    },
    {
      name: "Social Welfare",
      data: [80, 50, 42, 65, 82, 104, 120, 60],
    },
  ];

  // barchart
  // const seriescolumnchart: any = [{
  //   name: 'Maths A',
  //   data: [441, 515, 411, 671, 221, 411]
  // }, {
  //   name: 'Physics B',
  //   data: [131, 231, 201, 81, 113,127]
  // }, {
  //   name: 'Chemistry C',
  //   data: [111, 171, 115, 115, 211, 141]
  // }, {
  //   name: 'Communication D',
  //   data: [211, 71, 215, 113, 122, 118]
  // },{
  //   name: 'Social Welfare C',
  //   data: [311, 317, 315, 351, 411, 554]
  // },{
  //   name: 'Biology',
  //   data: [151, 217, 215, 215, 311, 124]
  // },]
  // const optionscolumnchart: any = {
  //   chart: {
  //     type: 'bar',
  //     height: 350,
  //     stacked: true,
  //     toolbar: {
  //       show: true
  //     },
  //     zoom: {
  //       enabled: true
  //     }
  //   },
  //   responsive: [{
  //     breakpoint: 480,
  //     options: {
  //       legend: {
  //         position: 'bottom',
  //         offsetX: -10,
  //         offsetY: 0
  //       }
  //     }
  //   }],
  //   plotOptions: {
  //     bar: {
  //       horizontal: false,
  //       borderRadius: 10,
  //       dataLabels: {
  //         total: {
  //           enabled: true,
  //           style: {
  //             fontSize: '13px',
  //             fontWeight: 900
  //           }
  //         }
  //       }
  //     },
  //   },
  //   xaxis: {
  //     type: 'datetime',
  //     categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
  //       '01/05/2011 GMT', '01/06/2011 GMT'
  //     ],
  //   },
  //   legend: {
  //     position: 'right',
  //     offsetY: 40
  //   },
  //   fill: {
  //     opacity: 1
  //   }
  // }

  //stacked bar

  // const seriescolumnchart: any = [{
  //   name: 'Physcis',
  //   data: [44, 55, 41, 37, 22, 43, 21]
  // }, {
  //   name: 'Chemistry',
  //   data: [53, 32, 33, 52, 13, 43, 32]
  // }, {
  //   name: 'Biology',
  //   data: [12, 17, 11, 9, 15, 11, 20]
  // }, {
  //   name: 'Maths',
  //   data: [9, 7, 5, 8, 6, 9, 4]
  // }, {
  //   name: 'Communication',
  //   data: [25, 12, 19, 32, 25, 24, 10]
  // }]
  // const optionscolumnchart: any = {
  //   chart: {
  //     type: 'bar',
  //     height: 350,
  //     stacked: true,
  //     stackType: '100%'
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: true,
  //     },
  //   },
  //   stroke: {
  //     width: 1,
  //     colors: ['#fff']
  //   },
  //   title: {
  //     text: '100% Stacked Bar'
  //   },
  //   xaxis: {
  //     categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
  //   },
  //   tooltip: {
  //     y: {
  //       formatter: function (val) {
  //         return val + "K"
  //       }
  //     }
  //   },
  //   fill: {
  //     opacity: 1

  //   },
  //   legend: {
  //     position: 'top',
  //     horizontalAlign: 'left',
  //     offsetX: 40
  //   }
  // }






return (
  <Card style={{ paddingRight: 5 }}

  // title="Profit & Expenses"
  // action={
  //   <>
  //     <IconButton
  //       aria-label="more"
  //       id="long-button"
  //       aria-controls={open ? "long-menu" : undefined}
  //       aria-expanded={open ? "true" : undefined}
  //       aria-haspopup="true"
  //       onClick={handleClick}
  //     >
  //       <MoreVertIcon />
  //     </IconButton>
  //     <Menu
  //       id="long-menu"
  //       MenuListProps={{
  //         "aria-labelledby": "long-button",
  //       }}
  //       anchorEl={anchorEl}
  //       open={open}
  //       onClose={handleClose}
  //     >
  //       {options.map((option) => (
  //         <MenuItem
  //           key={option}
  //           selected={option === "Pyxis"}
  //           onClick={handleClose}
  //         >
  //           {option}
  //         </MenuItem>
  //       ))}
  //     </Menu>
  //   </>
  // }
  >
    {/* <Box className="rounded-bars"> */}
    <Chart
      options={optionscolumnchart}
      series={seriescolumnchart}
      type='line'
      width={"100%"}
      height="315px"
    />
    {/* </Box> */}
  </Card>
);
};

export default ProfitExpenses;
