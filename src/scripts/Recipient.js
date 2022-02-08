import { getRecipients } from "./dataAccess.js";

//function to create dropdown of recipients
export const Recipients = () => {
    const recipients = getRecipients()
    let html = ""

    html += `<select name="recipient">`
    html += `<option value="0">Choose recipient...</option>`

    //itterate through recipients
    const listItems = recipients.map(recipient => {
        return `<option class="select" name ="recipient" value="${recipient.id}">${recipient.recipientName}</option>`
    })
    html += listItems
    html += `</select>`
    return html
    
    
}

/*ask why this .map didn't work
for (const recipient of recipients) {
        html += `<option class="select" value="${recipient.id}">${recipient.recipientName}</option>`
    }
    html += `</select>`
    return html
*/
