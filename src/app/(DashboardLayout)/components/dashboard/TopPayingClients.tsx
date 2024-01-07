import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Paper,
  Avatar,
  CardHeader,
  Collapse,
  makeStyles,
  Grid,
  styled,
} from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import TableContainer from "@mui/material/TableContainer";
import BlankCard from "../shared/BlankCard";
import React, { Fragment, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import QuestionAnsCard from "./Question";
import DashboardBooks from "./DashBoardBook";
import { createTheme } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import theme from "@/utils/theme";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

const products = [
  {
    id: "1",
    quesName: "Why should a magnesium ribbon be cleaned before burning in the air?",
    ans: "Magnesium ribbon should be cleaned before burning in air because Magnesium metal reacts with the atmospheric oxygen and forms Magnesium Oxide (MgO) layer which is a very stable compound. In order to prevent further reactions with Oxygen, it is therefore necessary to clean the ribbon by to remove the layer of MgO.",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "Low",
    pbg: "primary.main",
    budget: "3.9",
  },
  {
    id: "2",
    quesName: "Write a balanced equation for the following chemical reactions i) Hydrogen + Chloride —-> Hydrogen chloride ii) Barium chloride + Aluminium sulphate —-> Barium sulphate + Aluminium chloride iii) Sodium + Water —-> Sodium hydroxide +Hydrogen",
    ans: "i) H2 + Cl2 → 2HCl ii) 3BaCl2 + Al2(SO4)3 →3BaSO4 + 2AlCl3  iii) 2Na + 2H2O → 2NaOH + H2",
    pname: "Real Homes WP Theme",
    priority: "Medium",
    pbg: "secondary.main",
    budget: "24.5",
  },
  {
    id: "3",
    quesName: "Why is the amount of gas collected in one of the test tubes in Activity 1.7 double the amount collected in the other? Name this gas.",
    ans: "In activity 1.7, gas collected in one of the test tubes is double of the amount collected in the other because water gets hydrolysed to release H2 and O2 gas. Here, after electrolysis two molecules of Hydrogen and one molecule of oxygen gas are released; hence, the amount of Hydrogen collected would be double than that of oxygen.",
    pname: "MedicalPro WP Theme",
    priority: "High",
    pbg: "error.main",
    budget: "12.8",
  },
  {
    id: "4",
    quesName: "Why does the colour of copper sulphate solution change when an iron nail is dipped in it?",
    ans: "When an iron nail is dipped in the copper sulphate solution, iron displaces copper from the copper sulphate because iron is more reactive than copper. Therefore, the colour of the copper sulphate solution changes. The reaction is Fe + CuSO4 → FeSO4 + Cu",
    pname: "Hosting Press HTML",
    priority: "Critical",
    pbg: "success.main",
    budget: "2.4",
  },
];

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} style={{ padding: 0 }} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const TopPayingClients = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [question, setQuestions] = useState([])
  const [collapseName, setCollapseName] = useState("View answer")
  const [isHovered, setIsHovered] = useState({
    isHovered: false,
    id: ""
  });
  function handleMouseOver(id: string) {
    setIsHovered({
      id: id,
      isHovered: true
    });
  }

  function handleMouseOut(id: string) {
    setIsHovered({
      id: id,
      isHovered: false
    });
  }
  const [expandedId, setExpandedId] = useState(-1);
  const handleExpandClick = (id: number) => {


    setCollapseName("Hide answer")
    setExpandedId(expandedId === id ? -1 : id);
  };
  return (
    <>
    {/* // <DashboardCard> */}
        {/* <Box sx={{ overflow: "auto", marginTop: '1px solid #ddd',
       backgroundImage: `url(${"https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`, padding:2}}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <Grid container style={{ marginBottom: 10 }}>
            {products.map((question, index) => {
              return (
                <Grid item container xs={12} spacing={2}>
                  <Grid item xs={12} >
                    <Card key={question.id} >
                      <CardActions>
                        <Typography style={{ fontSize: 12, fontWeight: 'bold' }}>{question.id} {"."}{question.quesName}</Typography>
                      </CardActions>
                      <CardActions disableSpacing>
                        <ExpandMore
                          expand={expandedId === index}
                          onClick={() => handleExpandClick(index)}
                          aria-expanded={expandedId === index}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon style={{color:'#145DA0'}}/>
                        </ExpandMore>
                      </CardActions>
                      <Collapse in={expandedId === index} timeout="auto" unmountOnExit>
                        <CardContent>
                          <div style={{ fontSize: 12 }}>{question.ans}</div>
                        </CardContent>
                      </Collapse>
                    </Card>&nbsp;
                  </Grid>&nbsp;
                </Grid>
              )
            })}
          </Grid>
        </Box>
        <Grid>

        </Grid>
      </Box> */}
    {/* // </DashboardCard> */}
    </>
  );
};

export default TopPayingClients;
