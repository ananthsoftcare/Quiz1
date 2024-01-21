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
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Modal from '@mui/material/Modal';
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import PageContainer from '../../components/container/PageContainer';
import './manage.css'
import { Alert, Avatar, Button, Card, CardActionArea, CardContent, Grid, Stack, styled } from '@mui/material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@mui/material";


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
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const stylebox = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #k',
  borderRadius: '5px',
  boxShadow: 2,
  // p: 1,
};

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <div>
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

    </div>

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
export default function EnhancedTable({ searchParams }: {
  searchParams: {
    pageId: string
  }
}
) {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('description');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [messagetrue, setMessageTrue] = React.useState(false)
  const [studentAddMessage, setStudentAddMessage] = React.useState(false)
  const [buttonHide, setButtonHide] = React.useState(false)
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
  const [ctitle, setCtitle] = React.useState<string[]>([]);

  React.useEffect(() => {

    if (searchParams.pageId === "" || undefined) {
    } else {
      // const l = [...links];
      // const searchParamsSelections = collections.find(c => c.name === searchParams.cTitle);
      // if (searchParamsSelections) {
      //   setNavLinks(l.filter(ll => searchParamsSelections.selections.includes(ll.id)))
      //   //textInput.current.focus();
      //   const section = document.querySelector('#' + searchParams.link);
      //   if (section !== null) {
      //     section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      //   }
      // }
    }

    // if(smoothSelect){
    // 	const section = document.querySelector(smoothValue.selections[0]);
    // 	if(section !== null) {
    // 		 section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    // 	}
    // }
  }, [])

  const [openModalAddLabel, setOpenModalAddLabel] = React.useState(false)
  const onSubmitName = () => {

    ctitle.map((ct, i) => {
      let data = createData(rows.length + 1, `${ct}`, 'Functions of Adjectives. An adjective modifies a noun; that is, it provides more detail about a noun.', "Excelling", 0, 0)
      rows.push(data)
    })


    setStudentAddMessage(true)
    setTimeout(() => {
      setStudentAddMessage(false)
      setButtonHide(true)
    }, 2000)
    handleClose()

  }
  const handleChangeDropdown = (e: any) => {
    setOpenModalAddLabel(true)
    // let submitStar:boolean = true;

  }
  const handleClose = () => {
    setOpenModalAddLabel(false)
    setCtitle([])
  }

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


  const handleClickMessage = () => {

    setMessageTrue(true)
    setTimeout(() => {
      setMessageTrue(false)
      setButtonHide(true)
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

  const handleStudentAdd = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    if (e.target.checked) {
      setCtitle([...ctitle, name])
    } else {
      if (ctitle.includes(name)) {
        setCtitle(ctitle.filter(ct => ct != name))
      }
    }

  }


  console.log("setCtitle", ctitle)

  return (
    <div>
      {messagetrue ?
        <Stack sx={{ display: "flex", alignItems: "center" }} spacing={2}>
          <Alert variant="filled" style={{ color: 'white' }} severity="success">
            Schedule Saved.
          </Alert>
        </Stack> : ""}


      {studentAddMessage ?
        <Stack sx={{ display: "flex", alignItems: "center" }} spacing={2}>
          <Alert variant="filled" style={{ color: 'white' }} severity="success">
            Student Added Suucessfully
          </Alert>
        </Stack> : ""}

      <div className="rowhead">
        <div className="columnhead1" style={{ textAlign: "start" }} >
          {/* <Typography >Questions</Typography> */}
          {/* <b style={{ fontSize: "16px" }}> */}
            {/* Manage Your class </b>(<span style={{ color: 'rgb(255, 69, 96)' }}>Students in {searchParams.pageId} Level 1</span>) */}
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
                {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                <Card style={{ marginBottom: 5 }}>
                  <Grid container item xs={12} lg={12} style={{ display: 'flex', padding: 8 }}>
                    <Grid item xs={12} lg={9}>
                      {/* <div style={{ display: 'flex' }}> */}
                        {/* <div className="columnhead1" style={{ textAlign: "start" }} > */}
                          {/* <Typography >Questions</Typography> */}
                          <b style={{ fontSize: "16px" }}>
                            Manage Your class</b> <span style={{ color: 'rgb(255, 69, 96)' }}>Students in {searchParams.pageId} Level 1</span>
                        {/* </div> */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="skyblue" d="M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.989.989 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75zM7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5z" /></svg>
                        <input className='inputDesign' placeholder='Filter' type='search'></input> */}
                      {/* </div> */}
                    </Grid>
                    <Grid item xs={12} lg={3} justifyContent={'flex-end'} alignItems={'flex-end'} textAlign={'end'}>
                      <Button size='small' style={{ backgroundColor: "rgb(0, 133, 219)", color: '#fff' }} onClick={(e) => handleChangeDropdown(e)}>Add Student</Button>
                    </Grid>
                  </Grid>
                </Card>
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
                              style={{ padding: "0 0 0 18px" }}
                            >
                              {row.id}
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
          {/* <BootstrapDialog
            // onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={openModalAddLabel}
          > */}
          <BootstrapDialog
            // onClose={handleClose}
            fullWidth
            maxWidth='lg'
            //  style={{height:"50%"}}
            open={openModalAddLabel}
          >
            <DialogTitle sx={{ m: 0, p: "10px 3px 5px 10px", backgroundColor: "rgb(0 133 219 / 66%)", color: "white" }} id="customized-dialog-title">
              Add Students
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
              <div className='carddesign'>
                {users.map((usersresponse) => (
                  <Card key={usersresponse.id} className='cardforall' sx={{ maxWidth: 345 }}>
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
                          <Grid item xs={3} justifyContent="end" display="flex" style={{ padding: "35px 0 0 0" }}>
                            {/* <div className="checkbox-wrapper-31">
  <input type="checkbox"/>
  <svg viewBox="0 0 35.6 35.6">
    <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
    <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
    <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
  </svg>
</div> */}


                            <div className="checkbox-wrapper-39">
                              <label>
                                <input type="checkbox" onChange={(e) => handleStudentAdd(e, usersresponse.userName)} />
                                <span className="checkbox" ></span>
                              </label>
                            </div>







                            {/* <Button style={{ justifyContent: "end", display: "flex", color: "white", backgroundColor: "rgb(0, 133, 219)" }} onClick={() => handleClose()}>Add</Button> */}
                            {/* <button className='shareButton' onChange={e => setCtitle(usersresponse.userName)}>Add</button> */}
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
                <Button style={{ justifyContent: "end", display: "flex", color: "white", backgroundColor: "rgb(0, 133, 219)" }} onClick={() => onSubmitName()}>Submit</Button>
              </div>
            </DialogActions>
          </BootstrapDialog>




          {/* <Modal
            open={openModalAddLabel}
            onClose={() => setOpenModalAddLabel(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={stylebox}>
              <div style={{ display: 'flex', backgroundColor: 'rgb(0 133 219 / 66%)' }}>
                <DialogTitle sx={{ m: 0, p: "10px 3px 5px 10px", color: "white" }} id="customized-dialog-title">
                  Add Student Name
                </DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={() => handleClose()}
                  sx={{
                    position: 'absolute',
                    padding: "5px 0px 5px 0px",
                    right: 8,
                    // top: 2,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon style={{ color: "white" }} onClick={handleClose} />
                </IconButton>
              </div>
              <DialogContent dividers>
                <Grid container spacing={{ xs: 1, md: 4 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={3.5}>
                    <label>Enter Name</label>
                  </Grid>
                  <Grid item xs={8.5}>
                    <input style={{ width: "100%" }} name="Email" id="Email" className="input" type="text" value={ctitle} onChange={e => setCtitle(e.target.value)} />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <div style={{ justifyContent: "flex-end", display: "flex", padding: "5px" }}>
                  <Button disabled={ctitle.trim().length == 0} style={{ justifyContent: "end", display: "flex", color: "white", backgroundColor: "rgb(0, 133, 219)" }} onClick={onSubmitName}>Submit</Button>
                </div>
              </DialogActions>
            </Box>
          </Modal> */}


          <div className="columnmanage2">
            <Box >
              <span style={{ fontWeight: 'bold', marginBottom: '15px', color: '#713593' }}>Schedule Your Class</span>
              <div >
                <h5 style={{ margin: "2px 0 2px 0" }}>Start Date</h5>
                <select className='selectManage' name="startdate" id="startdate" value={new Date().getDate()}>
                  <option disabled >Day</option>
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
                <select className='selectManage' name="startmonth" id="startmonth" value={new Date().getMonth()}>
                  <option disabled >Month</option>
                  {months.map((month, i) => (
                    <option key={month} value={month} >{month}</option>
                  ))}
                </select>&emsp;
                <select className='selectManage' name="startyear" id="startyear">
                  {years.map((year, i) => (
                    <option key={year} value={year} >{year}</option>
                  ))}
                </select>
              </div>
              <div style={{ margin: "20px 0 0 0" }}>
                <h5 style={{ margin: "2px 0 2px 0" }}>End Date</h5>
                <select className='selectManage' name="enddate" id="enddate">
                  <option disabled >Day</option>
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
              <div style={{ display: "flex", justifyContent: "center", marginTop: "15px", marginBottom: 15 }}>
                <button className='buttonmanage' disabled={buttonHide === true ? true : false} style={buttonHide === true ? { cursor: "not-allowed" } : { cursor: "pointer" }} onClick={() => handleClickMessage()}>Schedule</button>
              </div>
              <div style={{ margin: "20px 0 0 0" }}>
                <span style={{ fontWeight: 'bold', marginBottom: '15px', color: '#713593' }}>Make Announcement</span>
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

      </PageContainer >



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
    </div >
  );
}