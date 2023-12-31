import { type FC } from "react";
import Image from "next/image";
import { PhotoItemProps } from "./types";

const PhotoItem: FC<PhotoItemProps> = ({ source,altText }) => {
  return (
    <div
      style={{
        display: "flex",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Image src={source} width={500} height={500} alt={altText} />
    </div>
  );
};

export default PhotoItem;
