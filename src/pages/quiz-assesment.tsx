import React,{useState,useEffect} from "react";
import Countdown from '../utilities/countdown';
import Quiz from '../utilities/quiz';
import { Button } from '@mui/material';
import { Divider } from '@mui/material';
import Badge from '@mui/material/Badge';
import DescriptionIcon from '@mui/icons-material/Description';
import CircleIcon from '@mui/icons-material/Circle';
import Card from '@mui/material/Card';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

const QuizAssesment: React.FC = () => {
    const [dataFromChild, setDataFromChild] = useState<any[]>([]);
const [submitted , setSubmitted] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const [quizState, setQuizState] = useState({
    currentQuestion: 0,
    answers: new Array(10).fill(null), // Assuming 10 questions in the quiz
  });

  useEffect(() => {
    console.log(quizState.answers);
  }, [quizState.answers]); // Log whenever quizState.answers changes
  const updateAnswers = (questionNumber:number) => {
    setQuizState((prevState) => {
      const updatedAnswers = [...prevState.answers]; // Creating a copy of the previous answers
  
      if (updatedAnswers[prevState.currentQuestion] === null) {
        updatedAnswers[prevState.currentQuestion] = 'viewed'; // Update the answer if it's null
      }
  
      return {
        ...prevState,
        answers: updatedAnswers,
        currentQuestion: questionNumber,
      };
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        e.key === 'Escape' ||
        e.key === 'F5' ||
        e.key === 'ContextMenu' ||
        e.key === 'F11'
      ) {
        console.log('haiii')
        e.preventDefault();
        return false;
      } else if (e.ctrlKey && e.shiftKey && e.key === 'i') {
        e.preventDefault();
        return false;
      }
    
  };
  
  window.addEventListener("keydown", handleKeyDown);
  
  
  
  
  const handleSubmit = () =>{
    handleClose();
    setSubmitted(true);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    updateAnswers(quizState.currentQuestion + 1);
  };
  
  const handlePrevious = () => {
    updateAnswers(quizState.currentQuestion - 1);
  };
  
  const handleSpecificQuestion = (questionNumber:number) => {
    updateAnswers(questionNumber);
  };
  
  const nullCount = quizState.answers.filter(answer => answer === null || answer === 'viewed').length;

  const answerCount = quizState.answers.filter(answer => answer !== null && answer !== 'viewed').length;

  const handleAnswerSubmission = (answers: Array<string | null>) => {
    console.log('Submitted Answers:', answers);
    setQuizState({
      ...quizState,
      answers: answers,
    });
    // You can perform additional operations with the submitted answers here
  };

  const handleDataFromChild = (data: any[]) => {
    // Do something with the data received from the child
    setDataFromChild(data);
  };

  const getColor = (index: number, option: string | null) => {
    if (quizState.currentQuestion === index) {
      return "#1A6AE5";
    } else if (option === null) {
      return "white";
    }else if (option === 'viewed'){
      return "gray"
    }
     else {  return "#0080008f";
    }
  };

  const getTextColor = (index: number, option: string | null) => {
    if (quizState.currentQuestion === index) {
      return "white";
    } else if (option === null) {
      return "black";
    } else {  return "white";
    }
  };

  const answerColor = (index: number, option: string | null) => {
    console.log(dataFromChild[index].answer)
    if (option === dataFromChild[index].answer) {
      return "#0080008f";
    }
    if (option === null) {
      return "#ff000094";
    } 
    if(option !== dataFromChild[index].answer){
        return "#ff000094";
    }
  };

  const correctAnswers = dataFromChild.filter(
    (quiz, index) => quizState.answers[index] === quiz.answer
  ).length;

  const totalQuestions = dataFromChild.length;
  const percentage = ((correctAnswers / totalQuestions) * 100);
  const scoreColor = percentage >= 50 ? 'green' : 'red';

  return(
        
<div style={{backgroundColor:'#f0f0f0',minHeight:'100vh',paddingInline:'10%'}}>

        <div>
           <div style={{paddingBlock:'2%',display:'flex',justifyContent:'space-between'}}>
            <h1 style={{marginBlock:'0px'}}>DJI Drone Photo Academy: The Orginal & Official</h1>
            <Button style={{backgroundColor:'#0077cc',borderRadius:'25px'}} startIcon={<ArrowBackIcon />} variant="contained">Back</Button>
      </div>

       <div className="page-container">
       <Card className="main-content">
  {/* <div style={{ display: 'flex', justifyContent: 'space-between', paddingInline: '20px' }}>
    <h3 style={{ marginBlock: '0px' }}>Online Test</h3>
    <h3 style={{ marginBlock: '0px' }}>Exam Duration - <span style={{ color: 'red' }}>2 Hours</span></h3>
  </div> */}
  <div style={{ width: '100%', backgroundColor: 'rgb(240 240 240 / 71%)',marginTop:'0px',display:'flex',justifyContent:'space-between' }}>
  <p style={{paddingLeft:'20px'}}>
    Quant - Questions {quizState.currentQuestion + 1}
  </p>

  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
  <div style={{width:'30px',borderRadius:'50%',marginInline:'8px',backgroundColor:'rgb(255 0 0 / 10%)',height:'30px',display:'flex',justifyContent:'center',alignItems:'center',color:'red'}}>
                <p style={{fontSize:'10px',fontWeight:'bold'}}>1.00</p>
              </div>
  <div style={{width:'30px',borderRadius:'50%',marginInline:'8px',backgroundColor:'rgb(0 128 0 / 10%)',height:'30px',display:'flex',justifyContent:'center',alignItems:'center',color:'green'}}>
                <p style={{fontSize:'10px',fontWeight:'bold'}}>0.25</p>
              </div>
  </div>
  
  </div>
  
  <Quiz
  sendDataToParent={handleDataFromChild}
    submitted = {submitted}
    currentQuestion={quizState.currentQuestion}
    answers={quizState.answers}
    handleNext={handleNext}
    handlePrevious={handlePrevious}
    handleSpecificQuestion={handleSpecificQuestion}
    handleAnswerSubmission={handleAnswerSubmission}
  />
  
  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', paddingInline: '20px' }}>
    

      <Button startIcon={<ArrowBackIosIcon/>} style={{marginRight:'10px',width:'140px',display:'flex',justifyContent:'space-between',backgroundColor:'#cce4ff',color:'#0076ff',textTransform:'capitalize'}} variant="contained" onClick={handlePrevious} disabled={quizState.currentQuestion === 0}>
       Previous 
      </Button>
      <Button endIcon={<ArrowForwardIosIcon/>} style={{width:'140px',display:'flex',justifyContent:'space-between',textTransform:'capitalize',backgroundColor:'#1A6AE5'}} variant="contained" onClick={handleNext} disabled={quizState.currentQuestion === (quizState.answers).length - 1}>
        Save & Next
      </Button>
  </div>
</Card>


          <div className="side-content">
          {submitted ? (<div className='card-container'>
                
                <h2 style={{marginTop:'0px'}}>Your Results</h2>
                <Divider/>
                <p>Pass Score : 75%</p>
                <p>Your Score : {percentage}%</p>
              </div>):(
                <div className='card-container'>
                
                <div  style={{marginTop:'0px',display:'flex',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                <h4 style={{marginBlock:'0px'}}>Time Left</h4>
                <IconButton aria-label="delete">
               <InfoIcon />
               </IconButton>
                </div>
                
                <Divider/>
                <Countdown setSubmitted={setSubmitted}/>
                <h4 style={{marginBottom:'0px',textAlign:'center'}}>Exam Duration - <span style={{color:'red'}}>2 Hours</span></h4>
              </div>
              )}
            
{submitted ? (
    <div style={{backgroundColor:'white',borderRadius:'20px'}}>
<div style={{marginBlock:'15px',display:'flex',flexWrap:'wrap'}}>
          {(quizState.answers).map((option, index) => (
            <span style={{width:'16%',display:'flex',justifyContent:'center',marginBlock:'20px'}}>
            <Badge onClick={() => handleSpecificQuestion(index)} badgeContent={index + 1} color="info">
            <DescriptionIcon style={{ fontSize: 65, color: answerColor(index, option) }} />
            </Badge>
            </span>
                
              
            ))}


            </div> 

            <div style={{display:'flex',justifyContent:'space-evenly'}}>
              <div style={{display:'flex',alignItems:'center'}}>
              <CircleIcon style={{color:'#ff000094'}} />
              <p>Wrong Answer</p>
              </div>

              {/* <div style={{display:'flex',alignItems:'center'}}>
              <CircleIcon style={{color:'red'}}/>
              <p>Not Attempted</p>
              </div> */}

              <div style={{display:'flex',alignItems:'center'}}>
              <CircleIcon style={{color:'#0080008f'}}/>
              <p>Correct Answer</p>
              </div>
            </div>
            </div>
            ):(
                <div style={{backgroundColor:'white',borderRadius:'20px'}}>
<div style={{marginBlock:'15px',display:'flex',flexWrap:'wrap'}}>
          {(quizState.answers).map((option, index) => (
            <span style={{width:'16%',display:'flex',justifyContent:'center',marginBlock:'10px'}}>
              <div onClick={() => handleSpecificQuestion(index)} style={{width:'50px',borderRadius:'50%',backgroundColor:getColor(index,option),marginInline:'10px',height:'42px',display:'flex',justifyContent:'center',alignItems:'center',color:getTextColor(index,option),cursor:'pointer',border:'1px solid #0000004f'}}>
                <h4>{index + 1}</h4>
              </div>
            {/* <Badge onClick={() => handleSpecificQuestion(index)} badgeContent={index + 1} color="info">

            <DescriptionIcon style={{ fontSize: 65, color: getColor(index, option) }} />
            </Badge> */}
            </span>
                
              
            ))}


            </div> 

            <div style={{display:'flex',justifyContent:'space-evenly'}}>
              <div style={{display:'flex',alignItems:'center'}}>
              <CircleIcon style={{color:'#0077cc'}} fontSize="small"/>
              <p style={{fontSize:'12px'}}>Current</p>
              </div>

              <div style={{display:'flex',alignItems:'center'}}>
              <CircleIcon style={{color:'green'}} fontSize="small"/>
              <p style={{fontSize:'12px'}}>Answered</p>
              </div>

              <div style={{display:'flex',alignItems:'center'}}>
              <CircleIcon style={{color:'gray'}} fontSize="small"/>
              <p style={{fontSize:'12px'}}>Visited</p>
              </div>

              <div style={{display:'flex',alignItems:'center'}}>
              <FiberManualRecordOutlinedIcon fontSize="small"/>
              <p style={{fontSize:'12px'}}>Un viewed</p>
              </div>

            </div>
            </div>
            )}
          
          <div style={{backgroundColor:'white',borderRadius:'20px',display:'flex',flexDirection:'row',marginBlock:'15px',justifyContent:'center'}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginInline:'20px'}}>
            <div style={{paddingInline:'8px',backgroundColor:'#00800052',color:'green',borderRadius:'5px'}}>{answerCount}</div>
              <p style={{paddingInline:'10px'}}>Answered</p>
            </div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginInline:'20px'}}>
              <div style={{paddingInline:'8px',borderRadius:'5px',backgroundColor:'#ff00005c',color:'red'}}>{nullCount}</div>
              <p style={{paddingInline:'10px'}}>Unanswered</p>
            </div>
          </div>
            
          {!submitted && (
        <div>
        {quizState.answers.includes(null) ? (
            <div>
              <React.Fragment>
              <Button style={{width:'100%',textTransform:'capitalize',borderRadius:'20px',backgroundColor:'#1A6AE5'}} variant="contained" onClick={handleClickOpen} >Submit</Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle style={{display:'flex',justifyContent:'center',fontWeight:'bold'}} id="alert-dialog-title">
              {"Are you sure want to submit the Quiz ?"}
            </DialogTitle>
            <DialogContent style={{width:'500px',paddingBottom:'0px'}}>
              <DialogContentText style={{display:'flex',justifyContent:'space-around'}} id="alert-dialog-description">
              <p>Answered ({answerCount})</p>
              <p>Unanswered ({nullCount})</p>
              </DialogContentText>
            </DialogContent>
            <DialogActions style={{display:'flex',justifyContent:'center',paddingBottom:'20px'}}>
              <Button style={{width:'40%',backgroundColor:'rgb(189 189 189 / 43%)',color:'black'}} variant="contained" disableElevation onClick={handleClose}>Cancel {">"} </Button>
              <Button style={{width:'40%'}} variant="contained" disableElevation onClick={handleSubmit} autoFocus>
                Submit {">"}
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
              {/* Add any HTML you want to display when null is found */}
            </div>
          ) : (
            <div>
              <Button variant="contained" onClick={handleSubmit} color='success'>Submit</Button>
              {/* Add any HTML you want to display when no null is found */}
            </div>
          )}
           </div>
      )}
         </div>
     </div>
        </div>
      


     
    </div>
  )

}
export default QuizAssesment