import { EXAMPLES } from "../../../data.js";
import TabButton from "../TabButton.jsx";
import Section from "../../Section.jsx";
import Tab from "../../Tab.jsx";
import { useState } from "react";


export default function Examples() {
  useState();
  const [selectedTopic, setSelectedTopic] = useState();
  function handClick(selectButton) {
    setSelectedTopic(selectButton);
  }
  return (
    <>
      <Section title="Examples" id="examples">
        <Tab
          button={
            <>
              {" "}
              <TabButton
                isSelected={selectedTopic === "Aurora"}
                onClick={() => {
                  handClick(`Aurora`);
                }}
              >
                Aurora
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "Ariel"}
                onClick={() => {
                  handClick(`Ariel`);
                }}
              >
                Ariel
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "OliverTwist"}
                onClick={() => {
                  handClick(`OliverTwist`);
                }}
              >
                Oliver Twist
              </TabButton>
            </>
          }
        >
          {selectedTopic}
        </Tab>
        {/* {currenttHi} */}
        {!selectedTopic ? (
          <p> Please click button </p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].desc}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Section>
    </>
  );
}

