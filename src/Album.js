import { albumLyricsData } from "./data/data.js"

export default function Album({id}) {
  let album = albumLyricsData[id];

  if (!album) {
    return <p>Album not available yet.</p>
  }

  let albumTitle = album.albumTitle;

  let songTitles = album.songs.map( (song, index) =>
    <li className="lyrics-line" key={song.songId}>{index + 1}. {song.songTitle}</li>
  );
  let songTitlesList = <ul>{songTitles}</ul>;

  let allLyrics = album.songs.map( (song, index) =>
    <>
      <b><p className="lyrics-line">{index + 1}. {song.songTitle}</p></b>
      <br />
      {MultiLine(song.songCredits)}
      <br />
      {MultiLine(song.songLyrics)}
      <br />
    </>
  );

  let albumCredits = album.albumCredits;

  return (
    <>
      <br /><br />
      <p className="lyrics-line">《{albumTitle}》</p>
      <br />
      {songTitlesList}
      <br />
      {allLyrics}
      <p>-------------------------------------------------</p>
      {MultiLine(albumCredits)}
    </>
  );
}

function MultiLine(string) {
  let split = string.split("\n").map( line => {
    let trimmed = line.trim();
    return trimmed === '' ? <br /> : trimmed;
  });
  console.log(split);
  let formatted = split.map( line =>
    <p className="lyrics-line">{line}</p>
  );
  return formatted;
}