import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from '../components/TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';


export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  //Examples Section Output - Approach III
  let tabContent = <p>Please select a Topic.</p>;
  if (selectedTopic) {
    tabContent = (<div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>);
  }

  return (
    <Section title='Examples' id='examples'>
      <Tabs
        // ButtonsContainer="menu"
        buttons={<>
          <TabButton
            isSelected={selectedTopic === 'components'}
            onClick={() => handleSelect('components')}>Components</TabButton>
          <TabButton
            isSelected={selectedTopic === 'jsx'}
            onClick={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton
            isSelected={selectedTopic === 'props'}
            onClick={() => handleSelect('props')}>Props</TabButton>
          <TabButton
            isSelected={selectedTopic === 'state'}
            onClick={() => handleSelect('state')}>State</TabButton></>}>
        {tabContent}
      </Tabs>

      {/* Creating anonymous arrow function definition so that arguments can be passed to the handleSelect function  */}
      {/* {selectedTopic} */}
      {/* Examples Section Output - Approach I */}
      {/* {!selectedTopic ? <p>Please select a Topic.</p> : (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)} */}

      {/* Examples Section Output - Approach II */}
      {/* Alternative to above (uses single ternary expression, whereas below uses 2 more readable expressions) */}

      {/* {!selectedTopic && <p>Please select a Topic.</p>}
          {selectedTopic && (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)} */}

      {/* Examples Section Output - Approach III */}

    </Section>
  );
}
