import Parallax from "parallax-js";

export default function ParallaxJs() {
    let scene = document.querySelectorAll('.parallax-scene');
    scene.forEach(scene => {
        new Parallax(scene)
    })
}
