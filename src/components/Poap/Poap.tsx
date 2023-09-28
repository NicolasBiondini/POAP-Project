import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image_url: string;
  id_token: string;
  id: number;
};

function Poap({ name, image_url, id_token, id }: Props) {
  return (
    <a href={`https://poap.gallery/r/event/${id}`} target="_blank">
      <span>
        {
          // add fill and remove width
        }
        <Image src={image_url} width={50} height={50} alt={name} />
      </span>
      <p>{name}</p>
      <p>N° {id_token}</p>
    </a>
  );
}

export default Poap;
