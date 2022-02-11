import { getLetters, getAuthors, getRecipients, getTopics } from "./dataAccess.js"

//targets the main container in index.html
const mainContainer = document.querySelector("#mainContainer")

//function to render database letters as html
export const Letters = () => {
    const letters = getLetters()
    let html = `
        <ul id="letterContainer">
            ${letters.map(convertLetterToListElement).join("")}
        </ul>
        `
    return html
}

//function to stringify letters
const convertLetterToListElement = (letter) => {
    //match letter.author to author.id in order to display author.email
    //match letter.recipient to recipient.id in order to display recipient.email
    //match letter.topic to topic.id in order to display the topic
    //converts date to basic format
    const authors = getAuthors()
    const recipients = getRecipients()
    const topics = getTopics()
    const matchAuthor = authors.find(author => author.id === letter.authorId)
    const matchRecipient = recipients.find(recipient => recipient.id === letter.recipient)
    const matchTopic = topics.find(topic => topic.id === letter.topic)
    let date = new Date(letter.date)
    date = date.toLocaleDateString("en-US")
    
    let html = `<li class="wholeLetter">
        <div class="addresing">Dear ${matchRecipient.recipientName} (${matchRecipient.recipientEmail}),</div>

        <div class="letterContent">${letter.letter}</div>

        <div class="letterSalutation"> Sincerely, ${matchAuthor.authorName} (${matchAuthor.authorEmail}) </div>

        <div class="date">Sent on ${date}</div>

        <div class="letterTopic">${matchTopic.topicName}</div>
        
        </li>`
    return html

}