var messages = {
    brokenParts: {
        rectangle: "Do you see me? How am I supposed to fit into such a thin Rocket?!",
        pyramid: "Oops you'll have to choose a nose that isn't wonky",
        smallTriangle: "The Rocket will not take off with wings that small",
        thruster1: "Oh no, that's way too small - your're going to have to choose another one",
        twoLargePanels: "There's no glass in these windows, I'll get sucked into Space!",
        chuckNorris: "I see you've chosen the Chuck Norris colour, this is special because html converts colour names to hexadecimal, here's a diagram to help you understand\n 'Chuck Norris' -> “chucknorris” -> C00C 0000 0000 -> C0 00 00 -> #C00000 -> red!"
    },
    missingParts: {
        nose: "This rocket won't take off without a  nose, add one now!",
        body: "This rocket won't take off without a  body, add one now!",
        wing: "This rocket won't take off without a  wing, add one now!",
        window: "This rocket won't take off without a  window, add one now!",
        thruster: "This rocket won't take off without a  thruster, add one now!"
    },
    rocketBuilding: {
        firstMessage: "Hello there!, my names JV, just like the real one I was built with code. Lets begin with adding some parts, start by adding a body",
        noseMessage: "Well done, now add a nose to give this rocket some aerodynamics.",
        wingMessage: "Great job! You're a natural, lets add wings to make this ship fly.",
        thrusterMessage: "Now add a thruster to get us off the ground.",
        windowsMessage: "With a ride back to earth this long some windows would help.",
        colorMessage: "Our rocket is too boring, choose a colour to snazz it up a bit",
        borderColorMessage: "Just to make it look even nicer lets add a border colour"
    }
}

export default function addParts() {
    if (body != "" || "Rectangle") { return dispatch(robotMessage("Well done, now add a nose to give this rocket some aerodynamics.")) }
}