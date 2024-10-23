import { FaHome } from "react-icons/fa"

const PrivateSidebar = () => {
  return (
    <>
      <div className="w-64 bg-gray-800 fixed h-full">
        <div className="flex justify-center">
          <h1 className="text-2xl text-white font-bold">Admin Dashboard</h1>
        </div>
        <hr />
        <ul>
          <li>
            <a href="">
              <FaHome></FaHome>
              Home
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default PrivateSidebar