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
import { Checkbox, TablePagination, Tooltip } from '@mui/material';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

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
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props: {  row: ReturnType<typeof createData> }) {
  const { row} = props;
//   const { index} = props;
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  return (
    <React.Fragment>
        
      <TableRow   className='managerows' sx={{ '& > *': { borderBottom: 'unset' } }}>
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
        <TableCell style={{padding:"5px 5px 5px 5px"}} component="th" scope="row">
         <b> {row.name}</b>
        </TableCell>
        <TableCell style={{padding:"5px 5px 5px 5px"}} align="left">{row.description} 
        <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon  fontSize='medium' style={{fontWeight:"bold"}} /> : <KeyboardArrowDownIcon style={{fontWeight:"bold"}} fontSize='medium' />}
          </IconButton>
        </TableCell>
        <TableCell  style={{padding:"5px 5px 5px 5px"}} align="right"> <button onClick={()=>router.push('/biology')} className='pill'>Apply and View</button></TableCell>
        <TableCell style={{padding:"5px 5px 5px 5px",color:'green'}} align="right" >{row.fat}</TableCell>
        <TableCell style={{padding:"5px 5px 5px 5px"}} align="right"> <button className='pill'>Share</button></TableCell>
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
          <Collapse in={open} timeout="auto" unmountOnExit style={{borderRadius:"5px"}}>
            <div style={{justifyContent:"center", backgroundColor:"#cbcbcb",display:"flex",padding:"7px 0 7px 0",margin:"5px"}}>
            <Typography>Biology </Typography>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z"/></svg>
            <Typography>Plant Fertilization </Typography>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z"/></svg>
            <Typography>Crops fertility </Typography>
            </div>
            <div style={{justifyContent:"center",backgroundColor:"#cbcbcb",display:"flex",padding:"7px 0 7px 0",margin:"5px"}}>
            <Typography>Biology </Typography>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z"/></svg>
            <Typography>Plant Fertilization </Typography>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="black" d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531z"/></svg>
            <Typography>Crops fertility </Typography>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Solution Base', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.',  "Chemistry"),
  createData('Re-production', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Biology"),
  createData('Electricity concepts', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "physics"),
  createData('Electricity', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Communication"),
  createData('Therory', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "maths"),
  createData('Thermal', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "Social Welfare"),
  createData('Energy', 'In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.', "physics"),
];

export default function Collaction() {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div >
    <div className='rowCollection'>
    <div className='columnCollection1'>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="skyblue" d="M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.989.989 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75zM7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5z" /></svg>
  </div>
  <div className='columnCollection2' style={{ padding: "0px 0 0 0px", width: "50%" }}>
    <input className='input' type='search'></input>
  </div>
</div>
    <TableContainer component={Paper} >
    
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell/>
          {/* <TableCell style={{padding:"5px 5px 5px 5px"}} ><b> #</b></TableCell> */}
            <TableCell style={{padding:"5px 5px 5px 5px"}}><b>Name</b></TableCell>
            <TableCell style={{padding:"5px 5px 5px 5px"}} width="50%" align="left"><b> Description</b></TableCell>
            <TableCell style={{padding:"5px 5px 5px 5px"}} align="right"><b>Course</b></TableCell>
            {/* <TableCell style={{padding:"0px 5px 0 2px"}} align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell style={{padding:"0px 5px 0 2px"}} align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <Row  key={row.name}  row={row} />
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