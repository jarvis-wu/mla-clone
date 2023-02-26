import cover0 from './data/images/cover-0.jpg';
import cover1 from './data/images/cover-1.jpg';
import cover2 from './data/images/cover-2.jpg';
import cover3 from './data/images/cover-3.jpg';
import cover4 from './data/images/cover-4.jpg';
import cover5 from './data/images/cover-5.jpg';
import cover6 from './data/images/cover-6.jpg';
import cover7 from './data/images/cover-7.jpg';
import cover8 from './data/images/cover-8.jpg';
import cover9 from './data/images/cover-9.jpg';
import cover10 from './data/images/cover-10.jpg';

export function coverImage(albumId) {
    switch(albumId) {
      case 0:
        return cover0;
      case 1:
        return cover1;
      case 2:
        return cover2;
      case 3:
        return cover3;
      case 4:
        return cover4;
      case 5:
        return cover5;
      case 6:
        return cover6;
      case 7:
        return cover7;
      case 8:
        return cover8;
      case 9:
        return cover9;
      case 10:
        return cover10;
      default:
        return null;
    }
  }