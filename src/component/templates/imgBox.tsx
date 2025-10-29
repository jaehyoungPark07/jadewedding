"use client";
import { useState, useEffect } from "react";
import styles from "./imgBox.module.scss";
import Image from "next/image";

const imgUrl = [
  // "IMG_3316.JPG",
  "IMG_3319.JPG",
  "IMG_3320.JPG",
  "IMG_3333.JPG",
  "IMG_3318.JPG",
  "IMG_3321.JPG",
  "IMG_3324.JPG",
  "IMG_3326.JPG",
  "IMG_3323.JPG",
  "IMG_3327.JPG",
  "IMG_3328.JPG",
  "IMG_3322.JPG",
  "IMG_3325.JPG",
  "IMG_3329.JPG",
  "IMG_3330.JPG",
  "IMG_3331.JPG",
  "IMG_3332.JPG",
];

interface ImageBoxProps {
  onModalChange?: (isOpen: boolean) => void;
}

const ImageBox = ({ onModalChange }: ImageBoxProps) => {
  const [selectImg, setSelectImg] = useState(imgUrl[0]);
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 모달이 열릴 때 스크롤 방지
  useEffect(() => {
    if (modalImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalImg]);

  const openModal = (imgSrc: string) => {
    const index = imgUrl.indexOf(imgSrc);
    setCurrentIndex(index);
    setModalImg(imgSrc);
    onModalChange?.(true);
  };

  const closeModal = () => {
    setModalImg(null);
    onModalChange?.(false);
  };

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const nextIndex = (currentIndex + 1) % imgUrl.length;
    setCurrentIndex(nextIndex);
    setModalImg(imgUrl[nextIndex]);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const prevIndex = (currentIndex - 1 + imgUrl.length) % imgUrl.length;
    setCurrentIndex(prevIndex);
    setModalImg(imgUrl[prevIndex]);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowLeft") {
      prevImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!touchStart) return;

    const distance = touchStart - e.clientX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <>
      <div className={styles.thridInnerContainer}>
        <div className={styles.tumbnail}>
          {/* <Image alt="img" src={`/img/${selectImg}`} fill quality={100} /> */}
          <Image alt="img" src={`/img/IMG_3316.JPG`} fill quality={100} />
        </div>
        <div className={styles.imgBox}>
          {imgUrl.map((c, idx) => {
            return (
              <div key={idx} className={styles.imgItem}>
                <Image
                  alt="img"
                  src={`/img/${c}`}
                  fill
                  onClick={() => openModal(c)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* 모달 */}
      {modalImg && (
        <div
          className={styles.modal}
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>

            {/* 이미지 */}
            <Image
              alt="확대 이미지"
              src={`/img/${modalImg}`}
              width={800}
              height={600}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            />

            {/* 이미지 인덱스 표시 */}
            <div className={styles.imageCounter}>
              {currentIndex + 1} / {imgUrl.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ImageBox;
