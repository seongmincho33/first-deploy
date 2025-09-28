// components/Header.tsx (Tailwind CSS 기반)

import Link from "next/link";
import { Download, FileText } from "lucide-react"; // 아이콘 라이브러리 사용 가정

export default function Header() {
    // 이력서 메뉴 목록
    const navItems = [
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Skills", href: "/skills" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* 로고 / 홈 링크 */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition duration-300"
                >
                    조성민 개발자 🧑‍💻
                </Link>

                {/* 네비게이션 메뉴 */}
                <nav className="hidden md:flex space-x-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-600 font-medium hover:text-blue-600 transition duration-200"
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* 핵심 CTA: 이력서 PDF 다운로드 */}
                    <a
                        href="/Resume_KimReact.pdf" // 실제 PDF 파일 경로로 변경 필요
                        download
                        className="ml-4 flex items-center bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
                    >
                        <Download className="w-4 h-4 mr-2" />
                        PDF 이력서
                    </a>
                </nav>

                {/* 모바일 메뉴 버튼 (생략) */}
            </div>
        </header>
    );
}
