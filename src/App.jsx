import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Brain, Activity, Zap, Shield, ChevronRight, Check, Menu, 
  Clock, Users, Star, Play, ArrowRight, Moon, Sun,
  Cpu, Heart, TrendingUp, Award
} from 'lucide-react'
import './App.css'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
}

// Components
const Navbar = ({ scrolled, onOpenMenu }) => (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
  }`}>
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
            <Brain className="text-white" size={20} />
          </div>
          <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl blur opacity-30" />
        </div>
        <span className="text-lg font-bold tracking-tight text-white">ADENOSENSE</span>
      </div>
      
      <div className="hidden lg:flex items-center gap-8">
        {[
          { label: 'How It Works', href: '#how-it-works' },
          { label: 'Science', href: '#science' },
          { label: 'Results', href: '#results' },
          { label: 'Pricing', href: '#pricing' },
        ].map((item) => (
          <a key={item.label} href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="https://adenosense.pages.dev/" 
          className="hidden sm:flex items-center gap-2 bg-white text-black hover:bg-gray-100 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
        >
          Get Started
          <ArrowRight size={16} />
        </a>
        <button onClick={onOpenMenu} className="lg:hidden p-2 text-gray-400 hover:text-white">
          <Menu size={24} />
        </button>
      </div>
    </div>
  </nav>
)

const MobileMenu = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl lg:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {[
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'Science', href: '#science' },
            { label: 'Results', href: '#results' },
            { label: 'Pricing', href: '#pricing' },
          ].map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={onClose}
              className="text-2xl text-white font-medium"
            >
              {item.label}
            </a>
          ))}
          <a href="https://adenosense.pages.dev/" target="_blank" rel="noopener noreferrer" onClick={onClose} className="mt-4 bg-white text-black px-8 py-3 rounded-xl font-bold">
            Get Started
          </a>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Background */}
    <div className="absolute inset-0 bg-[#0a0a0f]">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[150px]" />
      
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <motion.div variants={stagger} initial="initial" animate="animate">
        {/* Badge */}
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-gray-300 text-sm font-medium">Now in Public Beta — Join 12,000+ users</span>
        </motion.div>
        
        {/* Headline */}
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
          <span className="text-white">Master Your</span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Circadian Rhythm
          </span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          AdenoSense uses AI to decode your unique biological clock — optimizing energy, focus, and recovery so you perform at your peak every single day.
        </motion.p>
        
        {/* CTAs */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="https://adenosense.pages.dev/" 
            className="group bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Start Free Trial
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a 
            href="https://adenosense.pages.dev/" 
            className="group border border-white/20 text-white hover:border-white/40 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3"
          >
            <Play size={18} className="fill-white" />
            See How It Works
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex -space-x-3">
            {['JD', 'MK', 'AS', 'RL', 'TN'].map((initials, i) => (
              <div 
                key={i} 
                className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-[#0a0a0f] flex items-center justify-center text-xs font-bold text-white"
              >
                {initials}
              </div>
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-emerald-400 text-emerald-400" />
              ))}
            </div>
            <p className="text-gray-400 text-sm">Trusted by 12,000+ high performers</p>
          </div>
        </motion.div>

        {/* Hero Image / App Preview */}
        <motion.div variants={scaleIn} className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0f]" />
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=700&fit=crop" 
              alt="AdenoSense Dashboard" 
              className="w-full h-auto opacity-80"
            />
            {/* Floating cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <TrendingUp className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Energy Score</p>
                  <p className="text-emerald-400 font-bold text-lg">94/100</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Clock className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Optimal Sleep Time</p>
                  <p className="text-cyan-400 font-bold text-lg">10:34 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Moon,
      title: 'Track Your Rhythm',
      description: 'Wear your device or use our app. We collect 50+ data points about your sleep, activity, and energy patterns.'
    },
    {
      number: '02',
      icon: Cpu,
      title: 'AI Analyzes Your Clock',
      description: 'Our proprietary algorithm maps your unique circadian signature — finding your optimal energy windows.'
    },
    {
      number: '03',
      icon: Sun,
      title: 'Receive Personalized Protocols',
      description: 'Get actionable recommendations for sleep, nutrition, exercise, and work timing tailored to your biology.'
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Optimize & Improve',
      description: 'Watch your energy, focus, and recovery scores improve as you align with your biological rhythm.'
    }
  ]

  return (
    <section id="how-it-works" className="py-32 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Four Steps to Your Optimal Self</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Science-backed, AI-powered, and completely personalized to your unique biology.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 h-full">
                <div className="text-6xl font-bold text-white/5 mb-4">{step.number}</div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="text-white/20" size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({ icon: Icon, title, description, stats }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2"
  >
    <div className="flex items-start justify-between mb-6">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className="text-emerald-400" size={28} />
      </div>
      {stats && (
        <span className="text-emerald-400 font-bold text-sm">{stats}</span>
      )}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
)

const Features = () => (
  <section className="py-32 px-6 bg-[#0a0a0f]">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
        <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">Technology</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Engineered for Performance</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Our proprietary algorithm analyzes your unique circadian pattern and delivers personalized optimization protocols.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={Brain}
          title="Neural Synchronization"
          description="AI maps your neural patterns to optimize cognitive performance during your peak hours."
          stats="+47% focus"
        />
        <FeatureCard 
          icon={Activity}
          title="Metabolic Tuning"
          description="Real-time metabolic tracking adjusts your nutrition and activity recommendations based on circadian data."
          stats="+2.5x energy"
        />
        <FeatureCard 
          icon={Zap}
          title="Energy Optimization"
          description="Proprietary algorithms maximize ATP production and cellular regeneration throughout your day."
          stats="94% satisfaction"
        />
        <FeatureCard 
          icon={Heart}
          title="Recovery Tracking"
          description="Monitor your body's recovery signals and optimize rest periods for maximum regeneration."
          stats="+32% recovery"
        />
        <FeatureCard 
          icon={Shield}
          title="Military-Grade Privacy"
          description="Your biological data is encrypted with AES-256 and never shared or sold. Ever."
          stats="100% private"
        />
        <FeatureCard 
          icon={Award}
          title="Science-Backed"
          description="Built on 10+ years of peer-reviewed circadian biology research from Stanford & MIT."
          stats="50+ studies"
        />
      </div>
    </div>
  </section>
)

const Science = () => (
  <section className="py-32 px-6 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d12]">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">The Science</span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-6">Backed by Research</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            AdenoSense integrates over a decade of circadian biology research with cutting-edge AI to create truly personalized bio-optimization.
          </p>
          <ul className="space-y-5">
            {[
              { title: 'Peer-reviewed studies', desc: 'From Stanford, MIT, and leading research institutions' },
              { title: 'Proprietary algorithm', desc: 'Analyzes 50+ biometric signals in real-time' },
              { title: 'Continuous learning', desc: 'Improves recommendations based on your data' },
              { title: 'Enterprise security', desc: 'SOC 2 Type II certified, GDPR compliant' }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="text-emerald-400" size={14} />
                </div>
                <div>
                  <span className="text-white font-medium">{item.title}</span>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
          </div>
          {/* Stats card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-8 -left-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6"
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-gray-400 text-sm">Years Research</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400 text-sm">Clinical Studies</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
)

const Results = () => (
  <section id="results" className="py-32 px-6 bg-[#0d0d12]">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
        <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">Results</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Real Users, Real Results</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Join thousands who've transformed their performance with AdenoSense.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { quote: "I've tried everything for my energy crashes. AdenoSense is the first thing that actually works. My 2pm slump is gone.", author: "James D.", role: "CEO, Tech Startup" },
          { quote: "As an athlete, recovery is everything. This app helped me optimize my sleep and training schedule. Game changer.", author: "Sarah M.", role: "Professional Runner" },
          { quote: "The sleep recommendations are incredibly accurate. I've never felt more rested despite sleeping the same hours.", author: "Michael R.", role: "Investment Banker" }
        ].map((testimonial, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/5"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={18} className="fill-emerald-400 text-emerald-400" />
              ))}
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                {testimonial.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-white font-medium">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const PricingCard = ({ tier, price, features, popular, description }) => (
  <div className={`relative p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.02] ${popular ? 'bg-white/10 border-emerald-500/50' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 py-1.5 rounded-full text-sm font-bold">
        Most Popular
      </div>
    )}
    <div className="text-center mb-8">
      <h3 className="text-xl font-bold text-white mb-2">{tier}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-5xl font-bold text-white">${price}</span>
        <span className="text-gray-500">/month</span>
      </div>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3">
          <Check className="text-emerald-400 flex-shrink-0" size={18} />
          <span className="text-gray-300 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${popular ? 'bg-white text-black hover:bg-gray-100' : 'border border-white/20 text-white hover:bg-white/10'}`}>
      Get Started
    </button>
  </div>
)

const Pricing = () => (
  <section id="pricing" className="py-32 px-6 bg-[#0a0a0f]">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">Pricing</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Invest in Your Performance</h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">Start with a 7-day free trial. No credit card required. Cancel anytime.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <PricingCard 
          tier="Starter" 
          price="29"
          description="For individuals getting started"
          features={[
            'Basic circadian analysis',
            'Daily optimization tips',
            'Sleep tracking',
            'Email support',
            'Mobile app access'
          ]}
        />
        <PricingCard 
          tier="Pro" 
          price="49"
          popular={true}
          description="For optimization enthusiasts"
          features={[
            'Advanced AI analysis',
            'Real-time notifications',
            'Priority support',
            'Wearable integration',
            'Detailed analytics dashboard',
            'Custom protocols'
          ]}
        />
        <PricingCard 
          tier="Enterprise" 
          price="99"
          description="For teams and organizations"
          features={[
            'Everything in Pro',
            'Dedicated success coach',
            'Team management',
            'API access',
            'Custom integrations',
            'SLA guarantee'
          ]}
        />
      </div>
    </div>
  </section>
)

const CTA = () => (
  <section className="py-32 px-6 bg-gradient-to-b from-[#0a0a0f] to-[#0d1117] relative overflow-hidden">
    {/* Background effect */}
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px]" />
    </div>
    
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Optimize?</h2>
        <p className="text-xl text-gray-400 mb-10">Join 12,000+ high performers who've transformed their energy, focus, and recovery with AdenoSense.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://adenosense.pages.dev/" 
            className="group bg-white text-black hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Start Free Trial
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </a>
        </div>
        <p className="text-gray-500 mt-6 text-sm">7-day free trial • Cancel anytime • No credit card required</p>
      </motion.div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="border-t border-white/5 py-16 px-6 bg-[#0a0a0f]">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-5 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
              <Brain className="text-white" size={20} />
            </div>
            <span className="text-lg font-bold text-white">ADENOSENSE</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            Pioneering bio-intelligent systems for human performance optimization through advanced circadian technology.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <button key={social} className="text-gray-500 hover:text-emerald-400 transition-colors text-sm font-medium">
                {social}
              </button>
            ))}
          </div>
        </div>
        
        {[
          { title: 'Product', links: ['Features', 'Pricing', 'Science', 'API'] },
          { title: 'Company', links: ['About', 'Careers', 'Blog', 'Press'] },
          { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Compliance'] }
        ].map((section, i) => (
          <div key={i}>
            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-3">
              {section.links.map((link, j) => (
                <li key={j}>
                  <button className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} AdenoSense Technologies. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <Navbar scrolled={scrolled} onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero />
      <HowItWorks />
      <Features />
      <Science />
      <Results />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App