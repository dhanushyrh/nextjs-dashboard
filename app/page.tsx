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
          <div className="flex flex-col mb-6  rounded-lg border-2 shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col basis-8/12 self-center">
                <figure className=" text-center  p-4 border-b-2 md:border-b-0">
                  <Image className="w-24 h-24 rounded-full mx-auto" src="/pex.jpeg" alt="" width="384" height="512" />
                  <div className="pt-6 space-y-4">

                    <figcaption className="font-medium">
                      <div className="text-2xl	text-sky-500 dark:text-sky-400 ">
                        Mango Dallis
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
          {/* Join me */}
          <div className="flex flex-col  p-6 justify-center items-center rounded-lg  ">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-2xl mb-6 font-mono font-semibold tracking-tight text-gray-700 md:text-2xl">Join Me</h2>
              {/* <p className="mt-2 text-lg leading-8 text-gray-500">Mango's online presence.</p> */}
            </div>
            <div className="flex flex-row">
              <div className="flex-none mr-2 shadow-sm">
                <svg className='stroke-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                  <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z"></path>
                </svg></div>
              <div className="flex-none mr-2 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.8545455 3 3 8.8545455 3 16 L 3 34 C 3 41.145455 8.8545455 47 16 47 L 34 47 C 41.145455 47 47 41.145455 47 34 L 47 16 C 47 8.8545455 41.145455 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.054545 5 45 9.9454545 45 16 L 45 34 C 45 40.054545 40.054545 45 34 45 L 16 45 C 9.9454545 45 5 40.054545 5 34 L 5 16 C 5 9.9454545 9.9454545 5 16 5 z M 37 11 C 35.9 11 35 11.9 35 13 C 35 14.1 35.9 15 37 15 C 38.1 15 39 14.1 39 13 C 39 11.9 38.1 11 37 11 z M 25 14 C 18.954545 14 14 18.954545 14 25 C 14 31.045455 18.954545 36 25 36 C 31.045455 36 36 31.045455 36 25 C 36 18.954545 31.045455 14 25 14 z M 25 16 C 29.954545 16 34 20.045455 34 25 C 34 29.954545 29.954545 34 25 34 C 20.045455 34 16 29.954545 16 25 C 16 20.045455 20.045455 16 25 16 z"></path>
                </svg>
              </div>
              <div className="flex-none mr-2 shadow-sm">
                <svg className='stroke-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                  <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z"></path>
                </svg></div>
              <div className="flex-none mr-2 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.8545455 3 3 8.8545455 3 16 L 3 34 C 3 41.145455 8.8545455 47 16 47 L 34 47 C 41.145455 47 47 41.145455 47 34 L 47 16 C 47 8.8545455 41.145455 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.054545 5 45 9.9454545 45 16 L 45 34 C 45 40.054545 40.054545 45 34 45 L 16 45 C 9.9454545 45 5 40.054545 5 34 L 5 16 C 5 9.9454545 9.9454545 5 16 5 z M 37 11 C 35.9 11 35 11.9 35 13 C 35 14.1 35.9 15 37 15 C 38.1 15 39 14.1 39 13 C 39 11.9 38.1 11 37 11 z M 25 14 C 18.954545 14 14 18.954545 14 25 C 14 31.045455 18.954545 36 25 36 C 31.045455 36 36 31.045455 36 25 C 36 18.954545 31.045455 14 25 14 z M 25 16 C 29.954545 16 34 20.045455 34 25 C 34 29.954545 29.954545 34 25 34 C 20.045455 34 16 29.954545 16 25 C 16 20.045455 20.045455 16 25 16 z"></path>
                </svg>
              </div>
            </div>

          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 md:w-3/5 md:px-8 md:py-12">
          {/* Inside Right column */}
          {/* About */}
          <div className="flex w-full py-6 border-b-2">
            <div className="flex flex-col w-full grow py-4 ">
              <div className="flex flex-row w-full mb-8 text-2xl font-semibold font-mono	text-gray-800 dark:text-gray-800 ">
                About Mango
              </div>
              <div className='flex flex-col lg:flex-row'>
                <div className="flex flex-row  items-center grow">
                  <div className="flex mr-4">
                    <svg className="stroke-1" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6921 5H9.30807C8.15914 5.00635 7.0598 5.46885 6.25189 6.28576C5.44398 7.10268 4.99368 8.20708 5.00007 9.356V14.644C4.99368 15.7929 5.44398 16.8973 6.25189 17.7142C7.0598 18.5311 8.15914 18.9937 9.30807 19H14.6921C15.841 18.9937 16.9403 18.5311 17.7482 17.7142C18.5562 16.8973 19.0064 15.7929 19.0001 14.644V9.356C19.0064 8.20708 18.5562 7.10268 17.7482 6.28576C16.9403 5.46885 15.841 5.00635 14.6921 5Z" stroke="#000000"  stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8.00012 9C7.58591 9 7.25012 9.33579 7.25012 9.75C7.25012 10.1642 7.58591 10.5 8.00012 10.5V9ZM12.0001 10.5C12.4143 10.5 12.7501 10.1642 12.7501 9.75C12.7501 9.33579 12.4143 9 12.0001 9V10.5ZM11.2501 9.75C11.2501 10.1642 11.5859 10.5 12.0001 10.5C12.4143 10.5 12.7501 10.1642 12.7501 9.75H11.2501ZM12.7501 8C12.7501 7.58579 12.4143 7.25 12.0001 7.25C11.5859 7.25 11.2501 7.58579 11.2501 8H12.7501ZM12.0001 9C11.5859 9 11.2501 9.33579 11.2501 9.75C11.2501 10.1642 11.5859 10.5 12.0001 10.5V9ZM15.5001 10.5C15.9143 10.5 16.2501 10.1642 16.2501 9.75C16.2501 9.33579 15.9143 9 15.5001 9V10.5ZM15.5001 9C15.0859 9 14.7501 9.33579 14.7501 9.75C14.7501 10.1642 15.0859 10.5 15.5001 10.5V9ZM16.0001 10.5C16.4143 10.5 16.7501 10.1642 16.7501 9.75C16.7501 9.33579 16.4143 9 16.0001 9V10.5ZM16.1138 10.1811C16.3519 9.84222 16.2702 9.37443 15.9313 9.13631C15.5923 8.8982 15.1246 8.97992 14.8864 9.31885L16.1138 10.1811ZM11.2737 13.2783C10.9579 13.5464 10.9193 14.0197 11.1874 14.3354C11.4555 14.6512 11.9288 14.6898 12.2445 14.4217L11.2737 13.2783ZM9.29973 14.9003C8.96852 15.149 8.90167 15.6192 9.15041 15.9504C9.39916 16.2816 9.8693 16.3485 10.2005 16.0997L9.29973 14.9003ZM12.2569 14.407C12.5667 14.1321 12.595 13.6581 12.3201 13.3483C12.0453 13.0384 11.5712 13.0101 11.2614 13.285L12.2569 14.407ZM11.1691 14.3091C11.4249 14.6349 11.8963 14.6917 12.2222 14.436C12.548 14.1802 12.6048 13.7088 12.3491 13.3829L11.1691 14.3091ZM11.186 11.4467C11.0185 11.0678 10.5756 10.8966 10.1968 11.0641C9.81796 11.2316 9.64667 11.6745 9.8142 12.0533L11.186 11.4467ZM12.3609 13.4024C12.1137 13.07 11.6439 13.001 11.3115 13.2482C10.9792 13.4954 10.9101 13.9652 11.1573 14.2976L12.3609 13.4024ZM13.8953 16.6608C14.2602 16.8567 14.7149 16.7198 14.9109 16.3548C15.1068 15.9899 14.9699 15.5352 14.605 15.3392L13.8953 16.6608ZM8.00012 10.5H12.0001V9H8.00012V10.5ZM12.7501 9.75V8H11.2501V9.75H12.7501ZM12.0001 10.5H15.5001V9H12.0001V10.5ZM15.5001 10.5H16.0001V9H15.5001V10.5ZM14.8864 9.31885C13.8552 10.7867 12.6412 12.1172 11.2737 13.2783L12.2445 14.4217C13.7091 13.1782 15.0093 11.7532 16.1138 10.1811L14.8864 9.31885ZM10.2005 16.0997C10.7113 15.7161 11.4531 15.1201 12.2569 14.407L11.2614 13.285C10.4871 13.9719 9.77692 14.5419 9.29973 14.9003L10.2005 16.0997ZM12.3491 13.3829C11.8824 12.7884 11.4917 12.1379 11.186 11.4467L9.8142 12.0533C10.1703 12.8586 10.6255 13.6164 11.1691 14.3091L12.3491 13.3829ZM11.1573 14.2976C11.8855 15.2767 12.8203 16.0835 13.8953 16.6608L14.605 15.3392C13.7239 14.8661 12.9578 14.2048 12.3609 13.4024L11.1573 14.2976Z" fill="#000000"/>
                    </svg>
                  </div>
                  <div className="text-sm font-mono flex ">
                    Speaks English, Kannada and Tamil
                  </div>
                </div>
                <div className="flex flex-row mt-4 lg:mt-0 items-center grow">
                  <div className="flex mr-4">
                    <svg className="stroke-1" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000"  stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000"  stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-sm font-mono flex ">
                    Delhi, India
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Trips */}
          <div className="flex w-full grow py-6 justify-center border-b-2">
            <div className="flex flex-col w-full grow py-4 ">
              <div className="flex flex-row w-full mb-8 text-2xl font-semibold font-mono	text-gray-800 dark:text-gray-800 ">
                <p>Mango&apos; Trips</p>
              </div>
              <div className="flex flex-row">

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 xl:gap-x-8">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <Image src="/sea.jpg" alt="Front of men&#039;s Basic Tee in black." height="400" width="200" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="#">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            Bachelor&apos;s Thai
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Thailand</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">$$</p>
                    </div>
                  </div>

                  {/* <!-- More products... --> */}
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <Image src="/arch.jpg" alt="Front of men&#039;s Basic Tee in black." height="400" width="200" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="#">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            Flaming Iceland
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Iceland</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">$$$</p>
                    </div>
                  </div>



                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <Image src="/Oman.jpg" alt="Front of men&#039;s Basic Tee in black." height="400" width="200" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="#">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            Sunny Oman
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Oman</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">$$</p>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <Image src="/bali.jpg" alt="Front of men&#039;s Basic Tee in black." height="400" width="200" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="#">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            Breezy Bali
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Bali</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">$$</p>
                    </div>
                  </div>


                </div>



              </div>
            </div>
          </div>
          {/* Reviews */}
          <div className="flex w-full grow py-6 justify-center ">
            <div className="flex flex-col w-full grow py-4 ">
              <div className="flex flex-row w-full mb-8 text-2xl font-semibold font-mono	text-gray-800 dark:text-gray-800 ">
                <p>Mango&apos;s Reviews</p>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="flex grow mx-auto mb-4 md:mr-6 md:mb-0 py-4 max-w-2xl lg:max-w-4xl border-2 rounded-md">
                  <figure className="px-4">
                    <blockquote className="text-left text-sm font-medium leading-8 text-gray-900 md:text-md md:leading-9">
                      <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                    </blockquote>
                    <div className="flex items-center gap-x-6">
                      <Image className="h-16 w-16 rounded-full" height="15" width="15" src="/pex.jpeg" alt="" />
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Harshitha</h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">India</p>
                      </div>
                    </div>
                  </figure>
                </div>
                <div className="flex grow mx-auto  py-4 max-w-2xl lg:max-w-4xl border-2 rounded-md">
                  <figure className="mt-4 md:px-4 md:mt-0">
                    <blockquote className="text-left text-sm font-medium leading-8 text-gray-900 md:text-md md:leading-9">
                      <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                    </blockquote>
                    <div className="flex items-center gap-x-6">
                      <Image className="h-16 w-16 rounded-full" height="15" width="15" src="/pex.jpeg" alt="" />
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Alexander</h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">Africa</p>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="flex">
                <span className="block">
                  <button type="button" className="inline-flex items-center rounded-md bg-white mt-5 px-3 py-4 text-md md:text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    View All Reviews
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
