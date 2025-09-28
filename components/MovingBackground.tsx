// components/MovingBackground.tsx

import Image from "next/image";

// 💡 프로젝트 섬네일 경로 (예시 경로입니다. 실제 파일 경로로 대체해야 합니다!)
const projectImages = [
    "/images/bim/TeklaFoundation.png",
    "/images/bim/RevitFoundation.png",
    "/images/bim/E3DFoundation.png", // 더 많은 이미지를 추가해주세요.
    "/images/bim/S3DFoundation.png",
    "/images/bim/PDMSFoundation.png",
];

export default function MovingBackground() {
    const oneSetWidth = 2240;
    const containerWidth = oneSetWidth * 2; // 총 4480px
    return (
        <div className="absolute inset-0 z-0 opacity-50 overflow-hidden">
            {/* ⭐️ w-[300vw] 대신 w-[4480px]와 같은 실제 픽셀 너비를 사용합니다. */}
            <div
                className="h-full absolute top-0 animate-move-bg-auto"
                style={{ width: `${containerWidth}px` }} // 픽셀로 명확하게 너비 지정
            >
                <div className="flex h-full items-center">
                    {/* 이미지 리스트를 반복하여 무한 반복 시 끊김 없이 연결되게 합니다. */}
                    {[...projectImages, ...projectImages].map((path, index) => (
                        <div
                            key={index}
                            className="relative w-96 h-64 mx-8 flex-shrink-0 rounded-lg shadow-xl overflow-hidden"
                        >
                            <Image
                                src={path}
                                alt={`Project Background Image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="grayscale contrast-50"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
