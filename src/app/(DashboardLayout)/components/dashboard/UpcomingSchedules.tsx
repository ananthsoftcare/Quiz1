import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { Box, Card, CardContent, Chip, Grid, Link, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Shadow from "../../utilities/shadow/page";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';

const products = [
  {
    id: "1",
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "Physics Next Quiz : Due Date :Physics Next Quiz : Due Date :Physics Next Quiz : Due Date :",
    pbg: "#e0faf7",
    date: "1st January",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "Communication Next Quiz : Due Date :",
    pbg: "#fff",
    date: "29th March",
  },
  {
    id: "3",
    name: "Christopher",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "Biology Next Quiz : Due Date :",
    pbg: "#e0faf7",
    date: "1st April",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    priority: "Chemistry Next Quiz : Due Date :",
    pbg: "#fff",
    date: "30th May",
  },
  {
    id: "5",
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "Physics Next Quiz : Due Date :",
    pbg: "#e0faf7",
    date: "1st January",
  },
  {
    id: "6",
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "Communication Next Quiz : Due Date :",
    pbg: "#fff",
    date: "29th March",
  },
  {
    id: "7",
    name: "Christopher",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "Biology Next Quiz : Due Date :",
    pbg: "#e0faf7",
    date: "1st April",
  },
  {
    id: "8",
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    priority: "Chemistry Next Quiz : Due Date :",
    pbg: "#fff",
    date: "30th May",
  },
  {
    id: "9",
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "Communication Next Quiz : Due Date :",
    pbg: "#e0faf7",
    date: "29th March",
  },
  {
    id: "10",
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "Biology Next Quiz : Due Date :",
    pbg: "#fff",
    date: "1st April",
  }
];

const UpcomingSchedules = () => {
  return (
    <DashboardCard title="Remainders"
      middlecontent={<Box sx={{
        overflow: "auto", maxHeight: '295px', scrollbarwidth: 'thin'}}>
        <Grid >
          {products.length > 0 ? (
            <Table size="small" aria-label="purchases" >
              <TableBody>
                {products.map((product, i) => {
                  return (
                    <TableRow key={product.id}>
                      <TableCell
                        sx={{
                          ":hover": {
                            color: "#0085db",
                            display: 'flex',
                            padding: "10px 15px 10px 15px",
                            // background: 'linear-gradient(32deg,#fff, #fff, #fff,#fff)',
                            boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                          },
                          px: "1px",
                          padding: "10px 15px 10px 15px",
                          backgroundColor: product.pbg,
                          display: 'flex',
                        }}
                        size="small"
                      ><WatchLaterOutlinedIcon style={{ height: 20 }} />&emsp; {""}<span style={{ fontWeight: 'bold' }}>{product.priority + product.date}</span></TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          ) : ""}
        </Grid>
        {/* <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        <Table
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell style={{ padding: 4 }}>
                  <Chip
                    sx={{
                      ":hover": {
                        color: "#fff",
                        background: 'linear-gradient(32deg,#6aa84f, #6aa84f, #6aa84f,#6aa84f)',
                        boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                      },
                      px: "1px",
                      backgroundColor: product.pbg,
                      color: "#fff",
                    }}
                    size="small"
                    label={product.priority + product.date}
                  ></Chip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box> */}
      </Box>}>
    </DashboardCard>
    // <DashboardCard title="Remainders">
    //   <Box sx={{
    //     maxHeight: '170px',
    //     overflow: "auto",
    //     scrollbarwidth: 'thin',
    //     '&::-webkit-scrollbar': {
    //       width: '0.4em',
    //     },
    //     '&::-webkit-scrollbar-track': {
    //       background: "#CDF7F6",
    //     },
    //     '&::-webkit-scrollbar-thumb': {
    //       backgroundcolor: '#82EEFD',
    //     },
    //     '&::-webkit-scrollbar-thumb:hover': {
    //       background: '#82EEFD'
    //     }
    //   }}>
    //     <Timeline
    //       className="theme-timeline"
    //       nonce={undefined}
    //       onResize={undefined}
    //       onResizeCapture={undefined}
    //       sx={{
    //         p: 0,
    //         mb: { lg: "-10px" },
    //         "& .MuiTimelineConnector-root": {
    //           width: "1px",
    //           backgroundColor: "#efefef",
    //         },
    //         [`& .${timelineOppositeContentClasses.root}`]: {
    //           flex: 0.5,
    //           paddingLeft: 0,
    //         },
    //       }}
    //     >
    //       <TimelineItem>
    //         {/* <TimelineSeparator>
    //           <TimelineDot color="primary" variant="outlined" />
    //           <TimelineConnector />
    //         </TimelineSeparator> */}
    //          <TimelineDot color="primary" variant="outlined" />
    //         <TimelineOppositeContent>10:30 am</TimelineOppositeContent>
    //         <TimelineContent>
    //           Physics
    //         </TimelineContent>
    //       </TimelineItem>
    //       <TimelineItem>
    //         {/* <TimelineSeparator> */}
    //           <TimelineDot color="primary" variant="outlined" />
    //           {/* <TimelineConnector /> */}
    //         {/* </TimelineSeparator> */}
    //         <TimelineOppositeContent>08:30 am</TimelineOppositeContent>
    //         <TimelineContent>
    //           Maths
    //         </TimelineContent>
    //       </TimelineItem>
    //       <TimelineItem>
    //         {/* <TimelineSeparator> */}
    //           <TimelineDot color="primary" variant="outlined" />
    //           {/* <TimelineConnector />
    //         </TimelineSeparator> */}
    //         <TimelineOppositeContent>07:30 am</TimelineOppositeContent>
    //         <TimelineContent>
    //           Chemistry
    //         </TimelineContent>
    //       </TimelineItem>
    //       <TimelineItem>
    //         {/* <TimelineSeparator> */}
    //           <TimelineDot color="primary" variant="outlined" />
    //           {/* <TimelineConnector />
    //         </TimelineSeparator> */}
    //         <TimelineOppositeContent>06:30 am</TimelineOppositeContent>
    //         <TimelineContent>
    //           Biology
    //         </TimelineContent>
    //       </TimelineItem>
    //       <TimelineItem>
    //         {/* <TimelineSeparator> */}
    //           <TimelineDot color="primary" variant="outlined" />
    //           {/* <TimelineConnector />
    //         </TimelineSeparator> */}
    //         <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
    //         <TimelineContent>
    //           Physics
    //         </TimelineContent>
    //       </TimelineItem>
    //       {/* <TimelineItem>
    //         <TimelineOppositeContent>10:00 am</TimelineOppositeContent>
    //         <TimelineSeparator>
    //           <TimelineDot color="secondary" variant="outlined" />
    //           <TimelineConnector />
    //         </TimelineSeparator>
    //         <TimelineContent>
    //           <Typography fontWeight="600">New sale recorded</Typography>{" "}
    //           <Link href="/" underline="none">
    //             #ML-3467
    //           </Link>
    //         </TimelineContent>
    //       </TimelineItem> */}
    //       <TimelineItem>
    //         {/* <TimelineSeparator> */}
    //           <TimelineDot color="grey" variant="outlined" />
    //           {/* <TimelineConnector />
    //         </TimelineSeparator> */}
    //         <TimelineOppositeContent>12:00 pm</TimelineOppositeContent>
    //         <TimelineContent>
    //           Communication
    //         </TimelineContent>
    //       </TimelineItem>
    //       {/* <TimelineItem>
    //         <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
    //         <TimelineSeparator>
    //           <TimelineDot color="warning" variant="outlined" />
    //           <TimelineConnector />
    //         </TimelineSeparator>
    //         <TimelineContent>
    //           <Typography fontWeight="600">New sale recorded</Typography>{" "}
    //           <Link href="/" underline="none">
    //             #ML-3467
    //           </Link>
    //         </TimelineContent>
    //       </TimelineItem> */}
    //       {/* <TimelineItem>
    //         <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
    //         <TimelineSeparator>
    //           <TimelineDot color="error" variant="outlined" />
    //           <TimelineConnector />
    //         </TimelineSeparator>
    //         <TimelineContent>
    //           <Typography fontWeight="600">New arrival recorded</Typography>
    //         </TimelineContent>
    //       </TimelineItem> */}
    //       <TimelineItem>
    //         {/* <TimelineSeparator> */}
    //           <TimelineDot color="success" variant="outlined" />
    //         {/* </TimelineSeparator> */}
    //         <TimelineOppositeContent>2:00 pm</TimelineOppositeContent>
    //         <TimelineContent>Biology </TimelineContent>
    //       </TimelineItem>
    //     </Timeline>

    //   </Box>
    // </DashboardCard>
  );
};

export default UpcomingSchedules;
