import { Link } from 'react-router-dom';

export const Footer = () => {
  return (

    <footer className="bg-white shadow-sm dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">CINEMA</Link>. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://www.instagram.com/_k._s._k._a._/" target="_blank" className="hover:underline me-4 md:me-6">INSTAGRAM</a>
          </li>
          <li>
            <a href="#" target="_blank" className="hover:underline me-4 md:me-6">LINKEDIN</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@keerthiactivities5285" target="_blank" className="hover:underline me-4 md:me-6">YOUTUBE</a>
          </li>
          <li>
            <a href="https://github.com/KEERTHIAANAND" target="_blank" className="hover:underline">GITHUB</a>
          </li>
        </ul>
      </div>
    </footer> 

  )
}
