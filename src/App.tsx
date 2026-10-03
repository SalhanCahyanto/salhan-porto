import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Shield, 
  Cpu, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Mail, 
  ChevronDown,
  Code
} from 'lucide-react';

const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    const handleType = () => {
      const currentText = texts[textIndex];
      
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          timer = setTimeout(handleType, 100);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        } else {
          timer = setTimeout(handleType, 50);
        }
      }
    };

    timer = setTimeout(handleType, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <span className="inline-block min-h-[1.5em] text-cyber-neonBlue text-glow-blue border-r-2 border-cyber-neonBlue pr-1 animate-pulse">
      {displayText}
    </span>
  );
};

const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="flex items-center gap-4 mb-12"
  >
    {Icon && <Icon className="w-8 h-8 text-cyber-neonPurple" />}
    <h2 className="text-3xl md:text-4xl font-bold text-white text-glow-purple tracking-wide">
      {children}
    </h2>
    <div className="flex-1 h-[1px] bg-gradient-to-r from-cyber-neonPurple/50 to-transparent ml-4" />
  </motion.div>
);

function App() {
  const scrollToAbout = () => {
    document.getElementById('tentang-saya')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cyber-dark relative selection:bg-cyber-neonPurple/30 selection:text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyber-neonBlue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyber-neonPurple/10 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] left-[60%] w-[20%] h-[20%] bg-cyber-neonBlue/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-12">
        
        {/* 1. Hero Section */}
        <section className="min-h-[90vh] flex flex-col md:flex-row justify-center items-center gap-12 text-center md:text-left relative pt-20">
          
          {/* Profile Picture */}
          <motion.a 
            href="https://www.linkedin.com/in/salhan-cahyanto-985508362" 
            target="_blank" 
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="relative block w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-tr from-cyber-neonBlue to-cyber-neonPurple shadow-neon-blue cursor-pointer group"
          >
            {/* Inner Container for perfect circle and clipping */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyber-dark z-10">
              <img 
                src="/profile.jpg" 
                alt="Salhan Cahyanto Profile" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Cyber Overlay / Scanning Effect */}
              <div className="absolute inset-0 bg-cyber-neonBlue/10 mix-blend-overlay pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-neonBlue/50 shadow-[0_0_8px_rgba(0,240,255,0.8)] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite] pointer-events-none" />
            </div>

            {/* Glowing Rings Behind */}
            <div className="absolute inset-0 rounded-full border border-cyber-neonBlue/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 pointer-events-none" />
            <div className="absolute inset-0 rounded-full border border-cyber-neonPurple/20 scale-125 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 pointer-events-none" />
          </motion.a>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyber-neonBlue to-cyber-neonPurple mb-4 text-glow-blue tracking-tight">
              Salhan Cahyanto
            </h1>
            <div className="text-lg md:text-2xl font-light text-slate-300 mb-8 h-8">
              <Typewriter texts={[
                "Mahasiswa Teknik Komputer",
                "Cyber Security Enthusiast",
                "Founder of KickSheen"
              ]} />
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              onClick={scrollToAbout}
              className="group relative px-8 py-4 bg-cyber-glass border border-cyber-neonBlue/50 text-white rounded-full font-medium tracking-wider overflow-hidden hover:shadow-neon-blue transition-all duration-300 self-center md:self-start"
            >
              <div className="absolute inset-0 bg-cyber-neonBlue/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                Jelajahi Profil Saya
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </section>

        {/* 2. About Me Section */}
        <section id="tentang-saya" className="py-24">
          <SectionHeading icon={Terminal}>Tentang Saya</SectionHeading>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 lg:col-span-1 border-t-4 border-t-cyber-neonBlue neon-border-hover"
            >
              <ul className="space-y-4 text-sm md:text-base">
                <li className="flex flex-col">
                  <span className="text-cyber-neonBlue text-xs uppercase font-bold tracking-wider mb-1">NIM</span>
                  <span className="text-white font-medium">2405110025</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-cyber-neonBlue text-xs uppercase font-bold tracking-wider mb-1">Universitas</span>
                  <span className="text-white font-medium">Universitas Negeri Semarang (UNNES)</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-cyber-neonBlue text-xs uppercase font-bold tracking-wider mb-1">Program Studi</span>
                  <span className="text-white font-medium">Teknik Komputer (Angkatan 2024)</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-cyber-neonBlue text-xs uppercase font-bold tracking-wider mb-1">Lokasi</span>
                  <span className="text-white font-medium">Semarang, Jawa Tengah, Indonesia</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 lg:col-span-2 space-y-6 border-l-4 border-l-cyber-neonPurple neon-border-hover"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Deskripsi</h3>
                <p className="leading-relaxed text-slate-300">
                  Saya adalah mahasiswa Teknik Komputer yang memiliki passion mendalam di dunia teknologi informasi. 
                  Selain sibuk di dunia akademis, saya juga memiliki jiwa wirausaha dengan mendirikan dan mengelola 
                  <span className="text-cyber-neonBlue font-medium"> KickSheen</span> (Kunjungi Instagram kami: <a href="https://www.instagram.com/kick.sheen/" target="_blank" rel="noreferrer" className="text-cyber-neonPurple hover:underline">@kick.sheen</a>), 
                  sebuah bisnis yang bergerak di bidang jasa perawatan dan cuci sepatu premium.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Cita-cita</h3>
                <p className="leading-relaxed text-slate-300">
                  Saya bercita-cita menjadi seorang <span className="text-cyber-neonBlue font-medium">Cyber Security Architect</span> dan <span className="text-cyber-neonPurple font-medium">IT Infrastructure Consultant</span> global. 
                  Saya ingin tidak hanya handal merancang sistem yang efisien, tetapi juga mampu membangun pertahanan digital yang kuat dan tak tertembus untuk berbagai instansi besar.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Areas of Expertise */}
        <section className="py-24">
          <SectionHeading icon={Code}>Bidang Keahlian</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hardware",
                icon: Cpu,
                color: "cyber-neonBlue",
                desc: "Berpengalaman dalam IT Hardware Support. Mampu merakit, melakukan troubleshooting, serta memelihara infrastruktur fisik server, komputer klien, dan perangkat jaringan untuk memastikan operasional tanpa hambatan."
              },
              {
                title: "Software",
                icon: Terminal,
                color: "cyber-neonPurple",
                desc: "Terampil dalam instalasi, konfigurasi, dan pemeliharaan berbagai perangkat lunak. Memahami logika sistem untuk mengoptimalkan kinerja aplikasi dan mendukung efisiensi operasional."
              },
              {
                title: "Security",
                icon: Shield,
                color: "cyber-neonBlue",
                desc: "Memiliki keahlian khusus di bidang Penetration Testing dan Bug Bounty Hunting. Fokus pada identifikasi kerentanan sistem, pengujian keamanan aplikasi web, serta menjaga integritas data dari berbagai ancaman siber."
              }
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 group transition-all duration-300 hover:border-cyber-neonBlue hover:shadow-neon-blue relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyber-neonBlue/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-cyber-neonBlue/20 transition-all duration-500" />
                <skill.icon className={`w-12 h-12 mb-6 text-${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-2xl font-bold text-white mb-4">{skill.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. Timeline Section */}
        <section className="py-24">
          <SectionHeading icon={Briefcase}>Pengalaman & Pendidikan</SectionHeading>
          
          <div className="relative border-l-2 border-cyber-neonPurple/30 ml-4 md:ml-8 space-y-12">
            {[
              {
                type: "Pendidikan",
                title: "Universitas Negeri Semarang - Teknik Komputer",
                date: "Agustus 2024 - Sekarang",
                icon: GraduationCap,
                desc: null
              },
              {
                type: "Pengalaman Kerja",
                title: "IT Support di Charlie Hospital Semarang",
                date: "Januari 2023 - Sekarang",
                icon: Briefcase,
                desc: "Fokus tugas: Troubleshooting hardware/software, memantau kinerja jaringan, serta mendukung proses backup & recovery data."
              },
              {
                type: "Bootcamp",
                title: "Cyber Security Bootcamp di ID-Networkers",
                date: "Mei 2025 - Sekarang",
                icon: Shield,
                desc: null
              },
              {
                type: "Bootcamp",
                title: "Web Pentest & Bug Bounty Hunting di Jadi Hacker",
                date: "Maret 2025 - Sekarang",
                icon: Shield,
                desc: null
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-cyber-dark border-2 border-cyber-neonPurple flex items-center justify-center shadow-neon-purple">
                  <item.icon className="w-4 h-4 text-cyber-neonBlue" />
                </div>
                <div className="glass-card p-6 neon-border-hover">
                  <span className="inline-block px-3 py-1 bg-cyber-neonPurple/20 text-cyber-neonPurple text-xs font-bold rounded-full mb-3">
                    {item.date}
                  </span>
                  <div className="text-xs font-semibold text-cyber-neonBlue uppercase tracking-wider mb-1">{item.type}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  {item.desc && (
                    <p className="text-slate-400 text-sm leading-relaxed mt-3">
                      {item.desc}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Certifications & Top Skills */}
        <section className="py-24">
          <SectionHeading icon={Award}>Sertifikasi & Keahlian Utama</SectionHeading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Shield className="text-cyber-neonBlue" /> Top Skills
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Penetration Testing", level: 90 },
                  { name: "IT Hardware Support", level: 95 }
                ].map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-cyber-neonBlue to-cyber-neonPurple shadow-neon-blue"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="text-cyber-neonPurple" /> Sertifikasi
              </h3>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-cyber-border bg-cyber-dark/50 hover:border-cyber-neonPurple transition-colors duration-300">
                <div className="p-3 bg-cyber-neonPurple/10 rounded-lg">
                  <Award className="w-8 h-8 text-cyber-neonPurple" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Web Pentest & Bug Bounty Hunting</h4>
                  <p className="text-cyber-neonBlue text-sm mt-1 font-medium">L1-Batch 20</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. Contact Section */}
        <section className="py-24">
          <SectionHeading icon={Mail}>Hubungi Saya</SectionHeading>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Mari Berkolaborasi!</h3>
              <p className="text-slate-400 mb-8">
                Tertarik untuk berdiskusi tentang keamanan siber, infrastruktur IT, atau sekadar menyapa? Jangan ragu untuk menghubungi saya.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:salhancahyanto@icloud.com" className="flex items-center gap-4 text-slate-300 hover:text-cyber-neonBlue transition-colors group">
                  <div className="p-3 glass-card group-hover:border-cyber-neonBlue transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  salhancahyanto@icloud.com
                </a>
                <a href="https://www.linkedin.com/in/salhan-cahyanto-985508362" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-cyber-neonPurple transition-colors group">
                  <div className="p-3 glass-card group-hover:border-cyber-neonPurple transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  LinkedIn Profile
                </a>
                <a href="https://www.instagram.com/kick.sheen/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-cyber-neonBlue transition-colors group">
                  <div className="p-3 glass-card group-hover:border-cyber-neonBlue transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  @kick.sheen (Bisnis)
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 glass-card p-8"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Nama Lengkap</label>
                    <input 
                      type="text" 
                      className="w-full bg-cyber-dark/50 border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-neonBlue focus:ring-1 focus:ring-cyber-neonBlue transition-all"
                      placeholder="Masukkan nama"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-cyber-dark/50 border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-neonPurple focus:ring-1 focus:ring-cyber-neonPurple transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Pesan</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-cyber-dark/50 border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-neonBlue focus:ring-1 focus:ring-cyber-neonBlue transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-cyber-neonBlue to-cyber-neonPurple text-white font-bold rounded-lg hover:shadow-neon-blue transition-all duration-300 transform hover:-translate-y-1">
                  Kirim Pesan
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-cyber-border py-8 text-center bg-cyber-dark/80 backdrop-blur-md relative z-10">
        <p className="text-slate-400 font-medium">
          © 2026 Salhan Cahyanto - Code, Security, & Hustle.
        </p>
      </footer>
    </div>
  );
}

export default App;
