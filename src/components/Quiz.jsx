
// Ce composant permettra de montrer la question en cours 
// et lorsque l'uitilisateur à répondu à la question je peux passer 
// à une autre question et d'enregistrer les réponses de l'utilisateur

import { useCallback, useState } from "react";

import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from "./Question.jsx";


export default function Quiz(){
    // Etat qui gère la réponse actuelle
    const [answerState, setAnswerState] = useState('');
    // Etat qui gère l'enregistrement des réponses sélectionnées par l'utilisateur
    const [userAnswers, setUserAnswers] = useState([]);

    // dérive l'index de la question à partir des éléments de réponse 
    // se trouvant dans le tableau de question
    const activeQuestionIndex = 
        answerState === '' ? userAnswers.length : userAnswers.length - 1;
    
    // le nbre de réponse doit être égal au nbre de question
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback (
        function handleSelectAnswer(selectedAnswer){
        // permet de changer la couleur de la réponse sélectionné
        setAnswerState('answered')
        // permet de stocker la réponses sélectionnées dans un tableau
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        });

        setTimeout(() => {
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            } else{
                setAnswerState('wrong');
            }

            setTimeout(() => {
                setAnswerState('');
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null), 
        [handleSelectAnswer]);

    if(quizIsComplete){
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon" />
                <h2>Quiz Completed !</h2>
            </div>
        )
    }

    return(
        <div id="quiz">
            <Question 
                key={activeQuestionIndex}
                questionText={QUESTIONS[activeQuestionIndex].text}
                answers={QUESTIONS[activeQuestionIndex].answers}
                answerState={answerState}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}