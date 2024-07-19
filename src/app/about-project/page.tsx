import styles from '@/styles/about-project.module.css';
import myImg from '@/img/profile.jpg';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';

export default function AboutProject() {
  return (
    <div className={styles.main}>
      <Image className={styles.myImg} src={myImg} alt="myImg" />
      <div className={styles.info}>
        <h1 className={styles.title}>Welcome your visit!</h1>
        <h2>This is my first NextJs Project.</h2>
        <div>
          <h3>Used</h3>
          <p>: ReactJs, NextJs, ModuleCss, React-Icons</p>
        </div>
        <div>
          <h3>Learned</h3>
          <p>
            : Server Components, App Router, Dynamic Pages, React Suspense,
            Deployment, Optimizations
          </p>
        </div>
        <p style={{ marginTop: 10 }}>
          <b>If you want to know more about me, please visit this site.</b>
        </p>
        <div>
          <a href="https://github.com/gaeguriBanchan" target="_blank">
            <FaGithub className={styles.logo} />
          </a>
          <a
            href="https://gaeguribanchan.github.io/introduction/"
            target="_blank"
          >
            <CgProfile className={styles.logo} />
          </a>
        </div>
      </div>
      <div className={styles.description}>
        <div>
          <a href="https://github.com/gaeguriBanchan" target="_blank">
            By <Image src={myImg} alt="myImg" width={50} height={50} priority />
            KIMJAEJIN
          </a>
        </div>
      </div>
    </div>
  );
}
