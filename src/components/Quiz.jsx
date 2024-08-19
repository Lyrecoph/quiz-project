
// Ce composant permettra de montrer la question en cours 
// et lorsque l'uitilisateur à répondu à la question je peux passer 
// à une autre question et d'enregistrer les réponses de l'utilisateur

import { useState } from "react";

import QUESTIONS from '../questions.js';

export default function Quiz(){
    // Etat qui gère l'enregistrement des réponses sélectionnées par l'utilisateur
    const [userAnswers, setUserAnswers] = useState([]);

    // dérive l'index de la question à partir des éléments de réponse 
    // se trouvant dans le tableau de question
    const activeQuestionIndex = userAnswers.length;

    function handleSelectAnswer(selectedAnswer){
        // permet de stocker la réponses sélectionnées dans un tableau
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        })
    }
    
    return(
        <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
                    <li key={answer} className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}