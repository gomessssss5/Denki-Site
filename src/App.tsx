/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle, RefreshCw, ExternalLink, Shield, Zap, Key, Eye, Home, Briefcase, Info, Phone, Camera, ShieldAlert, Lock, Settings, Instagram, MapPin, Clock } from "lucide-react";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Direct image URL scraped from ImgBB
  const imageSrc = "https://i.ibb.co/twvy7Zb8/Chat-GPT-Image-26-de-jun-de-2026-12-11-38.png";
  const originalPageUrl = "https://ibb.co/rKznCbZ4";

  return (
    <div 
      id="app-container" 
      className="min-h-screen w-full bg-neutral-950 select-none overflow-x-hidden relative"
    >
      <header className="fixed top-0 left-0 w-full z-50 bg-[#bd1a1a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
          <div className="text-xl font-bold font-serif tracking-wider">Denki</div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-2 text-white hover:text-red-300 transition-colors cursor-pointer"><Home size={16} /><span>Início</span></button>
            <button onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center space-x-2 text-white hover:text-red-300 transition-colors cursor-pointer"><Briefcase size={16} /><span>Serviços</span></button>
            <button onClick={() => document.getElementById('areas-atendidas')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center space-x-2 text-white hover:text-red-300 transition-colors cursor-pointer"><MapPin size={16} /><span>Áreas</span></button>
            <button onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center space-x-2 text-white hover:text-red-300 transition-colors cursor-pointer"><Phone size={16} /><span>Contato</span></button>
          </nav>
        </div>
      </header>

      {/* Hero Section (Início) - Red Background */}
      <section id="hero-section" className="bg-[#bd1a1a] pt-32 pb-20 px-6 md:px-12 lg:px-16 relative overflow-hidden">
        {/* Decorative clean radial gradients for depth on the red background */}
        <div 
          id="bg-ambient-light" 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl pointer-events-none" 
        />
        <div 
          id="bg-ambient-light-dark" 
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-red-900/30 rounded-full blur-3xl pointer-events-none" 
        />

        <div 
          id="main-layout" 
          className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10"
        >
          {/* Left Column: Professional Copy & Info */}
          <motion.div 
            id="text-content-section" 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6 md:space-y-8 text-white"
          >
            {/* Subtle Trust Badge */}
            <div 
              id="trust-badge" 
              className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full w-fit backdrop-blur-md"
            >
              <span className="text-red-200 text-sm">日本</span>
              <span id="trust-badge-text" className="text-xs font-semibold tracking-wider uppercase text-red-100">
                Denki Instalações
              </span>
            </div>

            {/* Main Statement Requested by User */}
            <h1 
              id="main-heading" 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-sm font-serif"
            >
              Protegemos o que é mais importante para você.
            </h1>

            {/* Description Requested by User */}
            <p 
              id="main-description" 
              className="text-base sm:text-lg text-red-100/90 leading-relaxed font-sans font-medium"
            >
              Soluções completas em segurança eletrônica e instalações elétricas para residências, condomínios, empresas e indústrias.
            </p>

            {/* Bullet highlights for extra premium appeal and spacing */}
            <div id="service-features" className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div id="feature-elec" className="flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <Zap size={20} className="text-amber-300 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">Energia & Padrão</h3>
                  <p className="text-xs text-red-100/80">Instalações elétricas seguras.</p>
                </div>
              </div>
              <div id="feature-sec" className="flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <Eye size={20} className="text-red-200 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">Monitoramento</h3>
                  <p className="text-xs text-red-100/80">Câmeras e alarmes 24h.</p>
                </div>
              </div>
              <div id="feature-perimeter" className="flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <Shield size={20} className="text-red-200 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">Proteção Perimetral</h3>
                  <p className="text-xs text-red-100/80">Cercas e concertinas.</p>
                </div>
              </div>
              <div id="feature-access" className="flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <Key size={20} className="text-amber-300 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">Controle de Acesso</h3>
                  <p className="text-xs text-red-100/80">Fechaduras eletrônicas modernas.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image Display Area */}
          <div 
            id="image-display-section" 
            className="lg:col-span-6 flex items-center justify-center relative min-h-[350px] md:min-h-[450px]"
          >
            <AnimatePresence mode="wait">
              {/* Loading State */}
              {!isLoaded && !hasError && (
                <motion.div
                  id="loading-indicator"
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center space-y-4"
                >
                  <motion.div
                    id="loading-spinner"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="text-white/60"
                  >
                    <RefreshCw size={32} strokeWidth={1.5} />
                  </motion.div>
                  <p id="loading-text" className="text-sm font-sans tracking-wide text-white/70 animate-pulse">
                    Carregando imagem...
                  </p>
                </motion.div>
              )}

              {/* Error State */}
              {hasError && (
                <motion.div
                  id="error-card"
                  key="error"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl max-w-md mx-auto space-y-4 text-white"
                >
                  <div id="error-icon-container" className="p-3 bg-red-500/20 text-white rounded-full">
                    <AlertCircle size={28} strokeWidth={1.5} />
                  </div>
                  <div id="error-text-container" className="space-y-1">
                    <h3 id="error-title" className="font-semibold text-white text-lg">
                      Não foi possível carregar a imagem
                    </h3>
                    <p id="error-description" className="text-sm text-red-100/80 leading-relaxed">
                      Houve um problema de conexão ou o link original foi modificado.
                    </p>
                  </div>
                  <a
                    id="error-external-link"
                    href={originalPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white text-red-700 rounded-xl hover:bg-red-50 active:scale-95 transition-all text-sm font-semibold shadow-md"
                  >
                    <span>Ver no ImgBB</span>
                    <ExternalLink size={16} />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Image Container */}
            <motion.div
              id="image-frame"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ 
                opacity: isLoaded ? 1 : 0, 
                y: isLoaded ? 0 : 20,
                scale: isLoaded ? 1 : 0.97 
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-[28px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-700 hover:shadow-[0_35px_70px_-10px_rgba(0,0,0,0.5)] ${
                isLoaded ? "block" : "hidden"
              }`}
            >
              <img
                id="centered-main-image"
                src={imageSrc}
                alt="Especialidades em Segurança e Instalações"
                referrerPolicy="no-referrer"
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl select-none pointer-events-none"
                style={{ minWidth: "280px" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smooth Gradient Divider transitioning Red to Black */}
      <div 
        id="gradient-divider" 
        className="h-32 bg-gradient-to-b from-[#bd1a1a] to-neutral-950"
      />

      {/* Services Section with Black Background */}
      <section 
        id="servicos" 
        className="bg-neutral-950 py-12 px-6 md:px-12 lg:px-16 text-white min-h-[400px] relative"
      >
        <div id="services-container" className="max-w-7xl mx-auto space-y-8">
          <h2 
            id="services-heading" 
            className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-white"
          >
            Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl">
              <Camera className="text-red-500 mb-6" size={36} />
              <h3 className="text-2xl font-bold font-serif mb-4">Câmeras de Segurança</h3>
              <p className="text-white/70 mb-6 text-sm">Monitore seu patrimônio em tempo real, de qualquer lugar, pelo celular.</p>
              <ul className="text-white/80 text-sm space-y-3">
                <li className="flex items-center gap-2"><span>•</span> Acesso remoto via aplicativo</li>
                <li className="flex items-center gap-2"><span>•</span> Imagens em alta definição</li>
                <li className="flex items-center gap-2"><span>•</span> Gravação 24 horas</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl">
              <ShieldAlert className="text-red-500 mb-6" size={36} />
              <h3 className="text-2xl font-bold font-serif mb-4">Alarmes Monitorados</h3>
              <p className="text-white/70 mb-6 text-sm">Proteção inteligente contra invasões com resposta rápida e alta confiabilidade.</p>
              <ul className="text-white/80 text-sm space-y-3">
                <li className="flex items-center gap-2"><span>•</span> Sensores de alta precisão</li>
                <li className="flex items-center gap-2"><span>•</span> Notificações em tempo real</li>
                <li className="flex items-center gap-2"><span>•</span> Monitoramento contínuo</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl">
              <Key className="text-red-500 mb-6" size={36} />
              <h3 className="text-2xl font-bold font-serif mb-4">Controle de Acesso</h3>
              <p className="text-white/70 mb-6 text-sm">Gerencie a entrada e saída de pessoas com mais segurança e praticidade.</p>
              <ul className="text-white/80 text-sm space-y-3">
                <li className="flex items-center gap-2"><span>•</span> Fechaduras eletrônicas</li>
                <li className="flex items-center gap-2"><span>•</span> Controle por senha, cartão ou aplicativo</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl">
              <Zap className="text-red-500 mb-6" size={36} />
              <h3 className="text-2xl font-bold font-serif mb-4">Instalações Elétricas</h3>
              <p className="text-white/70 mb-6 text-sm">Projetos elétricos executados com qualidade, segurança e dentro das normas.</p>
              <ul className="text-white/80 text-sm space-y-3">
                <li className="flex items-center gap-2"><span>•</span> Instalações residenciais e comerciais</li>
                <li className="flex items-center gap-2"><span>•</span> Manutenção elétrica</li>
                <li className="flex items-center gap-2"><span>•</span> Ampliações e adequações</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl">
              <Home className="text-red-500 mb-6" size={36} />
              <h3 className="text-2xl font-bold font-serif mb-4">Padrão de Entrada</h3>
              <p className="text-white/70 mb-6 text-sm">Instalação e adequação do padrão de entrada conforme as exigências da concessionária.</p>
              <ul className="text-white/80 text-sm space-y-3">
                <li className="flex items-center gap-2"><span>•</span> Padrão residencial e comercial</li>
                <li className="flex items-center gap-2"><span>•</span> Serviço conforme normas técnicas</li>
                <li className="flex items-center gap-2"><span>•</span> Materiais de qualidade</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl">
              <Shield className="text-red-500 mb-6" size={36} />
              <h3 className="text-2xl font-bold font-serif mb-4">Cerca Elétrica</h3>
              <p className="text-white/70 mb-6 text-sm">Mais proteção para o perímetro do seu imóvel com equipamentos confiáveis.</p>
              <ul className="text-white/80 text-sm space-y-3">
                <li className="flex items-center gap-2"><span>•</span> Alta eficiência</li>
                <li className="flex items-center gap-2"><span>•</span> Equipamentos certificados</li>
                <li className="flex items-center gap-2"><span>•</span> Instalação profissional</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl">
              <Shield className="text-red-500 mb-6" size={36} />
              <h3 className="text-2xl font-bold font-serif mb-4">Concertina</h3>
              <p className="text-white/70 mb-6 text-sm">Barreira física de alta resistência para reforçar a segurança do seu patrimônio.</p>
              <ul className="text-white/80 text-sm space-y-3">
                <li className="flex items-center gap-2"><span>•</span> Proteção perimetral</li>
                <li className="flex items-center gap-2"><span>•</span> Instalação segura</li>
                <li className="flex items-center gap-2"><span>•</span> Ideal para residências e empresas</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl">
              <Lock className="text-red-500 mb-6" size={36} />
              <h3 className="text-2xl font-bold font-serif mb-4">Fechaduras Eletrônicas</h3>
              <p className="text-white/70 mb-6 text-sm">Mais praticidade e segurança para controlar o acesso ao seu imóvel.</p>
              <ul className="text-white/80 text-sm space-y-3">
                <li className="flex items-center gap-2"><span>•</span> Abertura por senha</li>
                <li className="flex items-center gap-2"><span>•</span> Modelos com biometria</li>
                <li className="flex items-center gap-2"><span>•</span> Sem necessidade de chaves</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl">
              <Settings className="text-red-500 mb-6" size={36} />
              <h3 className="text-2xl font-bold font-serif mb-4">Motores para Portão</h3>
              <p className="text-white/70 mb-6 text-sm">Automatize seu portão com rapidez, conforto e segurança.</p>
              <ul className="text-white/80 text-sm space-y-3">
                <li className="flex items-center gap-2"><span>•</span> Instalação profissional</li>
                <li className="flex items-center gap-2"><span>•</span> Equipamentos de alta durabilidade</li>
                <li className="flex items-center gap-2"><span>•</span> Manutenção e assistência</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider transitioning Black to Red */}
      <div 
        id="gradient-divider-2" 
        className="h-32 bg-gradient-to-b from-neutral-950 to-[#bd1a1a]"
      />

      {/* Areas Atendidas Section with Red Background */}
      <section 
        id="areas-atendidas" 
        className="bg-[#bd1a1a] py-24 px-6 md:px-12 lg:px-16 text-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/NYC_wideangle_south_from_Top_of_the_Rock.jpg/960px-NYC_wideangle_south_from_Top_of_the_Rock.jpg"
              alt="Áreas Atendidas"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-12">Áreas Atendidas</h2>
            <ul className="text-xl md:text-2xl space-y-6 font-medium text-red-100">
              {['Americana', 'Campinas', 'Nova Odessa', 'Santa Bárbara', 'Sumaré'].map(city => (
                <motion.li 
                  key={city}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="cursor-pointer transition-colors hover:text-white"
                >
                  {city}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gradient Divider transitioning Red to Black */}
      <div 
        id="gradient-divider-3" 
        className="h-32 bg-gradient-to-b from-[#bd1a1a] to-neutral-950"
      />

      {/* Contato Section with Black Background */}
      <section 
        id="contato" 
        className="bg-neutral-950 py-24 px-6 md:px-12 lg:px-16 text-white text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Solicite um orçamento sem compromisso.</h2>
        <p className="text-white/70 mb-16 text-lg max-w-2xl mx-auto">Nossa equipe está pronta para encontrar a melhor solução para sua residência, empresa ou condomínio.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* WhatsApp Card */}
          <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center">
            <Phone className="text-red-500 mb-6" size={36} />
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-white/70 mb-6">(19) 98818-0682</p>
            <a href="https://wa.me/5519988180682" target="_blank" rel="noopener noreferrer" className="mt-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-colors">
              Conversar agora
            </a>
          </div>

          {/* Instagram Card */}
          <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center">
            <Instagram className="text-red-500 mb-6" size={36} />
            <h3 className="text-xl font-bold mb-2">Instagram</h3>
            <p className="text-white/70 mb-6">@denkiseg</p>
            <a href="https://instagram.com/denkiseg" target="_blank" rel="noopener noreferrer" className="mt-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-colors">
              Ver perfil
            </a>
          </div>

          {/* Área de Atendimento Card */}
          <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center">
            <MapPin className="text-red-500 mb-6" size={36} />
            <h3 className="text-xl font-bold mb-2">Área de Atendimento</h3>
            <p className="text-white/70 text-sm">Região Metropolitana de Campinas</p>
            <p className="text-white/80 mt-2 text-sm">Americana • Campinas • Nova Odessa • Santa Bárbara d'Oeste • Sumaré e região.</p>
          </div>

          {/* Horário Card */}
          <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center">
            <Clock className="text-red-500 mb-6" size={36} />
            <h3 className="text-xl font-bold mb-2">Horário</h3>
            <p className="text-white/70 text-sm">Segunda a Sexta</p>
            <p className="text-white/80 mt-1 text-sm">08h às 18h</p>
          </div>
        </div>
      </section>
    </div>
  );
}

