export function Education() {

    const education = [
    {
      period: "2013.03 - 2019.02",
      school: "경성대학교",
      degree: "디지털미디어학부",
      gpa: "3.8 / 4.5",
      description: [
        "자료구조 및 알고리즘 수업 우수상",
        "졸업 프로젝트: 실시간 채팅 애플리케이션 개발",
        "컴퓨터공학 학술동아리 활동",
        "알고리즘 스터디 그룹 운영",
      ],
      activities: ["알고리즘 문제 해결", "오픈소스 프로젝트 기여", "해커톤 참가"],
    },
  ]

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">학력</h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-border">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground font-mono mb-2">{edu.period}</div>
                  <h3 className="text-2xl font-bold text-balance">{edu.school}</h3>
                  <p className="text-lg text-primary">{edu.degree}</p>
                  {edu.gpa && <p className="text-sm text-muted-foreground mt-1">학점: {edu.gpa}</p>}
                </div>

                <ul className="space-y-2">
                  {edu.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span className="text-balance">{item}</span>
                    </li>
                  ))}
                </ul>

                {edu.activities && edu.activities.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.activities.map((activity) => (
                      <span
                        key={activity}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-mono"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
