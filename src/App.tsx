import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page2 from './search';
import Page3 from './require';
import Page4 from './chat';
import Page5 from './history';
import Page6 from './set';
import Page7 from './DL';

import './App.css';
import TimeTable, { TimetableEvent } from './TimeTable';
import Description from './Description';

function HomePage() {
  const events: TimetableEvent[] = [
    { day: "Wed", period: 2, title: "情報システム設計" },
    { day: "Wed", period: 3, title: "ITビジネスのフロンティア" }
  ];

  return (
    <>
      {/* ヘッダー */}
      <header className="header-bar">
        <div className="header-left">
          <Link to="/DL">
            <img src="./src/download.jpeg" width="40" />
          </Link>
        </div>
        <div className="header-center">
          <h1 className="h-7">時間割</h1>
        </div>
        <div className="header-right">
          <Link to="/set">
            <img src="./src/setting.jpeg" width="40" />
          </Link>
        </div>
      </header>

      {/* メイン */}
      <Description />
      <TimeTable events={events} />

      {/* フッター */}
      <div className="footer-bar">
        <Link to="/search" className="icon-item">
          <img src="./src/mushimegane.jpeg" width="40" />
          <span>検索</span>
        </Link>
        <Link to="/require" className="icon-item">
          <img src="./src/note.jpeg" width="40" />
          <span>要項</span>
        </Link>
        <Link to="/" className="icon-item">
          <img src="./src/home.jpeg" width="40" />
          <span>ホーム</span>
        </Link>
        <Link to="/chat" className="icon-item">
          <img src="./src/comment.jpeg" width="40" />
          <span>チャット</span>
        </Link>
        <Link to="/history" className="icon-item">
          <img src="./src/file.jpeg" width="40" />
          <span>履歴</span>
        </Link>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Page2 />} />
        <Route path="/require" element={<Page3 />} />
        <Route path="/chat" element={<Page4 />} />
        <Route path="/history" element={<Page5 />} />
        <Route path="/set" element={<Page6 />} />
        <Route path="/DL" element={<Page7 />} />
      </Routes>
    </Router>
  );
}

export default App;

