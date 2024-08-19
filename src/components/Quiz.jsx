
// Ce composant permettra de montrer la question en cours 
// et lorsque l'uitilisateur à répondu à la question je peux passer 
// à une autre question et d'enregistrer les réponses de l'utilisateur

import { useCallback, useState } from "react";

import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz(){
    // Etat qui gère l'enregistrement des réponses sélectionnées par l'utilisateur
    const [userAnswers, setUserAnswers] = useState([]);

    // dérive l'index de la question à partir des éléments de réponse 
    // se trouvant dans le tableau de question
    const activeQuestionIndex = userAnswers.length;
    

    // le nbre de réponse doit être égal au nbre de question
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback (function handleSelectAnswer(selectedAnswer){
        // permet de stocker la réponses sélectionnées dans un tableau
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        })
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete){
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon" />
                <h2>Quiz Completed !</h2>
            </div>
        )
    }
    // recupère les réponses d'une question
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    // mélange les réponses 
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return(
        <div id="quiz">
            <div id="question">
                {/* timeout est la durée de la minuterie, en cas de dépassement 
                du délai d'attente, une fonction doit bien sûr être exécutée 
                une fois que le délai a expiré */}
                <QuestionTimer 
                    key={activeQuestionIndex}
                    timeout={10000}
                    onTimeout={handleSkipAnswer} 
                />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}