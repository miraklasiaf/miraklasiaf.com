import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        About Me
      </h1>
      <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
        <p>
          Hi, I'm Faisal. I’m currently working at&nbsp;
          <a href="https://smitsu.com" target="_blank" rel="noopener noreferrer">
            SMITSU
          </a>
          &nbsp;as a Full Stack Web Developer.
        </p>
        <p>
          I grew up in small-town Batam and went to Riau University at Pekanbaru,
          graduating with a degree in Computer Science. I spend my free time listening
          music, playing games, and enjoying time with friends and family.
        </p>
      </div>
    </div>
  );
}
