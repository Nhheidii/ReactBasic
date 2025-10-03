import Header from "./components/Header/Header.jsx";
import Maincontents from "./components/Maincontent/Maincontents.jsx";
import Examples from "./components/Maincontent/Examples.jsx";

function App() {
  return (
    <>
      <Header /> 
      <main>
        <Maincontents />
        <Examples />
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
