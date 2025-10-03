import Maincontent from "../Maincontent.jsx";
import { myData } from "../../../data.js";
import Section from "../../Section.jsx";




export default function Maincontents() {
  return (
    <>
      <Section title=" Disney character" id="core-concepts">
        <ul>
          {myData.map((item) => (
            <Maincontent key={item.title} {...item} />
          ))}
        </ul>
      </Section>
    </>
  );
}
