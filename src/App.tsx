import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page2 from './search';
import Page3 from './require';
import Page4 from './chat';
import Page5 from './history';
import Page6 from './set';
import Page7 from './DL';

import './App.css';
import TimeTable, { TimetableEvent } from './TimeTable';

function App() {
  const events: TimetableEvent[] = [
    { day: "Wed", period: 2, title: "情報システム設計" },
    { day: "Wed", period: 3, title: "ITビジネスのフロンティア" }
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <div>
              <Link to="/DL">ダウンロード</Link>
              <Link to="/set">設定</Link>
                <h1>社情のための時間割</h1>
                <TimeTable events={events} />
              </div>
              <div style={{ marginTop: 'auto', padding: '20px' }}>
                <Link to="/search">検索</Link>
                <Link to="/require">要項</Link>
                <Link to="/App">ホーム</Link>
                <Link to="/chat">チャット</Link>
                <Link to="/history">履歴</Link>
              </div>
            </div>
          }
        />
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

