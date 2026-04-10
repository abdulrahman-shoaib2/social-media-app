import {
  Avatar,
  Button,
  Select,
  SelectItem,
  Skeleton,
  Textarea,
} from "@heroui/react";
import React, { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
// import { api } from "../services/APIServices";
import { useAuth } from "../../contexts/AuthContext";
import { postsAPI } from "../../services/APIServices";
import { queryClient } from "../../App";

export default function CreatePost() {
  
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [showform, setShowForm] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {authToken} = useAuth();

  const handleImageChange = (e) => {
    if (e.target.files[0] != undefined) {
      setImage(e.target.files[0]);
      const imageSrc = URL.createObjectURL(e.target.files[0]);
      setImagePreview(imageSrc);
    }
  };
  function removeImage() {
    setImage(null);
    setImagePreview(null);
    document.getElementById("post").value = null;
  }
  async function post( data) {
    try {
      setIsLoading(true)
      const formData = new FormData();
      if(data.caption){
        formData.set("body", data.caption);
        
      }
      if(image){
        formData.set("image", image);
      }
      const response = await postsAPI.fetchData({
        method:'post',
        data:formData
      })
      // api.createPost(authToken.token.token, formData);
      console.log(response);
      if (response.status == 201) {
        setCaption("");
        setShowForm(false);
        removeImage();
        queryClient.invalidateQueries(['posts'])
      }
      
    } catch (error) {
      
    }finally{
      setIsLoading(false)
    }
    // console.log(data.image[0]);
  }

  // console.log(errors);
  const { user } = useUser();
  return (
    <>
      <form onSubmit={handleSubmit(post)}>
        {/*middle creat tweet*/}
        <div className=" flex flex-col items-end p-4 transition-all duration-500 ease-in-out">
          {showform ? (
            <>
              <div className="flex w-full gap-2 mb-2 items-start">
                <div className="m-2 w-10 py-1 ">
                  {user.userInfo.photo ? (
                    <Avatar
                      isBordered
                      src={user.userInfo.photo}
                      className="outline-2  outline-website-500  outline-offset-2"
                    />
                  ) : (
                    <Skeleton className="flex rounded-full w-12 h-12" />
                  )}
                </div>
                <div className="grow  pt-2 ">
                  <Textarea
                    isClearable
                    id="textarea"
                    rows="1"
                    maxRows={2}
                    {...register("caption")}
                    className="w-full "
                    classNames={{
                      inputWrapper:
                        "dark:bg-white/3 dark:focus-within:bg-white/6",
                    }}
                    placeholder="What's on your Mind? Share a post"
                  />
                </div>
              </div>
              {imagePreview && (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full.max-h-64.object-cover.rounded-lg"
                  />

                  <button
                    type="button"
                    onClick={() => {
                      removeImage();
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              )}
              <div className="flex items-center sm:justify-between w-full flex-col sm:flex-row">
                <div className="w-64 px-2">
                  <div className="flex justify-between sm:justify-start sm:gap-4 items-center ">
                    <div className="flex justify-center text-center  ">
                      <label
                        aria-label="file"
                        className="mt-1 group flex items-center text-website-500 px-2 py-2 text-base leading-6 font-medium rounded-full bg-transparent hover:bg-website-500/20 hover:text-website-600 dark:hover:bg-website-500/20 dark:hover:text-website-300"
                        htmlFor="post"
                      >
                        <input
                          {...register("image")}
                          onChange={handleImageChange}
                          type="file"
                          id="post"
                          className="hidden"
                        />
                        <svg
                          className="text-center h-7 w-6"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </label>
                    </div>
                    <div className="flex justify-center text-center ">
                      <Button
                        isDisabled
                        isIconOnly
                        className="mt-1 group flex items-center text-website-500 px-2 py-2 text-base leading-6 font-medium rounded-full bg-transparent hover:bg-website-500/20 hover:text-website-600 dark:hover:bg-website-500/20 dark:hover:text-website-300"
                        target="_blank"
                      >
                        <svg
                          className="text-center h-7 w-6"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </Button>
                    </div>
                    <div className="flex justify-center text-center ">
                      <Button
                        isIconOnly
                        className="mt-1 group flex items-center  text-website-500 px-2 py-2 text-base leading-6 font-medium rounded-full bg-transparent hover:bg-website-500/20 hover:text-website-600 dark:hover:bg-website-500/20 dark:hover:text-website-300"
                        target="_blank"
                      >
                        <svg
                          className="text-center h-7 w-6"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="">
                      <Select
                        startContent={<i className="fa-solid fa-globe"></i>}
                        placeholder="public"
                        classNames={{ base: "w-40  ", innerWrapper: "h-4" }}
                      >
                        <SelectItem selected>Public</SelectItem>
                        <SelectItem selected>Friends only</SelectItem>
                        <SelectItem selected>Private</SelectItem>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 sm:w-fit">
                  <Button
                    isLoading={isLoading}
                    type="submit"
                    className="bg-website-500 w-full hover:bg-website-500 mt-5 sm:m-0 text-white font-bold py-2 px-8 sm:p-0 rounded-full  float-right"
                  >
                    Post
                  </Button>
                  <Button
                    onPress={() => {
                      setShowForm(false);
                    }}
                    variant="bordered"
                    type="submit"
                    className=" w-full dark:hover:bg-white dark:hover:text-black mt-5 sm:m-0 text-gray-600 dark:text-white dark:text font-bold py-2 px-8 sm:p-0 rounded-full  float-right"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex w-full gap-2 items-start">
              <div className="m-2 w-10 py-1 ">
                {user.userInfo.photo ? (
                  <Avatar
                    isBordered
                    src={user.userInfo.photo}
                    className="outline-2  outline-website-500  outline-offset-2"
                  />
                ) : (
                  <Skeleton className="flex rounded-full w-12 h-12" />
                )}
              </div>
              <button
                variant="flat"
                className="w-full cursor-text dark:text-slate-200/60 shadow-sm dark:bg-white/3 mt-2 rounded-xl h-14 lh-full text-[14px] flex px-3 py-2"
                onClick={() => {
                  setShowForm(true);
                }}
              >
                What's on your Mind? . . .
              </button>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
