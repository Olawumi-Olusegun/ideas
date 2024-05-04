import React from 'react'
import { db } from '../../utils';
import { Ideas } from '../../utils/schema';
import { eq } from "drizzle-orm"
import { checkIsAlreadyDownvoted, checkIsAlreadyUpvoted, downvote, upvote } from '../service';

const IdeaItem = ({idea, index, refreshData}) => {

    const upvoteHandler = async (event) => {
        // event.stopPropagation();
        try {

            if(upvote(idea.id)) {
                const result = await db.update(Ideas)
                .set({ vote: idea.vote + 1 })
                .where(eq(Ideas.id, idea.id))
                .returning({id: Ideas.id})
    
                if(result) {
                    refreshData()
                }    
            }

        } catch (error) {
            
        }
    }

    const downvoteHandler = async (event) => {
        // event.stopPropagation();
        try {

            if(downvote(idea.id)) {
                const result = await db.update(Ideas)
                .set({ vote: idea.vote >= 1 && idea.vote - 1 })
                .where(eq(Ideas.id, idea.id))
                .returning({id: Ideas.id})
    
                if(result) {
                    refreshData()
                }

            } 

        } catch (error) {
            
        }
    }

  return (
    <div className='my-5 p-5 border rounded-lg '>
        <div className="flex gap-7 ">
            <h2 className='flex-1 flex gap-2'> <span>{index + 1 }.</span> {idea.content}</h2>
            <div className="flex flex-col gap-1">
                <button onClick={(event) => upvoteHandler(event)} className={`text-white hover:text-black btn  flex flex-col items-center justify-center text-lg hover:bg-gray-200 rounded-md cursor-pointer btn-primary ${checkIsAlreadyUpvoted(idea.id) && "btn-secondary"}`}>0</button>
                <button className='text-white hover:text-black btn btn-primary flex flex-col items-center justify-center text-lg hover:bg-gray-200 rounded-md cursor-pointer'>{idea.vote}</button>
                <button onClick={(event) => downvoteHandler(event)} className={`text-white hover:text-black btn btn-primary flex flex-col items-center justify-center text-lg hover:bg-gray-200 rounded-md cursor-pointer ${checkIsAlreadyDownvoted(idea.id)} && "btn-secondary"`}>0</button>
            </div>
        </div>
        <h2 className='flex items-center mt-2 gap-1 text-gray-400'>By:<span className='font-bold'>@{idea.username}</span> on: <span className='text-sm'>{idea.createdAt}</span></h2>
    </div>
  )
}

export default IdeaItem