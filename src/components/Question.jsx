import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"
export default function Question({
    questionText, 
    answers, 
    onSelectAnswer,
    selectedAnswer,
    answerState,
    onSkipAnswer
})  {
    return(
        <div id="question">
            {/* timeout est la durée de la minuterie, en cas de dépassement 
            du délai d'attente, une fonction doit bien sûr être exécutée 
            une fois que le délai a expiré */}
            <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
            <h2>{questionText}</h2>
            <Answers 
                answers={answers} 
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelect={onSelectAnswer}
            />
        </div>
    )
}