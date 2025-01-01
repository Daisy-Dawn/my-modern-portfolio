import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import About from '@/components/pages/About'
import Services from '@/components/pages/Services'
import Skills from '@/components/pages/Skills'
import Portfolio from '@/components/pages/Portfolio'
import Contact from '@/components/pages/Contact'
// import Hero from '@/components/pages/Hero'
export default function Home() {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}
