import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Time to get started!</h2>
            <ul>
                {/* Dynamically generated content transforming the data into component */}
                {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
                {/* <CoreConcepts
                      title="Components" //Props
                      description="The core UI building block." //Props
                      image={componentsImg} />
                    <CoreConcepts
                      title={CORE_CONCEPTS[1].title}
                      description={CORE_CONCEPTS[1].description}
                      image={CORE_CONCEPTS[1].image} />
                    <CoreConcepts {...CORE_CONCEPTS[2]} //When data property names are exactly same as props
                    />
                    <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
            </ul>
        </section>
    );
}