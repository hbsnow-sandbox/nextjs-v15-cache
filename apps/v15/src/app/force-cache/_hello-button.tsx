"use client";

import { getHelloAction } from "./action";

export function HelloButton() {
  return (
    <button
      onClick={async () => {
        const result = await getHelloAction();
        console.log(result);
      }}
    >
      Hello Button
    </button>
  );
}
