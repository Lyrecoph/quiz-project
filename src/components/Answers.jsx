import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}){
    const shuffledAnswers = useRef();
    // si la valeur n'est pas défini
    if (!shuffledAnswers.current){
        // recupère les réponses d'une question
        shuffledAnswers.current = [...answers];
        // mélange les réponses 
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    
    return(
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClass = '';

                if(answerState === 'answered' && isSelected){
                    cssClass = 'selected';
                }

                if((answerState === 'correct' || answerState === 'wrong') && isSelected){
                    cssClass = answerState;
                }
                return (
                    <li key={answer} className="answer">
                        <button 
                            onClick={() => onSelect(answer)}
                            className={cssClass}
                        >
                            {answer}
                        </button>
                    </li>
                )
            }
            )}
        </ul>
    )
}