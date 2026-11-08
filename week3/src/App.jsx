import "./App.css";

const songs = [
  { id: 1, title: "Tonight", artist: "BIGBANG", image: "/images/bigbang-tonight.png" },
  { id: 2, title: "Hold on", artist: "Justin Beiber", image: "/images/justinbeiber-holdon.jpg" },
  { id: 3, title: "Hype Boy", artist: "NewJeans", image: "/images/newjeans-hypeboy.png" },
  { id: 4, title: "One More Time", artist: "Alldayproject", image: "/images/alldayproject-onemoretime.png" },
  { id: 5, title: "What you want", artist: "Cortis", image: "/images/cortis-whatyouwant.png" },
  { id: 6, title: "Sandman", artist: "Beenzino", image: "/images/beenzino-sandman.png" },
  { id: 7, title: "Lose my mind", artist: "Don toliver", image: "/images/dontoliver-losemymind.png" },
];

function Playlist() {
  return (
    <header className="playlist-header">
      <img className="playlist-image" src="/images/pinggu.png" alt="플레이리스트 커버" />
      <div className="playlist-meta">
        <strong className="playlist-name">핑구의 Playlist</strong>
      </div>
    </header>
  );
}

function Music({ title, artist, image }) {
  return (
    <div className="music-row">
      <img className="music-album" src={image} alt={`${title} 앨범커버`} />
      <div className="music-info">
        <h3 className="music-title">{title}</h3>
        <p className="music-artist">{artist}</p>
      </div>
      <button className="music-play-button" aria-label="재생">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 2v20l17-10L4 2Z" />
        </svg>
      </button>
    </div>
  );
}

function App() {
  const songs = [
    { id: 1, title: "노래 제목 1", artist: "가수 1", url: "https://www.youtube.com/watch?v=영상ID1" },
    { id: 2, title: "노래 제목 2", artist: "가수 2", url: "https://www.youtube.com/watch?v=영상ID2" },
    { id: 3, title: "노래 제목 3", artist: "가수 3", url: "https://www.youtube.com/watch?v=영상ID3" },
  ];

  const playSong = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      {songs.map((song) => (
        <div className="song" key={song.id}>
          <span>{song.title} - {song.artist}</span>
          <button onClick={() => playSong(song.url)}>▶ 재생</button>
        </div>
      ))}
    </div>
  );
}

export default App;

/*
function App() {
  return (
    <div className="playlist">
      <Playlist />
      <div className="song-list">
        {songs.map((song) => (
          <Music
            key={song.id}
            title={song.title}
            artist={song.artist}
            image={song.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
*/
