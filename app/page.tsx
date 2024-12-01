export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6 py-8">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Welcome to the Problem 3 Page
        </h1>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-500">
          Installation Process
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This page was built using <strong>Next.js</strong>, a React-based web
          framework. The framework was installed using the command:
        </p>
        <code className="block bg-gray-100 p-2 rounded text-gray-800 shadow-sm mb-4">
          npx create-next-app@latest my-nextjs-page
        </code>
        <p className="text-gray-700 leading-relaxed">
          After installation, a project structure was created, and this page
          was customized.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-500">
          Page Creation
        </h2>
        <p className="text-gray-700 leading-relaxed">
          This page demonstrates how to customize the default `page.tsx` file
          in the Next.js App Router. By editing `app/page.tsx`, the default
          homepage is replaced with this content.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-500">
          Difficulties Encountered
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>Understanding the new App Router structure in Next.js.</li>
          <li>Resolving 404 errors when setting up additional pages.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          These issues were resolved by consulting the Next.js documentation
          and simplifying the project to a single page.
        </p>

        <footer className="mt-8 border-t pt-4 text-center text-gray-500">
          Built with <span className="text-blue-500 font-semibold">Next.js</span>
        </footer>
      </div>
    </div>
  );
}

