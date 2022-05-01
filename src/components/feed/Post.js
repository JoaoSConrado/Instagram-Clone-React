import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { MdCollections } from "react-icons/md";
import { BiHappyAlt } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi";
import "./style.css"
import { Coracao } from './Styles'



function Post({ img, name }) {

  let heart = document.getElementById('heart')
  function liked() {
    heart.classList.toggle('liked')
    console.log(heart)
  }

  return (
    <div>
      {/*post header */}
      <div className="flex items-center justify-between p-4">
        <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFD15RCaLy7tA/company-logo_200_200/0/1591018493674?e=2147483647&v=beta&t=OCAyyAl2Oaj5nbyvxltzVwjGHBg1RJlwI3zQlBZnvu4" alt="" className="w-12 h-12 border object-cover border-red-500 p-[2px] rounded-full " />
        <p className="flex-1 ml-2 ">{name}</p>
        <FiMoreHorizontal />
      </div>
      {/*post img */}
      <div>
        <img src={img} alt="" className="w-full object-cover" />
      </div>
      {/*post coption */}
      <div className="flex justify-between items-center text-2xl p-5 max-w-2xl mx-auto ">
        <div className="flex items-center justify-between cursor-pointer space-x-4">
          <div id="heart" className="heart">
            <Coracao onClick={liked} >
              <AiFillHeart className="heart" />
            </Coracao>
          </div>
          <FaComment />
          <HiPaperAirplane className="rotate-45" />
        </div>
        <MdCollections />
      </div>
      {/*form */}
      <form className="flex items-center">
        <BiHappyAlt className="h-8 " />
        <input type="text" placeholder="Adiciona um comentário..." className="border-none flex-1 focus:ring-0 outline-none ml-2 " />
        <button className="font-semibold text-blue-500">
          Publicar
        </button>
      </form>
    </div>

  )


}


export default Post