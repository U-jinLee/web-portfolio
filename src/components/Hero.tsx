const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Profile photo of 이유진, Backend Engineer"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-contain border-4 border-primary/20 bg-white grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-0">
              <p className="text-lg md:text-xl text-foreground text-left"><span className="text-primary"><b>요청</b></span>부터 <span className="text-primary"><b>응답</b></span>까지</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-left">
                데이터의 흐름으로 문제를 푸는 <span className="text-primary"><b>백엔드 엔지니어</b></span> 이유진입니다.
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-left">
              클라이언트부터 서버까지 흐름을 기준으로 RESTful API와 DB를 설계하고, 트래픽을 효율적으로 처리하는 구조를 구축합니다.
              <br /><b>사용자 경험과 성능</b>의 균형을 고려하며, 도메인 정책 예외 흐름과 트랜잭션을 설계해 <b>데이터의 정합성과 서버의 안정성</b>을 확보합니다. 
            </p>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/U-jinLee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://diligent-mangosteen-06d.notion.site/Charm-s-Develop-Library-18299f0b98f749d9bcd607e1703b799a?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.635-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
                  </svg>

                </svg>
              </a>
              <a
                href="mailto:yoojinlee.dev@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 pt-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">3<span className="text-xl">+</span></div>
            <div className="text-muted-foreground">년 경력</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">20<span className="text-xl">+</span></div>
            <div className="text-muted-foreground">프로젝트</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">10<span className="text-xl">+</span></div>
            <div className="text-muted-foreground">기술스택</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero