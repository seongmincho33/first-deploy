// lib/projects.ts

// JSON 파일을 통째로 불러옵니다.
// 💡 import 구문을 변경합니다. 대부분의 Next.js 환경에서 JSON 배열은 'default' 속성에 담겨있습니다.
import projectsData from "../data/projects.json";

// 타입스크립트를 사용한다면 프로젝트 데이터의 타입을 정의해두는 것이 좋습니다.
export type Project = {
    id: string;
    title: string;
    summary: string;
    period: string;
    role: string;
    contribution: string;
    backend_tech: string[];
    frontend_tech: string[];
    tools: string[];
    description_points?: string[];
    image_path: string;
    external_link: string | null;
};

// 1. 모든 프로젝트 데이터를 가져오는 함수
export function getAllProjects(): Project[] {
    // ⭐️ 오류 해결 핵심!
    let projects: any = projectsData; // 임시로 any 타입으로 처리

    // 1. 만약 projectsData 자체가 배열이면 그대로 사용
    if (Array.isArray(projects)) {
        return projects as Project[];
    }

    // 2. 만약 projectsData.default에 배열이 담겨있다면 (가장 흔한 import 방식)
    if (projects.default && Array.isArray(projects.default)) {
        return projects.default as Project[];
    }

    // 3. (사용자가 key로 래핑했을 경우) data/projects.json 구조를 확인하고 해당 키를 사용해야 합니다.
    // 현재 JSON 샘플을 보면 래핑되지 않았으므로 1, 2번에서 해결되어야 합니다.

    // 최종적으로 배열을 찾지 못하면, 빈 배열을 반환하여 런타임 오류를 근본적으로 차단합니다.
    return [];
}

// 2. 특정 ID의 프로젝트 데이터를 가져오는 함수
export function getProjectById(id: string): Project | undefined {
    // ⭐️ getAllProjects()를 사용하여 안전하게 데이터를 가져옵니다.
    const projects = getAllProjects();
    return projects.find((p) => p.id === id);
}
