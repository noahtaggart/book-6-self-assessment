import { getAuthors } from "./dataAccess.js"

//function to create dropdown of authors
export const Authors = () => {
const authors = getAuthors()
    let html = ""
    
    html += `<select name="author">`
    html += `<option value="0">Choose author... </option>`
    
    //itterate through authors 
    for (const author of authors) {
        html += `<option selected class="select" value="${author.id}">${author.name}</option>`
    }
    html += "</select>"
    return html

    }