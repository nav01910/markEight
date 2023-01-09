import React, { useState } from "react";
import "./styles.css";

const emojiObj = {
  "🙂": "mystery",
  "💋": "kiss",
  "🤣": "lmao",
  "👉👈": "uwu",
  "🤓": "you're right but",
  "💀": "ayo wtf",
  "👍": "i'm done talking w you",
  "😭": "i want u",
  "🤡": "clown"
};

var emojiList = Object.keys(emojiObj);

export default function App() {
  const [meaning, setMeaning] = useState("translation will appear here");

  function getMeaning(event) {
    var meaning = emojiObj[event.target.value];
    if (meaning === undefined) {
      meaning = "emoji unavailable in database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiObj[emoji]);
  }

  return (
    <div className="App">
      <h1 style={{ color: "purple" }}>Gen-Z Emoji Interpreter</h1>
      <input
        className="inputEmo"
        onChange={getMeaning}
        placeholder="Search your emoji..."
      />
      <h2>{meaning}</h2>
      <h3>List of emojis in database</h3>
      <div style={{}}>
        {emojiList.map((item, index) => {
          return (
            <span
              onClick={() => emojiClickHandler(item)}
              style={{
                cursor: "pointer",
                padding: "0.25rem",
                margin: "0.25rem"
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
