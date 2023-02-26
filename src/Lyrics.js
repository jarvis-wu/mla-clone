import './styles/App.css';
import { albums } from './data/data.js';
import { coverImage } from './utils.js';
import { Route, Link } from 'react-router-dom';
import Album from './Album.js';

export default function Lyrics() {
  return (
    <>
      <Albums></Albums>
    </>
  );
}

function Albums() {
  let albumsReversed = albums.slice().reverse();

  // We want to render the first (length % 3) items separately.
  let albumsRemainderLength = albums.length % 3
  let albumsRemainder = albumsReversed.slice(0, albumsRemainderLength);
  albumsReversed = albumsReversed.slice(albumsRemainderLength);

  return (
    <>
      <div className='grid-container-2'>
        {albumsRemainder.map( album =>
          <div className='grid-item' key={album.id}>
            <AlbumCard album={album} />
          </div>
        )}
      </div>
      <div className='grid-container-3'>
        {albumsReversed.map( album =>
          <div className='grid-item' key={album.id}>
            <AlbumCard album={album} />
          </div>
        )}
      </div>
    </>
  );
}

function AlbumCard( {album} ) {
  let cover = coverImage(album.id);
  let coverImageAltText = 'Cover image of the album ' + album.englishName;
  let lyricsPath = "/discolyrics/" + album.id
  return (
    <div className='AlbumCard'>
      <div className='Album-Description'>
        <p>《{album.chineseName}》</p>
        <p className='Album-Description-Bottom'>
          "{album.englishName}" {album.year} {
            <Link className='LyricsLink' to={lyricsPath} target="_blank" rel="noreferrer">lyrics</Link>
          }
        </p>
      </div>
      <Link to={lyricsPath} target="_blank" rel="noreferrer">
        <img src={cover} alt={coverImageAltText} />
      </Link>
    </div>
  );
}

export function AlbumRoutes() {
  let albumsReversed = albums.slice().reverse();
  return (
    albumsReversed.map( album =>
      <Route 
        path={"/discolyrics/" + album.id}  
        element={<Album id={album.id} />} 
        key={'lyrics' + album.id} 
      />
    )
  );
}