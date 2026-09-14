"use client";

import { useState } from "react";
import Image from "next/image";
import hobbyStyles from "./page.module.css";

const readingBooks = [
  {
    src: "/images/reading/programming.jpg",
    alt: "プログラミング学習で使用している参考書",
    caption:
      "Java、Python、PHP、HTML/CSSなど、プログラミング学習で使用してきた参考書です。",
  },
  {
    src: "/images/reading/programming2.jpg",
    alt: "開発やデザイン制作に関する参考書",
    caption:
      "Unity、Blender、Flutter、Shopifyなど、制作やアプリ開発に関する本です。",
  },
  {
    src: "/images/reading/free.jpg",
    alt: "投資や資格など幅広い分野の本",
    caption:
      "投資、資格、セキュリティなど、興味を持った分野を広げるために読んでいる本です。",
  },
  {
    src: "/images/reading/exam.jpg",
    alt: "情報処理安全確保支援士や英語試験の参考書",
    caption:
      "情報処理安全確保支援士、TOEIC、大学数学など、資格や試験対策で使用している本です。",
  },
];

export default function ReadingGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const selectedBook = readingBooks.find((book) => book.src === selectedImage);

  return (
    <>
      <div className={hobbyStyles.bookGallery}>
        {readingBooks.map((book) => (
          <article key={book.src} className={hobbyStyles.bookCard}>
            <button
              type="button"
              className={hobbyStyles.bookImageButton}
              onClick={() => setSelectedImage(book.src)}
              aria-label={`${book.alt}を拡大表示する`}
            >
              <Image
                src={book.src}
                alt={book.alt}
                width={600}
                height={600}
                className={hobbyStyles.bookImage}
              />
            </button>

            <p className={hobbyStyles.bookCaption}>{book.caption}</p>
          </article>
        ))}
      </div>

      {selectedBook && (
        <div
          className={hobbyStyles.imageModal}
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <div
            className={hobbyStyles.imageModalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={hobbyStyles.imageModalClose}
              onClick={() => setSelectedImage(null)}
              aria-label="拡大画像を閉じる"
            >
              ✕
            </button>

            <Image
              src={selectedBook.src}
              alt={selectedBook.alt}
              width={1200}
              height={1200}
              className={hobbyStyles.imageModalImage}
            />

            <p className={hobbyStyles.imageModalCaption}>
              {selectedBook.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}