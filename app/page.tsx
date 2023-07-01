import Image from 'next/image'
import Sidebar from './dashboard/sidebar/sidebar'
import Header from './dashboard/header/header'

export default function Home() {
  return (
    <div>
      <div className="flex flex-row">
        <div><Sidebar /></div>
        <div className='grow'><Header/></div>
      </div>
    </div>
  )
}
