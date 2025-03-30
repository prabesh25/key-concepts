

import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout, CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';



const Nav = () => {
    const { loginWithRedirect, logout, user, isAuthenticated,} = useAuth0();

  return (
    <>
      <div className="header w-full">
        <div className="top_header flex p-2.5 bg-[#f6f7f8] items-center">
          <div className="icon ml-5 text-[#ababab] text-[22px]">
            <MdLocalShipping />
          </div>
          <div className="info ml-3">
            <p className="text-[#8a8a8a] text-[14px]">
              Free Shipping When Shopping up to Rs.10000
            </p>
          </div>
        </div>
        
        <div className="mid_header flex py-4 px-10 max-w-full justify-between items-center">
          <div className="logo">
            <img
              className="h-[45px] w-[175px] cursor-pointer object-cover"
              src=""
              alt="Logo"
            />
          </div>
          
          <div className="search_box flex items-center">
            <input
              className="outline-none bg-[#f6f7f8] w-[250px] border border-[#8a8a8a] rounded-l-full py-2 px-4 text-[14px]"
              type="text"
              value=""
              placeholder="Search..."
            />
            <button className="w-[50px] h-[39px] border-[#cd1e76] border rounded-r-full cursor-pointer bg-[#cd1e76] flex justify-center items-center">
              <AiOutlineSearch className="text-white text-[20px]" />
            </button>
          </div>
          {
                isAuthenticated ?  
                //if user is loggedin then logout button show hunxa sathsathai userprofile panishow hunxa.
                <div className="user flex items-center">
                <div className="icon text-[#ababab] text-[22px]">
                  <CiLogout />
                </div>
                <div className="btn ml-3">
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="px-4 py-2 bg-[#cd1e76] text-white rounded-full text-[14px] cursor-pointer hover:bg-[#e02f8f]">
                    Logout
                  </button>
                </div>
              </div>
              :
              //if user is not loggedin then login button show hunxa.
              <div className="user flex items-center">
              <div className="icon text-[#ababab] text-[22px]">
                <FiLogIn />
              </div>
              <div className="btn ml-3">
                <button onClick={() => loginWithRedirect()} className="px-4 py-2 bg-[#cd1e76] text-white rounded-full text-[14px] cursor-pointer hover:bg-[#e02f8f]">
                  Login
                </button>
              </div>
            </div>

          }
       

         
        </div>
        <div className='last_header'>
            <div className='user_Profile'>
                {
                    // yaha user profile show huncha
                    isAuthenticated ? <>
                    <div className='icon'>
                       <CiUser /> 
                    </div>
                    <div className='info'>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    </div>
                   
                    </>
                    :
                    <>
                    <div className='icon'>
                       <CiUser /> 
                    </div>
                    <div className='info'>
                        <p>Please Login</p>
                    </div>
                    </>
                }
            </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
