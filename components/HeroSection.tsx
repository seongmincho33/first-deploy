// components/HeroSection.tsx (프로필 사진 추가)

import Link from "next/link";
import { Server, Zap } from "lucide-react";
import MovingBackground from "./MovingBackground";
import Image from "next/image"; // ⭐️ Image 컴포넌트 추가

export default function HeroSection() {
    return (
        <section className="relative text-center py-20 md:py-32 bg-white overflow-hidden">
            <MovingBackground />

            <div className="relative z-10">
                {/* 💡 H1 (제목) 유지 */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                    <span className="text-indigo-600 inline-flex items-center">
                        테스트
                    </span>{" "}
                    할수 없는것은
                    <br />
                    <span className="text-blue-700">개발</span>
                    할수 없습니다 'ㅁ'
                </h1>

                {/* 서브 설명 1 유지 */}
                <p>하지만 하라면 열심히 합니다 ㅎ.ㅎ....</p>

                {/* ⭐️ 1. 프로필 사진 영역 추가 */}
                <div className="mt-8 mb-8 flex justify-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-white transform transition duration-500 hover:scale-110">
                        <Image
                            // ⭐️ 이 경로를 실제 프로필 사진 경로로 변경해 주세요!
                            // (예: public/profile.jpg에 있다면 "/profile.jpg")
                            src="/images/me/me.jpg"
                            alt="프로필 사진"
                            layout="fill"
                            objectFit="cover"
                            priority={true} // 메인 이미지이므로 우선 로드
                        />
                    </div>
                </div>

                {/* 서브 설명 2 유지 */}
                <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto">
                    한성대학교 IT응용시스템 공학과를 졸업하고, 3년 6개월 경력의
                    C# 개발자로서 <br />
                    3D 객체 프로그래밍과 BIM 모델링에 특화된 솔루션을
                    제공했습니다.
                </p>

                {/* CTA (Call-to-Action) 버튼 그룹 유지 */}
                <div className="flex justify-center space-x-4">
                    <Link
                        href="/projects"
                        className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 flex items-center"
                    >
                        <Zap className="w-5 h-5 mr-2" />
                        프로젝트 분석 (Portfolio)
                    </Link>
                    <Link
                        href="/about"
                        className="border border-gray-400 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
                    >
                        📄 경력 및 배경 (About Me)
                    </Link>
                </div>
            </div>
        </section>
    );
}
