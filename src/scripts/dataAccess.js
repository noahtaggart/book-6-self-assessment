//temporary state
const applicationState = {
    
    

}

//export transient state
export const transientState = () => {
    return applicationState
}
//sets html target
const mainContainer = document.querySelector("#mainContainer")

//sets api server location
const API = "http://localhost:8088"


//exports COPIES of database arrays
export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}
export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

//fetches letters from the database
export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (letters) => {
                //store external state in temporary state
                applicationState.letters = letters
            }
        )
}

//fetches authors from the database
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

//fetches topics from the database
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (topics) => {
                //store external state in temporary state
                applicationState.topics = topics
            }
        )
}

//fetches recipient from the database
export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (recipients) => {
                //store external state in temporary state
                applicationState.recipients = recipients
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

//sets author as current state
export const setAuthor = (authorId) => {
    applicationState.author = authorId
    document.dispatchEvent(new CustomEvent("stateChanged"))

}

//sets recipient as current state
export const setRecipient = (recipientId) => {
    applicationState.recipient = recipientId
    document.dispatchEvent(new CustomEvent("stateChanged"))

}

//sets topic as current state
export const setTopic = (topicId) => {
    applicationState.topic = topicId
    document.dispatchEvent(new CustomEvent("stateChanged"))

}