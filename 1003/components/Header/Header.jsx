import logo from "../../assets/9.jpeg";
import "./Header.css"
function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Tự Học" />
        <h1>DisneyChannel</h1>
        <p>Hi this is my disney channel</p>
      </header>
    </>
  );
}
export default Header;
