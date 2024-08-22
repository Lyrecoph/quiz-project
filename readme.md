# QUIZ PROJECT

- Pour chaque question l'on affiche des réponses qui sont mélangé
- Lorsqu'on click sur une réponse on passe à la question suivante ainsi de suite
- savoir si le quiz est terminé il s'agit du coup d'une valeur calculée, il sera terminé si nous enregistrons autant questions que de reponse et une fois égaux on affiche que le quiz est terminé
- Travailler sur l'écran de fin de partie en indiquant à l'utilisateur le nbre de questions qu'il a répondu correctement
- Pour chaque question vous disposez d'un temps limité pour y répondre si vous ne répondez pas dans le temps impartie la question sera sauté pour la suivante
- Lorsque que la question change la barre de progression doit être reiniatialiser pour faire ça l'on peut utiliser

```
Example:
<QuestionTimer 
    key={activeQuestionIndex}
    timeout={10000}
    onTimeout={handleSkipAnswer} 
/>
```
- Lorsque l'utilisateur choisit une réponse, je la mette d'abord en surbillance et au bout d'une seconde, la couleur de la réponse passe à vert s'il s'agit de la bonne réponse, rouge si c'est mauvaise 
- Si l'utilisateur choisit une réponse nous voulons vérouiller la réponse et indiquer à l'utilisateur si elle est correcte ou non avant de passer à la question suivante