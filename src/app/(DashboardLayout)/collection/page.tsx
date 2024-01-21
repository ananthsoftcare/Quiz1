"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowUpIcon from '@mui/icons-material/ArrowDropUp';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './collection.css';
import { Alert, Avatar, Button, Card, CardActionArea, CardContent, CardMedia, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Stack, TablePagination, Tooltip, styled } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },

}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function createData(
  name: string,
  description: string,
  fat: string,
) {
  return {
    name,
    description,
    fat,
    history: [
      {
        subject: 'Biology',
        chapter: 'Fertility',
        important: "polymorphism",
      },
      {
        subject: 'Biology',
        chapter: 'Photosynthesis',
        important: 'poly',
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  //   const { index} = props;
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const [openModalAddLabel, setOpenModalAddLabel] = React.useState(false)
const [messageTrue,setMessageTrue] = React.useState(false)

  const handleshowmodal = () => {
    setOpenModalAddLabel(true)
  }

  const handleClose = () => {
    setOpenModalAddLabel(false)

    setMessageTrue(true)
    setTimeout(() => {
      setMessageTrue(false)
    }, 2000)
  }


  const users = [
    {
      "id": 1,
      "userName": "Raghul",
      "location": "U.K",
      "img": "https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?w=1060&t=st=1705762720~exp=1705763320~hmac=7b00f0ddec55f88b4d7efb77a4285a8accefb4f3934c24b7a04ff042fd7a8e5d"
    },
    {
      "id": 2,
      "userName": "Ravi",
      "location": "United",
      "img": "https://img.freepik.com/free-photo/fun-3d-cartoon-illustration-indian-businessman_183364-114457.jpg?w=740&t=st=1705762375~exp=1705762975~hmac=f44f94db8f7107db3d65d1fe632358abebc7ae6b947f9be090f58fd1b038d9e2"
    },
    {
      "id": 3,
      "userName": "sharuk",
      "location": "United kingdom",
      "img": "https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?w=740&t=st=1705762438~exp=1705763038~hmac=939afc2997ab45f05176a2fddebc9c4e56057ba9647b94d89215ea77ebb361b4"
    },
    {
      "id": 4,
      "userName": "Abdullah",
      "location": "Japan",
      "img": "https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?w=740&t=st=1705762438~exp=1705763038~hmac=939afc2997ab45f05176a2fddebc9c4e56057ba9647b94d89215ea77ebb361b4"
    },
    {
      "id": 5,
      "userName": "Bishnoi",
      "location": "Pakistan",
      "img": "https://img.freepik.com/free-photo/fun-3d-illustration-cartoon-police-officer_183364-81207.jpg?w=360&t=st=1705761003~exp=1705761603~hmac=d30f0ca449689308e60690f9e77d489bed99ea992c78a60a5a5be074a9cfa13c"
    }, {
      "id": 6,
      "userName": "Ravi Bishnoi",
      "location": "United",
      "img": "https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?w=740&t=st=1705762438~exp=1705763038~hmac=939afc2997ab45f05176a2fddebc9c4e56057ba9647b94d89215ea77ebb361b4"
    }, {
      "id": 7,
      "userName": "Mahendran ",
      "location": "United",
      "img": "https://img.freepik.com/free-photo/fun-3d-cartoon-illustration-indian-businessman_183364-114457.jpg?w=740&t=st=1705762375~exp=1705762975~hmac=f44f94db8f7107db3d65d1fe632358abebc7ae6b947f9be090f58fd1b038d9e2"
    }, {
      "id": 8,
      "userName": "Sachin ",
      "location": "United",
      "img": "https://img.freepik.com/free-vector/boy-student-sitting-stack-books-with-laptop-flat-icon-illustration_1284-64037.jpg?w=740&t=st=1705762520~exp=1705763120~hmac=32a49fdd1505cd44181da8ed951d35f028eca91c95013db381a34359e3e5547b"
    }, {
      "id": 9,
      "userName": "Sara Arjun",
      "location": "United",
      "img": "https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?w=1060&t=st=1705762720~exp=1705763320~hmac=7b00f0ddec55f88b4d7efb77a4285a8accefb4f3934c24b7a04ff042fd7a8e5d"
    }, {
      "id": 10,
      "userName": "Ravi",
      "location": "United",
      "img": "https://img.freepik.com/free-vector/man-working-computer-home_1308-102130.jpg?w=1380&t=st=1705762539~exp=1705763139~hmac=ccba77a0dfb51d50a91ef1e20c250eb9c1838f01981b156abf2b9997891a2dbb"
    }, {
      "id": 11,
      "userName": "Arjun",
      "location": "United",
      "img": "https://img.freepik.com/free-photo/fun-3d-cartoon-illustration-indian-businessman_183364-114457.jpg?w=740&t=st=1705762375~exp=1705762975~hmac=f44f94db8f7107db3d65d1fe632358abebc7ae6b947f9be090f58fd1b038d9e2"
    }
  ]

  const [shareBackgroundColor,setShareBackgroundColor] =React.useState(false)

const handleshare = (e:any) =>{
  console.log("etargte",e.target.value)
  let value = e.target.id;
  const filtered = users.filter((row) =>
  row.id === value
);
  const usersId = users.map(response =>response.id)
  if(filtered){
  setShareBackgroundColor(true)
  }
}


  return (
    <React.Fragment>
   {messageTrue ?
        <Stack sx={{ display: "flex", alignItems: "center" }} spacing={2}>
          <Alert variant="filled" style={{ color: 'white' }} severity="success">
          Shared Suucessfully
          </Alert>
        </Stack> : ""}


      <BootstrapDialog
        // onClose={handleClose}
        fullWidth
        maxWidth='lg'
        //  style={{height:"50%"}}
        open={openModalAddLabel}
      >
        <DialogTitle sx={{ m: 0, p: "10px 3px 5px 10px", backgroundColor: "rgb(0 133 219 / 66%)", color: "white" }} id="customized-dialog-title">
          Share Collection
        </DialogTitle>
        <IconButton
          aria-label="close"
          //   onClick={() => handleCloseAllModal()}
          sx={{
            position: 'absolute',
            padding: "5px 0px 5px 0px",
            right: 8,
            // top: 2,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon style={{ color: "white" }} onClick={() => handleClose()} />
        </IconButton>
        <DialogContent dividers>
          <div className='carddesign' >
            {users.map((usersresponse) => (
              <Card key={usersresponse.id} className='cardforall' style={shareBackgroundColor ? {backgroundColor:"green"}:{}} sx={{ maxWidth: 345 }}>
                <CardActionArea key={usersresponse.id}>
                  {/* <CardMedia
     component="img"
     height="140"
     image="/static/images/cards/contemplative-reptile.jpg"
     alt="green iguana"
   /> */}
                  <CardContent>
                    <Grid container spacing={{ xs: 1, md: 4 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}>
                      <Grid item xs={3}>
                        <Avatar src={usersresponse.img} />
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant='h6'>{usersresponse.userName}</Typography>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 50 50"><path fill="currentColor" d="m25 42.5l-.8-.9C23.7 41.1 12 27.3 12 19c0-7.2 5.8-13 13-13s13 5.8 13 13c0 8.3-11.7 22.1-12.2 22.7zM25 8c-6.1 0-11 4.9-11 11c0 6.4 8.4 17.2 11 20.4c2.6-3.2 11-14 11-20.4c0-6.1-4.9-11-11-11" /><path fill="currentColor" d="M25 24c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5m0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3" /></svg>
                          {usersresponse.location}
                        </span>
                      </Grid>
                      <Grid item xs={3}  justifyContent="end" top="10px"  display="flex" style={{padding:"35px 0 0 0"}}>
                      <div className="checkbox-wrapper-39">
  <label>
    <input type="checkbox"/>
    <span className="checkbox" ></span>
  </label>
</div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>

          {/* <Grid container spacing={{ xs: 1, md: 4 }}
						columns={{ xs: 4, sm: 8, md: 12 }}>
						<Grid item xs={3}>
							<label>UserName</label>
						</Grid>
						<Grid item xs={9}>
							<input style={{ width: "100%" }} name="Email" id="Email" className="input" type="select" />
						</Grid>
					</Grid> */}
        </DialogContent>
        <DialogActions>
          <div style={{ justifyContent: "flex-end", display: "flex", padding: "5px" }}>
            <Button style={{ justifyContent: "end", display: "flex", color: "white", backgroundColor: "rgb(0, 133, 219)" }} onClick={() => handleClose()}>Share</Button>
          </div>
        </DialogActions>
      </BootstrapDialog>

      <TableRow className='managerows ' sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell padding="checkbox">
          <Checkbox
            style={{ color: "grey" }}
            color="primary"
          // checked={isItemSelected}
          // inputProps={{
          //   'aria-labelledby': labelId,
          // }}
          />
        </TableCell>
        {/* <TableCell style={{padding:"5px 5px 5px 5px"}} component="th" scope="row">
          {index + 1 }
        </TableCell> */}
        <TableCell style={{ padding: "5px 5px 5px 5px" }} component="th" scope="row">
          <b> {row.name}</b>
        </TableCell>
        <TableCell style={{ padding: "5px 5px 5px 5px" }} align="left">{row.description}
          {row.fat === "Biology" || row.fat === "Maths" || row.fat === "Physics" ?
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon fontSize='medium' style={{ fontWeight: "bold" }} /> : <KeyboardArrowDownIcon style={{ fontWeight: "bold" }} fontSize='medium' />}
            </IconButton>
            : ""}
        </TableCell>
        <TableCell style={{ padding: "5px 5px 5px 5px" }} align="right">
          {
            row.fat === "Maths" ?
              <button onClick={() => router.push('/maths')} className='pill'>Apply and View</button>
              : row.fat === "Biology" ? <button onClick={() => router.push('/biology')} className='pill'>Apply and View</button>
                : row.fat === "Chemistry" ? <button onClick={() => router.push('/chemistry')} className='pill'>Apply and View</button>
                  : row.fat === "Physics" ? <button onClick={() => router.push('/physics')} className='pill'>Apply and View</button>
                    : row.fat === "Communication" ? <button onClick={() => router.push('/communication')} className='pill'>Apply and View</button>
                      : row.fat === "Social Welfare" ? <button onClick={() => router.push('/socialwelfare')} className='pill'>Apply and View</button> : ""}
        </TableCell>
        <TableCell align="left" style={{ width: "10%" }}>{
          row.fat === "Maths" ? <div className="container">
            {/* <span className="icon"></span> */}
            <span className="label" style={{ textAlign: "center", color: 'white', width: "100%", padding: "6px", backgroundColor: "rgb(0, 143, 251)", borderRadius: "7px" }}><b>Maths</b></span></div>
            : row.fat === "Biology" ? <div className="container">
              {/* <span className="icon"><BiotechIcon style={{ height: '38px', width: '38px' }} color="info" /></span> */}
              <span className="label" style={{ textAlign: "center", color: 'white', padding: "6px", width: "100%", backgroundColor: "rgb(254, 176, 25)", borderRadius: "7px" }}><b>Biology</b></span></div>
              : row.fat === "Chemistry" ? <div className="container">
                {/* <span className="icon"><ScienceIcon style={{ height: '38px', width: '38px' }} color="info" /></span> */}
                <span className="label" style={{ textAlign: "center", color: 'white', padding: "6px", width: "100%", backgroundColor: "rgb(255, 69, 96)", borderRadius: "7px" }}><b>Chemistry</b></span></div>
                : row.fat === "Physics" ? <div className="container">
                  {/* <span className="icon"></span> */}
                  <span className="label" style={{ textAlign: "center", color: 'white', width: "100%", padding: "6px", backgroundColor: "rgb(0, 227, 150)", borderRadius: "7px" }}><b>Physics</b></span>
                </div>
                  : row.fat === "Communication" ? <div className="container">
                    {/* <span className="icon"><SmsIcon style={{ height: '38px', width: '38px' }} color="info" /></span> */}
                    <span className="label" style={{ textAlign: "center", color: 'white', width: "100%", padding: "6px", backgroundColor: "rgb(119, 93, 208) ", borderRadius: "7px" }}><b>Communication</b></span></div>
                    : row.fat === "Social Welfare" ? <div className="container">
                      {/* <span className="icon"><PublicIcon style={{ height: '38px', width: '38px' }} color="info" /></span> */}
                      <span className="label" style={{ textAlign: "center", color: 'white', width: "100%", padding: "6px", backgroundColor: "grey ", borderRadius: "7px" }}><b >Social Welfare</b></span></div>
                      : ""}
        </TableCell>
        <TableCell style={{ padding: "5px 5px 5px 5px" }} align="right"> <button className='pill' onClick={() => handleshowmodal()}>Share</button></TableCell>
        <Tooltip title="Delete" placement='top'>
          <IconButton>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" viewBox="0 0 2048 2048"><path fill="gray" d="M1792 384h-128v1472q0 40-15 75t-41 61t-61 41t-75 15H448q-40 0-75-15t-61-41t-41-61t-15-75V384H128V256h512V128q0-27 10-50t27-40t41-28t50-10h384q27 0 50 10t40 27t28 41t10 50v128h512zM768 256h384V128H768zm768 128H384v1472q0 26 19 45t45 19h1024q26 0 45-19t19-45zM768 1664H640V640h128zm256 0H896V640h128zm256 0h-128V640h128z"/></svg> */}
            <DeleteIcon style={{ background: "none" }} />
          </IconButton>
        </Tooltip>
        {/* <TableCell  style={{padding:"5px 5px 5px 5px"}} align="right">{row.carbs}</TableCell>
        <TableCell style={{padding:"5px 5px 5px 5px"}} align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          {row.fat === "Biology" ?
            <Collapse in={open} timeout="auto" unmountOnExit style={{ borderRadius: "5px" }}>

              <>
                <Link  
                href={{
                  pathname: '/biology',
                  query: { cTitle: 'Human',cTopic:"Digestive System",link:"humanDigestiveSystem" },
                }} 
                 style={{ textDecoration: "none", color: "black" }}>
                  <div style={{ justifyContent: "center", flexDirection: "row", backgroundColor: "#cbcbcb", display: "flex", padding: "7px 0 7px 0", margin: "5px" }}>
                    <Typography>Biology </Typography>
                    <svg style={{ display: "flex", alignItems: "center" }} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                    <Typography>Human </Typography>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                    <Typography>Digestive System </Typography>
                  </div>
                </Link>

                <Link  
                  href={{
                    pathname: '/biology',
                    query: { cTitle: 'Nitrogen',cTopic:"Nitrogen",link:"nitrogen-cycle" },
                  }} 
                 style={{ textDecoration: "none", color: "black" }}>
                  <div style={{ justifyContent: "center", backgroundColor: "#cbcbcb", display: "flex", padding: "7px 0 7px 0", margin: "5px" }}>
                    <Typography>Biology </Typography>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                    <Typography>Nitrogen  </Typography>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                    <Typography>Nitrogen Cycle </Typography>
                  </div>
                </Link>
              </>

            </Collapse>
            :
            row.name === "Electricity concepts" ?
              <Collapse in={open} timeout="auto" unmountOnExit style={{ borderRadius: "5px" }}>

                <>
                  <Link
                    href={{
                      pathname: '/physics',
                      query: { cTitle: 'Laws',cTopic:"Laws",link:"lawsofmotion" },
                    }} 
                     style={{ textDecoration: "none", color: "black" }}>
                    <div style={{ justifyContent: "center", flexDirection: "row", backgroundColor: "#cbcbcb", display: "flex", padding: "7px 0 7px 0", margin: "5px" }}>
                      <Typography>Physics </Typography>
                      <svg style={{ display: "flex", alignItems: "center" }} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                      <Typography>Laws </Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                      <Typography>Laws Of Motion</Typography>
                    </div>
                  </Link>

                  <Link
                    href={{
                      pathname: '/physics',
                      query: { cTitle: 'Laws',cTopic:"Laws",link:"newtons_laws" },
                    }} 
                   style={{ textDecoration: "none", color: "black" }}>
                    <div style={{ justifyContent: "center", backgroundColor: "#cbcbcb", display: "flex", padding: "7px 0 7px 0", margin: "5px" }}>
                      <Typography>Physics </Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                      <Typography>Laws</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                      <Typography>Newtons Law</Typography>
                    </div>
                  </Link>
                </>

              </Collapse>
              : 
              row.fat === "Maths" ?
              <Collapse in={open} timeout="auto" unmountOnExit style={{ borderRadius: "5px" }}>

                <>
                  <Link
                  href={{
                    pathname: '/maths',
                    query: { cTitle: 'Argumentative Essay',cTopic:"Argumentative Essay",link:"argumentative-essay" },
                  }} 
                  style={{ textDecoration: "none", color: "black" }}>
                    <div style={{ justifyContent: "center", flexDirection: "row", backgroundColor: "#cbcbcb", display: "flex", padding: "7px 0 7px 0", margin: "5px" }}>
                      <Typography>Maths </Typography>
                      <svg style={{ display: "flex", alignItems: "center" }} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                      <Typography>Argumentive </Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                      <Typography>Argumentative Essay</Typography>
                    </div>
                  </Link>
                  <Link
                  href={{
                    pathname: '/maths',
                    query: { cTitle: 'Deductive Essay',cTopic:"Deductive Essay",link:"deductive-essay" },
                  }} 
                  style={{ textDecoration: "none", color: "black" }}>
                    <div style={{ justifyContent: "center", flexDirection: "row", backgroundColor: "#cbcbcb", display: "flex", padding: "7px 0 7px 0", margin: "5px" }}>
                      <Typography>Maths </Typography>
                      <svg style={{ display: "flex", alignItems: "center" }} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                      <Typography>Deductive </Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                      <Typography>Deductive Essay</Typography>
                    </div>
                  </Link>

                  <Link
                   href={{
                    pathname: '/maths',
                    query: { cTitle: 'Research Essay',cTopic:"Research Essay",link:"research-essay" },
                  }} 
                    style={{ textDecoration: "none", color: "black" }}>
                    <div style={{ justifyContent: "center", backgroundColor: "#cbcbcb", display: "flex", padding: "7px 0 7px 0", margin: "5px" }}>
                      <Typography>Maths </Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                      <Typography>Research</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                      <Typography>Research Essay</Typography>
                    </div>
                  </Link>
                </>

              </Collapse>
              : 
              row.fat === "Physics" ?
              <Collapse in={open} timeout="auto" unmountOnExit style={{ borderRadius: "5px" }}>

                <>
                  <Link
                  href={{
                    pathname: '/physics',
                    query: { cTitle: 'Conservation of energy',cTopic:"Conservation of energy",link:"conservationOfenergy" },
                  }} 
                  style={{ textDecoration: "none", color: "black" }}>
                    <div style={{ justifyContent: "center", flexDirection: "row", backgroundColor: "#cbcbcb", display: "flex", padding: "7px 0 7px 0", margin: "5px" }}>
                      <Typography>Physics </Typography>
                      <svg style={{ display: "flex", alignItems: "center" }} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                      <Typography>Energy </Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                      <Typography>Conservation of energy</Typography>
                    </div>
                  </Link>
                  <Link
                  href={{
                    pathname: '/physics',
                    query: { cTitle: 'Gravity',cTopic:"Gravity",link:"gravity" },
                  }} 
                  style={{ textDecoration: "none", color: "black" }}>
                    <div style={{ justifyContent: "center", flexDirection: "row", backgroundColor: "#cbcbcb", display: "flex", padding: "7px 0 7px 0", margin: "5px" }}>
                      <Typography>Physics </Typography>
                      <svg style={{ display: "flex", alignItems: "center" }} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                      <Typography>Gravity </Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z" /></svg>
                      <Typography>Gravity</Typography>
                    </div>
                  </Link>

                 
                </>

              </Collapse>
               :""}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Solution Base', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Chemistry"),
  createData('Re-production', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Biology"),
  createData('Electricity concepts', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Physics"),
  createData('Electricity', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Communication"),
  createData('Therory', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Maths"),
  createData('Thermal', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Social Welfare"),
  createData('Quantam', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Maths"),
  createData('Atom', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Social Welfare"),
  createData('Nuclear', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Physics"),
  createData('Energy', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Physics"),
];


const mycollections = [
  createData('Solution Base', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Chemistry"),
  createData('Re-production', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Biology"),
  createData('Electricity', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Communication"),
  createData('Atom', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Social Welfare"),
  createData('Nuclear', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Physics"),
];

export default function Collaction() {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const router = useRouter();
  


  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const [filterimportant, setFilterImportant] = React.useState(
    [{
      description: "",
      fat: "",
      name: "",
      history: [{
        subject: "",
        chapter: "",
        important: "",
      }]

    }]
  )
  React.useEffect(() => {
    setFilterImportant(rows)
  }, [])


  const handlechangeSubject = (e: any) => {
    let value = e.target.value;
    if (e.target.value === "All") {
      setFilterImportant(rows)
    }
    else if (e.target.value != "") {
      const filtered = rows.filter((row) =>
        row.fat === value
      );
      setFilterImportant(filtered)
    }
  }


const myCollectionChange = (e:any) =>{
  if (e.target.checked) {
    setFilterImportant(mycollections)
} else {
  setFilterImportant(rows)
}
}

  return (
    <div >
   
      <Box sx={{ flexGrow: 1, marginBottom: "5px" }}  >
        <Grid container spacing={{ xs: 1, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>

          <Grid item xs={5}>
            <Typography style={{ display: "flex", justifyContent: "start", alignItems: "center" }}><b> My Collections</b></Typography>
          </Grid>
          <Grid item xs={7}>
            <Grid container>
              <Grid xs={5} justifyContent="end" display="flex">
                {/* <div style={{ padding: "2px 0 0 2px", width: "50%", justifyContent: "end", display: "flex" }}>
        <button style={{ backgroundColor: "rgb(0, 133, 219)",cursor:"pointer", padding: "5px", display: "flex", justifyContent: "center", border: "none", borderRadius: "5px", color: "white", alignItems: "center" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 21 21"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" d="M5.5 10.5h10m-5-5v10" /></svg>
          Add Student</button>
      </div> */}
              </Grid>
              <Grid item xs={4} justifyContent="end" display="flex">
                <div className="collection-wrapper-34">
                            <input className="tgl tgl-ios" id="toggle-34" type="checkbox" onClick={(e) =>myCollectionChange(e)} />
                            <label className="tgl-btn" htmlFor="toggle-34"></label>
                        </div>&emsp;
                <Typography style={{ display: "flex", alignItems: "center" }}  ><b>Filters</b></Typography>&emsp;
                <select className='selectquestion' onChange={handlechangeSubject} >
                  <option value="All">All Subjects</option>
                  <option value="Biology">Biology</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Physics">Physics</option>
                  <option value="Communication">Communication</option>
                  <option value="Maths">Maths</option>
                  <option value="Social Welfare">Social Welfare</option>
                </select>
              </Grid>
              <Grid item xs={3} justifyContent="end" display="flex">
                <span style={{ backgroundColor: "#cfcdcd", color: "#2f2f2f" }} onClick={() => router.push("/notifications")} className='pillbutton'  >P2P Queries</span>&emsp;
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* <div className='rowcollection'>
        <div className='collectionhead1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="skyblue" d="M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.989.989 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75zM7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5z" /></svg>
        </div>
        <div className='collectionhead2' style={{ padding: "0px 0 0 0px", width: "50%" }}>
          <input className='input' type='search'></input>
        </div> */}
      {/* <div style={{justifyContent:"end",display:"flex"}}>
 <h6>sdfsd</h6>
        </div> */}
      {/* </div> */}
      <TableContainer component={Paper} className='scrollcontent' >

        <Table >
          <TableHead >
            <TableRow>
              <TableCell />
              {/* <TableCell style={{padding:"5px 5px 5px 5px"}} ><b> #</b></TableCell> */}
              <TableCell style={{ padding: "5px 5px 5px 5px" }}><b>Name</b></TableCell>
              <TableCell style={{ padding: "5px 5px 5px 5px" }} width="50%" align="left"><b> Description</b></TableCell>
              <TableCell />
              <TableCell style={{ padding: "5px 5px 5px 5px" }} align="left" ><b>Course</b></TableCell>
              {/* <TableCell style={{padding:"0px 5px 0 2px"}} align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell style={{padding:"0px 5px 0 2px"}} align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {filterimportant.map((row, index) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

    </div>
  );
}