// lib/supabase.ts (분리된 파일)
import { createClient } from "@supabase/supabase-js";

// 환경 변수 검사 (as string 대신 명시적으로 확인)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    // 🚨 환경 변수가 없을 경우 개발자가 알 수 있도록 오류를 던집니다.
    throw new Error(
        "Supabase 환경 변수(URL 또는 Key)를 찾을 수 없습니다. Vercel 환경 변수를 확인해주세요."
    );
}

// 2. 클라이언트 객체를 생성해요
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Resume 타입 정의도 여기에 두는 것이 좋아요
export type Resume = {
    id: number;
    name: string;
    description: string | null;
};
