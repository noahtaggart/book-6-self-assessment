
import { fetchFormFields, fetchAuthors } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"

//targets container to render html in
const mainContainer = document.querySelector("#mainContainer")

//render html
const render = () => {
    fetchFormFields()
    .then(() => fetchAuthors())
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