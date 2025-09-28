// 이 데이터는 빌드 시점에 정적으로 생성됩니다.
const metrics = [
    {
        label: "주요 기술 스택",
        value: "C#, .NET, SQL Server, Devexpress",
        description: ".NET Framework 기반 개발",
    },
    {
        label: "프로젝트 경험",
        value: "+4",
        description:
            "BIM 컨버터, 합성버팀보 ERP, AWP 시스템, 기초지지력자동화 등",
    },
    {
        label: "현재 상태",
        value: "LG CNS AM INSPIRE 3기",
        description: "부트캠프 수학 진행중...",
    },
];

export default function KeyMetrics() {
    return (
        <section className="mt-10 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {metrics.map((metric, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition duration-300"
                    >
                        <p className="text-sm font-medium text-blue-600 mb-1">
                            {metric.label}
                        </p>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {metric.value}
                        </h3>
                        <p className="text-gray-500 text-sm">
                            {metric.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
