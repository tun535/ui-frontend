import { useState } from 'react'
import Datepicker from './components/Datepicker'

function App() {
  const [currentMonth, setCurrentMonth] = useState('May 2022')

  const courses = [
    { id: 1, title: 'Geography', lessons: '12 lessons', icon: '🗺️', color: 'bg-orange-200' },
    { id: 2, title: 'JavaScript Course', lessons: '15 lessons', icon: '</>', color: 'bg-purple-200' },
    { id: 3, title: 'Photography Course', lessons: '8 lessons', icon: '📸', color: 'bg-blue-200' }
  ]

  const myCourses = [
    { id: 1, title: 'Web Design', lessons: '10 lessons', date: 'May 12', rate: 4.8, level: 'Elementary', icon: '🎨' },
    { id: 2, title: 'Development Basics', lessons: '8 lessons', date: 'May 14', rate: 4.4, level: 'Intermediate', icon: '</>' },
    { id: 3, title: 'Data with Python', lessons: '4 lessons', date: 'May 17', rate: 4.6, level: 'Intermediate', icon: '🐍' },
    { id: 4, title: 'Html Basics', lessons: '12 lessons', date: 'May 26', rate: 4.7, level: 'Elementary', icon: '🌐' },
    { id: 5, title: 'JavaScript', lessons: '', date: 'May 30', rate: 4.9, level: 'Elementary', icon: '⚡' }
  ]

  const homeworkProgress = [
    { subject: 'Styling with CSS', progress: 75, tasks: '10 tasks' },
    { subject: 'Basics of programming', progress: 60, tasks: '8 tasks' },
    { subject: 'Learn to Program in Java', progress: 25, tasks: '20 tasks' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="font-semibold text-gray-800">Academy</span>
            </div>

            <nav className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-purple-100 rounded-lg text-purple-700">
                <span>📊</span>
                <span className="font-medium">Dashboard</span>
              </div>
              <div className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                <span>📚</span>
                <span>Courses</span>
              </div>
              <div className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                <span>💬</span>
                <span>Chats</span>
              </div>
              <div className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                <span>🎯</span>
                <span>Grades</span>
              </div>
              <div className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                <span>📅</span>
                <span>Schedule</span>
              </div>
              <div className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                <span>⚙️</span>
                <span>Settings</span>
              </div>
            </nav>
          </div>

          {/* Premium Subscription Card */}
          <div className="mx-6 mb-6 p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <div>
                <h3 className="font-semibold">Premium subscription</h3>
                <p className="text-xs text-purple-100">Buy Premium and get access to new courses</p>
              </div>
            </div>
            <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg py-2 text-sm font-medium transition-colors">
              More detailed
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <div className="bg-white shadow-sm border-b p-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                </div>
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span>🔔</span>
                </div>
                <div className="flex items-center gap-2">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face" 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium">Profile</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-12 gap-6">
              {/* Left Column - Main Content */}
              <div className="col-span-8">
                {/* New Courses */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">New Courses</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {courses.map(course => (
                      <div key={course.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center mb-3`}>
                          <span className="text-xl">{course.icon}</span>
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-1">{course.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{course.lessons}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                            <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                            <div className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></div>
                          </div>
                          <button className={`w-8 h-8 ${course.color} rounded-lg flex items-center justify-center`}>
                            <span className="text-white">→</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* My Courses */}
                <section>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">My Courses</h2>
                    <button className="text-purple-600 text-sm font-medium">View All</button>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 text-sm font-medium text-gray-600">
                      <span>Course name</span>
                      <span>Start</span>
                      <span>Rate</span>
                      <span>Level</span>
                      <span></span>
                    </div>
                    
                    {myCourses.map(course => (
                      <div key={course.id} className="grid grid-cols-5 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{course.icon}</span>
                          <div>
                            <h4 className="font-medium text-gray-800">{course.title}</h4>
                            <p className="text-sm text-gray-500">{course.lessons}</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600 py-2">{course.date}</span>
                        <span className="text-sm text-gray-800 py-2">{course.rate}</span>
                        <span className="text-sm text-gray-600 py-2">{course.level}</span>
                        <button className="text-purple-600 hover:text-purple-800 text-sm">View</button>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column - Sidebar */}
              <div className="col-span-4 space-y-6">
                {/* Profile Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face" 
                    alt="Esther Howard" 
                    className="w-16 h-16 rounded-full mx-auto mb-3"
                  />
                  <h3 className="font-semibold text-gray-800">Esther Howard ✅</h3>
                  <p className="text-sm text-gray-500">Elementary</p>
                </div>

                {/* Calendar */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-800">{currentMonth}</h3>
                    <div className="flex gap-1">
                      <button className="w-6 h-6 text-gray-400 hover:text-gray-600">&lt;</button>
                      <button className="w-6 h-6 text-gray-400 hover:text-gray-600">&gt;</button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="py-1">{day}</div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    {[28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((date, index) => (
                      <div 
                        key={index}
                        className={`w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer
                          ${date === 8 ? 'bg-purple-600 text-white' : 
                            date === 15 ? 'bg-purple-100 text-purple-600' : 
                            index < 4 || index > 30 ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-100'}
                        `}
                      >
                        {date}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Homework Progress */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-4">Homework progress</h3>
                  <div className="space-y-4">
                    {homeworkProgress.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-sm">{item.progress}%</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-800">{item.subject}</h4>
                          <p className="text-xs text-gray-500">{item.tasks}</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">→</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
