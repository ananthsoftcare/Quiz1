<<<<<<< HEAD
import "../quiz.css"
import { Button,Typography } from '@mui/material';
import Link from "next/link";

export default function page1() {
return(
    <>
     <h1>Question 1</h1>
    <div> <Typography ><Link href="./Home" style={{ textDecoration: 'none', color:"white" }}> Back Home</Link> </Typography>
    <div class="quiz-container" id="quiz">
      <div class="quiz-header">
        <h2 id="question">P(A ∩ B) is equal to:</h2>
        <ul>
          <li>
            <input type="radio" id="a" name="answer" class="answer" />
            <label id="a_text" for="a"> P(A) . P(B|A)</label>
          </li>
          <li>
            <input type="radio" id="b" name="answer" class="answer" />
            <label id="b_text" for="b">P(B) . P(A|B)</label>
          </li>
          <li>
            <input type="radio" id="c" name="answer" class="answer" />
            <label id="c_text" for="c">Both A and B</label>
          </li>
          <li>
            <input type="radio" id="d" name="answer" class="answer" />
            <label id="d_text" for="d">None of these</label>
          </li>
        </ul>
      </div>
      <Button size="small" color='secondary' variant="contained" style={{ color: 'white',height:50 }}>
      <Link href="./page2" style={{ textDecoration: 'none', color:"white" }}> Submit</Link>
    </Button>
   
    {/* <Button size="small" variant="contained" style={{ color: 'white',height:50, paddingLeft:25 }}> */}
      {/* <Link href="./Home" style={{ textDecoration: 'none', color:"white" }}> Back Home</Link> */}
    {/* </Button> */}
    </div>

  </div></>

)

=======
export default function page1(){
return(<h1>Maths Quiz Page</h1>)
>>>>>>> 1fdd2a68c73ee996f5e17d3541843045748aab39

}