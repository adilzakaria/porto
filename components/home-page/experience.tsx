import { Badge } from '../ui/badge'
import { Card } from '../ui/card'

const AboutAndExperience = () => {
    const experiences = [
        {
            title: "Development of Sinau Ngaji Daring",
            company: "PUI-PT DLI",
            period: "Jun 2024 - Nov 2024",
            description:
              "Independently developed Sinau Ngaji Daring, an online Islamic learning platform. Built using Laravel 10 and MySQL, the platform provides a seamless and user-friendly experience, ensuring efficient content delivery and accessibility for users.",
          },
          {
            title: "Development of PastiJadi Accounting-App",
            company: "PastiJadi Digital Solution",
            period: "Aug 2024 - Nov 2024",
            description:
              "Collaborated with a team to develop an accounting web application using Laravel. My primary responsibilities included designing the entire UI/UX interface and building an analytics dashboard to enhance data visualization and user insights.",
          },
          {
            title: "Documentation of Teh Kota",
            company: "PastiJadi Digital Solution",
            period: "Aug 2024 - Oct 2024",
            description:
              "Created user manuals and tutorial videos for both Mitra and Internal Teh Kota web applications. Worked alongside a QA tester responsible for identifying and reporting bugs, while I focused on developing clear and concise documentation to improve user experience and onboarding.",
          },
          {
            title: "Student Intern",
            company: "PT. Cendana Teknika Utama",
            period: "Jan 2024 - Present",
            description:
              "Currently undergoing training in Odoo framework. Engaged in structured courses to build foundational knowledge in preparation for upcoming development projects.",
          },
    ]
        
    return (
        <>
        <div className='px-4 py-12'>
            <div className='flex flex-col md:flex-row gap-8'>
            <section id="about">
            {/* <Card className="p-20">
            <h2 className="text-xl md:text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 mb-4">
                I'm a passionate Informatics Engineering student with a keen interest in software development and artificial
                intelligence. My goal is to leverage technology to solve real-world problems and make a positive impact on
                society.
            </p>
            <p className="text-gray-600 mb-4">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
                participating in hackathons. I believe in continuous learning and always strive to expand my skill set.
            </p>
            <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2 text-m md:text-l">
                {["Python", "JavaScript", "React", "Node.js", "Laravel", "MySql", "PHP", "Git"].map(
                    (skill, index) => (
                    <Badge key={index} variant="secondary">
                        {skill}
                    </Badge>
                    ),
                )}
                </div>
            </div>
            </Card> */}
            </section>

            {/* Experience Section */}
            <section id="experience">
            <Card className="px-14 text-justify">
            <h2 className="text-xl md:text-2xl font-bold mb-4 mt-4">Experience</h2>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h3 className="text-l md:text-xl">{exp.title}</h3>
                    <p className="text-s md:text-m text-gray-600">{exp.company}</p>
                    <p className="text-s md:text-m text-gray-500 mb-2">{exp.period}</p>
                    <p className="text-s md:text-m text-gray-600">{exp.description}</p>
                </div>
                ))}
            </div>
            </Card>
            </section>
            </div>
        </div>
        </>
    )
    }

export default AboutAndExperience