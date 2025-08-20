import { TrendingUp, Clock, Globe, Users, Zap, Target, Sparkles, Award } from 'lucide-react'
import Container from './Container'

const metrics = [
  {
    icon: TrendingUp,
    value: '23+',
    label: 'Projects Delivered',
    description: 'Across all services',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Clock,
    value: '<72h',
    label: 'Avg. Turnaround',
    description: 'Fast delivery time',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Globe,
    value: 'NYC',
    label: 'Based',
    description: 'Working worldwide',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    value: '23+',
    label: 'Happy Clients',
    description: 'Growing steadily',
    color: 'from-orange-500 to-red-500'
  }
]

const achievements = [
  {
    icon: Zap,
    title: 'Fast Growth',
    description: 'From startup to established studio in 2 years',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Target,
    title: 'Quality Focus',
    description: 'Every project delivered on time and budget',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Pioneering 3D + marketing hybrid approach',
    color: 'from-purple-500 to-pink-500'
  }
]

export default function ProofRow() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <Container>
                 <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-white">
            The <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Numbers</span> Don't Lie
          </h2>
                     <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
             23+ projects delivered · Fast turnaround · NYC-based · Growing steadily
           </p>
         </div>

        {/* Main Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                     {metrics.map((metric, index) => (
             <div
               key={metric.label}
               className="text-center group"
             >
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 hover:scale-105">
                <div className={`w-20 h-20 bg-gradient-to-r ${metric.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <metric.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-5xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {metric.value}
                </div>
                
                <div className="text-xl font-bold text-white mb-3">
                  {metric.label}
                </div>
                
                                 <div className="text-gray-300 leading-relaxed">
                   {metric.description}
                 </div>
               </div>
             </div>
           ))}
        </div>

                 {/* Achievement Highlights */}
         <div className="mb-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
            Recent <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Achievements</span>
          </h3>
          
                     <div className="grid md:grid-cols-3 gap-8">
             {achievements.map((achievement, index) => (
               <div
                 key={achievement.title}
                 className="group"
               >
                 <div className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 hover:scale-105 text-center">
                   <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                     <achievement.icon className="w-8 h-8 text-white" />
                   </div>
                   
                   <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                     {achievement.title}
                   </h4>
                   
                   <p className="text-gray-300 leading-relaxed">
                     {achievement.description}
                   </p>
                 </div>
               </div>
             ))}
           </div>
         </div>

                 {/* Social Proof Section */}
         <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-16 max-w-5xl mx-auto border border-white/10">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Award className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Growing creative studio trusted by <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">23+ clients</span> worldwide
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              From startups to Fortune 500 companies, we've helped businesses across industries achieve their creative and marketing goals.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">Fitness & Health</span>
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">Technology</span>
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">E-commerce</span>
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">Entertainment</span>
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">Education</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
