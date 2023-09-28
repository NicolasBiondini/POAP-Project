import React from "react";

type Props = {
  text: string;
  handleSearch: () => Promise<void>;
};

const regex =
  /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9-]+\.eth|0x[a-fA-F0-9]{40})$/;

function Button({ text, handleSearch }: Props) {
  return <button>{text}</button>;
}

export default Button;
