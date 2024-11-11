// app/page.tsx
interface Url {
  live?: string;
  repo?: string;
}

interface Project {
  id: string;
  title: string;
  desc: string;
  url: Url;
}

const tags = [
  "Web Development",
  "Mobile Apps",
  "E-commerce",
  "UI/UX Design",
  "Digital Solutions",
];

export default function Home() {
  const projects: Project[] = [
    {
      id: "review-cv",
      title: "Review CV",
      desc: "A comprehensive resume review service designed to help job seekers improve their chances of success. Features detailed analysis of resumes, highlighting strengths and areas for improvement. Provides personalized feedback and tips for enhancing application materials.",
      url: {
        live: "https://review-cv.fly.dev",
      },
    },
    {
      id: "review-upwork",
      title: "Review Upwork Profile",
      desc: "Review your Upwork profile and get a detailed analysis of your profile, highlighting strengths and areas for improvement. Provides personalized feedback and tips for enhancing your profile.",
      url: {
        live: "https://review-upwork.fly.dev",
      },
    },
    {
      id: "deepertalk",
      title: "DeeperTalk",
      desc: "An innovative conversation tool designed to foster meaningful connections. Generates thought-provoking questions for deep discussions, perfect for team building, dating, or personal development. Features dynamic question generation and category-based filtering.",
      url: {
        live: "https://deepertalk.co",
      },
    },
    {
      id: "rameshclinic",
      title: "Ramesh Clinic",
      desc: "A professional medical website developed for Dr. Ashwin Ramesh. Features a modern, user-friendly interface that showcases medical services, appointment scheduling, and patient resources. Built with performance and accessibility in mind.",
      url: {
        live: "https://rameshclinic.com",
      },
    },
    {
      id: "pantjoranpik",
      title: "Pantjoran PIK",
      desc: "A comprehensive digital directory for a premier food court destination. Features detailed restaurant listings, menu items, and interactive navigation. Helps visitors discover diverse culinary options with easy-to-use search and filtering capabilities.",
      url: {
        live: "https://pantjoranpik.tokoko.id",
      },
    },
    {
      id: "bridelink",
      title: "BrideLink",
      desc: "A sophisticated online wedding invitation platform that helps couples create and share their special day. Features customizable templates, RSVP management, and digital guest book functionality. Built for seamless mobile and desktop experience.",
      url: {
        live: "https://bridelink.co",
      },
    },
    {
      id: "99usahaku",
      title: "99% Usahaku (Telkomsel)",
      desc: "A comprehensive e-learning and marketplace platform developed for Telkomsel, focused on empowering Small-Medium Enterprises. Combines educational content with practical business tools, featuring course management, user progress tracking, and integrated marketplace functionalities.",
      url: {
        live: "https://99usahaku.telkomsel.com",
      },
    },
    {
      id: "bernas-id",
      title: "Bernas ID (Hebat Group)",
      desc: "A dynamic news portal delivering reliable domestic updates and current affairs. Features real-time news updates, categorized content presentation, and responsive design for optimal reading experience across devices. Built with modern web technologies for fast loading and SEO optimization.",
      url: {
        live: "https://bernas.id",
      },
    },
    {
      id: "tokoflix",
      title: "Tokoflix",
      desc: "A React-based movie marketplace application that simulates an e-commerce experience for film purchases. Features a clean UI, movie categorization, search functionality, and shopping cart implementation. Demonstrates modern React patterns and state management.",
      url: {
        live: "https://pandurijal.github.io/tokoflix",
        repo: "https://github.com/pandurijal/tokoflix",
      },
    },
    {
      id: "react-giphy",
      title: "React Giphy",
      desc: "An intuitive GIF search engine leveraging the Giphy API. Features real-time search suggestions, infinite scroll, and responsive grid layout. Built with React and modern JavaScript practices for optimal performance and user experience.",
      url: {
        live: "https://pandurijal.github.io/react-giphy",
        repo: "https://github.com/pandurijal/react-giphy",
      },
    },
    {
      id: "loremi",
      title: "Loremi",
      desc: "A modern lorem ipsum generator built with ReactJS. Features customizable length, paragraph count, and format options. Perfect for designers and developers needing placeholder text for mockups and prototypes.",
      url: {
        live: "https://pandurijal.github.io/loremi",
        repo: "https://github.com/pandurijal/loremi",
      },
    },
    {
      id: "react-quotes-mobile",
      title: "React Quotes Mobile",
      desc: "A mobile application built with React Native & Expo that delivers inspirational quotes with a single tap. Features a curated collection of quotes, beautiful typography, and share functionality for social platforms.",
      url: {
        live: "https://pandurijal.github.io/react-quotes-mobile",
        repo: "https://github.com/pandurijal/react-quotes-mobile",
      },
    },
    {
      id: "image-prediction",
      title: "Image Prediction",
      desc: "A machine learning application utilizing TensorFlow for image classification and recognition. Features real-time prediction capabilities, support for multiple image formats, and integration with pre-trained models for accurate results.",
      url: {
        repo: "https://github.com/pandurijal/image-prediction",
      },
    },
    {
      id: "webcam-prediction",
      title: "Webcam Prediction",
      desc: "Advanced real-time object detection and classification using webcam feed and TensorFlow. Features continuous frame analysis, multiple object tracking, and performance optimization for smooth video processing.",
      url: {
        repo: "https://github.com/pandurijal/webcam-prediction",
      },
    },
    {
      id: "recipebook",
      title: "Recipebook",
      desc: "A comprehensive recipe management application built with Bootstrap and ReactJS. Features recipe categorization, search functionality, ingredient management, and step-by-step cooking instructions with a responsive design.",
      url: {
        repo: "https://github.com/pandurijal/recipebook",
      },
    },
    {
      id: "dashboard-socmed",
      title: "Dashboard Socmed",
      desc: "A sophisticated social media analytics dashboard providing insights and metrics visualization. Features real-time data updates, customizable widgets, and comprehensive reporting tools for social media management.",
      url: {
        repo: "https://github.com/pandurijal/dashboard-socmed",
      },
    },
    {
      id: "weather-app",
      title: "Weather App",
      desc: "A global weather monitoring application featuring real-time updates, location-based forecasts, and detailed weather metrics. Includes interactive maps, multiple location tracking, and severe weather alerts.",
      url: {
        repo: "https://github.com/pandurijal/weather-app",
      },
    },
    {
      id: "agendate",
      title: "Agendate",
      desc: "A sophisticated calendar-based event management system with local storage capabilities. Features drag-and-drop scheduling, recurring events, reminder notifications, and seamless synchronization across devices.",
      url: {
        repo: "https://github.com/pandurijal/agendate",
      },
    },
    {
      id: "currency-rates",
      title: "Currency Rate",
      desc: "A real-time currency conversion and exchange rate tracking application. Features support for multiple currencies, historical rate charts, and rate alerts for specified thresholds.",
      url: {
        repo: "https://github.com/pandurijal/currency-rates",
      },
    },
    {
      id: "search-article",
      title: "Search Article",
      desc: "A modern article search engine powered by the HackerNews API. Features advanced search filters, content categorization, and real-time updates for the latest tech news and discussions.",
      url: {
        repo: "https://github.com/pandurijal/search-article",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Main content */}
            <div>
              <h1
                className={`text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-6`}
              >
                PR DEV Studio
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
                A digital studio crafting exceptional web experiences. We
                transform ideas into powerful, user-centric solutions using
                cutting-edge technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* Right column - Stats/Featured */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    18+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Successful Projects
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    9+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    10+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Happy Clients
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full mb-4">
          <div className="flex flex-wrap gap-2 items-center justify-center">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.desc}
                  </p>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0 md:ml-8">
                  {project.url.live && (
                    <a
                      href={project.url.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      Live →
                    </a>
                  )}
                  {project.url.repo && (
                    <a
                      href={project.url.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
