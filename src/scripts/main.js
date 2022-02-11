
import { fetchLetters, fetchAuthors, fetchTopics, fetchRecipients } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"

//targets container to render html in
const mainContainer = document.querySelector("#mainContainer")

//render html
const render = () => {
    fetchLetters()
    .then(() => fetchAuthors())
    .then(() => fetchTopics())
    .then(() => fetchRecipients())
    .then(() => {
            mainContainer.innerHTML = PenPalSociety()
        }
    )
    
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)