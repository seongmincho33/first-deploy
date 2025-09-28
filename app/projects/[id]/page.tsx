// app/projects/[id]/page.tsx (수정 완료 버전)

import { getAllProjects, getProjectById } from "@/lib/projects";
import Image from "next/image";
import { Code, GitBranch, Terminal } from "lucide-react";
import React from "react";
import { Project } from "@/lib/projects"; // Project 타입 임포트

// 1. SSG를 위한 동적 경로 생성 (빌드 시 실행)
export async function generateStaticParams() {
    const projects = getAllProjects() as Project[]; // getAllProjects의 반환 타입을 명확히 지정

    return projects.map((project) => ({
        id: project.id,
    }));
}

// 2. 메타데이터 생성 (SEO를 위해 빌드 시점에 실행)
export async function generateMetadata({ params }: { params: { id: string } }) {
    const project = getProjectById(params.id) as Project | undefined; // 반환 타입을 명확히 지정

    if (!project) {
        return { title: "프로젝트를 찾을 수 없습니다." };
    }

    return {
        title: `${project.title} | 프로젝트 상세 분석`,
        description: project.summary,
    };
}

// 3. 실제 페이지 컴포넌트 (데이터 패칭 및 렌더링)
export default async function ProjectDetailPage({
    params,
}: {
    params: { id: string };
}) {
    const project = getProjectById(params.id) as Project | undefined; // 반환 타입을 명확히 지정

    if (!project) {
        return <h1>404 | 요청하신 프로젝트 기록을 찾을 수 없습니다.</h1>;
    }

    return (
        <div className="container mx-auto px-4 py-16">
            {/* 🛠️ 헤더 영역: 프로젝트 제목 및 요약 */}
            <header className="mb-12 border-b pb-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
                    {project.title}
                </h1>
                <p className="text-xl text-gray-600 italic">
                    {project.summary}
                </p>
            </header>

            {/* 🖼️ 프로젝트 이미지 (BIM 모델) */}
            {/* ⭐️ Next/Image 수정: layout="fill" 대신 fill Prop 사용 및 부모에 relative 설정 */}
            <div className="relative w-full h-80 mb-12 rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <Image
                    src={project.image_path}
                    alt={`${project.title} 모델 컨버팅 이미지`}
                    fill // 💡 Next.js 13+ App Router 방식
                    style={{ objectFit: "contain" }} // 💡 objectFit은 style 속성으로 이동
                    priority
                />
            </div>

            {/* 📊 핵심 지표 (메트릭스) 섹션 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 bg-gray-50 rounded-lg">
                <MetricCard
                    icon={<Terminal className="w-6 h-6 text-indigo-600" />}
                    label="프로젝트 기간"
                    value={project.period}
                />
                <MetricCard
                    icon={<Code className="w-6 h-6 text-indigo-600" />}
                    label="나의 역할"
                    value={project.role}
                />
                <MetricCard
                    icon={<GitBranch className="w-6 h-6 text-indigo-600" />}
                    label="기여도"
                    value={project.contribution}
                />
            </div>

            {/* ⚙️ 기술 스택 및 환경 분석 */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                    기술 스택 및 환경
                </h2>
                <TechStack project={project} />
            </section>

            {/* 🎯 문제 해결 및 결과 분석 섹션 */}
            {/* 타입 가드 유지: description_points가 있을 때만 렌더링 */}
            {project.description_points &&
                project.description_points.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                            문제 해결 (Troubleshooting) 및 결과
                        </h2>
                        <ul className="list-disc list-outside space-y-3 pl-5 text-gray-700">
                            {project.description_points.map((point, index) => (
                                <li key={index} className="pl-2">
                                    <span className="font-medium text-gray-900">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
        </div>
    );
}

// ---------------------------------------------------------------------------------
// 💡 보조 컴포넌트: 타입 정의 추가 (TypeScript 오류 해결)
// ---------------------------------------------------------------------------------

// ⭐️ Prop 타입 정의
type MetricCardProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
};

// 메트릭 카드 컴포넌트
function MetricCard({ icon, label, value }: MetricCardProps) {
    return (
        <div className="flex items-center space-x-4">
            <div className="p-3 bg-white rounded-full shadow-md">{icon}</div>
            <div>
                <p className="text-sm font-medium text-gray-500">{label}</p>
                <p className="text-lg font-semibold text-gray-900">{value}</p>
            </div>
        </div>
    );
}

// ⭐️ Prop 타입 정의
type TechStackProps = {
    project: Project;
};

// 기술 스택 컴포넌트
function TechStack({ project }: TechStackProps) {
    const renderTags = (techs: string[], color: string) => (
        <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
                <span
                    key={tech}
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${color}`}
                >
                    {tech}
                </span>
            ))}
        </div>
    );

    return (
        <div className="space-y-4">
            <div>
                <h3 className="text-md font-bold text-gray-700 mb-2">
                    백엔드/코어 기술 (BIM 컨버팅)
                </h3>
                {renderTags(project.backend_tech, "bg-gray-200 text-gray-800")}
            </div>
            <div>
                <h3 className="text-md font-bold text-gray-700 mb-2">
                    프런트엔드 (전환 목표)
                </h3>
                {renderTags(
                    project.frontend_tech,
                    "bg-indigo-100 text-indigo-700 border border-indigo-300"
                )}
            </div>
            <div>
                <h3 className="text-md font-bold text-gray-700 mb-2">
                    툴 및 API
                </h3>
                {renderTags(project.tools, "bg-gray-100 text-gray-600")}
            </div>
        </div>
    );
}
