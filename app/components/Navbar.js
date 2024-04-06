"use client";
import React from "react";

import { FaBars } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi2";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

var isUserAdmin = true;
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-blue-400">
        <div className="drawer w-10 lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn mr-3 drawer-button">
              <FaBars />
            </label>
          </div>
          <div className="drawer-side z-10">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-1/2 min-h-full bg-base-200 text-base-content">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Products">Products</a>
              </li>
              {isUserAdmin && (
                <li>
                  <a href="/dashboard">Dashboard</a>
                </li>
              )}
              {isUserAdmin && (
                <li>
                  <a href="/addproduct">Add Products</a>
                </li>
              )}
              <li>
                <a href="/Contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl gap-1">
            {" "}
            <p className="text-red-600 font-bold"> FEW</p>{" "}
            <p className="text-white">Electronics</p>
          </a>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal hidden lg:flex px-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Products">Products</a>
            </li>

            <li>
              <a href="/Contact">Contact Us</a>
            </li>
            {isUserAdmin && (
              <li>
                <a href="/addproduct">Add Products</a>
              </li>
            )}
            {isUserAdmin && (
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
            )}
          </ul>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="/User.png" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="-mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge text-2xl">
                    <HiOutlineUser />
                  </span>
                </a>
              </li>
              <li>
                <a>
                  Settings
                  <span className="badge text-2xl">
                    <CiSettings />
                  </span>
                </a>
              </li>
              <li>
                <a>
                  Cart
                  <span className="badge text-2xl">
                    <IoCartOutline />
                  </span>
                </a>
              </li>
              <li>
                <a>
                  Favourite
                  <span className="badge text-2xl">
                    <CiHeart />
                  </span>
                </a>
              </li>

              {isUserAdmin && (
                <li>
                  <a href="#">
                    Sign out
                    <span className="badge text-2xl">
                      <CiLogout />
                    </span>
                  </a>
                </li>
              )}

              {!isUserAdmin && (
                <li>
                  <a href="/login">
                    Login
                    <span className="badge text-2xl">
                      <CiLogin />
                    </span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
