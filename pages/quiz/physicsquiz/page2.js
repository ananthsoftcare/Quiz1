import "../quiz.css"
import { Button, Typography } from '@mui/material';
import Link from "next/link";

export default function page2() {
  return (
    <>
      <h1>Question 2</h1>
      <div> <Typography ><Link href="./Home" style={{ textDecoration: 'none', color: "white" }}> Back Home</Link> </Typography>
        <div class="quiz-container" id="quiz">
          <div class="quiz-header">
            <h2 id="question">The force per unit charge is known as _</h2>
            <ul>
              <li>
                <input type="radio" id="a" name="answer" class="answer" />
                <label id="a_text" for="a">Electric current</label>
              </li>
              <li>
                <input type="radio" id="b" name="answer" class="answer" />
                <label id="b_text" for="b">Electric potential</label>
              </li>
              <li>
                <input type="radio" id="c" name="answer" class="answer" />
                <label id="c_text" for="c">Electric field</label>
              </li>
              <li>
                <input type="radio" id="d" name="answer" class="answer" />
                <label id="d_text" for="d">Electric space</label>
              </li>
            </ul>
          </div>
          <Button size="small" color='secondary' variant="contained" style={{ color: 'white', height: 50 }}>
            {/* <Link href="./page2" style={{ textDecoration: 'none', color:"white" }}>  */}
            Submit
            {/* </Link> */}
          </Button>
        </div>

      </div></>

  )


}