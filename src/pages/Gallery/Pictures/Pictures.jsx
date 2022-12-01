import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import picture1 from "../../../assets/images/gallery/picture1.png";
import picture2 from "../../../assets/images/gallery/picture2.png";
import picture3 from "../../../assets/images/gallery/picture3.png";
import picture4 from "../../../assets/images/gallery/picture4.png";

import picture5 from "../../../assets/images/gallery/picture5.png";
import picture6 from "../../../assets/images/gallery/picture6.png";

import picture7 from "../../../assets/images/gallery/picture7.png";
import picture8 from "../../../assets/images/gallery/picture8.png";
import picture9 from "../../../assets/images/gallery/picture9.png";
import picture10 from "../../../assets/images/gallery/picture10.png";

const Pictures = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const images = [picture1, picture2, picture3, picture4];
  const images2 = [picture7, picture8, picture9, picture10];
  return (
    <div className="min-h-screen max-w-[1240px] mx-auto flex items-center overflow-hidden p-4">
      <div className="sm:mt-[10rem] overflow-hidden">
        <div className="flex gap-6 md:gap-14">
          <div className="grid grid-cols-2 gap-6 md:gap-14">
            {images.map((image, idx) => (
              <img
                src={image}
                alt="Dakeb farms"
                key={idx}
                onClick={() => openImageViewer(idx)}
                className="cursor-pointer hover:scale-105 transition-all duration-300"
              />
            ))}
            {isViewerOpen && (
              <ImageViewer
                src={images}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
                className="z-[1001]"
              />
            )}
          </div>
          <div>
            <img src={picture5} alt="Dakeb farms" className="cursor-pointer hover:scale-105 transition-all duration-300" />
          </div>
        </div>
        <div className="flex gap-6 md:gap-14 mt-[56px]">
          <div>
            <img src={picture6} alt="dakeb farms" className="cursor-pointer hover:scale-105 transition-all duration-300" />
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-14">
            {/* <img src={picture1} alt="" /> */}
            {images2.map((image, idx) => (
              <img
                src={image}
                alt="Dakeb farms"
                key={idx}
                className="cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => openImageViewer(idx)}
              />
            ))}
               {isViewerOpen && (
              <ImageViewer
                src={images2}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
                className="z-[1001]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pictures;
