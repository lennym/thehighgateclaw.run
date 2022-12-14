import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Highgate Claw</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The Highgate Claw
        </h1>

        <p>Classic 10km <a href="https://www.strava.com/segments/27565661">Strava Segment</a> of 5 hills, returning to circle the lamp post in Pond Square each time.</p>

        <Image src="/segment.png" width="800" height="301" alt="" />

        <h2>Turn-around points</h2>

        <h3>Pond Square</h3>
        <Image src="/pond-square.png" width="800" height="408" alt="" />
        <p>The primary turn-around point is the single lamp post in the middle of Pond Square. Start and finish touching this, and go around it after each hill.</p>

        <p>At the bottom of each hill is a physical landmark to touch or go around.</p>

        <h3>
          Fitzroy
        </h3>
        <Image src="/fitzroy.png" width="800" height="408" alt="" />
        <p>Cross/touch the white line marked &quot;STOP&quot; outside the toilets.</p>
        <h3>
          West Hill
        </h3>
        <Image src="/west-hill.png" width="800" height="408" alt="" />
        <p>Touch/go around the lamp post outside the wine shop, running on the left.</p>
        <h3>
          Swain&apos;s Lane
        </h3>
        <Image src="/swains.png" width="800" height="408" alt="" />
        <p>Touch the right hand gate post on the far side of Chester Rd, running on the left.</p>
        <h3>
          Dartmouth Park
        </h3>
        <Image src="/dartmouth.png" width="800" height="408" alt="" />
        <p>Touch/go around the beacon at the zebra crossing, running on the right.</p>
        <h3>
          Highgate Hill
        </h3>
        <Image src="/highgate-hill.png" width="800" height="408" alt="" />
        <p>Touch/go around the &quot;heavy vehicles&quot; sign at Magdala Ave, running on the right.</p>

        <h2>Advanced Challenges</h2>

        <p>There are additional segments for <a href="https://www.strava.com/segments/26852860">double</a> and <a href="https://www.strava.com/segments/27899864">triple</a> efforts.</p>

        <p>The <a href="https://www.strava.com/segments/30194326">Clawathon</a> consists of 4 full reps and a complete rep of Fitzroy.
        <br />
        <strong>It does not matter what distance your GPS reads</strong> - without a full Fitzroy it is not a Clawathon.</p>

        <p>The Ultra Trail de Highgate Claw is 5 complete reps or more. At time of writing <a href="https://www.strava.com/activities/6712012484/overview">only one person</a> has completed this.</p>
      </main>
    </div>
  )
}
