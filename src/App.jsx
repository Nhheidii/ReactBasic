import { myData } from "../data.js";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/Maincontent.jsx";
// import TabButton from "./components/TabButton.jsx";

function App() {
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
          <section id="examples">
            <h2> Examples </h2>
            <menu>
              <li>
                <button>Aurora</button>
                <button>Ariel</button>
                <button>Oliver twist</button>
              </li>
              {/* <TabButton> aaa </TabButton> */}
            </menu>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;

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
