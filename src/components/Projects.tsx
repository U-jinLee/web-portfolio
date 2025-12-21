import { useState } from "react"

function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<number>(0)
  const [filter, setFilter] = useState<"all" | "company" | "personal">("all")

  const projects = [
    {
      title: "제주스타렌터카 예약·결제 브릿지 서버",
      type: "company" as const,
      description: "실시간 예약 동기화 및 결제 중개 브릿지 서버 구축",
      tech: ["Java", "Spring Boot", "Spring Security", "QueryDSL", "MySQL", "Thymeleaf", "Apache POI"],
      features: [
        "WebClient 비동기 병렬 처리 도입 다건 환불 요청 시 응답 지연 시간 O(n) → O(1) 개선",
        "제주스타렌터카 레거시 시스템과 네이처모빌리티 API 간 데이터 규격 변환 및 중계 브릿지 모듈 개발", 
        "QueryDSL 커버링 인덱스를 적용 정산 데이터 조회 성능 개선",
        "AOP 기반 예약 로깅 및 Encrytor 암호화 모듈 적용으로 데이터 추적 및 보안 강화",
        "Thymeleaf 기반 정산 관리 어드민 대시보드 설계 및 프론트엔드 로직 구현", 
        "Apache POI를 활용 정산 내역 엑셀 다운로드 및 암호화 적용",
        "예약·결제 상태 관리를 위한 정규화된 ERD 설계 및 데이터 모델링"
      ],
      github: "",
      demo: "https://jejustar.co.kr/",
      role: "백엔드 개발자 & 어드민 프론트엔드 개발",
      duration: "2023.05 - 2023.08",
      teamSize: "기획자 1명 / 프론트엔드 2명 / 백엔드 3명",
      architecture:
        "보안 통신용 브릿지 서버 아키텍처, 비동기 논블로킹 트랜잭션 설계, QueryDSL 커버링 인덱스 최적화",
      images: [
        {
          url: "./projects/zzimcar/booking.png",
          caption: "시스템 아키텍처",
        },
        {
          url: "./projects/zzimcar/booking.png",
          caption: "Redis 클러스터 모니터링",
        },
        {
          url: "./projects/zzimcar/booking.png",
          caption: "WebSocket 성능 메트릭",
        },
        {
          url: "./projects/zzimcar/booking.png",
          caption: "API 문서",
        },
      ],
      challenges: [
        {
        title: "다중 환불 요청 시 선형적 응답 지연 문제",
        solution:"Loop 기반 동기 처리를 WebClient 기반 비동기·병렬 스트림으로 전환 성능 최적화 및 타임아웃 방지",
        link: "",
        },
        {
          title: "대규모 예약/결제 데이터 조회 시 성능 저하",
          solution: "QueryDSL 커버링 인덱스(Covering Index) 적용 DB 스캔 범위를 최소화해 리스트 로딩 시간 대폭 단축",
          link: "https://diligent-mangosteen-06d.notion.site/No-Offset-Covering-Index-12f1efebbf4c80ba9474fd27a86e20e8?source=copy_link",
        },
      ],
      metrics: [
        { label: "매출 기여(수수료)", value: "일 평균 400만 원", trend: "up" },
        { label: "환불 처리 성능", value: "O(n) → O(1)", trend: "down" },
        { label: "데이터 보안", value: "엑셀 암호화 적용", trend: "stable" },
        { label: "정산 조회 응답", value: "조회 성능 최적화", trend: "up" },
      ],
    },
    {
      title: "대한항공 SKYSHOP 상품 도메인 API",
      type: "company" as const,
      description: "상품 도메인 API 고도화 및 조회 성능 최적화",
      tech: ["Java", "Spring Boot", "JPA", "QueryDSL", "MySQL", "Redis", "AWS"],
      features: [
        "책임 연쇄 패턴 활용 유연한 동적 라벨링(신상품/세일) 로직 구현", 
        "Flyweight 패턴 도입으로 ", 
        "QueryDSL 기반 다국어(KR/EN) 및 다통화 대응 동적 쿼리 개발",
        "Spring Scheduler 활용 환율 변동에 따른 상품 가격 실시간 동기화 배치 구현",
        "비회원 장바구니 기능 구현",
        "브랜드, 카테고리, 세일 등 다양한 필터링 조건을 처리하는 확장 가능한 검색 API 구축"
      ],
      github: "",
      demo: "https://www.koreanairdfs.com/",
      role: "백엔드 개발자",
      duration: "2022.06 - 2022.10",
      teamSize: "프론트엔드 2명 / 백엔드 3명",
      architecture:
        "마이크로서비스 아키텍처 기반, Redis Cluster로 메시지 브로커 구현, MongoDB Sharding으로 데이터 분산 저장",
      images: [
        {
          url: "./projects/tenth/korean_air_product_english.png",
          caption: "시스템 아키텍처",
        },
        {
          url: "/redis-cluster-monitoring-dashboard.jpg",
          caption: "Redis 클러스터 모니터링",
        },
        {
          url: "/websocket-performance-metrics-dashboard.jpg",
          caption: "WebSocket 성능 메트릭",
        },
        {
          url: "/api-documentation-swagger.jpg",
          caption: "API 문서",
        },
      ],
      challenges: [
        {
          title: "동시 접속자 확장성 문제",
          solution:
            "Redis Pub/Sub 패턴과 수평 확장을 통해 서버 간 메시지 동기화 구현. Kubernetes HPA로 자동 스케일링 적용.",
          link: "https://example.com/blog/scaling-websocket",
        },
        {
          title: "메시지 전송 지연 최소화",
          solution: "WebSocket 연결 풀링과 메시지 배치 처리로 네트워크 오버헤드 50% 감소.",
          link: "https://example.com/blog/websocket-optimization",
        },
      ],
      metrics: [
        { label: "상품 로딩 속도", value: "성능 대폭 개선", trend: "up" },
        { label: "메시지 지연", value: "< 50ms", trend: "down" },
        { label: "서버 가용성", value: "99.9%", trend: "stable" },
        { label: "다국어 대응", value: "KR/EN 완벽 지원", trend: "stable" },
      ],
    },
    {
      title: "대한축구협회 PLAY KFA 쇼핑몰 구축",
      type: "company" as const,
      description: "KFA 공식 굿즈 판매 및 이벤트 관리를 위한 커머스 플랫폼",
      tech: ["Java", "Spring Boot", "QueryDSL", "MySQL", "Mustache"],
      features: ["동시 접속자 10만명 처리", "메시지 전송 지연 50ms 이하", "자동 스케일링 구현"],
      github: "",
      demo: "https://www.playkfa.com/",
      role: "상품 도메인 백엔드 API 개발",
      duration: "2022.11 - 2023.04",
      teamSize: "프론트엔드 2명 / 백엔드 3명",
      architecture:
        "마이크로서비스 아키텍처 기반, Redis Cluster로 메시지 브로커 구현, MongoDB Sharding으로 데이터 분산 저장",
      images: [
        {
          url: "/system-architecture-diagram-with-microservices.jpg",
          caption: "시스템 아키텍처",
        },
        {
          url: "/redis-cluster-monitoring-dashboard.jpg",
          caption: "Redis 클러스터 모니터링",
        },
        {
          url: "/websocket-performance-metrics-dashboard.jpg",
          caption: "WebSocket 성능 메트릭",
        },
        {
          url: "/api-documentation-swagger.jpg",
          caption: "API 문서",
        },
      ],
      challenges: [
        {
          title: "동시 접속자 확장성 문제",
          solution:
            "Redis Pub/Sub 패턴과 수평 확장을 통해 서버 간 메시지 동기화 구현. Kubernetes HPA로 자동 스케일링 적용.",
          link: "https://example.com/blog/scaling-websocket",
        },
        {
          title: "메시지 전송 지연 최소화",
          solution: "WebSocket 연결 풀링과 메시지 배치 처리로 네트워크 오버헤드 50% 감소.",
          link: "https://example.com/blog/websocket-optimization",
        },
      ],
      metrics: [
        { label: "동시 접속자", value: "100,000+", trend: "up" },
        { label: "메시지 지연", value: "< 50ms", trend: "down" },
        { label: "서버 가용성", value: "99.9%", trend: "stable" },
        { label: "처리량", value: "5,000 msg/s", trend: "up" },
      ],
    },
    {
      title: "포인트 적립형 쇼핑몰 애즈워드",
      type: "company" as const,
      description: "면세몰 상품 도메인 API 개발 및 고도화 담당",
      tech: ["Java", "Spring Boot", "QueryDSL", "MySQL", "Redis", "AWS"],
      features: [
        "WebClient 활용 외부 포인트 시스템 연동 및 타임아웃·재시도 전략 수립",
        "EC2 및 Shell script 기반 빌드·배포 자동화 스크립트 작성",
        "상품, 이벤트, 회원 관리 통합 백오피스(Admin) 시스템 구축",
      ],
      github: "",
      demo: "https://demo.example.com",
      role: "백엔드 개발자",
      duration: "2022.06 - 2022.10",
      teamSize: "프론트엔드 2명 / 백엔드 3명",
      architecture:
        "마이크로서비스 아키텍처 기반, Redis Cluster로 메시지 브로커 구현, MongoDB Sharding으로 데이터 분산 저장",
      images: [
        {
          url: "/system-architecture-diagram-with-microservices.jpg",
          caption: "시스템 아키텍처",
        },
        {
          url: "/redis-cluster-monitoring-dashboard.jpg",
          caption: "Redis 클러스터 모니터링",
        },
        {
          url: "/websocket-performance-metrics-dashboard.jpg",
          caption: "WebSocket 성능 메트릭",
        },
        {
          url: "/api-documentation-swagger.jpg",
          caption: "API 문서",
        },
      ],
      challenges: [
        {
          title: "동시 접속자 확장성 문제",
          solution:
            "Redis Pub/Sub 패턴과 수평 확장을 통해 서버 간 메시지 동기화 구현. Kubernetes HPA로 자동 스케일링 적용.",
          link: "https://example.com/blog/scaling-websocket",
        },
        {
          title: "메시지 전송 지연 최소화",
          solution: "WebSocket 연결 풀링과 메시지 배치 처리로 네트워크 오버헤드 50% 감소.",
          link: "https://example.com/blog/websocket-optimization",
        },
      ],
      metrics: [
        { label: "동시 접속자", value: "100,000+", trend: "up" },
        { label: "메시지 지연", value: "< 50ms", trend: "down" },
        { label: "서버 가용성", value: "99.9%", trend: "stable" },
        { label: "처리량", value: "5,000 msg/s", trend: "up" },
      ],
    },
    {
      title: "N사 포토북 서비스 개발",
      type: "company" as const,
      description: "마이크로서비스 간 통신을 중앙화하고 인증, 로깅, 모니터링을 제공하는 API Gateway.",
      tech: ["Java", "Spring Cloud Gateway", "Kubernetes", "Prometheus"],
      features: ["초당 5만 요청 처리", "JWT 기반 인증/인가", "실시간 모니터링 대시보드"],
      github: "https://github.com",
      role: "풀스택 개발자",
      duration: "2023.01 - 2023.05",
      teamSize: "3명",
      architecture:
        "Spring Cloud Gateway를 활용한 라우팅, Circuit Breaker 패턴으로 장애 격리, Prometheus + Grafana로 모니터링",
      images: [
        {
          url: "/api-gateway-architecture.png",
          caption: "API Gateway 아키텍처",
        },
        {
          url: "/grafana-monitoring-dashboard-with-metrics.jpg",
          caption: "Grafana 모니터링 대시보드",
        },
        {
          url: "/circuit-breaker-pattern-visualization.jpg",
          caption: "Circuit Breaker 패턴",
        },
      ],
      challenges: [
        {
          title: "높은 트래픽 처리",
          solution: "비동기 Non-blocking I/O와 캐싱 전략으로 응답 시간 70% 개선.",
          link: "https://example.com/blog/high-traffic-handling",
        },
        {
          title: "인증/인가 성능",
          solution: "JWT 토큰 검증을 Redis 캐싱으로 최적화하여 인증 오버헤드 80% 감소.",
          link: "https://example.com/blog/jwt-optimization",
        },
      ],
      metrics: [
        { label: "요청 처리량", value: "50,000 req/s", trend: "up" },
        { label: "평균 응답 시간", value: "15ms", trend: "down" },
        { label: "에러율", value: "< 0.1%", trend: "down" },
        { label: "가동 시간", value: "99.95%", trend: "stable" },
      ],
    },
    {
      title: "실시간 중고 경매 플랫폼 BCM",
      type: "personal" as const,
      description: "STOMP 및 Redis 기반 실시간 경매 플랫폼",
      tech: ["Java", "Spring Boot", "STOMP(WebSocket)", "Redis", "PostgreSQL", "AWS"],
      features: [ 
        "Redis ZSET 활용 스케줄러 도입으로 서버 재시작 시 경매 종료 이벤트 유실 방지", 
        "S3 Presigned URL 도입을 통한 이미지 업로드 트래픽 분산 및 보안 강화",
        "SMTP 이메일 링크와 Redis 임시 토큰 결합한 비밀번호 재설정 프로세스를 설계하여 계정 보안 수준 고도화",
        "RTR 도입 및 ",
        "Github Actions & Docker 기반 CI/CD 파이프라인 구축",
      ],
      github: "https://github.com/kt-merge",
      role: "백엔드 개발자 리드 & 인프라 설계",
      duration: "2025.11 - 진행 중",
      teamSize: "프론트엔드 2명 / 백엔드 2명 / 인프라 1명",
      architecture: "Kafka를 통한 실시간 스트리밍, Spark Streaming으로 데이터 변환, Elasticsearch로 검색 및 분석 제공",
      images: [
        {
          url: "./projects/bcm/chicken_erd.png",
          caption: "Project ERD",
        },
        {
          url: "/elasticsearch-kibana-dashboard-visualization.jpg",
          caption: "Elasticsearch 대시보드",
        },
        {
          url: "/kafka-monitoring-metrics-performance.jpg",
          caption: "Kafka 모니터링",
        },
        {
          url: "/data-flow-diagram-etl-process.jpg",
          caption: "데이터 플로우",
        },
      ],
      challenges: [
        {
          title: "서버 재실행 시 경매 종료 스케쥴 유실 및 운영 불안정",
          solution: "서버 재시작 시 작업 유실 문제를 해결을 위해, Redis ZSET 기반 스케줄러를 도입 운영 안정성을 확보하고 처리 성능 개선",
          link: "https://diligent-mangosteen-06d.notion.site/Redis-ZSET-2b61efebbf4c80289001fe529ccb9bb1?source=copy_link",
        },
        {
          title: "서버를 통한 이미지 업로드 시 발생하는 메모리 부하 이슈",
          solution: "S3 Presigned Upload URL 제공 API 구현 클라이언트가 스토리지에 직접 파일 업로드를 통한 서버 부하를 제거하고 보안성을 확보",
          link: "https://diligent-mangosteen-06d.notion.site/Presigned-URL-9049823e48474891bc2ee72c68f33c9a?source=copy_link",
        },
      ],
      metrics: [
        { label: "처리량", value: "1TB/hour", trend: "up" },
        { label: "처리 지연", value: "< 2 sec", trend: "down" },
        { label: "데이터 무결성", value: "99.99%", trend: "stable" },
        { label: "저장 효율", value: "40% 압축", trend: "up" },
      ],
    },
  ]

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true
    return project.type === filter
  })

  return (
    <>
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">프로젝트</h2>

          <div className="flex gap-2 mb-8 border-b border-border">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                filter === "all" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              전체
              {filter === "all" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
            </button>
            <button
              onClick={() => setFilter("company")}
              className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                filter === "company" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              회사 프로젝트
              {filter === "company" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
            </button>
            <button
              onClick={() => setFilter("personal")}
              className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                filter === "personal" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              개인 프로젝트
              {filter === "personal" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
            </button>
          </div>

          <div className="flex flex-wrap gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedProject(projects.indexOf(project))
                  setSelectedImage(0)
                }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all cursor-pointer hover:shadow-lg hover:shadow-primary/10 w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)]"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold flex-1">{project.title}</h3>
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-medium shrink-0 whitespace-nowrap ${
                      project.type === "company"
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "bg-accent/10 text-accent border border-accent/20"
                    }`}
                  >
                    {project.type === "company" ? "회사" : "개인"}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 text leading-relaxed">{project.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">주요 기능</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="text-accent">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Demo
                        </a>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">더보기 →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold mb-2">{projects[selectedProject].title}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>역할: {projects[selectedProject].role}</span>
                  <span>기간: {projects[selectedProject].duration}</span>
                  <span>팀 규모: {projects[selectedProject].teamSize}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">프로젝트 자료</h3>
                <div className="space-y-4">
                  <div className="relative aspect-video bg-secondary/50 rounded-lg overflow-hidden border border-border">
                    <img
                      src={projects[selectedProject].images[selectedImage].url || "/placeholder.svg"}
                      alt={projects[selectedProject].images[selectedImage].caption}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                      <p className="text-sm font-medium">{projects[selectedProject].images[selectedImage].caption}</p>
                    </div>

                    {projects[selectedProject].images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setSelectedImage((prev) =>
                              prev === 0 ? projects[selectedProject].images.length - 1 : prev - 1,
                            )
                          }
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background transition-colors rounded-full p-2"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() =>
                            setSelectedImage((prev) =>
                              prev === projects[selectedProject].images.length - 1 ? 0 : prev + 1,
                            )
                          }
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background transition-colors rounded-full p-2"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {projects[selectedProject].images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-video rounded overflow-hidden border-2 transition-all ${
                          selectedImage === index
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <img
                          src={image.url || "/placeholder.svg"}
                          alt={image.caption}
                          className="w-full h-full object-cover"
                        />
                        {selectedImage === index && <div className="absolute inset-0 bg-primary/10" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">주요 기능</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">시스템 아키텍처</h3>
                <div className="bg-secondary/50 p-4 rounded-lg border border-border">
                  <p className="text-sm leading-relaxed">{projects[selectedProject].architecture}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">성과 지표</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {projects[selectedProject].metrics?.map((metric, i) => (
                    <div key={i} className="bg-secondary/50 p-4 rounded-lg border border-border">
                      <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                      <div className="text-xl font-bold mb-1">{metric.value}</div>
                      <div className="flex items-center gap-1 text-xs">
                        {metric.trend === "up" && (
                          <>
                            <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            <span className="text-green-500">개선</span>
                          </>
                        )}
                        {metric.trend === "down" && (
                          <>
                            <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                            <span className="text-red-500">감소</span>
                          </>
                        )}
                        {metric.trend === "stable" && (
                          <>
                            <svg
                              className="w-3 h-3 text-blue-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                            </svg>
                            <span className="text-blue-500">안정</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">기술적 챌린지 및 해결</h3>
                <div className="space-y-4">
                  {projects[selectedProject].challenges?.map((challenge, i) => (
                    <div key={i} className="border-l-2 border-primary pl-4">
                      {challenge.link && (                       
                        <a
                          href={challenge.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-2 text-sm text-primary hover:underline"
                        >
                          트러블 슈팅 로그 확인
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      <h4 className="font-semibold mb-2">{challenge.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{challenge.solution}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">기술 스택</h3>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-mono border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-border">
                <a
                  href={projects[selectedProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub에서 보기
                </a>
                {projects[selectedProject].demo && (
                  <a
                    href={projects[selectedProject].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors border border-border"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    라이브 데모
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects