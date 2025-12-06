const Skills = () => {
  const strongSkills = [
    "Java",
    "Spring Boot",
    "JPA",
    "QueryDSL",
    "Spring Security",
    "PostgreSQL",
    "MySQL",
    "OAuth 2.0",
    "JWT",
    "Restful API",
    "Redis",
    "AWS",
    "Docker",
  ]

  const basicSkills = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Elasticsearch",
    "Kubernetes",
    "GitHub Actions",
    "Kafka",
    "RabbitMQ",
    "gRPC",
  ]

  const etcSkills = ["Git", "Linux", "Nginx", "OAuth 2.0", "JWT", "Test-Driven Development", "Agile/Scrum"]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-balance">
            Tech
            <span className="inline-block w-8 md:w-12 h-1 bg-primary ml-2 align-middle"></span>
          </h2>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Strong</h3>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-muted-foreground font-mono break-words">
              {strongSkills.map((skill, index) => (
                <span key={skill}>
                  {skill}
                  {index < strongSkills.length - 1 && <span className="text-primary mx-1 md:mx-2">/</span>}
                </span>
              ))}
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Knowledgeable</h3>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-muted-foreground font-mono break-words">
              {basicSkills.map((skill, index) => (
                <span key={skill}>
                  {skill}
                  {index < basicSkills.length - 1 && <span className="text-primary mx-1 md:mx-2">/</span>}
                </span>
              ))}
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">ETC</h3>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-muted-foreground font-mono break-words">
              {etcSkills.map((skill, index) => (
                <span key={skill}>
                  {skill}
                  {index < etcSkills.length - 1 && <span className="text-primary mx-1 md:mx-2">/</span>}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills