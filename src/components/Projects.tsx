import { useState } from "react"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<number>(0)

  const projects = [
    {
      title: "실시간 채팅 서비스",
      description: "WebSocket 기반의 대용량 실시간 채팅 플랫폼. Redis Pub/Sub을 활용한 분산 메시징 시스템 구축.",
      tech: ["Go", "WebSocket", "Redis", "MongoDB", "Docker"],
      features: ["동시 접속자 10만명 처리", "메시지 전송 지연 50ms 이하", "자동 스케일링 구현"],
      github: "https://github.com",
      demo: "https://demo.example.com",
      role: "백엔드 리드 개발자",
      duration: "2023.06 - 2023.12",
      teamSize: "5명",
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
        },
        {
          title: "메시지 전송 지연 최소화",
          solution: "WebSocket 연결 풀링과 메시지 배치 처리로 네트워크 오버헤드 50% 감소.",
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
      title: "API Gateway 서비스",
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
        },
        {
          title: "인증/인가 성능",
          solution: "JWT 토큰 검증을 Redis 캐싱으로 최적화하여 인증 오버헤드 80% 감소.",
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
      title: "데이터 분석 파이프라인",
      description: "대용량 로그 데이터 수집 및 분석을 위한 ETL 파이프라인. 실시간 데이터 처리 및 시각화.",
      tech: ["Python", "Apache Kafka", "Elasticsearch", "PostgreSQL"],
      features: ["시간당 1TB 데이터 처리", "실시간 데이터 분석", "RESTful API 제공"],
      github: "https://github.com",
      role: "데이터 엔지니어",
      duration: "2022.08 - 2022.12",
      teamSize: "4명",
      architecture: "Kafka를 통한 실시간 스트리밍, Spark Streaming으로 데이터 변환, Elasticsearch로 검색 및 분석 제공",
      images: [
        {
          url: "/data-pipeline-architecture-with-kafka-and-spark.jpg",
          caption: "데이터 파이프라인 아키텍처",
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
          title: "대용량 데이터 처리 성능",
          solution: "Kafka 파티셔닝과 병렬 처리로 처리 속도 3배 향상.",
        },
        {
          title: "데이터 손실 방지",
          solution: "At-least-once 전달 보장과 체크포인트 메커니즘으로 99.99% 데이터 무결성 달성.",
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

  return (
    <>
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">프로젝트</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedProject(index)
                  setSelectedImage(0)
                }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all cursor-pointer hover:shadow-lg hover:shadow-primary/10"
              >
                <h3 className="text-xl font-bold mb-3 text-balance">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-balance leading-relaxed">{project.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">주요 기능</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
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
                    d="M6 18L18 6M6 6l12 12m0 0v6m0-6L10 14"
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
                      className="w-full h-full object-cover"
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
                <h3 className="text-lg font-semibold mb-3 text-primary">프로젝트 개요</h3>
                <p className="text-muted-foreground leading-relaxed">{projects[selectedProject].description}</p>
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
                            <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-green-500">개선</span>
                          </>
                        )}
                        {metric.trend === "down" && (
                          <>
                            <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-green-500">감소</span>
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