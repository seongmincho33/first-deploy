// app/page.tsx (수정 및 정리 완료)

// Note: Header, Footer는 app/layout.tsx에서 전역적으로 관리되므로,
//       이 파일에서는 import하지 않습니다.
//       Image 컴포넌트는 사용하지 않으므로 import에서 제거합니다.
import HeroSection from "../components/HeroSection"; // HeroSection 컴포넌트 import
import KeyMetrics from "../components/KeyMetrics"; // KeyMetrics 컴포넌트 import

// Next.js App Router의 Server Component (SSG에 유리)
// 이 컴포넌트는 모든 페이지에 공통적으로 적용되는 Layout의 {children} 자리에 렌더링됩니다.
export default function HomePage() {
    return (
        // main 태그 내부의 flex-grow가 부모인 layout의 flex-col과 함께 작동합니다.
        // min-h-screen이나 flex-col 같은 전역 스타일은 layout.tsx에서 처리되는 것이 더 좋습니다.
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Hero Section: 명함이자 핵심 소개 (상위 컴포넌트에서 재구성된 내용) */}
            <HeroSection />

            {/* --- */}

            {/* Key Metrics: 주요 성과 요약 (상위 컴포넌트에서 재구성된 내용) */}
            <KeyMetrics />

            {/* 💡 여기에 프로젝트 목록의 일부를 카드 형태로 요약하여 추가할 수 있습니다. */}
            {/* <ProjectSummaryList /> */}
        </main>
    );
}
