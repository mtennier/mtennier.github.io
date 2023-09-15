import { type FC } from "react";
import PhotoItem from "./PhotoItem/PhotoItem";
import { PhotoGalleryProps } from "./types";
import { List, Row, Col } from "antd";

const PhotoGallery: FC<PhotoGalleryProps> = ({ images }) => {
  // TODO make this better....
  return (
    <List>
      <Row justify={"center"} style={{ alignItems: "center" }}>
        {images.map((item: string) => (
          <Col sm={10}>
            <List.Item>
              <PhotoItem source={item} />
            </List.Item>
          </Col>
        ))}
      </Row>
    </List>
  );
};

export default PhotoGallery;
