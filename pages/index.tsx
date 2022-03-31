import type { NextPage } from 'next'
import Image from 'next/image';
import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';
//import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  // @todo: delete lines 10:15
  const cols = 10;
  const nameList = new Array(12).fill('hello').map((name, index) =>
    <div key={index} className={`col ${index < 11 ? 'border-end': ''}`}>
    </div>
  );

  return (
    <div className={'container-fluid'}>
      <Head>
        <title>The Sapiens Club</title>
        <meta name="description" content="NFT powered digital platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`row ${styles.main}`.trim()}>
        {/* { nameList } */}
        <section>
          <div className='container'>
            <div className='row gx-5 align-items-center'>
              <div className='col-lg-5'>
                <h1 className=''>Road to financial independence.</h1>
                <p className=''>A highly scalable, fast and secure blockchain platform for distributed apps, enterprise use cases and the new internet economy.</p>
                <div className={`d-flex flex-column flex-sm-row justify-content-between ${styles.ctaContainer}`}>
                  <a className={`btn btn-lg btn-primary me-4 disabled ${styles.ctaContainerBtn}`} href='#'>
                      {'Whitelist'}
                      <svg xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='feather feather-arrow-right ms-2'>
                          <line x1='5' y1='12' x2='19' y2='12'></line>
                          <polyline points='12 5 19 12 12 19'></polyline>
                      </svg>
                  </a>
                  <a className={`btn btn-lg btn-outline-primary ms-4 disabled ${styles.ctaContainerBtn}`} href='#'>
                      {'MINT'}</a>
                </div>
              </div>
              <div className='col-lg-6 offset-1'>
                <div className='img-container my-5'>
                  <Image
                    // loader={myLoader}
                    src="/hero-section.svg"
                    alt="Picture of the author"
                    layout='fill'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
