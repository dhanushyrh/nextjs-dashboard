import Image from 'next/image';

export default function Page() {
  return (
    <main className="font-mono flex min-h-screen flex-col p-6 ">
      {/* <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div> */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row ">
        {/* Child */}
        <div className="flex flex-col basis-4/12  justify-start p-6 md:w-3/5 md:px-12 md:py-12 rounded ">
            {/* Inside left column */}
            <div className="flex flex-col mb-6  rounded-lg border-2 shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col basis-8/12 self-center">
                  <figure className=" text-center  p-4 border-b-2 md:border-b-0">
                    <Image className="w-24 h-24 rounded-full mx-auto" src="/pex.jpeg" alt="" width="384" height="512" />
                    <div className="pt-6 space-y-4">
                      
                      <figcaption className="font-medium">
                        <div className="text-2xl	text-sky-500 dark:text-sky-400 ">
                          Sarah Dayan
                        </div>
                        <div>
                          Delhi, India
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                </div>
                <div className="flex flex-col basis-4/12 font-mono">
                  <div className="flex flex-row w-full grow md:flex-col items-center justify-center p-2 md:w-3/5 md:px-8 md:py-12">
                    <div className="flex mx-auto	grow p-4 justify-center  border-r-2 md:border-b-2 md:border-r-0">
                      <figcaption className="font-medium text-left">
                        <div className="text-lg	text-sky-500 dark:text-sky-400 ">
                          422
                        </div>
                        <div className='text-sm'>
                          Reviews
                        </div>
                      </figcaption>
                    </div>
                    <div className="flex mx-auto grow p-4 justify-center border-r-2 md:border-b-2 md:border-r-0">
                      <figcaption className="font-medium text-left">
                        <div className="text-lg	text-sky-500 dark:text-sky-400 ">
                          4
                        </div>
                        <div className='text-sm'>
                          Countries
                        </div>
                      </figcaption>
                    </div>
                    <div className="flex mx-auto grow p-4 justify-center ">
                      <figcaption className="font-medium text-left">
                        <div className="text-lg	text-sky-500 dark:text-sky-400 ">
                          4
                        </div>
                        <div className='text-sm'>
                          Years
                        </div>
                      </figcaption>
                    </div>
                  </div>
              </div>
                
              </div>
             
              
            </div>
            <div className="flex flex-col  p-6 justify-center rounded-lg  ">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-2xl mb-6 font-mono font-semibold tracking-tight text-gray-700 md:text-2xl">Join Me</h2>
                {/* <p className="mt-2 text-lg leading-8 text-gray-500">Mango's online presence.</p> */}
              </div>
              <div className="flex flex-row">
                <div className="flex-none mr-2"><svg className='stroke-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                        <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z"></path>
                      </svg></div>
                <div className="flex-none mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 16 3 C 8.8545455 3 3 8.8545455 3 16 L 3 34 C 3 41.145455 8.8545455 47 16 47 L 34 47 C 41.145455 47 47 41.145455 47 34 L 47 16 C 47 8.8545455 41.145455 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.054545 5 45 9.9454545 45 16 L 45 34 C 45 40.054545 40.054545 45 34 45 L 16 45 C 9.9454545 45 5 40.054545 5 34 L 5 16 C 5 9.9454545 9.9454545 5 16 5 z M 37 11 C 35.9 11 35 11.9 35 13 C 35 14.1 35.9 15 37 15 C 38.1 15 39 14.1 39 13 C 39 11.9 38.1 11 37 11 z M 25 14 C 18.954545 14 14 18.954545 14 25 C 14 31.045455 18.954545 36 25 36 C 31.045455 36 36 31.045455 36 25 C 36 18.954545 31.045455 14 25 14 z M 25 16 C 29.954545 16 34 20.045455 34 25 C 34 29.954545 29.954545 34 25 34 C 20.045455 34 16 29.954545 16 25 C 16 20.045455 20.045455 16 25 16 z"></path>
                  </svg>
                </div>
              </div>
           
            </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 md:w-3/5 md:px-8 md:py-12">
          {/* Inside Right column */}
          <div className="flex w-full py-6 border-b-2">
            <div className="flex flex-col w-full grow py-4 ">
                <div className="flex flex-row w-full mb-8 text-2xl font-semibold font-mono	text-gray-800 dark:text-gray-800 ">
                  About Mango
                </div>
                <div className='flex flex-row'>
                    <div className="flex flex-row items-center grow">
                      <div className="flex mr-4">
                        <svg className='stroke-1' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                          <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z"></path>
                        </svg>
                      </div>
                      <div className="text-sm font-mono flex ">
                        Speaks English, Kannada and Tamil
                      </div>
                    </div>
                    <div className="flex flex-row items-center grow">
                      <div className="flex mr-4">
                        <svg className='stroke-1' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                          <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z"></path>
                        </svg>
                      </div>
                      <div className="text-sm font-mono flex ">
                        Speaks English, Kannada and Tamil
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="flex w-full grow py-6 justify-center border-b-2">
            <div className="flex flex-col w-full grow py-4 ">
              <div className="flex flex-row w-full mb-8 text-2xl font-semibold font-mono	text-gray-800 dark:text-gray-800 ">
                <p>Mango&apos; Trips</p>
              </div>
              <div className="flex flex-row">
                <div className="grid grid-cols-4 gap-4">
                  dd
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full grow py-6 justify-center ">
            <div className="flex flex-col w-full grow py-4 ">
              <div className="flex flex-row w-full mb-8 text-2xl font-semibold font-mono	text-gray-800 dark:text-gray-800 ">
                <p>Mango&apos;s Reviews</p>
              </div>
              <div className="flex flex-col md:flex-row">
              <div className="flex grow mx-auto mb-4 md:mr-6 md:mb-0 py-4 max-w-2xl lg:max-w-4xl border-2 rounded-md">
                <figure className="mt-4 md:mt-10">
                  <blockquote className="text-center text-sm font-medium leading-8 text-gray-900 md:text-md md:leading-9">
                    <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <Image className="mx-auto h-10 w-10 md:h-20 md:w-20 rounded-full" width="100" height="100" src="/pex.jpeg" alt="" />
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">Judith Black</div>
                      <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                        <circle cx="1" cy="1" r="1" />
                      </svg>
                      <div className="text-gray-600">CEO of Workcation</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="flex grow mx-auto  py-4 max-w-2xl lg:max-w-4xl border-2 rounded-md">
                <figure className="mt-4 md:mt-10">
                  <blockquote className="text-center text-sm font-medium leading-8 text-gray-900 md:text-md md:leading-9">
                    <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <Image className="mx-auto h-10 w-10 md:h-20 md:w-20 rounded-full" width="100" height="100" src="/pex.jpeg" alt="" />
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">Judith Black</div>
                      <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                        <circle cx="1" cy="1" r="1" />
                      </svg>
                      <div className="text-gray-600">CEO of Workcation</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
