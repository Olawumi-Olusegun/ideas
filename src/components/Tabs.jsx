import React, {useState} from 'react'
import { useLocation } from "react-router-dom"
const Tabs = () => {

    const [activeTab, setActiveTab] = useState(0);



  return (
        <div role="tablist" className="tabs tabs-bordered">
        <a role="tab" onClick={() => setActiveTab(0)} className={`tab text-lg font-bold ${activeTab === 0 && "tab-active"}`}>Hot</a>
        <a role="tab" onClick={() => setActiveTab(1)} className={`tab text-lg font-bold ${activeTab === 1 && "tab-active"}`}>New</a>
        <a role="tab"  onClick={() => setActiveTab(2)} className={`tab text-lg font-bold ${activeTab === 2 && "tab-active"}`}>Top</a>
        </div>
  )
}

export default Tabs