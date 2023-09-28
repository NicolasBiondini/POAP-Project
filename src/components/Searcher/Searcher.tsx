import React, { ChangeEvent, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

type Props = {
  setPoaps: (value: SetStateAction<poap[]>) => void;
};

const regex =
  /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9-]+\.eth|0x[a-fA-F0-9]{40})$/;

function Searcher({ setPoaps }: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check regex
    // - .eth (ENS Domains),
    // - Valid emails
    // - ETH Accounts (0x and 40 characters)
    const isMatch = regex.test(inputValue);

    if (isMatch) {
      const response = await fetch(
        `http://localhost:3000/api/fetch_poaps?value=${inputValue}`
      );
      const data: { poaps: poap[] } = await response.json();
      setPoaps(data.poaps);
    } else {
      toast.error("Invalid account! Try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setInputValue("");
    setPoaps([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
        <button type="submit">Search</button>
      </form>
      <button onClick={handleClear}>Clear All</button>
    </div>
  );
}

export default Searcher;
