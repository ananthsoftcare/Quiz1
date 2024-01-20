import { useState } from "react";
import { styled } from '@mui/material/styles';
import { Box, Card, Grid, IconButton } from '@mui/material';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField
} from "@mui/material";
import { useRouter } from "next/router";
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import StarBorderSharpIcon from '@mui/icons-material/StarBorderSharp';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
	  padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
	  padding: theme.spacing(1),
	},
}));

const CollectionFilter = (props: any) => {
	const navLinksData = props.navLinks;
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const [ctitle, setCtitle] = useState('');
	type floating = {
		openModal: string;
	};

	const [floatingOpen, setFloatingOpen] =
		useState<floating>({
			openModal: ''
		});

	function openForm() {
		setFloatingOpen({ openModal: 'block' })
	}
	function closeForm() {
		setFloatingOpen({ openModal: 'none' })
	}

	const handleopenModal = () => {
		props.setOpenModalAddTitle(!props.openModalAddTitle)
	}

	const handleChangeDropdown = (e: any) => {
		if (e.target.value === "addTitle") {
			props.setOpenModalAddLabel(true)
			// let submitStar:boolean = true;
			
			// setSubmitStar(true)
		}
	}

	const handleCloseAllModal = () => {
		props.setOpenModalAddLabel(false)
		props.setOpenModalAddTitle(false)
		props.addCollection(ctitle);
		setTimeout(() => setCtitle(''), 100);
	}

  	return (
		<>
			<nav>
				<ol className='main-nav'>
				{navLinksData.map((el: any) => {
					if (!el.children) {
					return (
						<li key={el.id}>
							<a href={el.link}  style={{ display: "flex", alignItems: "center", justifyContent: "start", width: "100%" }}>
								<span>{el.name}</span>
								<div className="rating-icon">
									<StarBorderSharpIcon  style={{width:"20px",height:"20px",color:"grey"}} onClick={() => handleopenModal()}/>
								</div>
							</a>
						</li>
					);
					}

					return (
					<li
						key={el.id}
						className='header-nav-options options-hover'
					>
						<a href={el.link}  style={{ display: "flex", alignItems: "center", justifyContent: "start", width: "100%" }}>
							<span>{el.name}</span>
							<div className="rating-icon">
								<StarBorderSharpIcon  style={{width:"20px",height:"20px",color:"grey"}} onClick={() => handleopenModal()}/>
							</div>
						</a>
						<ol
						//animate={showSubMenu[el.id] ? "open" : "closed"}
						className='header-nav-ul'
						>
						{
							el.children.map((ele: any) => {
							if (!ele.children) {
								return (
								<li key={ele.id} className='sub-menu-li'>
									<a href={ele.link}  style={{ display: "flex", alignItems: "center", justifyContent: "start", width: "100%" }}>
										<span>{ele.name}</span>
										<div className="rating-icon">
											<StarBorderSharpIcon  style={{width:"20px",height:"20px",color:"grey"}} onClick={() => handleopenModal()}/>
										</div>
									</a>
								</li>
								);
							}

							return (
								<li
								key={ele.id}
								className='sub-menu-options sub-menu-hover'
								>
									<a href={ele.link}  style={{ display: "flex", alignItems: "center", justifyContent: "start", width: "100%" }}>
										<span>{ele.name}</span>
										<div className="rating-icon">
											<StarBorderSharpIcon  style={{width:"20px",height:"20px",color:"grey"}} onClick={() => handleopenModal()}/>
										</div>
									</a>
								<ol
									//animate={showSubMenu[ele.id] ? "open" : "closed"}
									className='sub-menu-ul'
								>
									{
									ele.children.map((elem: any) => {
										return (
										<li key={elem.id} className='grand-child-link'>
											<a href={elem.link}  style={{ display: "flex", alignItems: "center", justifyContent: "start", width: "100%" }}>
												<span>{elem.name}</span>
												<div className="rating-icon">
													<StarBorderSharpIcon  style={{width:"20px",height:"20px",color:"grey"}} onClick={() => handleopenModal()}/>
												</div>
											</a>
										</li>
										);
									})}
								</ol>
								</li>
							);
							})}
						</ol>
					</li>
					);
				})}
				</ol>
			</nav>
	
			
		<BootstrapDialog
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
			open={props.openModalAddTitle}
		>
			<DialogTitle sx={{ m: 0, p: "10px 3px 5px 10px",backgroundColor:"rgb(0 133 219 / 66%)",color:"white" }} id="customized-dialog-title">
			Add Bookmarks
			</DialogTitle>
			<IconButton
			aria-label="close"
			onClick={handleClose}
			sx={{
				position: 'absolute',
				padding:"5px 0px 5px 0px",
				right: 8,
				// top: 2,
				color: (theme) => theme.palette.grey[500],
			}}
			>
			<CloseIcon style={{color:"white"}}  onClick={()=>props.setOpenModalAddTitle(false) } />
			</IconButton>
			<DialogContent dividers>
				<Grid container spacing={{ xs: 1, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>						
					<Grid item xs={4}>
						<label>Collection</label>
					</Grid>
					<Grid item xs={8}>
						<select style={{ width: "85%" }} onClick={(e) => handleChangeDropdown(e)} className="input" name="cars" id="cars" >
						<option value="addTitle"><button style={{ backgroundColor: "green" }}>Add BookmarksTitle</button></option>
							
							<option value="introduction" selected>Introduction</option>
							<option value="chemistry">Chemistry</option>
							<option value="maths">Physics</option>
							<option value="biology">Communication</option>
							<option value="chemistry">Chemistry</option>
							<option value="maths">Physics</option>
							<option value="biology">Communication</option>
							<option value="chemistry">Chemistry</option>
							<option value="maths">Physics</option>
							<option value="biology">Communication</option>
							<option value="maths">Maths</option>
							<option value="social">Social Welfare</option>
						</select>
					</Grid>
					<Grid item xs={4}>
						<label>Description</label>
					</Grid>
					<Grid item xs={8}>
						<textarea style={{ width: "85%" }} name='description' className="input" ></textarea>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
			<div style={{ justifyContent: "flex-end", display: "flex", padding: "5px" }}>
							<Button style={{ justifyContent: "end", display: "flex", color: "white", backgroundColor: "rgb(0, 133, 219)" }} onClick={() => props.setOpenModalAddTitle(false)}>Submit</Button>
						</div>
			</DialogActions>
		</BootstrapDialog>	

		<BootstrapDialog
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
			open={props.openModalAddLabel}
		>
			<DialogTitle sx={{ m: 0, p: "10px 3px 5px 10px",backgroundColor:"rgb(0 133 219 / 66%)",color:"white" }} id="customized-dialog-title">
			Add Collection Title
			</DialogTitle>
			<IconButton
			aria-label="close"
			//   onClick={() => handleCloseAllModal()}
			sx={{
				position: 'absolute',
				padding:"5px 0px 5px 0px",
				right: 8,
				// top: 2,
				color: (theme) => theme.palette.grey[500],
			}}
			>
			<CloseIcon style={{color:"white"}}  onClick={()=>handleCloseAllModal() } />
			</IconButton>
			<DialogContent dividers>
			<Grid container spacing={{ xs: 1, md: 4 }}
				columns={{ xs: 4, sm: 8, md: 12 }}>
				<Grid item xs={2}>
					<label>Title</label>
				</Grid>
				<Grid item xs={10}>
					<input style={{ width: "100%" }} name="Email" id="Email" className="input" type="text" value={ctitle} onChange={ e => setCtitle(e.target.value)} />
				</Grid>
			</Grid>
			</DialogContent>
			<DialogActions>
			<div style={{ justifyContent: "flex-end", display: "flex", padding: "5px" }}>
				<Button disabled={ctitle.trim().length == 0} style={{ justifyContent: "end", display: "flex", color: "white", backgroundColor: "rgb(0, 133, 219)" }} onClick={() => handleCloseAllModal()}>Submit</Button>
			</div>
			</DialogActions>
		</BootstrapDialog>

		</>
  	);
};

export default CollectionFilter;