export default function AlertComp() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <button onClick={handleClick}>Alert</button>
    </>
  );
}
