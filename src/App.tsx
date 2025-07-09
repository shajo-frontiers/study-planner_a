import './App.css';
import TimeTable, {TimetableEvent} from './TimeTable'
import Description from'./Description'

function App() {
  const events:TimetableEvent[] = [
    {day: "Wed", period: 2, title: "情報システム設計"},
    {day: "Wed", period: 3, title: "ITビジネスのフロンティア"}
  ];

  return (
    <>
      <header className="header-bar">
        <div className="header-left">
          <img src="./src/download.jpeg" width="40"></img>
        </div>
        <div className="header-center">
          <h1 className="h-7">時間割</h1>
        </div>
        <div className="header-right">
          <img src="./src/setting.jpeg" width="40"></img>
        </div>
      </header>
      <Description/>
      <TimeTable events={events}></TimeTable>
      <div className="footer-bar">
        <div className="icon-item">
          <img src="./src/mushimegane.jpeg" width="40" />
          <span>検索</span>
        </div>
        <div className="icon-item">
          <img src="./src/note.jpeg" width="40" />
          <span>要項</span>
        </div>
        <div className="icon-item">
          <img src="./src/home.jpeg" width="40" />
          <span>ホーム</span>
        </div>
        <div className="icon-item">
          <img src="./src/comment.jpeg" width="40" />
          <span>チャット</span>
        </div>
        <div className="icon-item">
          <img src="./src/file.jpeg" width="40" />
          <span>履歴</span>
        </div>
      </div>
    </>
  );
}

export default App;
