import person from './../assets/img/icons/person.svg';
import chip from './../assets/img/icons/chip.svg';
import money from './../assets/img/icons/dollar-circle.svg';
import accessOpen from './../assets/img/icons/door-open.svg';
import play from './../assets/img/icons/play.svg';

export default function AllIcons(icon) {

    const typeIcons = {
        person,
        chip,
        money,
        accessOpen,
        play,
    }

    return typeIcons[icon]
}