import React from "react";

/**
 * Timetable event defined by weekday and period (1–6)
 */
export type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" ;
export type Period = 1 | 2 | 3 | 4 | 5 | 6;

export interface TimetableEvent {
  day: Day;
  period: Period;
  title: string;
}

const days: Day[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const dayLabels: Record<Day, string> = {
  Mon: "月",
  Tue: "火",
  Wed: "水",
  Thu: "木",
  Fri: "金",
};

const periods: Period[] = [1, 2, 3, 4, 5, 6];

const periodTimes:  Record<Period, { label: string; start: string; end: string }> = {
  1: { label: "1限", start: "9:00", end: "10:40" },
  2: { label: "2限", start: "10:50", end: "12:30" },
  3: { label: "3限", start: "13:20", end: "15:00" },
  4: { label: "4限", start: "15:10", end: "16:50" },
  5: { label: "5限", start: "17:00", end: "18:40" },
  6: { label: "6限", start: "18:50", end: "20:30" },
};

interface TimeTableProps {
  /** 時間割データ */
  events: TimetableEvent[];
  /** viewport 高に合わせて伸ばすか (デフォルト true) */
  fullHeight?: boolean;
  /** fullHeight 時に差し引く高さ (px) */
  offset?: number;
}

/**
 * Timetable component (Tailwind CSS)
 *
 * グリッドとイベントセルを統合：行⇢列の順でマス目を順番に描画し、
 * 各セルにイベントがあればそのタイトルを表示し、なければ空セルを描画。
 */
const TimeTable: React.FC<TimeTableProps> = ({
  events,
  fullHeight = true,
  offset = 0,
}) => {
  /** ルックアップ用マップ: { "Mon-1": "数学" } */
  const eventMap = React.useMemo(() => {
    const m: Record<string, string> = {};
    events.forEach((e) => {
      m[`${e.day}-${e.period}`] = e.title;
    });
    return m;
  }, [events]);

  // 行テンプレート：40px + 6行を均等分配
  const rows = "[grid-template-rows:40px_repeat(6,auto)]";
  const containerStyle: React.CSSProperties | undefined = fullHeight
    ? { height: `calc(100vh - ${offset}px)` }
    : undefined;
  

  return (
    <div className="overflow-x-auto" style={containerStyle}>
      <div
        className={`grid border border-gray-300 [grid-template-columns:60px_repeat(5,1fr)] ${rows} h-full`}
      >
        {/* 左上ダミー */}
        <div className="bg-gray-100 border-b border-gray-300" />

        {/* 曜日ヘッダー（日本語表記） */}
        {days.map((day) => (
          <div
            key={day}
            className="bg-gray-100 border-b border-gray-300 flex items-center justify-center font-semibold text-sm"
          >
            {dayLabels[day]}
          </div>
        ))}

        {/* 本体：period × days */}
        {periods.map((p) => (
          <React.Fragment key={p}>
            {/* 時限ラベル */}
            <div className="border-r border-gray-300 flex flex-col items-center justify-center text-xs py-1 leading-tight whitespace-nowrap">
            <span className="font-semibold">{periodTimes[p].label}</span>
            <span>{periodTimes[p].start}</span>
            <span className="text-[10px] text-gray-400">≀</span>
            <span>{periodTimes[p].end}</span> 
            </div>
            {/* 各曜日セル */}
            {days.map((d) => {
              const key = `${d}-${p}`;
              const title = eventMap[key];
              const base = "flex items-center justify-center text-xs border";
              return title ? (
                <div
                  key={key}
                  className={`${base} border-blue-300 bg-blue-100 rounded text-gray-900 p-1`}
                >
                  {title}
                </div>
              ) : (
                <div key={key} className={`${base} border-gray-200`} />
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TimeTable;
