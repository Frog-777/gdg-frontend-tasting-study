import "./App.css";

function App() {
  return (
    <main className="page">
      <article className="post">
        <header className="post-profile">
          <img className="profile-image" src="/images/eden-avatar.png" alt="eden 프로필" />

          <strong className="profile-username">eden</strong>

          <button className="more-button" type="button" aria-label="더 보기">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </header>

        <div className="post-image-area">
          <img className="post-image" src="/images/wow.png" alt="홍익대학교 마스코트" />
        </div>

        <div className="post-actions">
          <div className="left-actions">
            <button type="button" aria-label="좋아요">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
              </svg>
            </button>

            <button type="button" aria-label="댓글">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 11.6a9.2 9.2 0 1 0-4.8 8.1L22 22l-1.9-5.7a9.1 9.1 0 0 0 .9-4.7Z" />
              </svg>
            </button>

            <button type="button" aria-label="공유">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m22 2-8.5 20-4-11L1 2h21ZM9.5 11 22 2" />
              </svg>
            </button>
          </div>

          <button type="button" aria-label="저장">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 2h16v20l-8-6-8 6V2Z" />
            </svg>
          </button>
        </div>

        <section className="post-content">
          <p className="like-count">
            좋아요 <strong>44</strong>개
          </p>

          <p className="caption">
            <strong>eden</strong>
            <span>프론트엔드 찍먹 중 👅</span>
          </p>
        </section>
      </article>
    </main>
  );
}

export default App;
