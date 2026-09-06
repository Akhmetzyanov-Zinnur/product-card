//1 уровеень

import { comments } from "./comments.js"

//массив с числами 1-10 и 5-10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredNumbers = numbers.filter(num => num>4)

//поиск определенной сущности в массиве
const products = ['молоко', 'хлеб', 'фрукты', 'яйца', 'масло']
const hasProduct = products.includes('фрукты')
if (hasProduct){
  console.log('Да, продукт есть в списке')
} else {
  console.log('Нет, продукта в списке не оказалось')
}

//изменение порядка элементов массива
function reverseElements(array){
  return array.reverse()
}
console.log(reverseElements(numbers))
console.log(reverseElements(products))

//комментарии, содержащие .com
const comEmails = comments.filter(comment => comment.email.endsWith('.com'))
console.log(comEmails)

//перебор массива по id
function updatePostIdById(comments){
  return comments.map((comment) => {
    const updatedComment = {...comment};
    if(comment.id <= 5){
      updatedComment.postId = 2;
    } else{
      updatedComment.postId = 1;
    }
    return updatedComment;
  })
}

console.log(overkillCommentsById(comments))

//массив из имен и айди

//const arrayOfNamesAndId 
function removeUnnecessaryKeys(comments){
  return comments.map(comment => {
    const {postId, email, body, ...cleanedComment} = comment
    return cleanedComment
  })
}

console.log(removeUnnecessaryKeys(comments))

//добавление свойства isInvalid
function addPropertyIsInvalid(comments){
  return comments.map((comment) => {
    const checkedComment = {...comment, isInvalid: comment.body.length > 180}
    return checkedComment
  })
}

console.log(addPropertyIsInvalid(comments))

//массив почт
const emailsArray = comments.reduce((acc, comment) => {
  acc.push(comment.email)
  return acc
}, [])

console.log(emailsArray)

const onlyEmailsArray = comments.map(comment => comment.email)

console.log(onlyEmailsArray)

//превращение массива с почтами в строку
const emailsCommaSeparated = emailsArray.toString()
console.log(emailsCommaSeparated)

const emailsList = emailsArray.join('\n')
console.log(emailsList)