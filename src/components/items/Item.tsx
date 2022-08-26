import React from "react";

interface Props {
  src: string;
  alt: string;
}

const Item: React.FC<Props> = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} width={75} />
    </div>
  );
};

export default Item;
