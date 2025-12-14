const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        {/* <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">소개</h2> */}

        <div className="space-y-6 text-lg leading-relaxed">
          {/* <p className="text-muted-foreground text-balance">
            안녕하세요 3년 차 백엔드 개발자 이유진입니다. 대용량 트래픽을 처리하는 안정적인 API 서버 구축과
            데이터베이스 설계에 전문성을 갖추고 있습니다.
          </p>

          <p className="text-muted-foreground text-balance">
            마이크로서비스 아키텍처, 클라우드 인프라, 그리고 DevOps 실천을 통해 확장 가능하고 유지보수가 용이한 시스템을
            만들어냅니다.
          </p>

          <p className="text-muted-foreground text-balance">
            새로운 기술을 배우고 적용하는 것을 즐기며, 팀과의 협업과 코드 리뷰를 통해 더 나은 코드를 작성하기 위해
            노력합니다.
          </p> */}

          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">년 경력</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">완료 프로젝트</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">기술 스택</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About