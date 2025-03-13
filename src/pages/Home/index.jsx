import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Home 页面{count}</h1>
      <button onClick={() => {
        setCount(count + 1);
      }}>click</button>
    </div>
  )
}
