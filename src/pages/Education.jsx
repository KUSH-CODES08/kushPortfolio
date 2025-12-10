import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const Education = () => {
  const education = {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science and Engineering',
    institution: 'Sal Institute of Technology and Engineering, Ahmedabad',
    semester: '6th Semester',
    duration: '2023 - 2027 (Expected)',
    icon: '🎓'
  };

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistently maintaining good grades while working on side projects',
      icon: '🏆'
    },
    {
      title: 'Project-Based Learning',
      description: 'Completed 6+ real-world projects during academic journey',
      icon: '💡'
    },
    {
      title: 'Tech Community',
      description: 'Active participation in coding communities and hackathons',
      icon: '👥'
    },
    {
      title: 'Self Learning',
      description: 'Continuously learning new technologies beyond curriculum',
      icon: '📚'
    }
  ];

  const courses = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Object-Oriented Programming',
    'Web Development',
    'Computer Networks',
    'Operating Systems',
    'Software Engineering',
    'Artificial Intelligence',
  ];

  return (
    <section id="education" className="section-container bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Education"
          subtitle="My academic background and learning journey"
        />

        {/* Main Education Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white text-center">
              <div className="text-6xl mb-4">{education.icon}</div>
              <h3 className="text-3xl font-bold mb-2">{education.degree}</h3>
              <p className="text-xl opacity-90">{education.field}</p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Institution</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {education.institution}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Current Status</p>
                    <p className="text-lg font-semibold text-blue-600 dark:text-purple-400">
                      {education.semester}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Duration</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {education.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Specialization</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      Backend & AI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Achievements & Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Relevant Coursework */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Relevant Coursework
          </h3>
          <Card className="p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                >
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-purple-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">{course}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Future Goals */}
        <div className="mt-16">
          <Card className="p-8 max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Future Goals
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              I'm committed to continuous learning and growth in the field of technology. 
              My goals include mastering advanced backend architectures, contributing to open-source projects, 
              and building innovative AI-powered solutions that solve real-world problems.
            </p>
            <div className="flex justify-center space-x-4">
              <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
                Master MERN Stack
              </span>
              <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
                ML Engineering
              </span>
              <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
                Cloud Architecture
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
