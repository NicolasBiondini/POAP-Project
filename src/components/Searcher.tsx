import React, { ChangeEvent, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import styles from "@/styles/Searcher.module.css";

type Props = {
  setPoaps: (value: SetStateAction<poap[]>) => void;
  amount: number;
};

const regex =
  /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9-]+\.eth|0x[a-fA-F0-9]{40})$/;

const final_url = process.env.POAP_API_KEY || "";

function Searcher({ setPoaps, amount }: Props) {
  const [inputValue, setInputValue] = useState<{
    prev_value: string;
    value: string;
  }>({ prev_value: "", value: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, value: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent re-submit
    if (inputValue.value == inputValue.prev_value) {
      return;
    }

    // Check regex
    // - .eth (ENS Domains),
    // - Valid emails
    // - ETH Accounts (0x and 40 characters)
    const isMatch = regex.test(inputValue.value);

    if (isMatch) {
      const response = await toast.promise(
        fetch(`${final_url}api/fetch_poaps?value=${inputValue.value}`),
        {
          pending: "Searching your POAPs 🔎",
          success: "We found them! 🎉",
          error: "Something went wrong! Try again later 😔",
        }
      );
      const data: { poaps: poap[] } = await response.json();
      setInputValue({ ...inputValue, prev_value: inputValue.value });
      setPoaps(data.poaps);
    } else {
      toast.error("Invalid account! Try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setInputValue({ prev_value: "", value: "" });
    setPoaps([]);
  };

  return (
    <div className={styles.container}>
      {inputValue.prev_value == "" ? (
        <p className={styles.text}>
          Welcome to POAP. Use this website for browsing your collection of
          POAPs.
        </p>
      ) : (
        <div className={styles.hiConatiner}>
          <p className={styles.textHey}>
            Hey {inputValue.prev_value}! Welcome to POAP!{" "}
          </p>
          <p className={styles.textNormal}>
            These are the events you have attended in the past
          </p>
        </div>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          onChange={handleChange}
          value={inputValue.value}
          placeholder="Entrer your ENS, email or ETH address"
        />
        <button
          disabled={inputValue.value.length > 5 ? false : true}
          className={styles.submit}
          type="submit"
        >
          Explore my collection
        </button>
      </form>
      {inputValue.prev_value !== "" && (
        <button className={styles.button} onClick={handleClear}>
          Clear All
        </button>
      )}
      {inputValue.prev_value !== "" && amount == 0 && (
        <p className={styles.noPoaps}>Sorry, you {"don't"} have any POAP 😔</p>
      )}
    </div>
  );
}

export default Searcher;
