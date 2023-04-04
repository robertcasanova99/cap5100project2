import {React, useState} from 'react'
import TextField from "@mui/material/TextField";
import IconButton from "@material-ui/core/IconButton";
import TuneIcon from '@mui/icons-material/Tune';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import data from "./ListData.json"
import List from "./List";

export const Features = (props) => {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

    let onFilterClickHandler = (e) => {
        console.log('clicked on filter')
    }
  
    let onProfileClickHandler = (e) => {
        console.log('clicked on profile')
    }

    const filteredData = data.filter((el) => {
        console.log(data.length)
        //if no input the return the original
        if (inputText.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(inputText.input)
        }
    })
    
    return (
      <div className="main">
        <div className="search">
            <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
                label="Search"
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
