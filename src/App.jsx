import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Activity, Zap, Shield, ChevronRight, Check, X, Menu, X as XIcon } from 'lucide-react'
import './App.css'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Components
const Navbar = ({ scrolled }) => (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'}`}>
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
          <Brain className="text-white" size={22} />
        </div>
        <span className="text-xl font-bold tracking-wide text-white">ADENOSENSE</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {['Science', 'Technology', 'Pricing', 'About'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
            {item}
          </a>
        ))}
        <a href="#pricing" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all">
          Get Started
        </a>
      </div>
    </div>
  </nav>
)

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Animated background */}
    <div className="absolute inset-0 bg-slate-950">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24">
      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-slate-900/50 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
          <Zap className="text-cyan-400" size={16} />
          <span className="text-cyan-300 text-sm font-medium">Circadian Rhythm Optimization</span>
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Unlock Your Body's</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Natural Performance
          </span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Advanced bio-intelligent systems that synchronize with your circadian rhythm to optimize energy, focus, and recovery — naturally.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2">
            Start Your Trial
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a href="#science" className="border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all">
            See the Science
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-800/50">
          {[
            { value: '97%', label: 'User Satisfaction' },
            { value: '2.5x', label: 'Energy Improvement' },
            { value: '30min', label: 'Daily Usage' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
        <div className="w-1 h-2 bg-cyan-500 rounded-full" />
      </div>
    </motion.div>
  </section>
)

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    variants={fadeInUp}
    className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all hover:-translate-y-2"
  >
    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all">
      <Icon className="text-cyan-400" size={28} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </motion.div>
)

const Features = () => (
  <section id="technology" className="py-24 px-6 bg-slate-950">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Technology</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Engineered for Performance</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">Our proprietary algorithm analyzes your unique circadian pattern and delivers personalized optimization protocols.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={Brain}
          title="Neural Synchronization"
          description="Advanced AI maps your neural patterns to optimize cognitive performance during your peak hours."
          delay={0}
        />
        <FeatureCard 
          icon={Activity}
          title="Metabolic Tuning"
          description="Real-time metabolic tracking adjusts your nutrition and activity recommendations based on circadian data."
          delay={1}
        />
        <FeatureCard 
          icon={Zap}
          title="Energy Optimization"
          description="Proprietary energy flow algorithms maximize ATP production and cellular regeneration."
          delay={2}
        />
      </div>
    </div>
  </section>
)

const Science = () => (
  <section id="science" className="py-24 px-6 bg-slate-900/30">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">The Science</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-6">Backed by Research</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            AdenoSense is built on 10+ years of circadian biology research. Our platform integrates findings from sleep science, chronobiology, and AI to create truly personalized bio-optimization.
          </p>
          <ul className="space-y-4">
            {[
              'Peer-reviewed studies from Stanford & MIT',
              'Proprietary adenosine receptor analysis',
              'Continuous algorithm improvement from user data',
              'Military-grade data encryption'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Check className="text-cyan-400" size={12} />
                </div>
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" 
              alt="Biotech research" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700 rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-1">10+</div>
            <div className="text-slate-400 text-sm">Years Research</div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

const PricingCard = ({ tier, price, features, popular }) => (
  <div className={`relative p-8 rounded-2xl border transition-all hover:scale-105 ${popular ? 'bg-slate-900/80 border-cyan-500/50' : 'bg-slate-900/50 border-slate-800'}`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
        Most Popular
      </div>
    )}
    <div className="text-center mb-8">
      <h3 className="text-xl font-bold text-white mb-2">{tier}</h3>
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-5xl font-bold text-white">${price}</span>
        <span className="text-slate-500">/month</span>
      </div>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3">
          <Check className="text-cyan-400 flex-shrink-0" size={18} />
          <span className="text-slate-300">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-xl font-bold transition-all ${popular ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white' : 'border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-white'}`}>
      Get Started
    </button>
  </div>
)

const Pricing = () => (
  <section id="pricing" className="py-24 px-6 bg-slate-950">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Pricing</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Invest in Your Performance</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">Start with a 7-day free trial. No credit card required.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <PricingCard 
          tier="Starter" 
          price="29" 
          features={['Basic circadian analysis', 'Daily optimization tips', 'Email support', 'Mobile app access']}
        />
        <PricingCard 
          tier="Pro" 
          price="49" 
          popular={true}
          features={['Advanced AI analysis', 'Real-time notifications', 'Priority support', 'Wearable integration', 'Detailed analytics']}
        />
        <PricingCard 
          tier="Enterprise" 
          price="99" 
          features={['Everything in Pro', 'Dedicated coach', 'Custom protocols', 'API access', 'Team management']}
        />
      </div>
    </div>
  </section>
)

const CTA = () => (
  <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Optimize?</h2>
        <p className="text-xl text-slate-400 mb-10">Join thousands who've transformed their performance with AdenoSense.</p>
        <a href="#pricing" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all">
          Start Free Trial
          <ChevronRight size={24} />
        </a>
        <p className="text-slate-500 mt-6 text-sm">7-day free trial • Cancel anytime</p>
      </motion.div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="border-t border-slate-800/50 py-16 px-6 bg-slate-950">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Brain className="text-white" size={22} />
            </div>
            <span className="text-xl font-bold text-white">ADENOSENSE</span>
          </div>
          <p className="text-slate-400 mb-6 max-w-md">
            Pioneering bio-intelligent systems for human performance optimization through advanced circadian technology.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <button key={social} className="text-slate-500 hover:text-cyan-400 transition-colors text-sm font-medium">
                {social}
              </button>
            ))}
          </div>
        </div>
        
        {[
          { title: 'Platform', links: ['NeuroEngine', 'BioMetrics API', 'Sleep Optimizer'] },
          { title: 'Research', links: ['White Papers', 'Clinical Studies', 'Publications'] },
          { title: 'Company', links: ['About', 'Careers', 'Contact'] }
        ].map((section, i) => (
          <div key={i}>
            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-3">
              {section.links.map((link, j) => (
                <li key={j}>
                  <button className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="border-t border-slate-800/30 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} AdenoSense Technologies. All rights reserved.</p>
        <div className="flex gap-6">
          <button className="text-slate-600 hover:text-cyan-400 transition-colors text-sm">Privacy</button>
          <button className="text-slate-600 hover:text-cyan-400 transition-colors text-sm">Terms</button>
          <button className="text-slate-600 hover:text-cyan-400 transition-colors text-sm">Compliance</button>
        </div>
      </div>
    </div>
  </footer>
)

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Features />
      <Science />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App