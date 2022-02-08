//temporary state
const applicationState = {
    recipients:[],
    topics:[],
    formFields:[],
    authors:[]

}
//sets html target
const mainContainer = document.querySelector("#mainContainer")

//sets api server location
const API = "http://localhost:8000"


//exports COPIES of database arrays
export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}
export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

//fetches formFields from the database
export const fetchFormFields = () => {
    return fetch(`${API}/formFields`)
        .then(response => response.json())
        .then(
            (letterFormField) => {
                //store external state in temporary state
                applicationState.formFields = letterFormField
            }
        )
}

//fetches formAuthors from the database
export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (Authors) => {
                //store external state in temporary state
                applicationState.authors = Authors
            }
        )
}

//sends data back to database
export const sendFormField = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    //returns the updated field and refreshes the html
    return fetch(`${API}/formFields`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}