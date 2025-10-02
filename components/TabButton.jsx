// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props} >
        {children}
      </button>
    </li>
  );
}

// TabButton.propTypes = {
//   children: PropTypes.string.isRequired,
//   onSelect: PropTypes.function handClick(selectButton) {
//     string
//   },isRequired,
// };
