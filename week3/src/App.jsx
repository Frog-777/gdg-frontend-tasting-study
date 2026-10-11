import "./App.css";


function Playlist() {
  return (
    <header className="playlist-header">
      <img className="playlist-image" src="/images/pinggu.png" alt="플레이리스트 커버" />
      <strong className="playlist-name">핑구의 Playlist</strong>
    </header>
  )
}

function Music() {
  return(
    <div className="music-album">
          <img className="music-album" src="/images/bigbang-tonight.png" alt="앨범커버" />
          <section className="music-info">
            <h1 className="music-title">Tonight</h1>
            <p className="music-artist">BIGBANG</p>
          </section>
        </div>
  )
}

export default App;
