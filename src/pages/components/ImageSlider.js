import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
export default function ImageSlider({ images, lazy }) {
  return (
    <section className="h-fit flex-col gap-8 mt-16 sm:flex sm:flex-row sm:gap-4 sm:h-full sm:mt-24 sm:mx-2 md:gap-8 md:mx-4 lg:flex-col lg:mx-0 lg:mt-36">
      <ImageGallery
        loading={lazy}
        infinite={true}
        items={images}
        showNav={false}
        thumbnailPosition={"left"}
        showFullscreenButton={true}
        // useBrowserFullscreen={true}
        useTranslate3D={false}
        showPlayButton={false}
        autoPlay={true}
        showIndex={true}
      />
    </section>
  );
}
