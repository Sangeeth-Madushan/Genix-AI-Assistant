
import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import moment from 'moment'
import Markdown from 'react-markdown'
import Prism from 'prismjs'

const Message = ({ message }) => {
  
  // code formatting
  useEffect(()=>{
    Prism.highlightAll()
  },[message.content])
  
  return (
    <div>
      {message.role === 'user' ? (
        //  User message 
        <div className='flex items-start justify-end gap-2 my-4'>
          <div className='flex flex-col items-end'>
            <p className='p-3 text-base text-white bg-[#A456F7] rounded-lg max-w-prose'>
              {message.content}
            </p>
            <span className='mt-1 text-xs text-gray-400 dark:text-[#B1A6C0]'>
              {moment(message.timestamp).fromNow()}
            </span>
          </div>
          <img src={assets.user_icon} className='w-8 rounded-full' />
        </div>
      ) : (
        // Bot message
        <div className='flex items-start justify-start gap-2 my-4'>
          <img src={assets.bot_icon} className='w-8 rounded-full' /> 
          <div className='flex flex-col items-start'>
            {message.isImage ? (
              <img
                src={message.content}
                className='w-full max-w-md rounded-md'
              />
            ) : (
              <div className='p-3 text-base rounded-lg bg-[#f9f9f9] dark:bg-transparent dark:text-[#f9f9f9] max-w-prose reset-tw'>
               {/* Markdown format AI response */}
               <Markdown>{message.content}</Markdown> 
              </div>
            )}
            <span className='mt-1 text-xs text-gray-400 dark:text-[#B1A6C0]'>
              {moment(message.timestamp).fromNow()}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Message
