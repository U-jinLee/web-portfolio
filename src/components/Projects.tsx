import { useState } from "react"

function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<number>(0)
  const [filter, setFilter] = useState<"all" | "company" | "personal">("all")

  const projects = [
    {
      title: "제주스타렌터카 예약·결제 브릿지 서버",
      type: "company" as const,
      description: "실시간 예약·결제 중개 브릿지 서버 구축",
      tech: ["Java", "Spring Boot", "Spring Security", "QueryDSL", "MySQL", "Thymeleaf", "Apache POI"],
      features: [
        "WebClient 비동기 병렬 처리 도입 다건 환불 요청 시 응답 지연 시간 O(n) → O(1) 개선",
        "제주스타렌터카 ↔ 네이처모빌리티 API 데이터 규격 변환 및 중계 브릿지 모듈 개발",
        "Thymeleaf 기반 정산 어드민 대시보드 및 프론트엔드 로직 구현", 
        "QueryDSL 커버링 인덱스를 적용 정산 데이터 조회 성능 개선",
        "AOP 기반 예약 로깅 및 Encrytor 암호화 모듈 적용으로 데이터 추적 및 보안 강화", 
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
          url: "./projects/zzimcar/star_booking.png",
          caption: "스타렌터카 예약 화면",
        },
        {
          url: "./projects/zzimcar/admin.png",
          caption: "정산 어드민 대시보드",
        },
        {
          url: "./projects/zzimcar/booking.png",
          caption: "차량 예약 결제 화면",
        },
        {
          url: "./projects/zzimcar/nature_mobility.png",
          caption: "차량 예약·결제 중개 아키텍처",
        },
      ],
      challenges: [
        {
        title: "다중 환불 요청 시 선형적 응답 지연 문제",
        solution:"Loop 기반 동기 처리를 WebClient 기반 비동기·병렬 스트림으로 전환 성능 최적화 및 타임아웃 방지",
        link: "https://diligent-mangosteen-06d.notion.site/Sync-Async-2d81efebbf4c80cba356c04e2f1db8c9?source=copy_link",
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
      title: "대한항공 SKY SHOP 상품 도메인 API",
      type: "company" as const,
      description: "상품 도메인 API 고도화 및 조회 성능 최적화",
      tech: ["Java", "Spring Boot", "JPA", "QueryDSL", "MySQL", "Redis", "AWS"],
      features: [
        "책임 연쇄 패턴 활용 유연한 동적 라벨링(신상품/세일) 로직 구현", 
        "QueryDSL 기반 다국어(KR/EN) 및 다통화 대응 동적 쿼리 개발",
        "Spring Scheduler 활용 환율 변동 상품 가격 실시간 동기화 구현",
        "Redis 기반 임시 저장소를 통한 비회원 장바구니 기능 구현",
        "브랜드, 카테고리, 세일 등 다양한 필터링 조건을 처리하는 확장 가능한 검색 API 구축"
      ],
      github: "",
      demo: "https://www.koreanairdfs.com/",
      role: "백엔드 개발자",
      duration: "2022.11 - 2023.04",
      teamSize: "프론트엔드 2명 / 백엔드 3명",
      architecture:
        "마이크로서비스 아키텍처 기반, Redis Cluster로 캐싱 레이어 구현, 동적 쿼리 엔진 설계",
      images: [
        {
          url: "./projects/tenth/korean_air_product_english.png",
          caption: "프로젝트 메인 화면(EN)",
        },
        {
          url: "./projects/tenth/labeling_image.png",
          caption: "상품 동적 라벨링 화면",
        },
        {
          url: "./projects/tenth/sale_product.png",
          caption: "세일 상품 조회",
        },
        {
          url: "./projects/tenth/cart.png",
          caption: "비회원 카트 화면",
        },
      ],
      challenges: [
        {
          title: "동적 라벨링 구현 문제",
          solution:
            "책임 연쇄 패턴 도입으로 라벨링 로직의 유연성 및 확장성 확보",
          link: "https://diligent-mangosteen-06d.notion.site/3ea73c3a3249471bb878c425ad461776?source=copy_link",
        },
      ],
      metrics: [
        { label: "상품 로딩 속도", value: "성능 대폭 개선", trend: "up" },
        { label: "가격 동기화", value: "실시간", trend: "stable" },
        { label: "다국어 대응", value: "KR/EN 완벽 지원", trend: "stable" },
      ],
    },
    {
      title: "대한축구협회 PLAY KFA 쇼핑몰 구축",
      type: "company" as const,
      description: "KFA 공식 굿즈 판매 및 이벤트 관리를 위한 커머스 플랫폼",
      tech: ["Java", "Spring Boot", "QueryDSL", "MySQL", "Mustache"],
      features: [
        "월별 경기 일정 및 이벤트 캘린더 조회 기능",
        "QueryDSL 기반의 다중 조건 검색(날짜, 팀, 유형) API",
        "Mustache를 활용한 SSR 기반의 이벤트 페이지 렌더링",
        "이벤트 참여 및 당첨자 관리 프로세스 구현",
      ],
      github: "",
      demo: "https://www.playkfa.com/",
      role: "이벤트·캘린더 도메인 백엔드 개발",
      duration: "2022.06 - 2022.10",
      teamSize: "백엔드 2명",
      architecture: "Spring Boot 기반의 단일 모듈 아키텍처(Monolithic) 및 MVC 패턴 적용, MySQL을 통한 정규화된 데이터 모델링",
      images: [
        {
          url: "./projects/tenth/main.png",
          caption: "메인 페이지",
        },
        {
          url: "./projects/tenth/calander.png",
          caption: "이벤트 캘린더",
        },
        {
          url: "./projects/tenth/calander_detail.png",
          caption: "이벤트 캘린더 상세",
        },
        {
          url: "./projects/tenth/event_page.png",
          caption: "이벤트 페이지",
        },
      ],
      challenges: [
        {
          title: "복잡한 조건의 캘린더 데이터 조회 성능 최적화",
          solution: "월별 조회 시 날짜 범위(Between)와 카테고리 필터에 의해 쿼리 복잡성 증가. QueryDSL BooleanBuilder 활용 동적 쿼리 생성 및 조회 빈도가 높은 컬럼에 인덱스를 적용해 쿼리 속도 개선",
          link: "", // 관련 블로그 글이 없다면 생략 가능
        },
      ],
      metrics: [
      { label: "검색 최적화", value: "QueryDSL 적용", trend: "up" },
      { label: "이벤트 트래픽", value: "안정적 처리", trend: "stable" }, // 대략적인 수치
      { label: "응답 속도", value: "0.5s 미만", trend: "stable" }, // 목표치
      ],
    },
    {
      title: "포인트 적립형 쇼핑몰 애즈워드",
      type: "company" as const,
      description: "면세몰 상품 도메인 API 개발 및 고도화 담당",
      tech: ["Java", "Spring Boot", "QueryDSL", "MySQL", "Mustache", "AWS"],
      features: [
      "WebClient를 활용한 외부 포인트 시스템 연동",
      "상품, 이벤트, 회원 관리를 위한 백오피스(Admin) 시스템 구축",
      "Spring Security 기반의 관리자 권한 관리 및 인증 보안 적용",
      "Shell Script 작성을 통한 EC2 서버 빌드 및 배포 프로세스 자동화"
      ],
      github: "",
      demo: "https://adsward.co.kr/",
      role: "백엔드 개발 및 어드민 시스템 구축",
      duration: "2022.05 - 2022.08",
      teamSize: "프론트엔드 2명 / 백엔드 3명",
      architecture: 
      "Spring Boot 기반의 단일 모듈 아키텍처(Monolithic), AWS EC2 및 S3를 활용한 인프라 구성과 MySQL RDBMS 설계",
      images: [
        {
          url: "./projects/tenth/adsward_admin.png",
          caption: "애즈워드 어드민",
        },
        {
          url: "./projects/tenth/adsward_main.png",
          caption: "메인 페이지",
        },
        {
          url: "./projects/tenth/adsward_service.jpg",
          caption: "애즈워드 서비스",
        },
      ],
      challenges: [
        {
          title: "수동 배포의 비효율성 및 인적 오류 개선",
          solution: "반복되는 빌드/배포 작업을 개선하기 위해 Shell Script 작성, Git Pull부터 Build 그리고 실행까지 과정을 스크립트로 자동화해 배포 시간을 단축 및 운영 실수를 방지",
          link: "",
        },
      ],
      metrics: [
        { label: "시스템 연동", value: "포인트 API", trend: "stable" },
        { label: "배포 효율화", value: "스크립트 자동화", trend: "up" },
        { label: "화면 구현", value: "SSR(Mustache)", trend: "stable" },
      ],
    },
    // {
    //   title: "N사 포토북 서비스 개발",
    //   type: "company" as const,
    //   description: "마이크로서비스 간 통신을 중앙화하고 인증, 로깅, 모니터링을 제공하는 API Gateway.",
    //   tech: ["Java", "Spring Cloud Gateway", "Kubernetes", "Prometheus"],
    //   features: ["초당 5만 요청 처리", "JWT 기반 인증/인가", "실시간 모니터링 대시보드"],
    //   github: "https://github.com",
    //   role: "풀스택 개발자",
    //   duration: "2023.01 - 2023.05",
    //   teamSize: "3명",
    //   architecture:
    //     "Spring Cloud Gateway를 활용한 라우팅, Circuit Breaker 패턴으로 장애 격리, Prometheus + Grafana로 모니터링",
    //   images: [
    //     {
    //       url: "/api-gateway-architecture.png",
    //       caption: "API Gateway 아키텍처",
    //     },
    //     {
    //       url: "/grafana-monitoring-dashboard-with-metrics.jpg",
    //       caption: "Grafana 모니터링 대시보드",
    //     },
    //     {
    //       url: "/circuit-breaker-pattern-visualization.jpg",
    //       caption: "Circuit Breaker 패턴",
    //     },
    //   ],
    //   challenges: [
    //     {
    //       title: "높은 트래픽 처리",
    //       solution: "비동기 Non-blocking I/O와 캐싱 전략으로 응답 시간 70% 개선.",
    //       link: "https://example.com/blog/high-traffic-handling",
    //     },
    //     {
    //       title: "인증/인가 성능",
    //       solution: "JWT 토큰 검증을 Redis 캐싱으로 최적화하여 인증 오버헤드 80% 감소.",
    //       link: "https://example.com/blog/jwt-optimization",
    //     },
    //   ],
    //   metrics: [
    //     { label: "요청 처리량", value: "50,000 req/s", trend: "up" },
    //     { label: "평균 응답 시간", value: "15ms", trend: "down" },
    //     { label: "에러율", value: "< 0.1%", trend: "down" },
    //     { label: "가동 시간", value: "99.95%", trend: "stable" },
    //   ],
    // },
    {
      title: "실시간 중고 경매 플랫폼 BCM",
      type: "personal" as const,
      description: "STOMP 및 Redis 기반 실시간 경매 플랫폼",
      tech: ["Java", "Spring Boot", "STOMP(WebSocket)", "Redis", "PostgreSQL", "AWS", "Github Actions", "Docker"],
      features: [ 
        "Redis ZSET 도입을 통한 JDBC Store 대비 처리 속도 향상 및 경매 종료 작업 유실 방지",
        "STOMP WebSocket 도입으로 Long Polling 방식 대비 네트워크 오버헤드 감소 및 실시간 호가 반영 구축",
        "Github Actions & Docker 기반 CI/CD 구축 및 다중 인스턴스 환경에서의 중복 실행 방지 처리",
        "S3 Presigned URL을 적용하여 이미지 업로드 트래픽을 서버에서 분리하고 EC2 리소스 부하 최소화",
        "RTR 도입 및 Redis 블랙리스트 전략으로 토큰 탈취 시 재사용 공격 원천 차단",
        "이메일 링크와 Redis 임시 토큰을 결합한 비밀번호 재설정 프로세스를 설계하여 계정 보안 수준 고도화",
      ],
      github: "https://github.com/kt-merge",
      demo: "https://bcm.u-jinlee1029.store/",
      role: "백엔드 개발자 리드 & 인프라 설계",
      duration: "2025.11 - 진행 중",
      teamSize: "프론트엔드 2명 / 백엔드 2명 / 인프라 1명",
      architecture: "STOMP WebSocket 기반의 실시간 입찰 트랜잭션 처리, Redis Pub/Sub을 활용 확장 가능한 메시징 아키텍처",
      images: [
        {
          url: "./projects/bcm/bcm_admin.png",
          caption: "관리자 대시보드",
        },
        {
          url: "./projects/bcm/bcm_bid_page.png",
          caption: "경매 입찰 화면",
        },
        {
          url: "./projects/bcm/system_architecture.drawio.png",
          caption: "시스템 아키텍처 다이어그램",
        },
        {
          url: "./projects/bcm/chicken_erd.png",
          caption: "Project ERD",
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
    {
        title: "REST API 성숙도 3단계 채용 서비스",
        type: "personal" as const, // 개인 과제/프로젝트로 보임
        role: "백엔드 개발 (기여도 100%)",
        duration: "2023.10 - 2023.10",
        teamSize: "1명 (개인 프로젝트)",

        // 1. 프로젝트 설명: 기술적 목표(Level 3)와 비즈니스(채용) 결합
        description: "신뢰성 있는 RESTful API를 자동화한 채용공고 서비스",

        // 2. 사용 기술: README 및 build.gradle 기반
        tech: ["Java", "Spring Boot", "JPA", "QueryDSL", "Spring HATEOAS", "Spring REST Docs", "H2", "JUnit5"],

        // 3. 주요 기능: 구현 내용 요약
        features: [
          "Spring HATEOAS를 적용하여 리소스 간 링크 정보를 포함하는 Self-descriptive API 구현",
          "Spring REST Docs를 활용해 테스트 코드 기반의 API 문서 자동 생성 및 배포",
          "QueryDSL을 활용한 채용공고 동적 검색(회사명, 사용기술) 기능 구현",
          "채용공고 등록/수정/삭제 및 지원자 지원 프로세스 트랜잭션 처리"
        ],

        // 4. 아키텍처: README의 'Project Tree'와 'ERD' 설명 반영
        architecture: "DDD의 애그리거트 개념을 적용하여 도메인 간 결합을 방지한 Layered Architecture, H2 In-memory DB 사용.",
        github: "https://github.com/u-jinlee/rest-api-maturity-three-level-project", // (확인 필요) 혹은 본인 리포지토리 링크
        demo: "https://rest-docs.s3.ap-northeast-2.amazonaws.com/index.html",
        images: [
          {
            url: "./projects/personal/restful_api.png",
            caption: "Rest API 문서화 결과",
          },
          {
            url: "./projects/personal/test_result.png", 
            caption: "TDD 기반 통합 테스트 통과 결과",
          },
          {
            url: "./projects/personal/w-pre-on-b-b.png", 
            caption: "도메인 애그리거트 분리 설계 (ERD)",
          },
        ],

        // 5. 트러블 슈팅 (가장 돋보이는 부분 ★)
        challenges: [
          {
            title: "RESTful API (Level 3) 구현을 위한 HATEOAS 도입",
            solution: "단순 JSON 응답을 넘어 클라이언트가 리소스 상태에 따라 전이 가능한 링크(Link)를 포함하도록 Spring HATEOAS를 적용함. 이를 통해 API의 엔드포인트가 변경되더라도 클라이언트 영향을 최소화하는 Self-descriptive Message를 구현.",
            link: "",
          },
          {
            title: "도메인 간 강결합 문제 해결 (DDD)",
            solution: "JPA 객체 그래프 탐색의 오용을 막기 위해, 채용공고·회사·지원자 각 애그리거트 루트 간에는 객체 참조(@OneToMany) 대신 ID 참조 방식을 적용하여 도메인 간의 물리적 의존성을 낮춤.",
            link: "",
          },
        ],

        // 6. 정량적 성과 (기술적 성숙도 강조)
        metrics: [
          { label: "API 성숙도", value: "Level 3", trend: "stable" },
          { label: "문서화", value: "REST Docs", trend: "up" },
          { label: "테스트", value: "TDD 적용", trend: "stable" },
          { label: "아키텍처", value: "DDD 적용", trend: "stable" },
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
                          <span className="text-primary">•</span>
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
                          사이트 방문
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
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between z-50">
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
                  <div className="relative aspect-video bg-secondary/50 rounded-lg overflow-hidden border border-border shadow-2xl">
                    <img
                      src={projects[selectedProject].images[selectedImage].url || "/placeholder.svg"}
                      alt="background"
                      className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-80"
                    />
                    <img
                      src={projects[selectedProject].images[selectedImage].url || "/placeholder.svg"}
                      alt={projects[selectedProject].images[selectedImage].caption}
                      className="relative w-full h-full object-contain z-10 drop-shadow-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4 z-20">
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
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background transition-colors rounded-full p-3 z-30"
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
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background transition-colors rounded-full p-3 z-30"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  <div className={`grid gap-2 ${
                    projects[selectedProject].images.length === 1 ? 'grid-cols-1' :
                    projects[selectedProject].images.length === 2 ? 'grid-cols-2' :
                    projects[selectedProject].images.length === 3 ? 'grid-cols-3' :
                    'grid-cols-4'
                  }`}>
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
                      <span className="text-primary mt-0.5">•</span>
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
                <div className={`grid gap-4 ${
                  projects[selectedProject].metrics?.length === 1 ? 'grid-cols-1' :
                  projects[selectedProject].metrics?.length === 2 ? 'grid-cols-2' :
                  projects[selectedProject].metrics?.length === 3 ? 'grid-cols-3' :
                  'grid-cols-2 md:grid-cols-4'
                }`}>
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
                {projects[selectedProject].github && (
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
                )}
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
                    사이트 방문
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