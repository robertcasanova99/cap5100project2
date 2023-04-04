import {React, useState} from 'react'
import TextField from "@mui/material/TextField";
import IconButton from "@material-ui/core/IconButton";
import TuneIcon from '@mui/icons-material/Tune';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import List from "./List";
import Dialog from '@mui/material/Dialog';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { DialogContent, Grid } from '@mui/material';


export const Features = (props) => {
    const [inputText, setInputText] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);

    // Amenity state holders
    const [amenityOneChecked, setAmenityOneChecked] = useState(false);
    const [amenityTwoChecked, setAmenityTwoChecked] = useState(false);
    const [amenityThreeChecked, setAmenityThreeChecked] = useState(false);
    const [amenityFourChecked, setAmenityFourChecked] = useState(false);
    const [amenityFiveChecked, setAmenityFiveChecked] = useState(false);
    const [amenitySixChecked, setAmenitySixChecked] = useState(false);
    const [amenitySevenChecked, setAmenitySevenChecked] = useState(false);
    const [amenityEightChecked, setAmenityEightChecked] = useState(false);
    const [amenityNineChecked, setAmenityNineChecked] = useState(false);
    const [amenityTenChecked, setAmenityTenChecked] = useState(false);
    
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

    let onFilterClickHandler = (e) => {
        setDialogOpen(true);
        console.log('clicked on filter')
    }

    let dialogClosedHandler = (e) => {
        setDialogOpen(false)
    }
  
    let onProfileClickHandler = (e) => {
        console.log('clicked on profile')
    }

    return (
      <div className="main">
        <Dialog
            modal="false"
            open={dialogOpen}
            onClose={dialogClosedHandler}
            >
            <DialogContent
            style={{height:'250px', width: '320px'}}> 
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <FormControlLabel control={
                        <Checkbox onChange={(event) =>
                            setAmenityOneChecked(event.target.checked)
                        }/>}
                        label={
                            <Box component="div" fontSize={20}>
                            Amenity 1
                            </Box>
                        }
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel control={
                        <Checkbox onChange={(event) =>
                            setAmenityTwoChecked(event.target.checked)
                        }/>}
                        label={
                            <Box component="div" fontSize={20}>
                            Amenity 2
                            </Box>
                        }
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel control={
                        <Checkbox onChange={(event) =>
                            setAmenityThreeChecked(event.target.checked)
                        }/>}
                        label={
                            <Box component="div" fontSize={20}>
                            Amenity 3
                            </Box>
                        }
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel control={
                        <Checkbox onChange={(event) =>
                            setAmenityFourChecked(event.target.checked)
                        }/>}
                        label={
                            <Box component="div" fontSize={20}>
                            Amenity 4
                            </Box>
                        }
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel control={
                        <Checkbox onChange={(event) =>
                            setAmenityFiveChecked(event.target.checked)
                        }/>}
                        label={
                            <Box component="div" fontSize={20}>
                            Amenity 5
                            </Box>
                        }
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel control={
                        <Checkbox onChange={(event) =>
                            setAmenitySixChecked(event.target.checked)
                        }/>}
                        label={
                            <Box component="div" fontSize={20}>
                            Amenity 6
                            </Box>
                        }
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel control={
                        <Checkbox onChange={(event) =>
                            setAmenitySevenChecked(event.target.checked)
                        }/>}
                        label={
                            <Box component="div" fontSize={20}>
                            Amenity 7
                            </Box>
                        }
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel control={
                        <Checkbox onChange={(event) =>
                            setAmenityEightChecked(event.target.checked)
                        }/>}
                        label={
                            <Box component="div" fontSize={20}>
                            Amenity 8
                            </Box>
                        }
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel control={
                        <Checkbox onChange={(event) =>
                            setAmenityNineChecked(event.target.checked)
                        }/>}
                        label={
                            <Box component="div" fontSize={20}>
                            Amenity 9
                            </Box>
                        }
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel control={
                        <Checkbox onChange={(event) =>
                            setAmenityTenChecked(event.target.checked)
                        }/>}
                        label={
                            <Box component="div" fontSize={20}>
                            Amenity 10
                            </Box>
                        }
                    />
                </Grid>
            </Grid>    
            </DialogContent>
        </Dialog>
        <div className="search">
            <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                label="Describe your ideal apartment with words!"
                fullWidth
            />
            <IconButton 
                style={{width: 50, height: 50, padding: 0}} 
                color="default" onClick={onFilterClickHandler}>
                <TuneIcon style={{width: 40, height: 40, padding: 0}}/>
            </IconButton>
            <IconButton 
                style={{width: 50, height: 50, padding: 0}} 
                color="default" onClick={onProfileClickHandler}>
                <AccountBoxIcon style={{width: 40, height: 40, padding: 0}}/>
            </IconButton>
        </div>

        <List input={inputText} />
      </div>
    );
};
