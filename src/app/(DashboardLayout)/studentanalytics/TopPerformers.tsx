'use client';
import { Card, Grid, Typography, Box } from '@mui/material';
import "./style.css"

const Performers = () => {

    return (

        <Card style={{ height: 400, width: '100%' }} >
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: '10px 0px 15px 10px', borderRadius: '5px', paddingLeft: 10 }}>Performance Ranking in this course</Typography><br />
            <Box sx={{ overflow: 'auto', maxHeight: 310, width: '100%' }}>
                <Grid container item xs={12} lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }} >
                    <Grid item xs={1} lg={2}>Raju</Grid>
                    <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "90%" }}>90%</div></Grid>
                </Grid>
                <Grid container item xs={12} lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}   >
                    <Grid item xs={1} lg={2}>Priya</Grid>
                    <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "85%" }}>85%</div></Grid>
                </Grid>
                <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}>You</Grid>  <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "84%" }}>84%</div></Grid>
                </Grid>
                <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}>Lala</Grid>  <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "70%" }}>70%</div></Grid>
                </Grid><Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}> Rahim</Grid>
                    <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "69%" }}>69%</div></Grid>
                </Grid >
                <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}> Mina</Grid>  <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "66%" }}>66%</div></Grid>
                </Grid>                <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}> Farun</Grid>  <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "65%" }}>65%</div></Grid>
                </Grid >
                <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}>Ravi</Grid>  <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "64%" }}>64%</div></Grid>
                </Grid>                <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}>Meera</Grid>  <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "63%" }}>63%</div></Grid>
                </Grid >
                <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}>Meena </Grid> <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "62%" }}>62%</div></Grid>
                </Grid>
                <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}>Deera</Grid>  <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "60%" }}>60%</div></Grid>
                </Grid >
                <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}>Falguni </Grid> <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "59%" }}>59%</div></Grid>
                </Grid>              <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}>Frankie </Grid> <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "58%" }}>58%</div></Grid>
                </Grid >                   <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}>Rampal</Grid>  <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "55%" }}>55%</div></Grid>
                </Grid>
                <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}>Ramu </Grid> <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "55%" }}>55%</div></Grid>
                </Grid >


                <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}>Nehru</Grid>  <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "54%" }}>54%</div></Grid>
                </Grid > <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}>Tharuna</Grid>  <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "53%" }}>53%</div></Grid>
                </Grid >


                <Grid container item lg={12} style={{ paddingLeft: 30, paddingBottom: 10, display: 'flex' }}  >
                    <Grid item xs={1} lg={2}> Raki</Grid>  <Grid item xs={11} lg={10}>
                        <div className="progress-bar" role="progressbar" style={{ width: "50%" }}>50%</div></Grid>
                </Grid>



            </Box >
        </Card >

    )

};

export default Performers;

