import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import React,{} from "react";
import TimerDial from '../assets/icons/timerIcon.png'
import GreenTimer from '../assets/icons/timer-green.png'
import TranslateIcon from '@mui/icons-material/Translate';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';

const Quizlist: React.FC = () => {
    const imageURL = 'https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg'
    const quizList = [
        {
          id: 1,
          quizName: 'Math Challenge',
          duration: '40 mins',
          formattedDate: '12 Mar 2023',
          numberOfQuestions: 20,
          language: 'en',
          likes: 50,
          reattempt:false,
          userCount: 1000,
        },
        {
          id: 2,
          quizName: 'Music Trivia',
          duration: '25 mins',
          formattedDate: '21 Apr 2023',
          numberOfQuestions: 15,
          language: 'fr',
          likes: 30,
          reattempt:false,
          userCount: 750,
        },
        {
          id: 3,
          quizName: 'Sports Quiz',
          duration: '50 mins',
          formattedDate: '05 May 2023',
          numberOfQuestions: 25,
          language: 'en',
          likes: 40,
          reattempt:true,
          userCount: 900,
        },
        {
          id: 4,
          quizName: 'Coding Competition',
          duration: '60 mins',
          formattedDate: '15 Jul 2023',
          numberOfQuestions: 30,
          language: 'en',
          likes: 35,
          reattempt:false,
          userCount: 800,
        },
        {
          id: 5,
          quizName: 'Art History Challenge',
          duration: '35 mins',
          formattedDate: '20 Aug 2023',
          numberOfQuestions: 18,
          language: 'fr',
          likes: 25,
          reattempt:true,
          userCount: 600,
        },
        {
          id: 6,
          quizName: 'Geography Bee',
          duration: '45 mins',
          formattedDate: '25 Sep 2023',
          numberOfQuestions: 22,
          language: 'en',
          likes: 60,
          reattempt:false,
          userCount: 1200,
        },
        {
          id: 7,
          quizName: 'Science Quiz',
          duration: '55 mins',
          formattedDate: '10 Oct 2023',
          numberOfQuestions: 24,
          language: 'en',
          likes: 20,
          reattempt:false,
          userCount: 500,
        },
        {
          id: 8,
          quizName: 'History Challenge',
          duration: '30 mins',
          formattedDate: '18 Nov 2023',
          numberOfQuestions: 16,
          language: 'en',
          likes: 45,
          reattempt:false,
          userCount: 950,
        },
        {
          id: 9,
          quizName: 'Language Trivia',
          duration: '20 mins',
          formattedDate: '05 Dec 2023',
          numberOfQuestions: 12,
          language: 'fr',
          likes: 70,
          reattempt:false,
          userCount: 1400,
        },
        {
          id: 10,
          quizName: 'Math Olympics',
          duration: '75 mins',
          formattedDate: '20 Dec 2023',
          numberOfQuestions: 35,
          language: 'en',
          likes: 75,
          reattempt:false,
          userCount: 1500,
        },
      ];
      
      const sortByOptions = [
        { label: 'Name', value: 'name' },
        { label: 'Latest', value: 'date' },
        { label: 'Popularity', value: 'popularity' },
        { label: 'Rating', value: 'rating' },
        { label: 'Price', value: 'price' },
      ];
      const defaultOption = sortByOptions[0].value;
      
      const quizCategories = [
        { value :'allCategories', label:'All Categories'},
        { value: 'math', label: 'Mathematics' },
        { value: 'science', label: 'Science' },
        { value: 'history', label: 'History' },
        { value: 'language', label: 'Language Arts' },
        { value: 'programming', label: 'Programming' },
      
      ];
      const defaultCategory = quizCategories[0].value

      const ratingOptions = [
        { value: '5', label: '5 Stars' },
        { value: '4', label: '4 Stars' },
        { value: '3', label: '3 Stars' },
        { value: '2', label: '2 Stars' },
        { value: '1', label: '1 Star' },
        // You can add more rating options if needed
      ];

      const defaultRating = ratingOptions[0].value

      const openQuizWindow = (quizId: any) => {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        
        const quizWindow = window.open(`/Quizes/itemId=${quizId}`, 'Quiz', `width=${screenWidth},height=${screenHeight}`);
        
        
        if (quizWindow) {
            quizWindow.addEventListener('beforeunload', function (e) {
              // Cancel the event to prevent the window from reloading
              e.preventDefault();
              // Chrome requires returnValue to be set
              e.returnValue = '';
            });
          }
      };
      
return(
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      

      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',width:'75%'}}>
      <div style={{paddingTop:'2%',display:'flex',justifyContent:'space-between',width:'100%'}}>
            <h1 style={{marginBlock:'0px'}}>Quizzes</h1>
            <Button style={{backgroundColor:'#0077cc',borderRadius:'25px'}} startIcon={<ArrowBackIcon />} variant="contained">Back</Button>
      </div>
      <div style={{width:'100%',paddingTop:'2%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

            <div style={{width:'30%'}}>
            <FormControl fullWidth >
      <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
        label="Amount"
        placeholder="Search in your Quizzes"
      />
    </FormControl>
            </div>
            
            
      <div style={{width:'20%'}}>
      <TextField
      id="outlined-select-currency"
      select
      label="Sort by" // Change the label here
      defaultValue={defaultOption}
      fullWidth
    >
      {sortByOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
      </div>
      
      <div style={{width:'20%'}}>
      <TextField
      id="outlined-select-currency"
      select
      label="Sort by" // Change the label here
      defaultValue={defaultCategory}
      fullWidth
    >
      {quizCategories.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
      </div>

      <div style={{width:'20%'}}>
      <TextField
      id="outlined-select-currency"
      select
      label="Sort by" // Change the label here
      defaultValue={defaultRating}
      fullWidth
    >
      {ratingOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
      </div>


      </div>

      {/* quiz lists cards */}

      {quizList.map((quiz, index) => (
        <div style={{width:'18%',marginBlock:'20px'}} key={index}>
             <Card sx={{ maxWidth: '100%' }}>
      <CardActionArea>
        
      <CardMedia  
  component="img"
  height="140"
  image={imageURL} // Placeholder image URL
  alt="Placeholder Image"
/>

        <CardContent style={{paddingBottom:'5px'}}>
            <div style={{display:'flex',flexDirection:'row'}}>
              {quiz.reattempt === false ? (
                <img style={{width:'30%'}} src={TimerDial} alt="" />
              ):(
                <img style={{width:'30%'}} src={GreenTimer} alt="" />
              )}
                
                <div style={{width:'70%',paddingLeft:'5px'}}>
                    <h5 style={{marginBlock:'1px'}}>{quiz.quizName}</h5>
                    <h5 style={{marginBlock:'1px'}}>{quiz.numberOfQuestions} - Questions & {quiz.duration}</h5>
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <span style={{display:'flex',alignItems:'center'}}>
                    <TranslateIcon style={{fontSize:'15px'}} color="info" />
                    <p style={{fontSize:'10px',paddingLeft:'2px'}}>{quiz.language}</p>
                </span>
                <span style={{display:'flex',alignItems:'center'}}>
                    <ThumbUpIcon  style={{fontSize:'15px'}} color="info" />
                    <p style={{fontSize:'10px',paddingLeft:'2px'}}>{quiz.likes}</p>
                </span>
                <span style={{display:'flex',alignItems:'center'}}>
                    <PeopleIcon style={{fontSize:'15px'}} color="info" />
                    <p style={{fontSize:'10px',paddingLeft:'2px'}}>{quiz.userCount}</p>
                </span>
                <span style={{display:'flex',alignItems:'center'}}>
                    <EventIcon style={{fontSize:'15px'}} color="info" />
                    <p style={{fontSize:'10px',paddingLeft:'2px'}}>{quiz.formattedDate}</p>
                </span>
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {quiz.reattempt === false ? (<Button onClick={() => openQuizWindow(quiz.id)} endIcon={<ArrowForwardIcon />} style={{width:'100%',backgroundColor:'#1A6AE5',color:'white',borderRadius:'20px',textTransform:'capitalize'}}>
          Start Quiz
        </Button>)
        :(
          <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Button onClick={() => openQuizWindow(quiz.id)} variant="outlined" color="success" endIcon={<ArrowForwardIcon />} style={{width:'48%',borderRadius:'20px',textTransform:'capitalize'}}>
          Reattempt
        </Button>
        <Button onClick={() => openQuizWindow(quiz.id)} style={{width:'48%',backgroundColor:'green',color:'white',borderRadius:'20px',textTransform:'capitalize'}}>
          View Score
        </Button>
          </div>
        )
        }
      
      </CardActions>
    </Card>
        </div>
      ))}
      </div>

      <Pagination style={{paddingTop:'10px'}} count={10} size="large" color="primary" />
    </div>
)
}
export default Quizlist