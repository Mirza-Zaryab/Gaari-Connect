import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'assets/images/logos/Car55.svg',
    thumbnail:'assets/images/logos/Car55.svg',
  },
  {
    original: 'assets/images/logos/Car22.svg',
    thumbnail:'assets/images/logos/Car22.svg',
  },
  {
    original: 'assets/images/logos/Car33.svg',
    thumbnail:'assets/images/logos/Car33.svg',
  },
  {
    original: 'assets/images/logos/Car44.svg',
    thumbnail:'assets/images/logos/Car44.svg',
  },
  {
    original: 'assets/images/logos/Car55.svg',
    thumbnail:'assets/images/logos/Car55.svg',
  },
];

export default function Gallery(){
    return(
<ImageGallery items={images}  showNav={false} showPlayButton={false} showFullscreenButton={false}/>

    );
}
