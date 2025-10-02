import PropTypes from "prop-types";

function MainContent({ img, title, desc }) {
  return (
    <li>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  );
}
MainContent.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default MainContent;
