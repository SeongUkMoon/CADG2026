# CAD/Graphics 2026 페이지 내용 수정 가이드

이 프로젝트에는 `Registration`과 `Visitor Information` 두 페이지가 들어 있습니다. 행사 장소 소개와 관광 정보는 서울대학교 관악캠퍼스 기준으로 수정되었습니다. 아직 확정되지 않은 등록, 교통·비자, 숙박 세부 정보에는 임시 내용이 남아 있습니다.

## 가장 빠르게 임시 내용을 찾는 방법

프로젝트 전체에서 `TODO:`를 검색하면 교체가 필요한 위치를 모두 찾을 수 있습니다. 각 임시 구역 바로 위에 다음과 같은 주석이 있습니다.

- `TODO: REGISTRATION INTRODUCTION` — 등록 시작 안내, 조기 등록 기한
- `TODO: Replace all KRW prices...` — 원화 등록비 표
- `TODO: Replace all USD prices...` — 달러 등록비 표
- `TODO: Review these author-registration rules...` — 저자 등록 규칙
- `TODO: Replace this temporary CVM registration URL...` — 등록 사이트 주소
- `TODO: Confirm the official cancellation deadline...` — 취소·환불 규정
- `TODO: Update airport routes...` — 공항 교통과 비자 정보
- `TODO: ACCOMMODATION` — 객실 요금, 연락처, 예약 양식

서울대학교 소개, 행사장 장점, 관광 추천지는 `components/info-content.tsx`에서 `VENUE INTRODUCTION`, `VENUE DETAILS`, `TOUR GUIDE` 주석을 검색하면 바로 찾을 수 있습니다.

## 주요 파일

- `components/registration-content.tsx` — Registration 페이지의 모든 문구와 표
- `components/info-content.tsx` — Visitor Information 페이지의 모든 문구, 링크, 사진
- `components/conference-shell.tsx` — 공통 상단 메뉴, 로고, 제목 배너, 하단 정보
- `app/globals.css` — 두 페이지에 공통으로 적용되는 색상, 간격, 표, 모바일 디자인
- `public/images/` — 로고와 장소·숙박·관광 이미지

## 페이지 주소

- `/registration`
- `/info`

## 임시 참고자료

- Registration: https://iccvm.org/2026/registration.htm
- Visitor Information: https://iccvm.org/2026/info.htm
- CAD/Graphics 2026 디자인: https://www.asiagraphics.org/CADGraphics2026

## 공개 전에 반드시 확인할 항목

등록비, 조기 등록일, 등록 링크, 환불 규정, 행사장 주소, 교통비, 비자 정보, 숙소 요금, 객실 수, 전화번호, 이메일, 예약 양식 링크를 운영위원회에서 확인한 내용으로 교체해 주세요.

