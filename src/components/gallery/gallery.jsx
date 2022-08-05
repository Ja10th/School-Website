import "./gallery.css";

const Gallery = () => {
  return (
    <div className="gallery container">
      <div className="gallery__heading">
        <h2>Gallery</h2>
      </div>
      <div className="galleryb">
        <div className="gallery__detail">
          <div className="left-top-gallery"></div>
          <div className="left-bottom-gallery"></div>
        </div>
        <div>
          <div className="middle-gallery"></div>
        </div>
        <div className="gallery__detail">
          <div className="right-top-gallery"></div>
          <div className="right-bottom-gallery"></div>
        </div>
      </div>
      <div className="galleryb">
        <div className="gallery__detail">
          <div className="left-top-gallery2"></div>
          <div className="left-bottom-gallery2"></div>
        </div>
        <div className="gallery__detail">
          <div className="right-top-gallery2"></div>
          <div className="right-bottom-gallery2"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
