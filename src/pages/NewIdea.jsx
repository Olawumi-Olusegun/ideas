import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import {Send, ChevronLeft, Info} from "lucide-react"
import { db } from '../../utils';
import { Ideas } from '../../utils/schema';
import moment from "moment"
import { useNavigate } from "react-router-dom"

const initialState = {
  idea: "",
  username: "",
}

const NewIdea = () => {

  const [formInput, setFormInput] = useState(initialState);

  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [existingUser, setExistingUser] = useState(false)

  const navigation = useNavigate();


  const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    setFormInput((prevState) => ({...prevState, [name]: value}))
  }

  const handleSubmit = async () => {
    try {

      setIsLoading(true)
      const result = await db.insert(Ideas).values({
        content: formInput.idea,
        username: formInput.username,
        createdAt: moment().format("DD MMM yyy")
      }).returning({ id: Ideas.id });
  
  
      if(result) {
        localStorage.setItem("username", formInput.username);
        showAlert(true);
        setTimeout(() => {
          setShowAlert(false)
        }, 5000)
        setFormInput({...initialState})
      }
      
    } catch (error) {
       
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const username = localStorage.getItem("username"); 
    if(username) {
      setFormInput((prevState) => ({...prevState, username }))
      setExistingUser(true)
    }
  }, [])

  return (
    <>
    <Header />
    {
      showAlert && (
        <div role="alert" className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className='text-white'>Your Idea was saved added successfully</span>
        </div>
      )
    }


    <button onClick={() => navigation("/")} className='btn mt-7'> <ChevronLeft className='w-4 h-4' /> Back</button>
    <h2 className='font-bold text-2xl mt-5'>From Concept to creation: Empowering your startup journey</h2>
    
    <div className="mt-5 flex flex-col gap-2">
      
      <div className='w-full'>
        <label htmlFor='idea' className='block my-2' >Your Idea*:</label>
        <textarea id='idea' name="idea" value={formInput.idea} onChange={handleChange} className="textarea textarea-bordered w-full" placeholder="Idea"></textarea>
      </div>
      
      {
        !existingUser && (
        <div className='w-full'>
          <label htmlFor='username' className='flex items-center  my-2' >Your Username*: <span className='ml-auto flex items-center gap-2'> <Info className="h-4 w-4" /> No account needed</span> </label>
          <input id='username' name="username" value={formInput.username} onChange={handleChange} type="text" placeholder="Username" className="input input-bordered w-full" />
        </div>

        )
      }
      
      <div className='w-full'>
        <button onClick={handleSubmit} disabled={!formInput.idea || !formInput.username} className='btn btn-primary w-full mt-7'>
          {isLoading 
          ? ( <> <span className="loading loading-spinner loading-xs"></span> Please wait... </> ) 
          : ( <> Send <Send className='w-4 h-4' /> </> 
          ) }
          </button>
      </div>

    </div>
    </>
  )
}

export default NewIdea