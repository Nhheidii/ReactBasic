export default function Section({ title, children, ...props }) {
  
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// export default function TabButton({ children, onSelect, isSelected }) {
//   return (
//     <li>
//       <button className={isSelected ? "active" : undefined} onClick={onSelect}>
//         {children}
//       </button>
//     </li>
//   );
// }
