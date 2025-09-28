// components/Footer.tsx (Tailwind CSS 기반)

import { Github, Linkedin, Mail } from "lucide-react"; // 아이콘 라이브러리 사용 가정

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white mt-auto py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
                {/* 저작권 정보 */}
                <p className="text-sm text-gray-400">
                    © {currentYear} 조성민. All Rights Reserved.
                </p>

                {/* 소셜 및 연락처 링크 */}
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a
                        href="mailto:contact@email.com" // 실제 이메일 주소로 변경
                        className="text-gray-400 hover:text-blue-400 transition duration-200"
                        title="이메일 보내기"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                    <a
                        href="https://github.com/your-github" // 실제 GitHub 주소로 변경
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition duration-200"
                        title="GitHub 프로필"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://linkedin.com/in/your-linkedin" // 실제 LinkedIn 주소로 변경
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition duration-200"
                        title="LinkedIn 프로필"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
