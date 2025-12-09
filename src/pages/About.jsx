import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const About = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Student',
      description: 'B.E CSE (3rd Semester)',
      detail: 'Gujarat Technological University'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Developer',
      description: 'Full-Stack Enthusiast',
      detail: 'Specializing in Python & Backend'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Learner',
      description: 'MERN & ML',
      detail: 'Always exploring new technologies'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Goal',
      description: 'Build Scalable Systems',
      detail: 'ML-powered backend applications'
    }
  ];

  return (
    <section id="about" className="section-container gradient-bg">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about my background, skills, and what drives me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bio */}
          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Hello! I'm Bhavsar Kush Sunilbhai
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I'm a passionate <span className="text-blue-600 dark:text-purple-400 font-semibold">Python Developer</span> currently 
                  pursuing my Bachelor of Engineering in Computer Science and Engineering at Gujarat Technological University. 
                  I'm in my 3rd semester and deeply fascinated by the world of technology.
                </p>
                <p>
                  My journey in programming started with Python, and since then, I've been exploring various aspects of 
                  software development. I'm skilled in <span className="font-semibold text-gray-800 dark:text-gray-200">Django, Flask, and FastAPI</span> for 
                  backend development, and I'm currently expanding my knowledge in the <span className="font-semibold text-gray-800 dark:text-gray-200">MERN stack</span> and 
                  <span className="font-semibold text-gray-800 dark:text-gray-200"> Machine Learning</span>.
                </p>
                <p>
                  What drives me is the challenge of building <span className="text-blue-600 dark:text-purple-400 font-semibold">scalable backend systems</span> and 
                  creating <span className="text-blue-600 dark:text-purple-400 font-semibold">AI-powered applications</span> that solve real-world problems. 
                  I believe in writing clean, efficient code and continuously learning new technologies to stay ahead in this 
                  ever-evolving field.
                </p>
                <p>
                  Beyond coding, I'm interested in automation, building chatbots, and exploring data pipelines. 
                  I love the process of turning ideas into functional applications and seeing them make an impact.
                </p>
              </div>
            </Card>
          </div>

          {/* Right Side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-2xl"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-blue-600 dark:text-purple-400 font-semibold">
                    {item.description}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.detail}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '6+', label: 'Projects Completed' },
            { number: '10+', label: 'Technologies' },
            { number: '3rd', label: 'Semester' },
            { number: '100%', label: 'Dedication' }
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
