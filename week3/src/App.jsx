import "./App.css";

const songs = [
  { id: 1, title: "Tonight", artist: "BIGBANG", image: "/images/bigbang-tonight.png" },
  { id: 2, title: "Hold on", artist: "Justin Beiber", image: "/images/justinbeiber-holdon.jpg" },
  { id: 3, title: "노래 제목 3", artist: "가수 3", image: "/images/song3.png" },
  { id: 4, title: "노래 제목 4", artist: "가수 4", image: "/images/song4.png" },
  { id: 5, title: "노래 제목 5", artist: "가수 5", image: "/images/song5.png" },
  { id: 6, title: "노래 제목 6", artist: "가수 6", image: "/images/song6.png" },
  { id: 7, title: "노래 제목 7", artist: "가수 7", image: "/images/song7.png" },
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