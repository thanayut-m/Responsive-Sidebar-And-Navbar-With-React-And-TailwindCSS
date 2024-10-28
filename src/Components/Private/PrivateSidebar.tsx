import { FaCog, FaHome, FaPoll, FaRegEnvelope, FaRegFileAlt } from "react-icons/fa"

interface PrivateSidebarProps { 
  sidebarToggle: boolean;
}

const PrivateSidebar: React.FC<PrivateSidebarProps> = ({ sidebarToggle }) => {
  return (
    <>
      <div className={`bg-gray-800 fixed h-full px-4 py-2 xl:w-64 xl:block ${sidebarToggle ? 'w-64 block' : 'hidden'}`}>
        <div className="flex justify-center my-2 mb-4">
          <h1 className="text-2xl text-white font-bold">ICat Software</h1>
        </div>
        <hr />
        <ul className="mt-3 text-white font-bold">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 p-2">
            <a href="#" className="px-3">
              <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
              Home
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 p-2">
            <a href="#" className="px-3">
              <FaRegFileAlt className="inline-block w-6 h-6 mr-2 -mt-2"></FaRegFileAlt>
              Blogs
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 p-2">
            <a href="#" className="px-3">
              <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2"></FaPoll>
              Report
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 p-2">
            <a href="#" className="px-3">
              <FaRegEnvelope className="inline-block w-6 h-6 mr-2 -mt-2"></FaRegEnvelope>
              Index
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 p-2">
            <a href="#" className="px-3">
              <FaCog className="inline-block w-6 h-6 mr-2 -mt-2"></FaCog>
              Setting
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default PrivateSidebar