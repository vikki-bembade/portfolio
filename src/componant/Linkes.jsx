import React from 'react'
import Viki_Bembade from '../assets/Viki_Bembade.pdf'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import leetcode from '../assets/leetcode.svg'

const linkes = () => {
  return (
    <div className="flex items-start justify-end gap-1 whitespace-nowrap pr-4 px-22">

      

      <a href='https://www.linkedin.com/in/vikki-bembade/' target='_blank'>
        <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
      </a>

      <a href='https://github.com/vikki-bembade' target='_blank'>
        <img src={github} alt="GitHub" className="w-10 h-10" />
      </a>
      <a href='https://leetcode.com/u/vikkibembade/' target='_blank'>
        <img src={leetcode} alt="LeetCode" className="w-10 h-10" />
      </a>

    </div>
  )
}


export default linkes