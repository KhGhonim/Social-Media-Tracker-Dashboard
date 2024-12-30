import { Link } from "react-router-dom";

export default function ErrorMessage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">
        Oops! Something went wrong
      </h1>
      <p className="text-xl text-gray-600">
        Our analytics hamsters are taking a coffee break
      </p>
      <div className="space-y-4">
        <p className="text-gray-500">
          Don't worry, your data is safe! We're just having a temporary hiccup.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700  text-white font-medium rounded-lg transition-colors duration-200 transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
