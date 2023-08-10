import './about.css';

export default function About() {
    return (
        <section id="about-block">
            <h1 className="contributor-headers">Thank you to the following contributors that made this project possible!</h1>
            <h3 className="contributor-headers">Click on their names to check out their GitHubs!</h3>
            <div id="contributors">
                <a id="earnest" href="https://github.com/earnest-dawn">Earnest Dawn</a>
                <a id="john" href="https://github.com/Af0nz0">John</a>
                <a id="alfonso" href="https://github.com/JohnA98">Alfonso</a>
                <a id="paul" href="https://github.com/pakuhn93">Paul Kuhn</a>
            </div>
        </section>
    );
}