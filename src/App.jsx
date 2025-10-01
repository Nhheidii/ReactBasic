import { useState } from "react";
import { myData, EXAMPLES } from "../data.js";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/Maincontent.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  useState();
  const [selectedTopic, setSelectedTopic] = useState();
  console.log("App is called");
  function handClick(selectButton) {
    setSelectedTopic(selectButton);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Disney character</h2>
          <ul>
            <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
          </ul>
        </section>
        <section id="examples">
          <h2> Examples </h2>
          <menu>
            <ul>
              <TabButton
                isSelected={selectedTopic === "Aurora"}
                onSelect={() => {
                  handClick(`Aurora`);
                }}
              >
                Aurora
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "Ariel"}
                onSelect={() => {
                  handClick(`Ariel`);
                }}
              >
                Ariel
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "OliverTwist"}
                onSelect={() => {
                  handClick(`OliverTwist`);
                }}
              >
                Oliver Twist
              </TabButton>
            </ul>
          </menu>
          {selectedTopic}
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
        </section>
      </main>
    </>
  );
}

export default App;

{
  /* <TabButton
                onSelect={() => {
                  timeCheck();
                }}
              >
                Hi button
              </TabButton> */
}

// function MainContent(props) {
//   return (
//     <li>
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <p>{props.desc}</p>
//     </li>
//   );
// }

{
  /* <MainContent
              img={myData[0].img}
              title={myData[0].title}
              desc={myData[0].desc}
            />
            <MainContent
              img={myData[1].img}
              title={myData[1].title}
              desc={myData[1].desc}
            />
            <MainContent
              img={myData[2].img}
              title={myData[2].title}
              desc={myData[2].desc}
            /> */
}

// const [currenttHi, setCurrentHi] = useState("Hi there");
// function timeCheck() {
//   // const currentHour1 = new Date().getHours();
//   const currentHour = 19;
//   if (currentHour >= 5 && currentHour <= 12) {
//     setCurrentHi("Good morning");
//   } else if (currentHour > 12 && currentHour <= 18) {
//     setCurrentHi("Good afternoon");
//   } else {
//     setCurrentHi("Good evening");
//   }
// }
