import {getTopics, getRecipients, sendFormField, transientState } from "./dataAccess.js"
import {Authors} from "./AuthorsDropDown.js"
import { Topics } from "./Topics.js"
import { Recipients } from "./Recipient.js"

//function to outline html to be later rendered
export const InputForm = () => {

    //saves database exports as variables
    const topics = getTopics()
    const recipients = getRecipients()

    //sets html as a variable
    //lays out input form in html
    let html = `
        <div class="field">
            <label class="label" for="author">Author</label>
            ${Authors()}

        </div>
        <div class="field">
            <label class="label" for="letter">Letter</label>
            <input type="text" name="letter" class="input"  style=height:200px />
        </div>
        <div class="field">
            <label class="label" for="topic">Topics</label>
            ${Topics()}
        </div>

        <div class="field">
            <label class="label" for="recipient">Recipient</label>
            ${Recipients()}
        </div>
        <button class="button" id="submitLetter">Send Letter</button>

    
    
    `
    return html
}

//targets main container
const mainContainer = document.querySelector("#mainContainer")

//adds event listeners to all the inputs and automatically grabs date and time

mainContainer.addEventListener("click", clickEvent => {
    const state = transientState()
    if (clickEvent.target.id === "submitLetter") {
        //stores transient state as different variables
        const letter = document.querySelector("input[name=letter]").value
        const author = state.author
        const topic = state.topic
        const recipient = state.recipient
        const currentDate = Date.now()

        //make and object out of the user input
        const letterData = {
            authorId: author,
            letter: letter,
            topic: topic,
            recipient: recipient,
            date: currentDate
        }

        sendFormField(letterData)
    }
})