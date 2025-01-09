import '../styles/globals.css';

import Layout from '../components/Layout';
import Transition from '../components/Transition';

import {AnimatePresence, motion} from 'framer-motion';
import { useRouter } from 'next/router';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition/>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <SpeedInsights />
    </Layout>;
}

