import Image from "next/image";

import { createClient } from "@supabase/supabase-js";

// 1. 환경 변수를 불러와요
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// 2. 클라이언트 객체를 생성해요
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Resume = {
    id: number;
    name: string;
    description: string | null;
};

const getResumeById = async (resumeId: number): Promise<Resume | null> => {
    const { data, error } = await supabase
        .from("resume")
        .select("*")
        .eq("id", resumeId)
        .single<Resume>(); // 👈 타입을 명시하여, 반환되는 데이터가 Resume 형태임을 알려줘요.

    if (error) {
        console.error("앗, Supabase 쿼리 에러 발생:", error.message);
        // 🥶 냉정한 판단: 에러가 발생하면 null을 반환하여 데이터가 없음을 알려줍니다.
        return null;
    }

    return data;
};

export default async function Home() {
    // getResumeInfo 함수를 호출하여 데이터를 기다림

    const RESUME_ID = 1; // 👈 우리가 가져오고 싶은 ID 값
    const resume = await getResumeById(RESUME_ID);

    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <Image
                    className="dark:invert"
                    src="/mushroom.jpg"
                    alt="Next.js logo"
                    width={333}
                    height={38}
                    priority
                />
                superbase test
                {resume?.id}
                {resume?.description}
                {/* <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
                    <li className="mb-2 tracking-[-.01em]">
                        안녕하세요 {dataGeneral.name} 입니다. 제 깃허브 아이디는{" "}
                        {dataGeneral.github_id} 입니다.
                        {dataGeneral.introduce}
                    </li>
                    <li className="tracking-[-.01em]">
                        제가 만들었던 프로젝트는 {dataPortfolio.project_name}{" "}
                        입니다. 프로젝트는 {dataPortfolio.project_info} 입니다.
                    </li>
                </ol> */}
            </main>
        </div>
    );
}
