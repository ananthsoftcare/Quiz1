
import "../quiz.css";
import { Card, Button, Typography, Box, Stepper, Step, StepLabel, StepContent, Paper } from '@mui/material';
import Link from "next/link";


export default function Home() {
  const steps = [
    {
      label: 'Select campaign settings',
    },
    {
      label: 'Create an ad group',
    },
    {
      label: 'Create an ad',
    },
  ];
  return (<><h2>Maths Quiz </h2>
    <div><Typography ><Link href="/" style={{ textDecoration: 'none', color: "white" }}> Back Home</Link> </Typography>
      <Card className='cardmaths' id='cardmaths' variant="outlined" style={{ width: '800px', height: '404px' }}>

      </Card>
      <Link href="./page1" style={{ textDecoration: 'none', color: "white" }}>
        <Button size="small" color='secondary' variant="contained" style={{ color: 'white', height: 50 }}>
          Start Quiz
        </Button>
      </Link>
    </div ></>

  )
}