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
        <h2 id="question">Which approach can be employed to produce a high degree of homogeneity in the creation of ZnFe2O4 spinel?</h2>
        <ul>
          <li>
            <input type="radio" id="a" name="answer" class="answer" />
            <label id="a_text" for="a">Distillation method</label>
          </li>
          <li>
            <input type="radio" id="b" name="answer" class="answer" />
            <label id="b_text" for="b">Vaporization method</label>
          </li>
          <li>
            <input type="radio" id="c" name="answer" class="answer" />
            <label id="c_text" for="c">Coprecipitation method</label>
          </li>
          <li>
            <input type="radio" id="d" name="answer" class="answer" />
            <label id="d_text" for="d">Crystallization method</label>
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


}
=======
export default function page1(){
    return(<h1>Chemistry Quiz Page</h1>)
    
    }
>>>>>>> 1fdd2a68c73ee996f5e17d3541843045748aab39
