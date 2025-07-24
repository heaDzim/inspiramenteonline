import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Brain, Leaf, Users, BookOpen, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'
import ArticleModal from './components/ArticleModal.jsx'
import { articles } from './data/articles.js'
import './App.css'

// Importando as imagens
import heroImage from './assets/images/saude-mental-hero.jpeg'

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openArticle = (article) => {
    setSelectedArticle(article)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedArticle(null)
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gradient">Inspiramente Online</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">Início</a>
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre</a>
            <a href="#artigos" className="text-sm font-medium hover:text-primary transition-colors">Artigos</a>
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">Serviços</a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
          </nav>
          <Button className="hidden md:inline-flex">Começar Agora</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-gradient section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <Badge variant="secondary" className="w-fit">
                <Heart className="w-4 h-4 mr-2" />
                Bem-estar Mental
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Sua jornada para o{' '}
                <span className="text-gradient">bem-estar mental</span>{' '}
                começa aqui
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Descubra recursos, artigos e ferramentas para cuidar da sua saúde mental. 
                Encontre equilíbrio, serenidade e bem-estar emocional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="breathing-animation">
                  Explorar Recursos
                </Button>
                <Button variant="outline" size="lg">
                  Ler Artigos
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Saúde Mental e Bem-estar" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Como podemos te ajudar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma abordagem completa para o cuidado da sua saúde mental
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Saúde Mental</CardTitle>
                <CardDescription>
                  Artigos e recursos sobre ansiedade, depressão e bem-estar emocional
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Mindfulness</CardTitle>
                <CardDescription>
                  Técnicas de meditação e mindfulness para encontrar paz interior
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Comunidade</CardTitle>
                <CardDescription>
                  Conecte-se com outras pessoas em jornadas similares de autocuidado
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="artigos" className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Artigos em Destaque</h2>
            <p className="text-lg text-muted-foreground">
              Conteúdo cuidadosamente selecionado para sua jornada de bem-estar
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="card-hover overflow-hidden cursor-pointer" onClick={() => openArticle(article)}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge variant="outline" className="w-fit">{article.category}</Badge>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <BookOpen className="w-4 h-4 mr-2" />
              Ver Todos os Artigos
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Sobre o Inspiramente Online</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O Inspiramente Online nasceu da necessidade de democratizar o acesso a informações 
              de qualidade sobre saúde mental. Acreditamos que todos merecem ter acesso a recursos 
              que promovam o bem-estar emocional e a serenidade interior.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa missão é criar um espaço seguro e acolhedor onde você possa encontrar 
              orientação, inspiração e ferramentas práticas para cuidar da sua saúde mental 
              de forma holística e sustentável.
            </p>
            <div className="flex justify-center pt-6">
              <Button size="lg">
                Saiba Mais Sobre Nós
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground">
              Estamos aqui para apoiar sua jornada de bem-estar mental
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Fale Conosco</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contato@inspiramenteonline.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>(11) 9999-9999</span>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Siga-nos nas redes sociais</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Tem alguma dúvida ou sugestão? Adoraríamos ouvir você!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>
                <Button className="w-full">
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/20 border-t">
        <div className="container mx-auto max-w-6xl py-12 px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-primary" />
                <span className="font-bold text-gradient">Inspiramente Online</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Sua jornada para o bem-estar mental começa aqui.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Navegação</h4>
              <div className="space-y-2 text-sm">
                <a href="#inicio" className="block hover:text-primary transition-colors">Início</a>
                <a href="#sobre" className="block hover:text-primary transition-colors">Sobre</a>
                <a href="#artigos" className="block hover:text-primary transition-colors">Artigos</a>
                <a href="#contato" className="block hover:text-primary transition-colors">Contato</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Recursos</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-primary transition-colors">Meditação Guiada</a>
                <a href="#" className="block hover:text-primary transition-colors">Exercícios de Respiração</a>
                <a href="#" className="block hover:text-primary transition-colors">Técnicas de Relaxamento</a>
                <a href="#" className="block hover:text-primary transition-colors">FAQ</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Suporte</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-primary transition-colors">Central de Ajuda</a>
                <a href="#" className="block hover:text-primary transition-colors">Política de Privacidade</a>
                <a href="#" className="block hover:text-primary transition-colors">Termos de Uso</a>
                <a href="#" className="block hover:text-primary transition-colors">Contato</a>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Inspiramente Online. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Article Modal */}
      <ArticleModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        article={selectedArticle}
      />
    </div>
  )
}

export default App

