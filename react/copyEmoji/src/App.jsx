import "./App.css";

const emojis = [
  {
    id: "frown",
    emoji: "🙁",
  },
  {
    id: "smile",
    emoji: "😊",
  },
  {
    id: "laughing",
    emoji: "😂",
  },
];

const selectRandomEmoji = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export default function App() {
  const selected = selectRandomEmoji(emojis);

  const handleCopy = (e) => {
    console.log(e);
    if (e.target.innerText !== selected.emoji) {
      alert("Wrong emoji");
    } else if (e.timeStamp > 5000) {
      alert("Too slow. Reset and try again.");
    } else {
      alert("🎉 Winner!");
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h1>{selected.emoji}</h1>
      <p>copy this emoji</p>
      <ul>
        {emojis.map(({ id, emoji }) => (
          <li key={id} onCopy={handleCopy}>
            {emoji}
          </li>
        ))}
      </ul>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
