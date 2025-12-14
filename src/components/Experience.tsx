const Experience = () => {
  const experiences = [
    {
      period: "2021.03 - 현재",
      company: "테크 스타트업",
      position: "Senior Backend Engineer",
      description: [
        "마이크로서비스 아키텍처 기반 API 서버 설계 및 개발",
        "Kubernetes를 활용한 컨테이너 오케스트레이션 구축",
        "Redis 캐싱 전략 도입으로 응답 속도 70% 개선",
        "데이터베이스 쿼리 최적화로 처리량 3배 향상",
      ],
      tags: ["Spring Boot", "Kubernetes", "PostgreSQL", "Redis"],
    },
    {
      period: "2021.11 - 2022.02",
      company: "주식회사 푸드나무",
      position: "서버 개발 / Intern / 백엔드 개발자",
      description: [
        "RESTful API 설계 및 구현",
        "데이터베이스 스키마 설계",
        "단위 테스트 및 통합 테스트 작성",
        "레거시 코드 리팩토링",
      ],
      tags: ["PHP", "JavaScript", "MySQL"],
    },
    {
      period: "2021.04 - 2021.11",
      company: "(주)지지옥션",
      position: "정규직 · 연구소 · 연구원",
      description: [
        "주문/결제 시스템 API 개발 및 유지보수",
        "AWS 기반 인프라 구축 및 운영",
        "CI/CD 파이프라인 구축으로 배포 시간 80% 단축",
        "실시간 재고 관리 시스템 개발",
      ],
      tags: ["ASP", "JavaScript", "MSSQL"],
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">경력</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-border">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground font-mono mb-2">{exp.period}</div>
                  <h3 className="text-2xl font-bold text-balance">{exp.company}</h3>
                  <p className="text-lg text-primary">{exp.position}</p>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span className="text-balance">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
