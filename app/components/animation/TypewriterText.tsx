"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type TypewriterTextProps = {
  text?: string;
  strings?: string[];

  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;

  loop?: boolean;

  showCursor?: boolean;
  cursorChar?: string;

  className?: string;
  ariaLabel?: string;

  /** 画面に見えたら1回だけ再生 */
  startOnView?: boolean;
  threshold?: number;
  rootMargin?: string;
};

export default function TypewriterText({
  text,
  strings,
  typeSpeed = 70,
  deleteSpeed = 40,
  delayBetween = 900,
  loop = false,
  showCursor = true,
  cursorChar = "|",
  className,
  ariaLabel,

  startOnView = false,
  threshold = 0.3,
  rootMargin = "0px",
}: TypewriterTextProps) {
  const targets = useMemo(() => {
    if (strings && strings.length > 0) return strings;
    if (typeof text === "string") return [text];
    return [""];
  }, [strings, text]);

  const [isRunning, setIsRunning] = useState(!startOnView);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const hasPlayedRef = useRef(false);

  const clearTimer = () => {
    if (timeoutRef.current != null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // 画面に入ったら「最初の1回だけ」開始（setStateは外部コールバック内なのでOK）
  useEffect(() => {
    if (!startOnView) return;

    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedRef.current) {
          hasPlayedRef.current = true;
          setIsRunning(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnView, threshold, rootMargin]);

  // メイン進行（setStateは必ず setTimeout 内）
  useEffect(() => {
    if (!isRunning) return;

    clearTimer();

    const current = targets[index] ?? "";
    const doneTyping = value === current && !isDeleting;
    const doneDeleting = value === "" && isDeleting;

    // 打ち終わり → 待ってから削除開始（タイマー内 setState）
    if (doneTyping) {
      if (!loop && targets.length === 1) return;

      timeoutRef.current = window.setTimeout(() => {
        setIsDeleting(true);
      }, delayBetween);

      return () => clearTimer();
    }

    // 消し終わり → 次へ（または終了）※ ここもタイマー内に寄せる
    if (doneDeleting) {
      const isLast = index >= targets.length - 1;

      timeoutRef.current = window.setTimeout(() => {
        if (!loop && isLast) {
          setIsDeleting(false);
          setIsRunning(false);
          return;
        }

        setIndex((prev) => (prev + 1 >= targets.length ? 0 : prev + 1));
        setIsDeleting(false);
      }, 0);

      return () => clearTimer();
    }

    // 通常（タイプ/デリート）
    timeoutRef.current = window.setTimeout(() => {
      if (!isDeleting) {
        setValue(current.slice(0, value.length + 1));
      } else {
        setValue(current.slice(0, Math.max(0, value.length - 1)));
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimer();
  }, [
    isRunning,
    targets,
    index,
    value,
    isDeleting,
    typeSpeed,
    deleteSpeed,
    delayBetween,
    loop,
  ]);

  return (
    <span ref={wrapperRef} className={className} aria-label={ariaLabel ?? targets.join(" / ")}>
      <span aria-hidden="true">{value}</span>

      {showCursor ? (
        <span
          aria-hidden="true"
          style={{
            marginLeft: "0.1em",
            display: "inline-block",
            transform: "translateY(0.05em)",
            animation: "tw-cursor-blink 1s steps(2, start) infinite",
          }}
        >
          {cursorChar}
        </span>
      ) : null}

      <style jsx>{`
        @keyframes tw-cursor-blink {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </span>
  );
}
