import "./App.css";

const songs = [
  { id: 1, title: "Tonight", artist: "BIGBANG", image: "/images/bigbang-tonight.png", url: "https://www.youtube.com/watch?v=8d5QEWdHchk" },
  { id: 2, title: "Hold on", artist: "Justin Beiber", image: "/images/justinbeiber-holdon.jpg", url: "https://www.youtube.com/watch?v=LWeiydKl0mU" },
  { id: 3, title: "Hype Boy", artist: "NewJeans", image: "/images/newjeans-hypeboy.png", url: "https://www.youtube.com/watch?v=11cta61wi0g" },
  { id: 4, title: "One More Time", artist: "Alldayproject", image: "/images/alldayproject-onemoretime.png", url: "https://www.youtube.com/watch?v=OgEwJ8a1OoY" },
  { id: 5, title: "What you want", artist: "Cortis", image: "/images/cortis-whatyouwant.png", url: "https://www.youtube.com/watch?v=영상ID5" },
  { id: 6, title: "Sandman", artist: "Beenzino", image: "/images/beenzino-sandman.png", url: "https://www.youtube.com/watch?v=영상ID6" },
  { id: 7, title: "Lose my mind", artist: "Don toliver", image: "/images/dontoliver-losemymind.png", url: "https://www.youtube.com/watch?v=WWEs82u37Mw" },
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

const playSong = (url) => {
  window.open(url, "_blank");
};

function Music({ title, artist, image, url }) {
  return (
    <div className="music-row">
      <img className="music-album" src={image} alt={`${title} 앨범커버`} />
      <div className="music-info">
        <h3 className="music-title">{title}</h3>
        <p className="music-artist">{artist}</p>
      </div>
      <button
        className="music-play-button"
        aria-label="재생"
        onClick={() => playSong(url)}
      >
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
            url={song.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
