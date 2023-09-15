import PageLayout from "../../components/PageLayout/PageLayout";
import { promises as fs } from "fs";
import path from "path";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";

export default function Knitting({ photos }) {
  const images = JSON.parse(photos);
  return (
    <PageLayout>
      <p>knitting</p>
      <PhotoGallery images={images} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  // Retrieve photos
  const getPhotos = async () => {
    const imageDirectory = path.join(process.cwd(), "/public/knitting-images");
    const imageFilenames = await fs.readdir(imageDirectory);
    // add path to all filenames
    const imagePaths = imageFilenames.map((img) => {
      return "/knitting-images/" + img;
    });
    return JSON.stringify(imagePaths);
  };
  const images = await getPhotos();
  return { props: { photos: images } };
}
