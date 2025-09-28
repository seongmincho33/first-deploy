// app/projects/page.tsx (보강 완료)
import Image from "next/image";
import Link from "next/link";
import { getAllProjects, Project } from "@/lib/projects"; // 모든 프로젝트 데이터 불러오기
import { ArrowRight, Code, Server } from "lucide-react";

// Next.js는 빌드 시 이 함수를 실행하여 데이터를 가져옵니다.
async function getProjectsData() {
    // lib/projects.ts의 함수를 사용하여 정적 데이터를 가져옵니다.
    return getAllProjects();
}

// 💡 ProjectList 페이지 컴포넌트
export default async function ProjectsPage() {
    // Server Component에서 await을 사용하여 비동기 데이터 로딩
    const projects = await getProjectsData();

    // ⭐️ 오류 해결 방어 코드 추가: projects가 유효한 배열인지 확인합니다.
    if (!Array.isArray(projects)) {
        // 데이터가 배열이 아니거나 null/undefined일 경우 빈 배열로 대체하거나 에러 메시지를 표시
        console.error("Project data is not a valid array:", projects);
        // 사용자에게 404가 아닌, 데이터 로딩 실패 메시지를 반환
        return (
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <h1 className="text-4xl font-bold text-red-600">
                    데이터 로딩 오류 발생
                </h1>
                <p className="text-lg text-gray-600 mt-4">
                    프로젝트 데이터를 불러오는 데 실패했습니다. JSON
                    파일(lib/projects.ts)을 확인해 주세요.
                </p>
            </main>
        );
    }

    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* ... (기존 header 내용 유지) ... */}

            {/* 프로젝트 목록 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* ⭐️ 이제 projects는 유효한 배열임이 보장됩니다. */}
                {projects.map((project) => (
                    // ProjectCard 컴포넌트를 Server Component로 렌더링
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </main>
    );
}

// ---------------------------------------------------------------------------------
// 💡 보조 컴포넌트: 프로젝트 카드 (ProjectCard)
// ---------------------------------------------------------------------------------

// Props 타입 정의
type ProjectCardProps = {
    project: Project;
};
function ProjectCard({ project }: ProjectCardProps) {
    // ⭐️ 보강된 안전 접근: project.backend_tech가 undefined일 경우 빈 배열로 대체합니다.
    const techsToShow = project.backend_tech?.slice(0, 2) || [];

    return (
        <Link
            href={`/projects/${project.id}`}
            className="block h-full transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl"
        >
            <article className="bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col h-full overflow-hidden">
                {/* ⭐️ 1. 섬네일 영역 (카드 상단) */}
                <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                    <Image
                        // image_path는 "/images/bim/TeklaConverter.png" 형태입니다.
                        src={project.image_path}
                        alt={`${project.title} 프로젝트 섬네일`}
                        layout="fill" // 부모 div 크기에 맞춤
                        objectFit="cover" // 이미지가 잘리지 않게 채움
                        className="transition duration-500 ease-in-out hover:opacity-80"
                        // 이미지 최적화를 위해 next.config.js 설정이 필요할 수 있습니다.
                    />
                </div>

                {/* ⭐️ 2. 카드 본문 (제목, 요약, 태그 등) - p-6 padding 추가 */}
                <div className="p-6 flex flex-col flex-grow">
                    {/* 제목 및 기간 */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {project.title}
                    </h2>
                    <p className="text-sm text-indigo-600 font-semibold mb-4 flex items-center">
                        <Server className="w-4 h-4 mr-1" /> {project.period}
                    </p>

                    {/* 요약 */}
                    <p className="text-gray-600 flex-grow mb-4">
                        {project.summary}
                    </p>

                    {/* 핵심 기술 태그 */}
                    <div className="mt-auto border-t pt-4">
                        <h3 className="text-xs font-semibold text-gray-500 mb-2">
                            핵심 스택:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {techsToShow.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 상세 보기 링크 */}
                    <div className="mt-4 flex items-center text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition">
                        상세 분석 보기
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                </div>
            </article>
        </Link>
    );
}
// // 프로젝트 요약 정보를 보여주는 카드 컴포넌트
// function ProjectCard({ project }: ProjectCardProps) {
//     // ⭐️ 보강된 안전 접근: project.backend_tech가 undefined일 경우 빈 배열로 대체합니다.
//     const techsToShow = project.backend_tech?.slice(0, 2) || [];

//     return (
//         <Link
//             href={`/projects/${project.id}`}
//             className="block h-full transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl"
//         >
//             <article className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col h-full">
//                 {/* 제목 및 요약 */}
//                 <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                     {project.title}
//                 </h2>
//                 <p className="text-sm text-indigo-600 font-semibold mb-4 flex items-center">
//                     <Server className="w-4 h-4 mr-1" /> {project.period}
//                 </p>

//                 <p className="text-gray-600 flex-grow mb-4">
//                     {project.summary}
//                 </p>

//                 {/* 핵심 기술 태그 */}
//                 <div className="mt-auto border-t pt-4">
//                     <h3 className="text-xs font-semibold text-gray-500 mb-2">
//                         핵심 스택:
//                     </h3>
//                     <div className="flex flex-wrap gap-2">
//                         {/* ⭐️ 안전하게 처리된 techsToShow 배열 사용 */}
//                         {techsToShow.map((tech) => (
//                             <span
//                                 key={tech}
//                                 className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
//                             >
//                                 {tech}
//                             </span>
//                         ))}
//                     </div>
//                 </div>

//                 {/* 상세 보기 링크 */}
//                 <div className="mt-4 flex items-center text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition">
//                     상세 분석 보기
//                     <ArrowRight className="w-4 h-4 ml-1" />
//                 </div>
//             </article>
//         </Link>
//     );
// }
