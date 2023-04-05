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
import axios from "axios";
import amenityNames from "./Amenities"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

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
    const [priceSliderValue, setPriceSliderValue] = useState(maxCost || 0);
    const [roommateSliderValue, setRoommateSliderValue] = useState(4);

    const [isLoading, setIsLoading] = useState(false);
    const [hideResults, setHideResults] = useState(false);
    
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

    const fetchData = async (input) => {
        let parsedAmenities = ""
        for (let i = 1; i < amenityNames.length; i++) {
            parsedAmenities += i + ". " + amenityNames[i] + "\n"
        }
        try{
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    messages: [{role: 'user', content:`A client who is looking for an apartment says they are looking for the following: "${input}".  From our following numbered amenities: \n"${parsedAmenities}"Can you return an array of each amenity's number which matches the amenity the client would most likely desire given their description. Say nothing else but the array, even if it is empty- still say nothing and return an empty array. Don't even say the word's "empty array"`}],
                    model: "gpt-3.5-turbo",
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${process.env.REACT_APP_CHATGPT_KEY}`,
                    },
                }
            );
            console.log(response)
            return response;
        } catch(err){
            setIsLoading(false)
            console.log(err);
        }
      };


    let inputHandler = (e) => {
        let text = e.target.value
        setInputText(text)
        if (text.length === 0) {
            resetChecks()
        }
    };

    let textInput = async (e) => {
        if(e.key === "Enter") {
            if (e.target.value.length === 0) {
                return;
            }

            setIsLoading(true)
            let promise = await fetchData(inputText)
            setIsLoading(false)
            resetChecks()

            try {
                let result = (promise.data.choices[0].message.content)
                if (result === "[]") {
                    setHideResults(true)
                    return
                }
                let parsedResult = result.substring(1, result.length - 1).split(",").map(function(str) {
                    return parseInt(str);
                })
                
                for (let i = 0; i < parsedResult.length; i++) {
                    amenityArray[parsedResult[i]] = true
                    switch (parsedResult[i]) {
                        case 1:
                            setAmenityOneChecked(true)
                            break
                        case 2:
                            setAmenityTwoChecked(true)
                            break
                        case 3:
                            setAmenityThreeChecked(true)
                            break
                        case 4:
                            setAmenityFourChecked(true)
                            break  
                        case 5:
                            setAmenityFiveChecked(true)
                            break  
                        case 6:
                            setAmenitySixChecked(true)
                            break  
                        case 7:
                            setAmenitySevenChecked(true)
                            break  
                        case 8:
                            setAmenityEightChecked(true)
                            break
                        case 9:
                            setAmenityNineChecked(true)
                            break
                        case 10:
                            setAmenityTenChecked(true)
                            break
                        default:
                            break                                
                    }
                }
            } catch {}
        }
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

    function resetChecks() {
        // Reset checks
        setAmenityOneChecked(false)
        setAmenityTwoChecked(false)
        setAmenityThreeChecked(false)
        setAmenityFourChecked(false)
        setAmenityFiveChecked(false)
        setAmenitySixChecked(false)
        setAmenitySevenChecked(false)
        setAmenityEightChecked(false)
        setAmenityNineChecked(false)
        setAmenityNineChecked(false)
        setHideResults(false)
    }

    return (
      <div className="main">
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
        <Dialog
            modal="false"
            open={dialogOpen}
            onClose={dialogClosedHandler}
            >
            <DialogContent
                style={{height:'380px', width: '470px'}}> 
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='stretch'>
                    <Grid item xs={6}>
                        <FormControlLabel control={
                            <Checkbox checked={amenityOneChecked} onChange={(event) =>
                                setAmenityOneChecked(event.target.checked)
                            }/>}
                            label={
                                <Box fontSize={16}>
                                    <Item sx={{pl: 1, pr: 1}}> {amenityNames[1]} </Item>     
                                </Box>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel control={
                            <Checkbox checked={amenityTwoChecked} onChange={(event) =>
                                setAmenityTwoChecked(event.target.checked)
                            }/>}
                            label={
                                <Box fontSize={16}>
                                    <Item sx={{pl: 1, pr: 1}}> {amenityNames[2]} </Item>     
                                </Box>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel control={
                            <Checkbox checked={amenityThreeChecked} onChange={(event) =>
                                setAmenityThreeChecked(event.target.checked)
                            }/>}
                            label={
                                <Box fontSize={16}>
                                    <Item sx={{pl: 1, pr: 1}}> {amenityNames[3]} </Item>     
                                </Box>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel control={
                            <Checkbox checked={amenityFourChecked} onChange={(event) =>
                                setAmenityFourChecked(event.target.checked)
                            }/>}
                            label={
                                <Box fontSize={16}>
                                    <Item sx={{pl: 1, pr: 1}}> {amenityNames[4]} </Item>     
                                </Box>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel control={
                            <Checkbox checked={amenityFiveChecked} onChange={(event) =>
                                setAmenityFiveChecked(event.target.checked)
                            }/>}
                            label={
                                <Box fontSize={16}>
                                    <Item sx={{pl: 1, pr: 1}}> {amenityNames[5]} </Item>     
                                </Box>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel control={
                            <Checkbox checked={amenitySixChecked} onChange={(event) =>
                                setAmenitySixChecked(event.target.checked)
                            }/>}
                            label={
                                <Box fontSize={16}>
                                    <Item sx={{pl: 1, pr: 1}}> {amenityNames[6]} </Item>     
                                </Box>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel control={
                            <Checkbox checked={amenitySevenChecked} onChange={(event) =>
                                setAmenitySevenChecked(event.target.checked)
                            }/>}
                            label={
                                <Box fontSize={16}>
                                    <Item sx={{pl: 1, pr: 1}}> {amenityNames[7]} </Item>     
                                </Box>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel control={
                            <Checkbox checked={amenityEightChecked} onChange={(event) =>
                                setAmenityEightChecked(event.target.checked)
                            }/>}
                            label={
                                <Box fontSize={16}>
                                    <Item sx={{pl: 1, pr: 1}}> {amenityNames[8]} </Item>     
                                </Box>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel control={
                            <Checkbox checked={amenityNineChecked} onChange={(event) =>
                                setAmenityNineChecked(event.target.checked)
                            }/>}
                            label={
                                <Box fontSize={16}>
                                    <Item sx={{pl: 1, pr: 1}}> {amenityNames[9]} </Item>     
                                </Box>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel control={
                            <Checkbox checked={amenityTenChecked} onChange={(event) =>
                                setAmenityTenChecked(event.target.checked)
                            }/>}
                            label={
                                <Box fontSize={16}>
                                <Item sx={{pl: 1, pr: 1}}> {amenityNames[10]} </Item>     
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
                onKeyDown={textInput}
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
            hideResults={hideResults}
        />
      </div>
    );
};
