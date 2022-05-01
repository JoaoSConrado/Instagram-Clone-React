import me from "../../assets/Images/me.jpg"
import { FiSettings } from "react-icons/fi";
function Profile() {
  return (
    <div className="max-w-4xl p-10 xl:mx-auto">
      <div className="grid grid-cols-4 gap-4">
        {/* left */}
        <div>
          <img
            src={me}
            alt=""
            className="rounded-full object-cover w-36 h-36"
          />
        </div>
        {/* right */}
        <div className="col-span-3">
          <div className="flex items-center space-x-7">
            <span className="text-gray-800 text-2xl mr-7 ">gab.augustoz</span>
            <div className="cursor-pointer text-sm text-gray-700 font-semibold p-1 px-2 border border-gray-200 mr-4">
              Editar perfil
            </div>
            <FiSettings className="cursor-pointer h-6 w-6" />
          </div>
          <div className="mt-4 flex items-center ">
            <div className="ml-4">
              <span className="font-semibold mr-2">42</span> publicações
            </div>
            <div className="ml-4">
              <span className="font-semibold mr-2">537</span> seguidores
            </div>

            <div className="ml-4">
              <span className="font-semibold mr-2">999</span> seguindo
            </div>
          </div>
          <div className="pt-5">
            <p className="text-base font-semibold mr-2 ">Gabriel Augusto</p>
            <p className="text-base text-gray-400  font-normal mr-2 ">
              Melhor Professor
            </p>
            <p>
              🥇 | EQUIPE 3 💙💙💙
            </p>
            <p>
              💣 | E O SPLICE???
            </p>
            <p>
              💻 | PROGRAMADOR
            </p>

            <br />
            <hr />


            {/* images */}
            <div className="flex mt-5 items-center space-x-3">
              <img src={me} alt="" className="w-48" />
              <img src={me} alt="" className="w-48" />
              <img src={me} alt="" className="w-48" />
            </div>
            <div className="flex mt-5 items-center space-x-3">
              <img src={me} alt="" className="w-48" />
              <img src={me} alt="" className="w-48" />
              <img src={me} alt="" className="w-48" />
            </div>
            <div className="flex mt-5 items-center space-x-3">
              <img src={me} alt="" className="w-48" />
              <img src={me} alt="" className="w-48" />
              <img src={me} alt="" className="w-48" />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Profile;