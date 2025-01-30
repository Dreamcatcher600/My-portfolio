import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
// import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import dynamic from 'next/dynamic';


const Layout = dynamic(() => import('../layout/Layout'), { ssr: false });

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
