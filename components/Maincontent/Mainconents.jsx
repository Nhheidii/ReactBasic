import MainContent from "./Maincontent.jsx";
import { myData } from "../../../data.js";
import Section from "../../Section.jsx";

export default function Mainconents() {
  return (
    <>
      <Section title=" Disney character" id="core-concepts">
        <ul>
          {/* <MainContent {...myData[0]} />
                    <MainContent {...myData[1]} />
                    <MainContent {...myData[2]} /> */}
          {myData.map((item) => (
            //Map quản lí dữ liệu theo kiểu key value nên cần phải cung cấp cho nó 1 cái key để quản lí và sau này gọi nó cho nó dễ á
            <MainContent key={item.title} {...item} />
          ))}
        </ul>
      </Section>
    </>
  );
}
