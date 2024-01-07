import "../quiz.css"
import { Button,Typography } from '@mui/material';
import Link from "next/link";

export default function page2() {
return(
    <>
     <h1>Question 2</h1>
    <div> <Typography ><Link href="./Home" style={{ textDecoration: 'none', color:"white" }}> Back Home</Link> </Typography>
    <div class="quiz-container" id="quiz">
      <div class="quiz-header">
        <h2 id="question">Aleurone layer is present in</h2>
        <ul>
          <li>
            <input type="radio" id="a" name="answer" class="answer" />
            <label id="a_text" for="a">The peripheral part of scutellum</label>
          </li>
          <li>
            <input type="radio" id="b" name="answer" class="answer" />
            <label id="b_text" for="b">The peripheral part of coleoptile</label>
          </li>
          <li>
            <input type="radio" id="c" name="answer" class="answer" />
            <label id="c_text" for="c">Cotyledons</label>
          </li>
          <li>
            <input type="radio" id="d" name="answer" class="answer" />
            <label id="d_text" for="d">The peripheral part of endosperm</label>
          </li>
        </ul>
      </div>
      <Button size="small" color='secondary' variant="contained" style={{ color: 'white',height:50 }}>
      {/* <Link href="./page2" style={{ textDecoration: 'none', color:"white" }}>  */}
      Submit
      {/* </Link> */}
    </Button>
    </div>

  </div></>

)


}