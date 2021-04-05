import Apple from "../../assets/sounds/apple.mp3"
import Pear from "../../assets/sounds/pear.mp3"
import Carrot from "../../assets/sounds/carrot.mp3"

let todaySound =  Math.floor(Math.random() * 3) 
let identifier = null;
switch(todaySound) {
    case 1:
        todaySound = Apple
        identifier = "Jablko"
        break;
    case 2:
        todaySound = Pear
        identifier = "Hruška"
        break;
    case 3:
        todaySound = Carrot
        identifier = "Mrkva"
        break;
    default:
        todaySound = Carrot
        identifier = "Mrkva"
        break;
}

export {todaySound, identifier}
