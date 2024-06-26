import Link from "next/link";

export const metadata = {
  title: "Next.js",
  description: "Next.js를 이용한 포트폴리오 예제 사이트입니다.",
  keywords: ["포트폴리오", "넥스트", "웹개발"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <Link rel="icon" type="image/svg+xml" href="favicon.svg"></Link>
      <body>{children}</body>
    </html>
  );
}
