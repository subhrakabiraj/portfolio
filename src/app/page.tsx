'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Menu, X } from 'lucide-react'

const sections = [
  { id: '#', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'education', name: 'Education' },
  { id: 'experience', name: 'Experience' },
  { id: 'publications', name: 'Publications' },
  { id: 'awards', name: 'Awards' },
  { id: 'projects', name: 'Projects' },
  { id: 'membership', name: 'Membership' },
  { id: 'research', name: 'Research' },
  { id: 'events', name: 'Events' },
  { id: 'presentations', name: 'Presentations' },
  { id: 'courses', name: 'Courses' },
  { id: 'contact', name: 'Contact' },
]

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Subhra K.</h1>
          <nav className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-gray-600 hover:text-indigo-600 transition duration-150 ease-in-out"
              >
                {section.name}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-gray-600 hover:text-indigo-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-20 bg-white pt-16">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-gray-600 hover:text-indigo-600 transition duration-150 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.name}
              </a>
            ))}
          </nav>
        </div>
      )}

      <main className="container mx-auto px-4 pt-24 space-y-24">
        <section id="#" className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-indigo-600">Home</h2>
          <p className="text-xl leading-relaxed">
            I am a passionate computer science researcher with a focus on artificial intelligence and machine learning.
            My goal is to develop innovative solutions that can make a positive impact on society.
          </p>
        </section>


        <section id="about" className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-indigo-600">About Me</h2>
          <p className="text-xl leading-relaxed">
            I am a passionate computer science researcher with a focus on artificial intelligence and machine learning.
            My goal is to develop innovative solutions that can make a positive impact on society.
          </p>
        </section>

        <section id="education" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Educational Background</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Ph.D. in Computer Science</h3>
              <p className="text-gray-600">Stanford University, 2020</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">M.S. in Artificial Intelligence</h3>
              <p className="text-gray-600">MIT, 2016</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">B.S. in Computer Engineering</h3>
              <p className="text-gray-600">University of California, Berkeley, 2014</p>
            </li>
          </ul>
        </section>

        <section id="experience" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Experience</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Senior AI Researcher</h3>
              <p className="text-gray-600">Google AI, 2020-Present</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Research Assistant</h3>
              <p className="text-gray-600">Stanford AI Lab, 2016-2020</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Machine Learning Intern</h3>
              <p className="text-gray-600">Facebook, Summer 2015</p>
            </li>
          </ul>
        </section>

        <section id="publications" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Paper/Patent Publications</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Advanced Neural Networks for Image Recognition</h3>
              <p className="text-gray-600">Doe, J., et al. Nature, 2021</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Method for Efficient Natural Language Processing</h3>
              <p className="text-gray-600">US Patent 12345678, 2019</p>
            </li>
          </ul>
        </section>

        <section id="awards" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Awards and Achievements</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Best Paper Award</h3>
              <p className="text-gray-600">International Conference on Machine Learning (ICML), 2022</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Google AI Residency Fellowship</h3>
              <p className="text-gray-600">2020</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Stanford Graduate Fellowship</h3>
              <p className="text-gray-600">2016-2020</p>
            </li>
          </ul>
        </section>

        <section id="projects" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Projects</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">DeepVision</h3>
              <p className="text-gray-600">A novel deep learning framework for computer vision tasks</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">AIAssist</h3>
              <p className="text-gray-600">An AI-powered virtual assistant for elderly care</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">EcoPredict</h3>
              <p className="text-gray-600">Machine learning model for predicting ecological changes</p>
            </li>
          </ul>
        </section>

        <section id="membership" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Membership</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Association for Computing Machinery (ACM)</h3>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Institute of Electrical and Electronics Engineers (IEEE)</h3>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Association for the Advancement of Artificial Intelligence (AAAI)</h3>
            </li>
          </ul>
        </section>

        <section id="research" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Research Thrust Area</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">Deep Learning and Neural Networks</li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">Computer Vision and Image Processing</li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">Natural Language Processing</li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">Reinforcement Learning</li>
          </ul>
        </section>

        <section id="events" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">List of Events (Organized/Attended)</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">AI Ethics Workshop</h3>
              <p className="text-gray-600">Organized, Stanford University, 2019</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Conference on Neural Information Processing Systems (NeurIPS)</h3>
              <p className="text-gray-600">Attended, 2021</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">International Conference on Machine Learning (ICML)</h3>
              <p className="text-gray-600">Attended, 2022</p>
            </li>
          </ul>
        </section>

        <section id="presentations" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Poster/Paper Presentation</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Advancements in Generative Adversarial Networks</h3>
              <p className="text-gray-600">CVPR 2021</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Efficient Transformers for NLP Tasks</h3>
              <p className="text-gray-600">ACL 2022</p>
            </li>
          </ul>
        </section>

        <section id="courses" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Courses Completed</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Deep Learning Specialization</h3>
              <p className="text-gray-600">Coursera</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Machine Learning</h3>
              <p className="text-gray-600">Stanford Online (NPTEL)</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Advanced Python for Data Science</h3>
              <p className="text-gray-600">LinkedIn Learning</p>
            </li>
          </ul>
        </section>

        <section id="contact" className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Contact Address</h2>
          <div className="space-y-4">
            <p className="flex items-center text-xl"><Mail className="mr-4 text-indigo-600" /> john.doe@example.com</p>
            <p className="flex items-center text-xl"><Phone className="mr-4 text-indigo-600" /> (123) 456-7890</p>
            <p className="flex items-center text-xl"><MapPin className="mr-4 text-indigo-600" /> 123 AI Street, Tech City, CA 94000</p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/johndoe" className="text-gray-600 hover:text-indigo-600 transition duration-150 ease-in-out">
                <Github size={32} />
              </a>
              <a href="https://linkedin.com/in/johndoe" className="text-gray-600  hover:text-indigo-600 transition duration-150 ease-in-out">
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 text-gray-600 p-8 mt-24">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}