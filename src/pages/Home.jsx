import React, {useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Tabs from '../components/Tabs'
import { db } from '../../utils'
import { Ideas } from '../../utils/schema'
import {useLocation} from "react-router-dom"
import IdeaList from '../components/IdeaList'

const Home = () => {

    const params = useLocation();
    const [ideaList, setIdeaList] = useState([])

    const getAllIdeas = async () => {
        try {
            const result = await db.select().from(Ideas).orderBy(
                params.hash === "#hot" || params.hash === "#top" ? Ideas.vote : Ideas.id
            ).limit(20);

            if(result) {
                setIdeaList(result)
            }

        } catch (error) {
            
        }
    }

    const refreshData = () => {}

    useEffect(() => {
        getAllIdeas();
    }, [])

  return (
    <>
    <Header />
    <Hero />
    <Tabs />
    <IdeaList ideaList={ideaList} refreshData={refreshData} />
    </>
  )
}

export default Home