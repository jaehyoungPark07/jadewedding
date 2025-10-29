"use client";
import { useState, useEffect } from "react";
import styles from "./countdown.module.scss";

const Countdown = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-10-29T15:30:00"); // 2025.12.13 PM 03:30

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      const dDay = new Date("2025-10-29T00:00:00");
      const dDayDistance = Math.floor(
        (targetDate.getTime() - dDay.getTime()) / (1000 * 60 * 60 * 24)
      );
      console.log(dDayDistance);
      console.log(dDay);
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      if (days > 1 || dDayDistance > 0) {
        setDaysLeft(days);
        console.log("a");
      } else if (days <= 1 && dDayDistance > 0) {
        setDaysLeft(1);
        console.log("b");
      } else {
        setDaysLeft(0);
        console.log("c");
      }
    };

    // 초기 실행
    updateCountdown();

    // 1시간마다 업데이트 (날짜가 바뀔 때만)
    const interval = setInterval(updateCountdown, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.countdownText}>
        D - {daysLeft === 0 ? "Day" : daysLeft}
      </div>
    </div>
  );
};

export default Countdown;
