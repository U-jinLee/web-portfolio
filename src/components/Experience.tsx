const Experience = () => {
  const experiences = [
    {
      period: "2023.04 - 2023.09",
      company: "주식회사네이처모빌리티",
      position: "정규직 · MaaS 연구팀 · 백엔드 개발자",
      description: [
        "제주스타렌터카 예약·결제 브릿지 서버 구축",
        "결제 데이터 시각화 및 정산 내역 관리 어드민 페이지 개발",
        "여행 중계 플랫폼 백엔드 개발 및 유지보수"
      ],
      tags: ["Java", "Spring Boot", "JPA", "WebClient", "MySQL", "QueryDSL"],
    },
    {
      period: "2022.03 - 2023.04",
      company: "주식회사 텐스",
      position: "정규직 · 백엔드 팀 · 백엔드 개발자",
      description: [
        "K 항공사 온라인 면세몰 고도화 프로젝트 상품 API 개발 및 고도화",
        "K 스포츠 협회 온라인 쇼핑몰 구축",
        "포인트몰 A사 어드민페이지 프론트엔드·백엔드 개발 및 서버 배포",
        "N사 MYBOX 포토북 서비스 백엔드 개발 및 서버 배포",
      ],
      tags: ["Java", "Spring Boot", "JPA", "RDBMS", "Redis", "JavaScript", "Mustache", "AWS"],
    },
    {
      period: "2021.11 - 2022.02",
      company: "주식회사 푸드나무",
      position: "인턴 · 개발부서 · 백엔드 개발자",
      description: [
        "랭킹닭컴, 개근질마트 운영/유지보수",
        "카트 삭제 SQL 최적화 작업",
        "상품 찜하기 기능 구현",
      ],
      tags: ["PHP", "MySQL", "JavaScript"],
    },
    {
      period: "2021.04 - 2021.11",
      company: "(주)지지옥션",
      position: "정규직 · 연구소 · 백엔드 개발자",
      description: [
        "지지옥션 모바일 앱 리뉴얼 및 유지보수",
        "지도검색 내 로드뷰 기능 구현",
      ],
      tags: ["ASP", "MSSQL", "JavaScript"],
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
                      <span className="text-primary">▹</span>
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
