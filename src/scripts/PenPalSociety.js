import { InputForm } from "./InputForm.js"
//import { Letters } from "./Letters.js"


export const PenPalSociety = () => {
    return `
        <h1>Pen Pal Society</h1>
        <section class="inputForm">
            ${InputForm()}
        </section>

        <section class="letters">
        <h2>Letters</h2>

        </section>
        `
}