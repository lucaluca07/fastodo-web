import React, { useMemo, useState, useCallback } from "react";
import _ from "lodash";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import Icon from "../icon";
import classNames from "classnames";

import "./style.scss";

interface IProps {
  onChange?: (date: dayjs.Dayjs) => void;
  date?: dayjs.Dayjs | string | number;
  type?: "card" | "fullScreen";
  theme?: "dark" | "light";
}

dayjs.extend(advancedFormat);

const today = dayjs(Date.now());
const weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const currentYear = today.get("year");
const startYear = currentYear - 10;
const endYear = currentYear + 9;
const years: { label: string; value: string }[] = [];
for (let i = startYear; i <= endYear; i += 1) {
  years.push({ label: `${String(i)}年`, value: String(i) });
}

const getDays = (date: dayjs.Dayjs) => {
  const monthStart: dayjs.Dayjs = date.startOf("month");
  const start = monthStart.startOf("week");
  const days = Array(42)
    .fill("")
    .map((_e, i) => {
      return start.add(i, "day");
    });

  return _.chunk(days, 7);
};

const Calendar: React.FC<IProps> = ({ date, type, theme, onChange }) => {
  const [current, setCurrent] = useState(
    dayjs.isDayjs(date) ? date : dayjs(date)
  );
  const [selected, setSelected] = useState<dayjs.Dayjs | undefined>(
    dayjs.isDayjs(date) ? date : dayjs(date)
  );
  const days = useMemo(() => {
    return getDays(current);
  }, [current]);

  const handleSetSelectedChange = useCallback(
    (d: dayjs.Dayjs) => {
      setSelected(d);
      onChange?.(d);
    },
    [onChange]
  );
  return (
    <div
      className={classNames("calendar", `calendar-${type}`, {
        "calendar-dark": theme === "dark",
      })}
    >
      <header className="calendar-header flex justify-between items-center">
        <div className="calendar-header-left cursor-pointer font-bold">
          <span>{current.get("year")}年 </span>
          <span>{current.get("month") + 1}月</span>
        </div>
        <div className="calendar-header-right cursor-pointer">
          <Icon
            type="prev"
            onClick={() => setCurrent(current.add(-1, "month"))}
          />
          <span
            onClick={() => {
              setCurrent(today);
            }}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
            className="calendar-today"
          >
            今天
          </span>
          <Icon
            type="next"
            onClick={() => setCurrent(current.add(1, "month"))}
          />
        </div>
      </header>
      <main className="calendar-main flex flex-col">
        <table>
          <thead>
            <tr>
              {weeks.map((item) => (
                <th className="calendar-column-header" key={item}>
                  <span className="calendar-column-header-inner">{item}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((item, i) => (
              <tr key={i}>
                {item.map((day, ii) => (
                  <td
                    className={classNames("cell", {
                      today: day.isSame(today, "day"),
                      selected: selected && day.isSame(selected, "day"),
                      "next-month": day.isAfter(current, "month"),
                      "prev-month": day.isBefore(current, "month"),
                      "before-day": day.isBefore(today, "date"),
                      "after-day": day.isAfter(today, "date"),
                    })}
                    key={day.toString()}
                  >
                    <div
                      className="calendar-date"
                      onKeyDown={() => {}}
                      role="button"
                      tabIndex={i * 7 + ii}
                      onClick={() => handleSetSelectedChange(day)}
                    >
                      <div className="calendar-value">
                        <Icon type="plus" />
                        <span title={day.format("YYYY/MM/DD")}>
                          {day.get("date")}
                        </span>
                      </div>
                      <div className="calendar-content">content</div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Calendar;
