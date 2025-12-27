const Skills = () => {
  const backendSkills = [
    {
      techs: "Java, Kotlin, Spring Boot",
      description:
        " Java를 주력으로 사용하며, Kotlin의 문법과 Null Safety 이해를 바탕으로 필요 시 유연하게 활용합니다. DDD 및 Hexagonal Architecture를 적용 도메인과 인프라를 분리해 응집도 높고 유연한 아키텍처 설계를 지향합니다.",
    },
    {
      techs: "Spring Security",
      description:
        " JWT 기반 Stateless 인증·인가 구조를 설계하고 구현했습니다. RTR(Refresh Token Rotation) 전략을 도입해 보안성과 사용자 편의성을 동시에 확보했습니다.",
    },
    {
      techs: "RDBMS (PostgreSQL, MySQL)",
      description:
        " 관계형 데이터 모델링 기반 테이블 설계 및 정규화·반정규화를 수행했습니다. 정규화를 바탕으로 성능 병목 구간에 반정규화를 적용해 Trade-off를 고려한 모델링을 수행합니다.",
    },
    {
    techs: "QueryDSL",
    description:
      " 통계 조회 및 복잡한 동적 쿼리를 타입 세이프하게 구현합니다. Offset 기반 페이징의 한계를 파악 후 No-Offset 및 커버링 인덱스 방식을 통한 데이터 조회 성능을 개선했습니다.",
    },
    {
      techs: "Redis",
      description: 
          " 캐싱과 Refresh Token 관리 및 ZSET 기반으로 경매 종료 스케줄링 로직을 설계했습니다. 서버 재시작이나 다중 인스턴스 환경에서 경매 종료가 안정적으로 처리되도록 상태 관리를 수행했습니다.",
    },
    {
      techs: "MSA",
      description: " Monolithic to MSA 전환의 Trade-off를 이해하고 있습니다. 서비스 간 동기 통신(WebClient, Feign) 및 비동기 통신(Kafka)과 트랜잭션 분리 전략에 대한 개념을 갖추고 있습니다.",
    },
    {
      techs: "NestJS, MongoDB (Mongoose)",
      description:
        " NestJS와 MongoDB 활용 게시판 서비스를 구축한 경험이 있습니다. Document 기반의 스키마 설계를 이해하며, 요구사항에 맞춰 유연하게 기술을 유연하게 습득하고 활용할 수 있습니다.",
    },
  ]

  const frontendSkills = [
    {
      techs: "TypeScript, React, Tailwind CSS",
      description: " TypeScript와 React Hook을 활용해 재사용성을 고려한 컴포넌트를 설계해 유지보수 용이한 애플리케이션 개발을 지향합니다.",
    },
    {
      techs: "JavaScript, Mustache",
      description: " 템플릿 엔진(Mustache)을 활용한 SSR 기반 화면 구현 경험이 있습니다. 프레임워크에 없이 JavaScript로 DOM을 조작해 동적 화면을 구현할 수 있습니다.",
    },
  ]

  const infraSkills = [
    {
      techs: "CI/CD (GitHub Actions)",
      description: " Github Actions와 ECR을 연동해 코드 변경 사항을 EC2 서버에 반영하는 컨테이너 기반 자동 배포 파이프라인을 구축했습니다.",
    },
    {
      techs: "Docker, Docker Compose",
      description: " Docker Compose 기반 애플리케이션과 인프라를 통합 관리해 컨테이너 라이프사이클을 효율적으로 운영할 수 있습니다.",
    },
    {
      techs: "AWS (EC2, RDS, S3, ECR, Route 53, EKS)",
      description: " EC2, RDS, S3를 연동해 서비스 인프라를 구축했습니다. ECR을 활용해 배포 이미지를 관리하며, Route 53을 통해 도메인 연결 및 DNS 설정을 수행했습니다.",
    },
    {
      techs: "Web Server & Reverse Proxy (Caddy, Nginx)",
      description: " Caddy를 도입해 SSL(HTTPS) 인증서 관리를 자동화했으며, 80/443 포트 요청을 프론트엔드 및 백엔드 서버로 라우팅하는 리버스 프록시 환경을 구축했습니다.",
    },
  ]

  const etcSkills = [
    {
      techs: "JUnit5, Mockito, Jacoco, H2",
      description: " JUnit5와 Mockito 그리고 H2를 활용해 가볍고 빠른 통합 테스트 환경을 구축해 비즈니스 로직을 검증합니다. Jacoco로 테스트 커버리지를 모니터링 합니다.",
    },
    {
      techs: "REST Docs, Swagger",
      description: " Swagger의 편의성과 REST Docs의 신뢰성을 프로젝트 상황에 맞게 활용해, 정확한 API 문서를 제공하여 프론트엔드와의 협업을 원활하게 이끕니다."    
    },
    {
      techs: "Legacy Experience (PHP, ASP)",
      description: " 다양한 언어 환경의 개발 경험을 보유하고 있습니다. 레거시 시스템 코드 분석 및 필요에 따라 현대적 아키텍처로 마이그레이션과 유지보수 할 수 있습니다.",
    },
        {
      techs: "Collaboration (Git, Jira, Notion)",
      description: " Git Flow 전략과 PR 기반 코드 리뷰로 코드 품질 향상에 기여합니다. Jira와 Notion을 활용 업무 관리 및 히스토리를 자산화합니다.",
    },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-balance">
            Tech
            <span className="inline-block w-12 md:w-16 h-1.5 bg-primary ml-3 align-middle"></span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">주요 기술 스택과 역량</p>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h3 className="text-2xl font-bold">백엔드</h3>
            </div>
            <ul className="space-y-4">
              {backendSkills.map((skill, index) => (
                <li key={index} className="text-sm md:text-base leading-relaxed pl-4 border-l-2 border-muted">
                  <span className="text-primary font-bold">{skill.techs}</span><br />
                  <span className="text-foreground/90">{skill.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h3 className="text-2xl font-bold">프론트엔드</h3>
            </div>
            <ul className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="text-sm md:text-base leading-relaxed pl-4 border-l-2 border-muted">
                  <span className="text-primary font-bold">{skill.techs}</span><br />
                  <span className="text-foreground/90">{skill.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h3 className="text-2xl font-bold">인프라</h3>
            </div>
            <ul className="space-y-4">
              {infraSkills.map((skill, index) => (
                <li key={index} className="text-sm md:text-base leading-relaxed pl-4 border-l-2 border-muted">
                  <span className="text-primary font-bold">{skill.techs}</span><br />
                  <span className="text-foreground/90">{skill.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h3 className="text-2xl font-bold">기타</h3>
            </div>
            <ul className="space-y-4">
              {etcSkills.map((skill, index) => (
                <li key={index} className="text-sm md:text-base leading-relaxed pl-4 border-l-2 border-muted">
                  <span className="text-primary font-bold">{skill.techs}</span><br />
                  <span className="text-foreground/90">{skill.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills