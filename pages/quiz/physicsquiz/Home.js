
import "../quiz.css";
import { Card, Button, Typography } from '@mui/material';
import Link from "next/link";

export default function Home() {
  return (<><h2>Physics Quiz </h2>
    <div><Typography ><Link href="/" style={{ textDecoration: 'none', color: "white" }}> Back Home</Link> </Typography>
      <Card className='cardphy' id='cardphy' variant="outlined" style={{ width: '800px', height: '404px' }}>
      </Card>
      <Link href="./page1" style={{ textDecoration: 'none', color: "white" }}>
        <Button size="small" color='secondary' variant="contained" style={{ color: 'white', height: 50 }}>
          Start Quiz
        </Button>
      </Link>
    </div ></>

  )
}