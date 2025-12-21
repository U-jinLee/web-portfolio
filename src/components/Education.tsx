export function Education() {
  const formalEducation = [
    {
      period: "2013.03 - 2019.02",
      school: "경성대학교",
      degree: "디지털미디어 학부",
      gpa: "3.8 / 4.5",
      description: [
        "프로그래밍 기초(A+)와 앱 프로그래밍 실습 과목을 이수, 기초적 개발 논리와 구현 능력 습득", 
        "서비스 디자인(A) 및 스마트 게임 기획 수업(A+)을 통해 사용자 경험(UX)과 비즈니스 로직 설계", 
        "미디어 조사 방법론 등 데이터 분석 관련 강의 수강, 전공 심화 과정을 우수한 성적으로 이수",
      ],
    },
  ]
  
  const training = [
    {
      period: "2025.09 - 진행 중",
      organization: "(주)케이티클라우드",
      program: "[kt cloud] 풀스택 과정",
      description: [
        "클라우드 네이티브 환경에서 풀스택 개발 역량 강화",
        "Java, Node.js 백엔드 개발과 React 기반 프론트엔드 개발 심화",
        "Stomp 활용 Socket 통신, 인증/인가, 배포 자동화 등 실무 기술 습득",
      ],
      skills: ["Java", "Node.js", "React", "TypeScript", "Redis", "MongoDB", "AWS"],
    },
    {
      period: "2023.10 - 2023.11",
      organization: "원티드",
      program: "프리온보딩 백엔드 인턴십",
      url: "https://github.com/Team-Enigma23",
      description: [
        "원티드 주간 7차 프리온보딩 백엔드 인턴십 프로그램 K팀 팀장",
        "한달간 여러 건의 기업 실무 과제를 수행하며, 팀원과 협업해 프로젝트 완수",
      ],
      skills: ["Java", "Spring Boot", "Spring Security", "JPA", "H2"],
    },
    {
      period: "2020.08 - 2021.01",
      organization: "그린컴퓨터아카데미",
      program: "빅데이터 UI 전문가 양성 과정",
      description: [
        "Java 언어의 기초 문법과 객체지향 프로그래밍의 개념을 확립",
        "Spring Framework와 MVC 패턴을 학습해 웹 애플리케이션 개발 기초 습득",
        "MySQL을 활용한 DB 설계 및 CRUD를 직접 구현해 데이터베이스 관리 능력 배양",
      ],
      skills: ["Spring Framework", "Java", "JSP", "JQuery", "MySQL"],
    },
  ]

  const activities = [
    {
      period: "2024.11",
      name: "부경대학교 모배디 해커톤",
      role: "프로젝트 멘토 & 심사",
    },
    {
      period: "2023.11",
      name: "부경대학교 UMC 모여봐요 해커톤",
      role: "프로젝트 멘토 & 심사",
    },
  ];  

  const certifications = [
    {
      period: "2024.08",
      name: "SQLD",
      organization: "한국데이터산업진흥원",
    },
  ]

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">교육 & 자격증</h2>

        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">정규 학위</h3>
            <div className="space-y-12">
              {formalEducation.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-border">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground font-mono mb-2">{edu.period}</div>
                      <h4 className="text-2xl font-bold text-balance">{edu.school}</h4>
                      <p className="text-lg text-primary">{edu.degree}</p>
                      {edu.gpa && <p className="text-sm text-muted-foreground mt-1">학점: {edu.gpa}</p>}
                    </div>

                    <ul className="space-y-2">
                      {edu.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1"></span>
                          <span className="text-balance">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">교육 & 부트캠프</h3>
            <div className="space-y-12">
              {training.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-border">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground font-mono mb-2">{item.period}</div>
                      {item.url ? (
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-2xl font-bold text-balance hover:text-primary transition-colors inline-flex items-center gap-2"
                        >
                          {item.program}
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <h4 className="text-2xl font-bold text-balance">{item.program}</h4>
                      )}
                      <p className="text-lg text-muted-foreground">{item.organization}</p>
                    </div>

                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1"></span>
                          <span className="text-balance">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {item.skills && item.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">외부활동</h3>
            <div className="space-y-12">
              {activities.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-border">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground font-mono mb-2">{item.period}</div>
                      {item.url ? (
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-2xl font-bold text-balance hover:text-primary transition-colors inline-flex items-center gap-2"
                        >
                          {item.name}
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <h4 className="text-2xl font-bold text-balance">{item.name}</h4>
                      )}
                      <p className="text-lg text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>          

          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">자격증</h3>
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-border">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>

                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground font-mono mb-2">{cert.period}</div>
                    <h4 className="text-xl font-bold text-balance">{cert.name}</h4>
                    <p className="text-muted-foreground">{cert.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
