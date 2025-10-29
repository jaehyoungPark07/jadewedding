"use client";
import { useState } from "react";
import styles from "./main.module.scss";
import Image from "next/image";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import ImageBox from "./imgBox";
import Countdown from "./countdown";

const MainTemplates = () => {
  const [isLargeText, setIsLargeText] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGroomAccountOpen, setIsGroomAccountOpen] = useState(false);
  const [isBrideAccountOpen, setIsBrideAccountOpen] = useState(false);

  const toggleLargeText = () => {
    setIsLargeText(!isLargeText);
  };

  const toggleGroomAccount = () => {
    setIsGroomAccountOpen(!isGroomAccountOpen);
  };

  const toggleBrideAccount = () => {
    setIsBrideAccountOpen(!isBrideAccountOpen);
  };
  return (
    <main
      className={`${styles.container} ${isLargeText ? styles.largeText : ""}`}
    >
      <div className={styles.innerContainer}>
        <div className={styles.title}>
          <div className={styles.weddingDay}>
            <p>Wedding Day</p>
          </div>
          <div className={styles.nameDiv}>
            <span>박진원</span>
            <span className={styles.and}>그리고</span>
            <span>강현미</span>
          </div>
          {/* <Countdown /> */}
          {/* <div className={styles.imgDiv}>
            <Image
              src="/img/웨딩메인.JPG"
              alt="main"
              width={700}
              height={700}
              quality={100}
            />
          </div> */}
          <div className={styles.dateDiv}>
            <p>2025.12.13 PM 03:30 </p>
            <p>송도 센트럴파크 호텔 4층 로즈홀</p>
          </div>
        </div>
      </div>
      <div className={styles.secondInnerContainer}>
        <div>
          <p>두 사람이 마주 보며 쌓아온 시간들이</p>
          <p>이제는 한 방향을 향해 나아가는 길이 되었습니다.</p>
        </div>
        <div>
          <p>햇살 가득한 날에도, 고요한 밤의 시간 속에서도</p>
          <p>서로의 곁에서 한 걸음씩 나아가며</p>
          <p>사랑이라는 이름으로 삶을 써 내려가려 합니다</p>
        </div>
        <div>
          <p>부디 저희의 여정이 따뜻한 축복 속에서</p>
          <p>시작될 수 있도록, 서로의 계절을 함께 걸어갈</p>
          <p>두 사람의 앞날을 사랑스러운 시선으로</p>
          <p>지켜봐 주시길 바랍니다.</p>
        </div>
      </div>
      <div className={styles.thirdInnerContainer}>
        <div>
          <p>신랑</p>
          <p>
            박규팔 · 권기연
            <span className={styles.son}>의 아들 </span>
            <span className={styles.name}>박진원</span>
          </p>
        </div>
        <div>
          <p>신부</p>
          <p>
            강성곤 · 김영진
            <span className={styles.son}>의 딸 </span>
            <span className={styles.name}>강현미</span>
          </p>
        </div>
      </div>
      <ImageBox onModalChange={setIsModalOpen} />

      <div className={styles.fourthInnerContainer}>
        <p>오시는 길</p>
        <div className={styles.map}>
          <Map
            center={{ lat: 37.390392, lng: 126.637412 }}
            style={{ width: "100%", height: "100%" }}
            level={4}
          >
            <MapMarker position={{ lat: 37.390392, lng: 126.637412 }} />
          </Map>
        </div>
        <div className={styles.text}>
          <div>
            <p>송도 센트럴파크 호텔 4층 로즈홀</p>
            <p>인천 연수구 테크노파크로 193</p>
          </div>
          <div>
            <p>지하철</p>
            <div>
              <p>- 인천지하철 1호선 센트럴파크역 3번 출구 (도보 5분)</p>
            </div>
          </div>
          <div>
            <p>버스</p>
            <div>
              <p>- M6405, M6450, 91, 98, 41</p>
              <p>센트럴파크역 정류장</p>
              <p>- 8, 16, 16-1, 58, 42, 43, 3002, 99</p>
              <p>인천대입구역 정류장</p>
              <p>- 6777</p>
              <p>송도센트럴파크호텔 정류장</p>
            </div>
          </div>
          <div>
            <p>자가용</p>
            <div>
              <p>- 네비게이션 </p>
              <p>"송도 센트럴파크 호텔" 또는</p>
              <p>"인천 연수구 테크노파크로 293"</p>
              <p>- 주차</p>
              <p>호텔 주차장 (무료)</p>
            </div>
          </div>
          <div>
            <p>포항 전세버스 안내(신랑측)</p>
            <div>
              <p>
                - <span className={styles.bold}>출발 일시:</span> 2025년 12월
                13일(토) 오전 8시 30분{" "}
              </p>{" "}
              <p>
                - <span className={styles.bold}>출발 장소:</span> 포항시
                종합운동장(남구 희망대로 810)
              </p>
              <p>* 원활한 탑승을 위해 출발 10분 전까지 집결 부탁드립니다.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fifthInnerContainer}>
        <p>마음 전하실 곳</p>
        <div className={styles.accountSection}>
          <div className={styles.accountGroup}>
            <button
              className={`${styles.accountToggle} ${
                isGroomAccountOpen ? styles.active : ""
              }`}
              onClick={toggleGroomAccount}
            >
              <h3>신랑측</h3>
              <span className={styles.toggleIcon}>
                {isGroomAccountOpen ? "▲" : "▼"}
              </span>
            </button>
            {isGroomAccountOpen && (
              <div className={styles.accountGrid}>
                <div className={styles.accountItem}>
                  <span className={styles.accountNumber}>523-910066-14207</span>
                  <span className={styles.bankName}>하나은행</span>
                  <span className={styles.accountHolder}>박규팔</span>
                </div>
                <div className={styles.accountItem}>
                  <span className={styles.accountNumber}>095-08-121574</span>
                  <span className={styles.bankName}>대구은행</span>
                  <span className={styles.accountHolder}>권기연</span>
                </div>
                <div className={styles.accountItem}>
                  <span className={styles.accountNumber}>298-910349-89907</span>
                  <span className={styles.bankName}>하나은행</span>
                  <span className={styles.accountHolder}>박진원</span>
                </div>
              </div>
            )}
          </div>
          <div className={styles.accountGroup}>
            <button
              className={`${styles.accountToggle} ${
                isBrideAccountOpen ? styles.active : ""
              }`}
              onClick={toggleBrideAccount}
            >
              <h3>신부측</h3>
              <span className={styles.toggleIcon}>
                {isBrideAccountOpen ? "▲" : "▼"}
              </span>
            </button>
            {isBrideAccountOpen && (
              <div className={styles.accountGrid}>
                <div className={styles.accountItem}>
                  <span className={styles.accountNumber}>3333086429306</span>
                  <span className={styles.bankName}>카카오뱅크</span>
                  <span className={styles.accountHolder}>강현미</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 큰글씨 토글 버튼 */}
      {!isModalOpen && (
        <button
          className={styles.largeTextButton}
          onClick={toggleLargeText}
          aria-label="글씨 크기 변경"
        >
          큰글씨
        </button>
      )}
    </main>
  );
};

export default MainTemplates;
