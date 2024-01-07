import {
    Grid,
    Avatar,
    Card,
    CardActions,
    CardHeader,
    Collapse,
    IconButton,
    Typography,
    makeStyles,
    Paper
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function QuestionAnsCard() {
    const [expand, setExpand] = useState(false);
    return (
        <>
            <Paper >
                <Card style={{ textAlign: "center" }}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" style={{ backgroundColor: "red" }}>
                                R
                            </Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardActions>
                        <Grid container justifyContent="center">
                            <IconButton onClick={() => setExpand(!expand)}>
                                <ExpandMoreIcon />
                            </IconButton>
                        </Grid>
                    </CardActions>
                    <Collapse in={expand}>
                        <Typography> Child </Typography>
                    </Collapse>
                </Card>
            </Paper>
        </>
    );
}
