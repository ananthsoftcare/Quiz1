
'use client';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

import React from 'react';
import { IconQuestionMark } from '@tabler/icons-react';
// import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField
} from "@mui/material";
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';







export default function Content() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);



	function openForm() {
        const openform = window.document.getElementById("#myForm")!
        if(openform != null){
            openform.style.display = 'block';
        }
    }

    function closeForm() {
        const closeform = window.document.getElementById("#myForm")!
        if(closeform != null){
            closeform.style.display = 'none';
        }
    }
	  

	return (
		<>
  <Box height="100%">
	{/* <button>back</button> */}
            <PageContainer title="Content" description="this is Content">
			<b style={{justifyContent:"center",alignItems:"center",display:"flex"}}>Biology</b>
			<div className='borderLink' style={{padding:"25px"}}>
				<div className='main'>
					<div>
						<section id="introduction">
							<h2>Introduction</h2>
							<p>There is a great need for compulsory implementation of instructions of the
								National Curriculum Framework- 2005 which emphasizes linking of the science teaching
								with local environment. The Right to Education Act- 2009 also suggested that
								priority should be given to the achievement of learning competencies among children.
								Likewise, science teaching should be in such a way that it would help cultivate a
								new generation with scientific thinking.</p>
							<p>
								The key aspect of science teaching is to make the children understand the
								thinking process of scientists and their efforts behind each discovery. The State
								Curriculum Framework- 2011 stated thatchildren should be able to express their
								own ideas and opinions on various aspects. These Science Text Books are prepared
								to meet the set standards of the SCF and thus assist children in becoming selfreliant researchers capable of thinking intensely in scientific terms.
								The new textbooks are developed to achieve desired academic standards. So
								teachers should develop various teaching learning strategies to make their students
								to achieve class specific academic standards. We should avoid rote learning methods
								for the successful implementation of Continuous Comprehensive Evaluation (CCE).</p>
							<p>
								It is very impart to know more about different methods to assess students
								progress by summative and formative evaluation. The new textbooks reflect
								Continuous Comprehensive Evaluation and teaching method with respect to discussed
								concepts. This is very useful to teachers and students.
								In the new textbooks, the design of concepts and activities help in achieving
								the specified academic standards. Teachers need to plan appropriate teaching
								strategies to improve the academic standards among the students by the end of
								teaching the lesson. For effective implementation of continuous comprehensive
								evaluation the teaching must move away from the methods of rote memorisation
								of concepts. There is a need for teachers to have a good understanding of the
								methods of evaluation which help them in assessing the progress of children in a
								constructive and comprehensive way. The new textbooks are not confined to
								simply provide necessary informations about concepts. Instead they focus on the
								new teaching strategies and evaluation techniques which are very important for
								both teachers and students.
								We thank the VidyaBhavan Society, Rajasthan for their cooperation in designing
								these new text books,the writers for preparing the lessons, Smt. Pulipati Parameswari
								who helps in translation, the editors for checking the textual matters and the DTP
								group for cutely composing the textbook. We invite suggestions from educationists,
								teachers, parents, students and others to make this book more meaningful.
								Teachers play a pivotal role in children’s comprehensive use of the text book.
								We hope, teachers will make their best efforts for proper utilization of the text book
								so as to inculcate scientific thinking among children and inspire them to be great
								scientists</p>
						</section>
						<section id="request-response">
							<h2>Request &amp; Response</h2>
							<p>New Science Text Books are prepared in such a way that they develop childrens observation
								power and research enthusiasm. The official documents of national and State Curriculum frame
								works and the Right Education Act are aspairing to bring grossroute changes in science teaching.
								These textbooks are adopted in accordance with such an aspiration. Hence, science teachers
								need to adapt to the new approach in their teaching.
								In view of this, let us observe certain Dos and Donts:
								• There is an immediate need to discard the practices adopted in the schools on a false belief
								that teaching of 10th class means preparing the children for public examination. In 10th
								class the teaching learning process should focus on achieving the academic standards rather
								winning race of scoring marks.
								• Avoid practices like using guides and question banks, asking the children to read only
								important questions, focussing on lessons which help in scoring more marks.
								• Read the lesson thoroughly before you start teaching and ask the children to read the text.
								Then initiate a discussion to make the children understand the concepts in the lessons.
								• Encourage children to express their own views and ideas while writing the answers. Give
								weightage to such type of writing in examination.
								• Some instructions are given in the textbook regarding the collection of certain information
								by the teacher. Collect such information and make it available to students.
								• In public examination, the weightage will be given to all aspects of the syllabus. Except
								foreword of the textbook everything else must be treated as a part of the curriculum.
								• Textual concepts are presented in two ways: one as the classroom teaching and the other
								as the laboratory performance.
								• Lab activities are part and parcel of a lesson. So, teachers must make the children conduct
								all such activities during the lesson itself, but not separately.
								• Teachers are advised to follow the following teaching steps while transacting lessons-mind
								mapping, reading lesson and identifyng new words by children, performing activities,
								demonstration and discussion, conclusion and evaluation.
								• In the text, some special activities are presented as box items: think and discuss, let us do,
								conduct interview, prepare report, display in wall magazine, participate in Theatre Day, do
								field observation, organize special days. To perform all of them is compulsory.
								• The abbreviation (A.S.) given at the end of each question in the section “Improve your
								learning” indicates academic standard.
								• Collect information of relevant website addresses and pass on to students so that they can
								utilize internet services for learning science on their own.
								• Plan and execute activities like science club, elocution, drawing, writing poetry on science,
								making models etc.to develop positive attitude among children about environment, SCERT
								biodiversity, ecological balance etc</p>
						</section>
						<section id="authentication">
							<h2>Authentication</h2>
							<p>…</p>
						</section>
						<section id="endpoints">
			<h2>Endpoints</h2>
			<section id="endpoints--root">
				<h3>Root</h3>
				<p>…</p>
			</section>
			<section id="endpoints--cities-overview">
				<h3>Cities Overview</h3>
				<p>…</p>
			</section>
			<section id="endpoints--city-detail">
				<h3>City Detail</h3>
				<p>…</p>
			</section>
			<section id="endpoints--city-config">
				<h3>City Config</h3>
				<p>…</p>
			</section>
			<section id="endpoints--city-spots-overview">
				<h3>City Spots Overview</h3>
				<p>…</p>
			</section>
			<section id="endpoints--city-spot-detail">
				<h3>City Spot Detail</h3>
				<p>…</p>
			</section>
			<section id="endpoints--city-config">
				<h3>City Config</h3>
				<p>…</p>
			</section>
			<section id="endpoints--city-spots-overview">
				<h3>City Spots Overview</h3>
				<p>…</p>
			</section>
			<section id="endpoints--city-spot-detail">
				<h3>City Spot Detail</h3>
				<p>…</p>
			</section>
			<section id="endpoints--city-icons-overview">
				<h3>City Icons Overview</h3>
				<p>…</p>
			</section>
			<section id="endpoints--city-icon-detail">
				<h3>City Icon Detail</h3>
				<p>…</p>
			</section>
		</section>
						<section id="links">
							<h2>Links</h2>
							<p>…</p>
						</section>
						<section id="expanders">
							<h2>Expanders</h2>
							<p>…</p>
						</section>
						<section id="filters">
							<h2>Filters</h2>
							<p>…</p>
						</section>
					</div>
					<nav className="section-nav">
						<ol>
							<li><a href="#introduction">Introduction</a></li>
							<li><a href="#request-response">Request &amp; Response</a></li>
							<li><a href="#authentication">Authentication</a></li>
							<li><a href="#authentication">Chemical Basis</a></li>
							<li><a href="#authentication">Evolution</a></li>
							<li><a href="#authentication">Ecology</a></li>
							<li><a href="#authentication">Refrences</a></li>
							<li><a href="#endpoints">Endpoints</a>
				<ul>
					<li className=""><a href="#endpoints--root">Root</a></li>
					<li className=""><a href="#endpoints--cities-overview">Cities Overview</a></li>
					<li className=""><a href="#endpoints--city-detail">City Detail</a></li>
					<li className=""><a href="#endpoints--city-config">City Config</a></li>
					<li className=""><a href="#endpoints--city-spots-overview">City Spots Overview</a></li>
					<li className=""><a href="#endpoints--city-spot-detail">City Spot Detail</a></li>
					<li className=""><a href="#endpoints--city-icons-overview">City Icons Overview</a></li>
					<li className=""><a href="#endpoints--city-icon-detail">City Icon Detail</a></li>
				</ul>
			</li>
							<li className=""><a href="#links">Links</a></li>
							<li className=""><a href="#expanders">Expanders</a></li>
							<li className=""><a href="#filters">Filters</a></li>
						</ol>
					
					</nav>
				</div>
			</div>




				<Dialog sx={{ borderColor: "2px solid green",top:"35%",left:"50%",height:"500px" }} open={open} onClose={handleClose} fullWidth maxWidth="md" >
					<DialogTitle style={{ padding: "3px 3px",backgroundColor:"#EFE8E4", fontSize: "1rem" }}>Please enter your question here and press&nbsp;
						<Button color="primary" style={{backgroundColor:"white",color:"black",borderRadius:"10px",padding:"0px"}}  onClick={handleClose}>
							Submit
						</Button>
					</DialogTitle>
					<DialogContent style={{boxShadow: "inset24px 0 0 0 lightGreen, inset -20px 0 0 0 lightGreen, inset 0 -30px 0 0 lightGreen, inset 40px 0 0 0 lightGreen;"}}>
						<TextField
							name="questions"
							multiline
							rows={10}
							sx={{
								width: "100%",
							}}
							
							fullWidth
						// value={formData.email}
						// onChange={handleInputChange}
						/>
					</DialogContent>
					
				</Dialog>
			{/* </div> */}

			{/* <button className="open-button" >
        Chat
      </button> */}
	  <svg className="open-button"  xmlns="http://www.w3.org/2000/svg" onClick={() => openForm()} width="100" height="50" viewBox="0 0 20 20"><path fill="gray" d="M10 3C7.796 3 6 4.796 6 7a.75.75 0 0 0 1.5 0c0-1.376 1.124-2.5 2.5-2.5s2.5 1.124 2.5 2.5c0 .597-.156.975-.368 1.27c-.232.325-.547.58-.969.92l-.01.008c-.4.323-.893.724-1.27 1.288c-.391.588-.633 1.313-.633 2.264v.5a.75.75 0 0 0 1.5 0v-.5c0-.674.164-1.105.382-1.432c.233-.349.552-.62.964-.953l.068-.055c.374-.302.834-.672 1.188-1.167C13.75 8.588 14 7.903 14 7c0-2.204-1.796-4-4-4m0 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></svg>

      <div className="chat-popup form-container" id="myForm">
        {/* <form action="/action_page.php" className="form-container"> */}
          <h6 style={{margin:"0px", padding: "3px 3px",backgroundColor:"#EFE8E4", fontSize: "1rem" }}>Please enter your question here and press
		 
		
		  <svg  style={{justifyContent:"end"}} cursor="pointer"  onClick={() => closeForm()} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="red" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
		  
		  </h6>
        <div>
		{/* <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" /> */}
		{/* <ReactQuill theme="snow"  /> */}
          <textarea placeholder="Type message.." name="msg" required></textarea>
		  </div>
		  <div style={{alignItems:"end"}}>
		  <Button color="primary"  style={{backgroundColor:"white",color:"black",justifyContent:"end",borderRadius:"10px",padding:"0px"}}  onClick={handleClose}>
							Submit
						</Button>
						</div>
        {/* </form> */}
      </div>

			</PageContainer>
			</Box>
		</>
	)
}








