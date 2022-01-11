import {
  AppPage,
  AppGithubStars,
  AppWebsiteViews,
  AppTopTracks
} from '@mira/core';

export default function DashboardPage() {
  return (
    <AppPage
      title="Dashboard / Faisal Karim"
      description="My personal dashboard, build with Next.js API routes"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my personal dashboard, built with Next.js API routes
            deployed as serverless functions. I use this dashboard to track
            various metrics across platforms like GitHub, Blog views, and more.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <AppWebsiteViews />
          <AppGithubStars />
        </div>

        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify
          updated daily.
        </p>
        <AppTopTracks />
      </div>
    </AppPage>
  );
}
