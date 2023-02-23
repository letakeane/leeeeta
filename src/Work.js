import React from 'react';

const Work = () => {
  return (
    <>
      <h1 class="title">work</h1>
        <h2 class="subheading">selected braggy stuff</h2>
      <div class="portfolio">
        <section class="item">
          <h4>Conference Talk</h4>
          <p class="deets">Develop Denver * 16 Aug 2019</p>
          <h3>
            I Love You But I Don't Need You: using color in accessible design
          </h3>
          <a href="https://www.youtube.com/watch?v=V0nWD3wYehk">
            <img
              src="https://cdn.glitch.me/3a82b13c-d21d-42a6-bc1f-6afe00d0773a/Screen%20Shot%202022-01-04%20at%2011.40.12%20AM.png?v=1641321626977"
              alt="Leta talks about accessiblity in color design"
              width="100%"
            />
            <p>👀 watch it! 👀</p>
          </a>
        </section>
        <section class="item">
          <h4>Conference Talk</h4>
          <p class="deets">JSConf Hawaii * 7 Feb 2020</p>
          <h3>React, Vue, & Svelte as Teen Movie Archetypes</h3>
          <a href="https://www.youtube.com/watch?v=vEQkgBzunRc">
            <img
              src="https://cdn.glitch.me/3a82b13c-d21d-42a6-bc1f-6afe00d0773a/Screen%20Shot%202022-01-04%20at%2011.41.55%20AM.png?v=1641321737179"
              alt="Slide from conference talk depicting anthropomorphized versions of React, Vue, and Svelte frameworks as teen movie archetypes"
              width="100%"
            />
            <p>👀 watch it! 👀</p>
          </a>
        </section>
        <section class="item">
          <h4>Project</h4>
          <p class="deets">JavaScript, HTML+CSS, Speech Synthesis</p>
          <h3>Affirmation Bot</h3>
          <a
            href="https://github.com/letakeane/affirmationbot/blob/main/README.md"
          >
            <img
              src="https://camo.githubusercontent.com/c8f082879dcaf25c719db23662adb0e836b8afd59b60e4a7c12ac0e06715e1ff/68747470733a2f2f692e67697068792e636f6d2f6d656469612f5164796b58787669424e5154714d48494e472f67697068792e6769663f6369643d373930623736313139663735643063613733306164616632623830303339643339313865303533376236303331323162267269643d67697068792e6769662663743d67"
              alt="Smiling affirmation bot waves at user"
              width="100%"
            />
            <p>For now, only works on desktop, in Chrome.</p>
            <p>👀 view repo 👀</p>
          </a>
        </section>
        <section class="item">
          <h4>Lesson</h4>
          <p class="deets">Turing School (remote lesson) * 2020</p>
          <h3>Intro To Express</h3>
          <p>
            A sample of one of my lessons from Turing School - introducing
            front-end students to the concept of servers, network responses,
            status codes, and API error messages.
          </p>
          <p>
            This is a more lecture-heavy lesson than I like while teaching, but
            does still showcase my general communication style.
          </p>
          <p>
            👀
            <a href="https://www.youtube.com/watch?v=bwRFxoSvtno">watch it!</a>
            👀
          </p>
        </section>
      </div>
    </>
  )
}

export default Work;