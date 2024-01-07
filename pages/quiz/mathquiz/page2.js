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
        <h2 id="question">If P (A) = 0.8, P (B) = 0.5 and P (B|A) = 0.4, what is the value of P (A ∩ B)?</h2>
        <ul>
          <li>
            <input type="radio" id="a" name="answer" class="answer" />
            <label id="a_text" for="a">0.32</label>
          </li>
          <li>
            <input type="radio" id="b" name="answer" class="answer" />
            <label id="b_text" for="b">0.25</label>
          </li>
          <li>
            <input type="radio" id="c" name="answer" class="answer" />
            <label id="c_text" for="c">0.5</label>
          </li>
          <li>
            <input type="radio" id="d" name="answer" class="answer" />
            <label id="d_text" for="d">0.1</label>
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