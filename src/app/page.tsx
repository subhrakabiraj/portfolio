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
          Welcome to My Professional Portfolio I’m currently a B.Tech student specializing in Computer Science at IEM, where I’m driven by a passion for coding, innovation, and problem-solving. This website serves as a hub to showcase my academic achievements, projects, research interests, and professional journey. Whether you’re here to explore my experience, check out my latest projects, or learn more about my skills and interests, I’m excited to share my work with you. Feel free to browse around, and don’t hesitate to reach out for collaboration, networking, or any inquiries!
          </p>
        </section>


        <section id="about" className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-indigo-600">About Me</h2>
          <p className="text-xl leading-relaxed">
          I'm Subhra Kabiraj and I’m currently pursuing my B.Tech in Computer Science at IEM Newtown(UEM Kolkata),where I’ve developed a strong foundation in coding and problem-solving. With a passion for exploring new technologies, I’m constantly seeking opportunities to learn and enhance my skills. From hands-on coding projects to gaining exposure to different tools and platforms, I’m enthusiastic about applying my knowledge to real-world challenges. I’m particularly interested in software development, algorithms, and emerging tech trends. Let’s connect and collaborate on innovative ideas!
            My goal is to develop innovative solutions that can make a positive impact on society.
          </p>
        </section>

        <section id="education" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Educational Background</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">B.Tech in Computer Science</h3>
              <p className="text-gray-600">IEM NEWTOWN (UNIVERSITY OF ENGINEERING AND MANAGEMENT KOLKATA) 2024-2028</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">H.S.</h3>
              <p className="text-gray-600">AGPN CONVENT AND ER SCHOOL, PURULIA, 2023</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Secondary Schooling (10th)</h3>
              <p className="text-gray-600 uppercase">St. Xavier's School, Purulia, 2021 </p>
            </li>
          </ul>
        </section>

        <section id="experience" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Experience</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Currently a student</h3>
            </li>
          </ul>
        </section>

        <section id="publications" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Paper/Patent Publications</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Reseach paper on Space Exploration</h3>
            </li>
          </ul>
        </section>

        <section id="awards" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Awards and Achievements</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">To be updated soon </h3>
            </li>
          </ul>
        </section>

        <section id="projects" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Projects</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">FLYER FUSION</h3>
              <p className="text-gray-600">A flyer making contest oraginsed by Uem Kolkata</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">POSTER DESIGNING</h3>
              <p className="text-gray-600">An online poster designing contest oragnised by dept. of BSH,Uem Kolkata</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">INNOVATIVE PROJECT</h3>
              <p className="text-gray-600">Creating a robotic hand using arduino, flex sensors and other devices for Design thinking project at Uem Kolkata</p>
            </li>
          </ul>
        </section>

        <section id="membership" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Membership</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Coursera (short term course on basics of python)</h3>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Udemy (short term course on basics of AI/ML)</h3>
            </li>
          </ul>
        </section>

        <section id="research" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Research Thrust Area</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">Coding (Python)</li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">Arduino</li>
          </ul>
        </section>

        <section id="events" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">List of Events (Organized/Attended)</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Attented UEM KLKATA Space Observatory events, 2024</h3>
            </li>
          </ul>
        </section>

        <section id="presentations" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Poster/Paper Presentation</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Introduction to Micro Optics(Physics)</h3>
              <p className="text-gray-600">2024</p>
            </li>
          </ul>
        </section>

        <section id="courses" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Courses Completed</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Short term course on basics of python</h3>
              <p className="text-gray-600">Coursera</p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">NPTEL Soft skill course</h3>
              <p className="text-gray-600">NPTEL</p>
            </li>
          </ul>
        </section>

        <section id="contact" className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Contact Address</h2>
          <div className="space-y-4">
            <p className="flex items-center text-xl"><Mail className="mr-4 text-indigo-600" /> subhrakabiraj785@gmail.com</p>
            <p className="flex items-center text-xl"><Phone className="mr-4 text-indigo-600" /> +91 7797289213</p>
            <p className="flex items-center text-xl"><MapPin className="mr-4 text-indigo-600" /> SP Sukhobrishti Complex, Shapoorji(700135),Newtown,Kolkata</p>
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