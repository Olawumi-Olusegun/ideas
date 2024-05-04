
import React from 'react'
import IdeaItem from './IdeaItem'

const IdeaList = ({ideaList, refreshData}) => {
  return (
    <div>
        {ideaList.length > 0 
        ? ideaList.map((idea, index) => <IdeaItem refreshData={refreshData} key={idea.id} idea={idea} index={index} /> ) 
        : null
        }
    </div>
  )
}

export default IdeaList