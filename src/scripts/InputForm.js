import {getTopics, getRecipients } from "./dataAccess.js"
import {Authors} from "./AuthorsDropDown.js"


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
            <label class="label" for="Recipient">Choose recipient...</label>
        </div>
        <button class="button" id="submitLetter">Send Letter</button>

    
    
    `
    return html
}

//targets main container
const mainContainer = document.querySelector("#mainContainer")

