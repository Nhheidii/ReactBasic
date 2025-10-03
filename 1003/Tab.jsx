export default function Tab({ button, children, AdditionalPro = "menu" }) {
  // const AdditionalPro = additionalPro;
  return (
    <>
      <AdditionalPro> {button} </AdditionalPro>
      {children}
    </>
  );
}
