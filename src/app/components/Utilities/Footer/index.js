import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-white">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        <div className="position: relative; z-index: 1; display: block;">
          <p className="font-bold text-gray-900 items-center">Chat Live</p>
          <iframe src="https://www5.cbox.ws/box/?boxid=954727&boxtag=VcuAq4" width="100%" height="450" allowtransparency="yes" allow="autoplay" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="auto"></iframe>	
        </div>
      </div>
    </div>

    <p className="text-xs text-gray-500">&copy; 2022. Kesokomik. All rights reserved.</p>
  </div>
</footer>
    )
}

export default Footer