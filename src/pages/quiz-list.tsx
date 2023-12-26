import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import React,{useState,useEffect} from "react";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import TimerIcon from '@mui/icons-material/Timer';
import TimerDial from '../assets/icons/timerIcon.png'
import TranslateIcon from '@mui/icons-material/Translate';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
const Quizlist: React.FC = () => {
    const imageURL = 'https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg'
    const quizList = [
        {
          id: 1,
          quizName: 'Math Challenge',
          duration: '40 mins',
          formattedDate: '12 Mar 2023',
          numberOfQuestions: 20,
          language: 'English',
          likes: 50,
          userCount: 1000,
        },
        {
          id: 2,
          quizName: 'Music Trivia',
          duration: '25 mins',
          formattedDate: '21 Apr 2023',
          numberOfQuestions: 15,
          language: 'German',
          likes: 30,
          userCount: 750,
        },
        {
          id: 3,
          quizName: 'Sports Quiz',
          duration: '50 mins',
          formattedDate: '05 May 2023',
          numberOfQuestions: 25,
          language: 'Spanish',
          likes: 40,
          userCount: 900,
        },
        {
          id: 4,
          quizName: 'Coding Competition',
          duration: '60 mins',
          formattedDate: '15 Jul 2023',
          numberOfQuestions: 30,
          language: 'Python',
          likes: 35,
          userCount: 800,
        },
        {
          id: 5,
          quizName: 'Art History Challenge',
          duration: '35 mins',
          formattedDate: '20 Aug 2023',
          numberOfQuestions: 18,
          language: 'French',
          likes: 25,
          userCount: 600,
        },
        {
          id: 6,
          quizName: 'Geography Bee',
          duration: '45 mins',
          formattedDate: '25 Sep 2023',
          numberOfQuestions: 22,
          language: 'English',
          likes: 60,
          userCount: 1200,
        },
        {
          id: 7,
          quizName: 'Science Quiz',
          duration: '55 mins',
          formattedDate: '10 Oct 2023',
          numberOfQuestions: 24,
          language: 'Spanish',
          likes: 20,
          userCount: 500,
        },
        {
          id: 8,
          quizName: 'History Challenge',
          duration: '30 mins',
          formattedDate: '18 Nov 2023',
          numberOfQuestions: 16,
          language: 'English',
          likes: 45,
          userCount: 950,
        },
        {
          id: 9,
          quizName: 'Language Trivia',
          duration: '20 mins',
          formattedDate: '05 Dec 2023',
          numberOfQuestions: 12,
          language: 'German',
          likes: 70,
          userCount: 1400,
        },
        {
          id: 10,
          quizName: 'Math Olympics',
          duration: '75 mins',
          formattedDate: '20 Dec 2023',
          numberOfQuestions: 35,
          language: 'English',
          likes: 75,
          userCount: 1500,
        },
      ];
      
      
      
      

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
            <Button style={{backgroundColor:'#0077cc',borderRadius:'25px'}} variant="contained">Back</Button>
      </div>
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
                <img style={{width:'30%'}} src={TimerDial} alt="" />
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
          {/* <Typography gutterBottom variant="h5" component="div">
            {quiz.quizName}
          </Typography>
          <Typography style={{display:'flex',justifyContent:'space-between'}} variant="body2" color="text.secondary">
            <span style={{display:'flex',alignItems:'center'}}>
            <FileCopyIcon color="info" fontSize="small"/>
            {quiz.numberOfQuestions}
            </span>
            <span style={{display:'flex',alignItems:'center'}}>
            <TimerIcon  color="info" fontSize="small"/>
            {quiz.duration}
            </span>
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button onClick={() => openQuizWindow(quiz.id)} style={{width:'100%',backgroundColor:'#1A6AE5',color:'white',borderRadius:'20px'}}>
          Start Quiz
        </Button>
      </CardActions>
    </Card>
          {/* <button onClick={() => openQuizWindow()}>
            {quiz.quizName}
          </button>
          <p>Duration: {quiz.duration}</p>
          <p>Date: {quiz.date}</p>
          <p>Language: {quiz.language}</p>
          <hr /> */}
        </div>
      ))}
      </div>
    </div>
    // <button onClick={openQuizWindow}>Route</button>
)
}
export default Quizlist