import { getTopics, setTopic } from "./dataAccess.js";

//function creates radio selection of topics
export const Topics = () => {
    const topics = getTopics()
        let html = "<ul>"

        const listItems = topics.map(topic => {
            return `<input type="radio" name="topic" value=${topic.id}"> ${topic.topicName}`
        })
        html += listItems.join("")
        html += "</ul>"

        return html
    }

    
    document.addEventListener(
        "change",
        (event) => {
            if (event.target.name === "topic") {
                setTopic(parseInt(event.target.value))
            }
        }
    )
