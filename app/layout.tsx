// app/layout.tsx

import "./globals.css"; // 전역 스타일 파일 import (Tailwind CSS 포함)
import Header from "../components/Header";
import Footer from "../components/Footer";

// 메타데이터는 SEO를 위해 SSG 시점에 미리 생성됩니다.
export const metadata = {
    title: "프런트엔드 개발자 김리액트 | Next.js 이력서",
    description:
        "React, Next.js, TypeScript 기반의 고성능 웹 서비스 개발 전문가 이력서입니다.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            {/* <body> 태그 내부가 클라이언트에게 전송되는 HTML 내용입니다. */}
            <body className="flex flex-col min-h-screen">
                {/* Header와 Footer는 모든 페이지에서 고정됩니다. */}
                <Header />

                {/* children: 이 자리에 app/page.tsx, app/projects/page.tsx 등의 페이지 내용이 렌더링됩니다. */}
                {children}

                <Footer />
            </body>
        </html>
    );
}
