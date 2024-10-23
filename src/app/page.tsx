import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Subhra Kabiraj</h1>
          <p className="text-xl">Computer Science Student</p>
        </div>
      </header>

      <main className="container mx-auto p-4 space-y-8">
        <section id="about">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p>I am a passionate computer science researcher with a focus on artificial intelligence and machine learning. My goal is to develop innovative solutions that can make a positive impact on society.</p>
        </section>

        <section id="education">
          <h2 className="text-2xl font-bold mb-4">Educational Background</h2>
          <ul className="list-disc pl-5">
            <li>Ph.D. in Computer Science, Stanford University, 2020</li>
            <li>M.S. in Artificial Intelligence, MIT, 2016</li>
            <li>B.S. in Computer Engineering, University of California, Berkeley, 2014</li>
          </ul>
        </section>

        <section id="experience">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <ul className="list-disc pl-5">
            <li>Senior AI Researcher, Google AI, 2020-Present</li>
            <li>Research Assistant, Stanford AI Lab, 2016-2020</li>
            <li>Machine Learning Intern, Facebook, Summer 2015</li>
          </ul>
        </section>

        <section id="publications">
          <h2 className="text-2xl font-bold mb-4">Paper/Patent Publications</h2>
          <ul className="list-disc pl-5">
            <li>Doe, J., et al. "Advanced Neural Networks for Image Recognition." Nature, 2021</li>
            <li>Patent: "Method for Efficient Natural Language Processing." US Patent 12345678, 2019</li>
          </ul>
        </section>

        <section id="awards">
          <h2 className="text-2xl font-bold mb-4">Awards and Achievements</h2>
          <ul className="list-disc pl-5">
            <li>Best Paper Award, International Conference on Machine Learning (ICML), 2022</li>
            <li>Google AI Residency Fellowship, 2020</li>
            <li>Stanford Graduate Fellowship, 2016-2020</li>
          </ul>
        </section>

        <section id="projects">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <ul className="list-disc pl-5">
            <li>DeepVision: A novel deep learning framework for computer vision tasks</li>
            <li>AIAssist: An AI-powered virtual assistant for elderly care</li>
            <li>EcoPredict: Machine learning model for predicting ecological changes</li>
          </ul>
        </section>

        <section id="membership">
          <h2 className="text-2xl font-bold mb-4">Membership</h2>
          <ul className="list-disc pl-5">
            <li>Member, Association for Computing Machinery (ACM)</li>
            <li>Member, Institute of Electrical and Electronics Engineers (IEEE)</li>
            <li>Member, Association for the Advancement of Artificial Intelligence (AAAI)</li>
          </ul>
        </section>

        <section id="research">
          <h2 className="text-2xl font-bold mb-4">Research Thrust Area</h2>
          <ul className="list-disc pl-5">
            <li>Deep Learning and Neural Networks</li>
            <li>Computer Vision and Image Processing</li>
            <li>Natural Language Processing</li>
            <li>Reinforcement Learning</li>
          </ul>
        </section>

        <section id="events">
          <h2 className="text-2xl font-bold mb-4">List of Events (Organized/Attended)</h2>
          <ul className="list-disc pl-5">
            <li>Organized: AI Ethics Workshop, Stanford University, 2019</li>
            <li>Attended: Conference on Neural Information Processing Systems (NeurIPS), 2021</li>
            <li>Attended: International Conference on Machine Learning (ICML), 2022</li>
          </ul>
        </section>

        <section id="presentations">
          <h2 className="text-2xl font-bold mb-4">Poster/Paper Presentation</h2>
          <ul className="list-disc pl-5">
            <li>"Advancements in Generative Adversarial Networks" - CVPR 2021</li>
            <li>"Efficient Transformers for NLP Tasks" - ACL 2022</li>
          </ul>
        </section>

        <section id="courses">
          <h2 className="text-2xl font-bold mb-4">Courses Completed</h2>
          <ul className="list-disc pl-5">
            <li>Deep Learning Specialization - Coursera</li>
            <li>Machine Learning - Stanford Online (NPTEL)</li>
            <li>Advanced Python for Data Science - LinkedIn Learning</li>
          </ul>
        </section>

        <section id="contact" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact Address</h2>
          <div className="space-y-2">
            <p className="flex items-center"><Mail className="mr-2" /> john.doe@example.com</p>
            <p className="flex items-center"><Phone className="mr-2" /> (123) 456-7890</p>
            <p className="flex items-center"><MapPin className="mr-2" /> 123 AI Street, Tech City, CA 94000</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/johndoe" className="text-gray-600 hover:text-blue-600">
                <Github />
              </a>
              <a href="https://linkedin.com/in/johndoe" className="text-gray-600 hover:text-blue-600">
                <Linkedin />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}