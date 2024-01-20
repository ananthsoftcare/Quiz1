"use client"

import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import PageContainer from '../../components/container/PageContainer';
import './manage.css'
import { Alert, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface Data {
  id: number;
  description: string;
  carbs: number;
  status: string;
  name: string;
  protein: number;
}

function createData(
  id: number,
  name: string,
  description: string,
  status: string,
  carbs: number,
  protein: number,
): Data {
  return {
    id,
    name,
    description,
    status,
    carbs,
    protein,
  };
}

const rows = [
  createData(1, 'Ryan', 'Description is used by writers in order to encourage their audiences to have a more specific reading of a text.', "On Track", 67, 4.3),
  createData(2, 'Adison', 'Functions of Adjectives. An adjective modifies a noun; that is, it provides more detail about a noun.', "Excelling", 51, 4.9),
  createData(3, 'Corey', 'Functions of Adjectives. An adjective modifies a noun; that is, it provides more detail about a noun.', "Lagging", 24, 6.0),
  createData(4, 'Allison', 'Functions of Adjectives. An adjective modifies a noun; that is, it provides more detail about a noun.', "Excelling", 24, 4.0),
  createData(5, 'Gingerbread', 'Functions of Adjectives. An adjective modifies a noun; that is, it provides more detail about a noun.', "On Track", 49, 3.9),
  createData(6, 'Allison Botosh', 'Functions of Adjectives. An adjective modifies a noun; that is, it provides more detail about a noun.', "Lagging", 87, 6.5),
  createData(7, 'Tatiana Mango', 'Functions of Adjectives. An adjective modifies a noun; that is, it provides more detail about a noun.', "Lagging", 37, 4.3),
  createData(8, 'Jelly Bean', 'Functions of Adjectives. An adjective modifies a noun; that is, it provides more detail about a noun.', "On Track", 94, 0.0),
  createData(9, 'Phillip', 'Functions of Adjectives. An adjective modifies a noun; that is, it provides more detail about a noun.', "Lagging", 65, 7.0),
  createData(10, 'Kaiya', 'Functions of Adjectives. An adjective modifies a noun; that is, it provides more detail about a noun.', "Excelling", 98, 0.0),
  createData(11, 'Ryan Westervelt', 'Functions of Adjectives. An adjective modifies a noun; that is, it provides more detail about a noun.', "Lagging", 81, 2.0),
  createData(12, 'Phillip Stanton', 'Functions of Adjectives. An adjective modifies a noun; that is, it provides more detail about a noun.', "On Track", 9, 37.0),
  createData(13, 'Leo Stanton', 'Functions of Adjectives. An adjective modifies a noun; that is, it provides more detail about a noun.', "Excelling", 63, 4.0),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    numeric: true,
    disablePadding: true,
    label: 'Id',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  // {
  //   id: 'description',
  //   numeric: false,
  //   disablePadding: false,
  //   label: 'Description',
  // },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Avg Score',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Last Score',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            style={{ color: "grey" }}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            padding='none'
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{ backgroundColor: "#f7f9fd" }}
    // sx={{
    //   pl: { sm: 2 },
    //   pr: { xs: 1, sm: 1 },
    //   ...(numSelected > 0 && {
    //     bgcolor: (theme) =>
    //       alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
    //   }),
    // }}
    >
      {/* <div> */}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="skyblue" d="M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.989.989 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75zM7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5z" /></svg>
      </div>
      <div style={{ padding: "2px 0 0 2px", width: "100%" }}>
        <input className='inputDesign' type='search'></input>
      </div>
      {/* </div> */}
      <div style={{ padding: "2px 0 0 2px", width: "50%", justifyContent: "end", display: "flex" }}>
        <button style={{ backgroundColor: "rgb(0, 133, 219)", padding: "5px", display: "flex", justifyContent: "center", border: "none", borderRadius: "5px", color: "white", alignItems: "center" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 21 21"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" d="M5.5 10.5h10m-5-5v10" /></svg>
          Add Student</button>
      </div>
    </Toolbar>
    // <div>
    //   <div >
    //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="skyblue" d="M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.989.989 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75zM7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5z"/></svg>
    //   </div>
    //   <div style={{padding:"2px 0 0 2px"}}>
    //   <input className='input' type='search'></input>
    //   </div>
    // </div>
  );
}
export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('description');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [messagetrue,setMessageTrue] = React.useState(false)
  const [buttonHide,setButtonHide] = React.useState(false)
  const pathname = usePathname();
  const router = useRouter();
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };



  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  // const years = [...Array(3)].map((_, i) => currentYear + i - i);
  const years = [...Array(10)].map((_, i) => currentYear + i - 1 + 1);


const handleClickMessage = () =>{
  
  setMessageTrue(true)
  setTimeout(() => {
    setMessageTrue(false)
    setButtonHide(true)
  },2000)
}

  return (
    <div>
      {messagetrue ? 
      <Stack  sx={{display:"flex",alignItems:"center"}}  spacing={2}>
      <Alert  variant="filled" style={{color:'white'}} severity="success">
        Schedule Saved.
      </Alert>
      </Stack>:"" }

      <div className="rowhead">
        <div className="columnhead1" style={{ textAlign: "start" }} >
          {/* <Typography >Questions</Typography> */}
          <b style={{ fontSize: "16px" }}>
            Manage Your class </b>(<span style={{ color: 'rgb(255, 69, 96)' }}>Students in Chemistry Level 1</span>)
        </div>
        <div className="columnhead2" style={{ display: "flex" }}>
          {/* <Button style={{backgroundColor:'#b9b0b0',color:"white",borderRadius:"5px"}}>Filter features here:</Button>&nbsp; */}
          <span onClick={() => router.push("/teacher/chemistry")} className='pillbutton' style={pathname == "/teacher/chemistry" ? { backgroundColor: "#a39c9c", color: "#2f2f2f" } : { backgroundColor: "#cfcdcd", color: "#2f2f2f" }} >Content</span>&emsp;
          <span onClick={() => router.push("/teacher/analytics")} className='pillbutton' style={pathname == "/teacher/analytics" ? { backgroundColor: "#a39c9c", color: "#2f2f2f" } : { backgroundColor: "#cfcdcd", color: "#2f2f2f" }} >Analytics</span>&emsp;
          <span onClick={() => router.push("/teacher/manage")} className='pillbutton' style={pathname == "/teacher/manage" ? { backgroundColor: "#a39c9c", color: "#2f2f2f" } : { backgroundColor: "#cfcdcd", color: "#2f2f2f" }} > Manage</span>
        </div>
      </div>



      {/* <div style={{display:"flex"}}>
        <span>Manage Class</span>
      <Link href="/analytics"> className={pathname == "/teacher/manage" ? "active" : ""}
        <a className={pathname == "/analytics" ? "active" : ""}>Analytics</a> className={pathname == "/teacher/analytics" ? "active" : ""}
      </Link>
      <div style={{justifyContent:"end",display:"flex"}}>
     
      </div> 
      <Link className={pathname == "/teacher/manage" ? "active" : ""} href="/teacher/manage">Manage
        <a className={pathname == "/teacher/manage" ? "active" : ""}>Manage</a>
      </Link>
      <Link href="/content">
        <a className={pathname == "/content" ? "active" : ""}>Content</a>
      </Link>
      </div> */}
      <PageContainer title="ManageClass" description="Manage Class">
        <div className="rowmanage" style={{ justifyContent: "space-between" }}>
          <div className="columnmanage1 ">
            <Box >
              <Paper sx={{ width: '100%', mb: 2 }} className='scrollcontent'>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer sx={{ height: '80%' }}>
                  <Table
                    // sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                  >
                    <EnhancedTableHead
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                      rowCount={rows.length}
                    />
                    <TableBody>
                      {visibleRows.map((row, index) => {
                        const isItemSelected = isSelected(row.id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            onClick={(event) => handleClick(event, row.id)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.id}
                            className='managerows'
                            selected={isItemSelected}
                            sx={{ cursor: 'pointer' }}
                          >
                            {/* <TableCell padding="checkbox">
                              <Checkbox
                                style={{ color: "grey" }}
                                color="primary"
                                checked={isItemSelected}
                                inputProps={{
                                  'aria-labelledby': labelId,
                                }}
                              />
                            </TableCell> */}
                            <TableCell
                              component="th"
                              id={labelId}
                              scope="row"
                              align='left'
                             style={{padding:"0 0 0 18px"}}
                            >
                              {index + 1}
                            </TableCell>
                            <TableCell
                              component="th"
                              id={labelId}
                              scope="row"
                              padding="none"
                            >
                              {row.name}
                            </TableCell>
                            {/* <TableCell align="left" padding="none" width="40%" className='overflowtext'>{row.description}</TableCell> */}
                            <TableCell align="left" padding='none'>
                              {row.status === "Lagging" ? <span style={{ backgroundColor: "#faf0f3", color: "#db5b7b" }} className='pill'><b>{row.status}</b></span> :
                                row.status === "On Track" ? <span style={{ backgroundColor: "#f0f1fa", color: "#50537a" }} className='pill'><b>{row.status}</b></span> :
                                  row.status === "Excelling" ? <span style={{ backgroundColor: "#e1fcef", color: "#62af89" }} className='pill'><b>{row.status}</b></span> : ""}
                            </TableCell>
                            <TableCell align="center" style={{ color: "green" }} padding='none'>{row.carbs}</TableCell>
                            <TableCell align="center" style={{ color: "green" }} padding='none'>{row.protein}</TableCell>
                            <Tooltip title="Delete" placement='top' >
                              <IconButton>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" viewBox="0 0 2048 2048"><path fill="gray" d="M1792 384h-128v1472q0 40-15 75t-41 61t-61 41t-75 15H448q-40 0-75-15t-61-41t-41-61t-15-75V384H128V256h512V128q0-27 10-50t27-40t41-28t50-10h384q27 0 50 10t40 27t28 41t10 50v128h512zM768 256h384V128H768zm768 128H384v1472q0 26 19 45t45 19h1024q26 0 45-19t19-45zM768 1664H640V640h128zm256 0H896V640h128zm256 0h-128V640h128z"/></svg> */}
                                <DeleteIcon style={{ background: "none" }} />
                              </IconButton>
                            </Tooltip>
                          </TableRow>
                        );
                      })}
                      {emptyRows > 0 && (
                        <TableRow
                          style={{
                            height: (dense ? 33 : 53) * emptyRows,
                          }}
                        >
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>

              {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
            </Box>
          </div>
          <div className="columnmanage2">
            <Box >
              <span style={{fontWeight:'bold',marginBottom:'15px',color:'#713593'}}>Schedule Your Class</span>
              <div >
                <h5 style={{ margin: "2px 0 2px 0" }}>Start Date</h5>
                <select className='selectManage' name="startdate" id="startdate">
                  <option disabled selected>Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>&emsp;
                <select className='selectManage' name="startmonth" id="startmonth">
                  <option disabled selected>Month</option>
                  {months.map((month, i) => (
                    <option key={month} value={month} >{month}</option>
                  ))}
                </select>&emsp;
                <select className='selectManage' name="startyear" id="startyear">
                  <option disabled selected>Year</option>
                  {years.map((year, i) => (
                    <option key={year} value={year} >{year}</option>
                  ))}
                </select>
              </div>
              <div style={{ margin: "20px 0 0 0" }}>
                <h5 style={{ margin: "2px 0 2px 0" }}>End Date</h5>
                <select className='selectManage' name="enddate" id="enddate">
                  <option disabled selected>Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>&emsp;
                <select className='selectManage' name="endmonth" id="endmonth">
                  <option disabled selected>Month</option>
                  {months.map((month, i) => (
                    <option key={month} value={month} >{month}</option>
                  ))}
                </select>&emsp;
                <select className='selectManage' name="endyear" id="endyear">
                  <option disabled selected>Year</option>
                  {years.map((year, i) => (
                    <option key={year} value={year} >{year}</option>
                  ))}
                </select>
              </div>
              <div style={{ display: "flex", justifyContent: "center", marginTop: "15px",marginBottom:15 }}>
                <button className='buttonmanage' disabled={buttonHide === true ? true : false} style={ buttonHide === true ? {cursor:"not-allowed"} :{cursor:"pointer"}} onClick={()=>handleClickMessage()}>Schedule</button>
              </div>
              <div style={{ margin: "20px 0 0 0" }}>
              <span style={{fontWeight:'bold',marginBottom:'15px',color:'#713593'}}>Make Announcement</span>
                {/* <h4 style={{ margin: "10px 0 0 0" }}></h4> */}
                <div style={{ alignItems: "end", display: "flex", justifyContent: "end" }}>
                  <Button color="primary" style={{ backgroundColor: "grey", color: "white", borderRadius: "10px", padding: "2px" }} >
                    Publish
                  </Button>&emsp;
                </div>
                <textarea placeholder="Type message.." name="msg" required></textarea>
              </div>
            </Box>
          </div>
        </div>

      </PageContainer>



      {/* <div className="rowmange">
  <div className="columnmanage" style={{backgroundColor:"#aaa"}}>
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>
  <div className="columnmanage" style={{backgroundColor:"#bbb"}}>
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
</div> */}
    </div>
  );
}