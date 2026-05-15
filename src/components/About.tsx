import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Award, Database, TrendingUp, Cpu, Network } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: TrendingUp,
      value: '2+',
      label: 'Years Experience',
      description: 'Building Systems'
    },
    {
      icon: Award,
      value: '6',
      label: 'Certifications',
      description: 'Cloud & Dev'
    },
    {
      icon: Database,
      value: '100+',
      label: 'Concurrent Users',
      description: 'Scalable Platforms'
    },
    {
      icon: Cpu,
      value: '25%',
      label: 'Latency Reduction',
      description: 'Optimized Apps'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-cyber-teal">
                Software Engineer
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {portfolioData.summary}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise spans across Backend Architecture, Fullstack Web Development, 
                  Cloud Infrastructure, and System Reliability. I'm passionate about building scalable, 
                  high-performance systems that solve complex real-world problems.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="card-cyber text-center group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-cyber rounded-full flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Core Competencies */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Core <span className="text-gradient">Competencies</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-glow p-6 text-center">
                <div className="w-16 h-16 bg-cyber-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-cyber-teal" />
                </div>
                <h4 className="font-semibold mb-2">Backend & Web Apps</h4>
                <p className="text-sm text-muted-foreground">
                  Building REST APIs and fullstack workflows with Node.js, Spring Boot, and React
                </p>
              </div>
              <div className="card-glow p-6 text-center">
                <div className="w-16 h-16 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-cyber-green" />
                </div>
                <h4 className="font-semibold mb-2">Cloud Infrastructure</h4>
                <p className="text-sm text-muted-foreground">
                  Deploying scalable services using AWS (Lambda, API Gateway, EC2, S3)
                </p>
              </div>
              <div className="card-glow p-6 text-center">
                <div className="w-16 h-16 bg-cyber-amber/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-cyber-amber" />
                </div>
                <h4 className="font-semibold mb-2">Reliability & DevOps</h4>
                <p className="text-sm text-muted-foreground">
                  Optimizing systems with monitoring, health checks, and CI/CD automation
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;