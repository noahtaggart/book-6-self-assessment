import { getFormFields, getAuthors, getRecipients, getTopics } from "./dataAccess.js"

//targets the main container in index.html
const mainContainer = document.querySelector("#mainContainer")

//function to render database letters as html
export const Letters = () => {
    const letters = getFormFields()
    let html = `
        <ul>
            ${letters.map(convertLetterToListElement).join("")}
        </ul>
        `
    return html
}

//function to stringify letters
const convertLetterToListElement = (letter) => {
    //match formfield.author to author.id in order to display author.email
    //match formField.recipient to recipient.id in order to display recipient.email
    const authors = getAuthors()
    const recipients = getRecipients()
    const topics = getTopics()
    const matchAuthor = authors.find(author => author.id === letter.author)
    const matchRecipient = recipients.find(recipient => recipient.id === letter.recipient)
    const matchTopic = topics.find(topic => topic.id === letter.topic)

    let html = `<li class="wholeLetter">
        <div class="addresing">Dear ${matchRecipient.recipientName} (${matchRecipient.recipientEmail}),</div>

        <div class="letterContent">${letter.letter}</div>

        <div class="letterSalutation"> Sincerely, ${matchAuthor.authorName} (${matchAuthor.authorEmail}) </div>

        <div class="date">Sent on ${letter.date}</div>

        <div class="letterTopic">${matchTopic.topicName}</div>
        
        </li>`
    return html

}