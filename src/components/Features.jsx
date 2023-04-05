import {React, useState} from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TextField from "@mui/material/TextField";
import IconButton from "@material-ui/core/IconButton";
import TuneIcon from '@mui/icons-material/Tune';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import List from "./List";
import data from "./ListData.json"
import Dialog from '@mui/material/Dialog';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { DialogContent, Grid } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body4,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Features = (props) => {
    const minCost = data.map(function(el){return el.price}).reduce(function(prevEl, el){return Math.min(prevEl, el)});
    const maxCost = data.map(function(el){return el.price}).reduce(function(prevEl, el){return Math.max(prevEl, el)});

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
    const [priceSliderValue, setPriceSliderValue] = useState(((minCost + maxCost)/2) || 0);
    const [roommateSliderValue, setRoommateSliderValue] = useState(0);
    
    const amenityArray = [
        false,
        amenityOneChecked,
        amenityTwoChecked,
        amenityThreeChecked,
        amenityFourChecked,
        amenityFiveChecked,
        amenitySixChecked,
        amenitySevenChecked,
        amenityEightChecked,
        amenityNineChecked,
        amenityTenChecked
    ].reduce(
        (out, bool, index) => bool ? out.concat(index) : out, 
        []
    )

    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

    let onFilterClickHandler = (e) => {
        setDialogOpen(true);
    }

    let dialogClosedHandler = (e) => {
        setDialogOpen(false)
    }
    
    let priceSliderChangedHandler = (e, value) => {
        setPriceSliderValue(value)
    }

    let roommateSliderChangedHandler = (e, value) => {
        setRoommateSliderValue(value)
    }
  
    let onProfileClickHandler = (e) => {
        console.log('clicked on profile')
    }

    function appendDollarSign(value) {
        return `$${value}`;
    }

    return (
      <div className="main">
        <Dialog
            modal="false"
            open={dialogOpen}
            onClose={dialogClosedHandler}
            >
            <DialogContent
                style={{height:'390px', width: '350px'}}> 
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <FormControlLabel control={
                            <Checkbox onChange={(event) =>
                                setAmenityOneChecked(event.target.checked)
                            }/>}
                            label={
                                <Box fontSize={18}>
                                    <Item sx={{pl: 1, pr: 1}}> Amenity 1</Item>     
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
                                <Box fontSize={18}>
                                    <Item sx={{pl: 1, pr: 1}}> Amenity 2</Item>     
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
                                <Box fontSize={18}>
                                    <Item sx={{pl: 1, pr: 1}}> Amenity 3</Item>     
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
                                <Box fontSize={18}>
                                    <Item sx={{pl: 1, pr: 1}}> Amenity 4</Item>     
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
                                <Box fontSize={18}>
                                    <Item sx={{pl: 1, pr: 1}}> Amenity 5</Item>     
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
                                <Box fontSize={18}>
                                    <Item sx={{pl: 1, pr: 1}}> Amenity 6</Item>     
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
                                <Box fontSize={18}>
                                    <Item sx={{pl: 1, pr: 1}}> Amenity 7</Item>     
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
                                <Box fontSize={18}>
                                    <Item sx={{pl: 1, pr: 1}}> Amenity 8</Item>     
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
                                <Box fontSize={18}>
                                    <Item sx={{pl: 1, pr: 1}}> Amenity 9</Item>     
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
                                <Box fontSize={18}>
                                <Item sx={{pl: 1, pr: 1}}> Amenity 10</Item>     
                            </Box>
                            }
                        />
                    </Grid>
                </Grid>
                <Item sx={{mt:2}}>Budget</Item>            
                <Slider 
                    value={priceSliderValue}
                    min={minCost}
                    max={maxCost}
                    step={(minCost - maxCost) / 100}
                    onChange={priceSliderChangedHandler}
                    aria-label="Default" 
                    valueLabelDisplay="auto"
                    valueLabelFormat={appendDollarSign}
                    marks={[{value: minCost, label: `$${minCost}`}, {value: maxCost, label: `$${maxCost}`}]}
                />
                <Item>Number of Roommates</Item>     
                <Slider
                    aria-label="Custom marks"
                    value={roommateSliderValue}
                    max={4}
                    step={1}
                    onChange={roommateSliderChangedHandler}
                    valueLabelDisplay="off"
                    marks={[{value: 0, label: 'None'}, {value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}, {value: 4, label: '> 3'}]}
                />  
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

        <List 
            requiredAmenities={amenityArray}
            maxBudget={priceSliderValue}
            maxNumberOfRoommates={roommateSliderValue}
        />
      </div>
    );
};
