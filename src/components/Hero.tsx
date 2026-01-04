const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <img
              src="/profile.jpg"
              alt="Profile photo of 이유진, Backend Engineer"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-contain border-4 border-primary/20 bg-white grayscale hover:grayscale-0 transition-all duration-300"
            />
            
            <div className="flex items-center gap-5">
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
                href="./yoojinleedev_STC.pdf"
                download
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="성격 유형 다운로드"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-0">
              <p className="text-lg md:text-xl text-foreground text-left"><span className="text-primary"><b>요청</b></span>부터 <span className="text-primary"><b>응답</b></span>까지,</p>
              <h1 className="text-4xl md:text-4xl font-bold leading-tight text-left">
                데이터 흐름 너머의 사용자 가치를 연결하는 <span className="text-primary"><b>백엔드 엔지니어</b></span> 이유진입니다.
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-left">
              3년 차 개발자로 다양한 <b>엔터프라이즈 솔루션 구축</b> 경험을 통해 비즈니스 로직을 기술로 구현하는 역량을 길렀으며, 자체 <b>프로덕트 운영 효율화</b>를 통해 서비스의 안정적 성장에 기여했습니다.
              <br />백엔드 개발의 핵심은 단순한 기능 구현을 넘어 서비스의 라이프사이클을 이해하고 그 흐름을 최적화하는 데 있다고 생각합니다.
              <br />백엔드를 주축으로 인프라 설계와 프론트엔드 구현까지 서비스의 A to Z를 경험하며 <b>넓은 시야를 길렀습니다</b>. 이러한 시야를 바탕으로 기술적 깊이를 비즈니스에 녹여내기 위해 늘 고민합니다.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:yoojinlee.dev@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors justify-center md:justify-start group"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-base md:text-lg">yoojinlee.dev@gmail.com</span>
              </a>

              <a
                href="tel:+821094375946"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors justify-center md:justify-start group"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-base md:text-lg">+82 10-9437-5946</span>
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
            <div className="text-3xl font-bold text-primary mb-2">6<span className="text-xl">+</span></div>
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