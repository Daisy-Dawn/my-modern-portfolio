import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import About from '@/components/pages/About'
import Services from '@/components/pages/Services'
import Skills from '@/components/pages/Skills'
import Portfolio from '@/components/pages/Portfolio'
import Contact from '@/components/pages/Contact'
import Experience from '@/components/pages/Experience'
export default function Home() {
    return (
        <div className="font-open_sans">
            <Header />
            <About />
            <Experience />
            <Services />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}
