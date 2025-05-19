import { useState } from "react";
import axios from "../api/axios";

export default function BlockEditor() {
    const [text, setText] = useState("");

    const handleSave = async () => {
        await axios.post("/blocks", { content: text });
        setText("");
    };

    return (
        <div>
      <textarea
          className="w-full border p-2"
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
      ></textarea>
            <button onClick={handleSave} className="mt-2 bg-green-500 text-white px-3 py-1 rounded">
                저장
            </button>
        </div>
    );
}