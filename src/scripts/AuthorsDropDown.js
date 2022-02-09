import { getAuthors, setAuthor } from "./dataAccess.js"

//function to create dropdown of authors
export const Authors = () => {
const authors = getAuthors()
    let html = ""
    
    html += `<select name="author">`
    html += `<option name="author" value="0">Choose author... </option>`
    
    //itterate through authors 
    for (const author of authors) {
        html += `<option class="select" name="author" value="${author.id}">${author.authorName}</option>`
    }
    html += "</select>"
    return html

    }

    document.addEventListener(
        "change",
        (event) => {
            if (event.target.name === "author") {
                setAuthor(parseInt(event.target.value))
            }
        }
    )
