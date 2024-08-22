
// Ce composant permettra de montrer la question en cours 
// et lorsque l'uitilisateur à répondu à la question je peux passer 
// à une autre question et d'enregistrer les réponses de l'utilisateur

import { useCallback, useState } from "react";

import QUESTIONS from '../questions.js';
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";


export default function Quiz(){
    // Etat qui gère l'enregistrement des réponses sélectionnées par l'utilisateur
    const [userAnswers, setUserAnswers] = useState([]);

    // dérive l'index de la question à partir des éléments de réponse 
    // se trouvant dans le tableau de question
    const activeQuestionIndex = userAnswers.length;
    
    // le nbre de réponse doit être égal au nbre de question
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback (
        function handleSelectAnswer(selectedAnswer){
        // permet de stocker la réponses sélectionnées dans un tableau
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        });
    }, []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null), 

    [handleSelectAnswer]);

    if(quizIsComplete){
        return (
            <Summary userAnswers={userAnswers} />
        )
    }

    return(
        <div id="quiz">
            <Question 
                key={activeQuestionIndex}
                indexques={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}