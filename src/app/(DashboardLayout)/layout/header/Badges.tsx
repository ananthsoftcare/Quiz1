import { IconBellRinging, IconMenu, IconSpeakerphone } from "@tabler/icons-react";
import { Avatar, Badge, Box, Button, Card, CardActions, CardContent, Chip, Grid, IconButton, Link, Menu, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Shadow from "../../utilities/shadow/page";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import { useState } from "react";

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

const Badges = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        onClick={handleClick2}
      >
        <Badge variant="dot" color="primary">
          <IconSpeakerphone size="21" stroke="1.5" />
        </Badge>
      </IconButton>

      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            // width: "250px",
            maxHeight:"380px",
            border: '1px solid ddd'
          },
        }}
      >
        <Card elevation={8} variant="elevation" sx={{
          border: '1px solid #fff', backgroundColor: '#fff', overflow: 'auto',
          maxHeight: '420px', maxWidth: '397px', scrollbarwidth: 'thin', borderRadius: '4px',
        }}>
          {products.map((product, i) => {
            return (
              <div key={i} style={{ padding: 1, }}>
                <Card style={{ borderRadius: '4px', backgroundColor: product.pbg, }}>
                  <CardActions>
                    <Grid container item xs={12} direction={'row'}>
                      {/* <Grid item xs={1.5}>
                        <Avatar sx={{ width: 24, height: 24 }} style={{ backgroundColor: product.pbg, fontSize: 11 }}>{product.date}</Avatar>
                      </Grid> */}
                      <Grid item xs={10.5}>
                        <div>
                          <Link href={'/Announcement'}>
                          <Typography sx={{
                            ":hover": {
                              color: "#107869",
                              fontWeight: 'bold',
                            }, display: 'inline-flex',
                            fontSize: 14,
                            fontWeight: 'bold',
                            // textAlign: 'center',
                            // justifyContent: 'center',
                            alignItems: 'justify'
                            // color: product.clr
                          }}>{product.priority + product.date}</Typography>
                          </Link>
                        </div>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </div>
            )
          })}
          {/* <Link href={'/badges'}>
            <Button
              variant="contained"
              size="large"
              fullWidth
            >
              See all questions
            </Button>
          </Link> */}
        </Card>
      </Menu>
    </Box >
  );
};

export default Badges;
