import Footer from './components/footer';
import Main from './components/main';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: '小方盒LSCube',
      image: 'https://www.lsc7.top/avatar.png',
    },
  };
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
      <Main/>
      <Footer/>
    </>
  );
}
