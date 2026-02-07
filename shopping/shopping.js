
const recentlycards=[
{
    img: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name:"Premium White T-Shirt", 
    price:{offer:499 , actual:999},
    percent:30

},
{
    img:  "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    name:"Blue- Shirt",  
    price:{offer:800 , actual:1500},
    percent:40
},

{
    img:   "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fHww",
    name:"Nike Pink Shoe", 
    price:{offer:700 , actual:1300},
    percent:35
},
{
    img:  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
    name: "Hp Golden Laptop" ,  
    price:{offer:900 , actual:1700},
    percent:45
},
{
    img:  "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    name:"Head-Set Steel" ,  
    price:{offer:1000 , actual:2300},
    percent:60
},
{
    img:   "https://media.istockphoto.com/id/2252000531/photo/beautiful-christmas-tree-and-other-decor-in-cozy-room-festive-interior-design.jpg?s=612x612&w=0&k=20&c=TZJsa4ME1ys_FvJrQeoAojBKQGFXcsTsaa6SVbcMDZ8=",
    name: "Christ-Mas Tree", 
    price:{offer:1200 , actual:1900},
    percent:55
},
{
    img:    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww",
    name: "Gym-Equipment" ,  
    price:{offer:1300 , actual:3000},
    percent:75
},
{
    img:      "https://images.unsplash.com/photo-1685354218016-3899c9ef79ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9vZGllfGVufDB8fDB8fHww",
    name: "Butterfly-Hoodie" ,
    price:{offer:600 , actual:1200},
    percent:50
},
{
    img:   "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    name:"Sport-Shoe",
    price:{offer:800 , actual:1500},
    percent:40
},
{
    img:  "https://plus.unsplash.com/premium_photo-1681433602478-dc69b2b49153?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbiUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
    name: "Yellow-Jacket",  
    price:{offer:800 , actual:1500},
    percent:60
}




]

const recentlyProduct = document.getElementById("recentlyProduct")
for (let i = 0; i< recentlycards.length ; i++) {
   recentlyProduct.innerHTML +=`
   
                    <div class=" p-2 bg-white min-w-64 rounded-[14px] shadow-sm">
                        <!-- img part -->
                        <div class="relative pb-4">
                            <img class="w-full h-40 rounded-[6px] object-cover "
                                src=${recentlycards[i].img}
                                alt="">
                            <div
                                class="absolute top-2 left-2 text-white bg-red-500 h-8 w-14 rounded-sm flex items-center justify-center text-sm font-semibold">
                                -${recentlycards[i].percent}%</div>
                            <button
                                class="absolute top-2 right-2 h-10 w-10 rounded-full bg-white flex items-center justify-center">
                                <i class="far fa-heart text-gray-600"></i>
                            </button>
                        </div>
                        <div class="flex flex-col gap-2 px-3 ">
                            <div>
                                <h1 class="text-lg font-semibold">${recentlycards[i].name}</h1>
                                <p class="text-sm text-gray-500 font-semibold">Made From premium cotton with a smooth
                                    finish.</p>
                            </div>
                            <div class="flex items-center gap-3">
                                <p class="text-xl font-bold">&#8377; ${recentlycards[i].price.offer}</p>
                                <p class="text-lg line-through text-gray-500 font-semibold">&#8377; ${recentlycards[i].price.actual}</p>
                            </div>
                            <button class="bg-indigo-800 py-1 text-white font-semibold rounded-md mb-3">
                                Add to Cart
                            </button>
                        </div>
                    </div>
   
   `;
    
}

const header =document.getElementById("header");
header.innerHTML =`

    <div class="">
            <!-- top -->
            <div class="max-w-[90%] h-20 mx-auto flex justify-between items-center gap-3 py-3 max-sm:py-1">
                <img src="logo.png" alt="logo" class="h-19 w-36 object-cover ">

                <div class="relative max-lg:hidden">
                    <input type="text" placeholder="Search for Products"
                        class=" max-md:w-80 max-sm:w-50 max-sm:text-sm max-sm:p-1 max-sm:h-8 
                        h-10 px-3 w-100  bg-white outline-none rounded-full shadow-sm shadow-gray-200 hover:shadow-blue-400 focus:shadow-red-500">
                    <i class=" fas fa-search absolute right-3 top-3 max-sm:text-xs "></i>


                </div>


                <div class="flex items-center gap-6 max-lg:hidden">
                    <i class="fa-regular fa-heart text-gray-600 text-lg hover:text-gray-900"></i>
                    <i class="fa-regular fa-heart text-gray-600 text-lg hover:text-gray-900"></i>
                    <i class="fa-solid fa-cart-shopping text-gray-600 text-lg hover:text-gray-900"></i>
                    <button
                        class="shadow-md px-6 h-8 font-semibold rounded-sm bg-indigo-700 text-white hover:bg-indigo-800">
                        <a href="login.html">Login</a>
                    </button>
                </div>
                <!-- handburger -->
                <div id="sidebarBtn" class="lg:hidden text-2xl ">
                    <i class="fa-solid fa-bars"></i>
                </div>

            </div>
        </div>
        <hr class="text-gray-400 max-lg:hidden">
        <nav class=" py-4 max-lg:hidden">
            <div class="max-w-[85%] mx-auto text-indigo-500 flex items-center justify-center gap-6">
                <a href="index.html" class="font-semibold  hover:text-indigo-800 hover:border-b-2 hover:border-yellow-400 ">Home</a>
                <a href="product.html" class="font-semibold  hover:text-indigo-800 hover:border-b-2 hover:border-yellow-400">Products</a>
                <a href="" class="font-semibold  hover:text-indigo-800 hover:border-b-2 hover:border-yellow-400">Features</a>
                <a href="" class="font-semibold hover:text-indigo-800 hover:border-b-2 hover:border-yellow-400">About</a>
                <a href="" class="font-semibold hover:text-indigo-800 hover:border-b-2 hover:border-yellow-400">Contact</a>
            </div>

        </nav>
         <!-- mobile -->
        <div id="sidebar"  class="bg-indigo-400/80 min-h-screen w-64 absolute z-50 py-6 px-4 -left-64 transition-all duration-300 ease-in-out">
            <div class=" relative">
                <input type="text" placeholder="Search for Products"
                    class="
                        h-10 px-3 w-56  bg-white  outline-none rounded-full shadow-sm shadow-gray-200 hover:shadow-blue-400 focus:shadow-red-500">
                <i class=" fas fa-search absolute right-3 top-3 max-sm:text-xs "></i>


            </div>

            <div class="flex flex-col items-center pt-5 gap-5">
                <a href="index.html" class="font-semibold text-white hover:text-indigo-800 hover:border-b-2 hover:border-yellow-400">Home</a>
                <a href="product.html" class="font-semibold text-white hover:text-indigo-800 hover:border-b-2 hover:border-yellow-400">Products</a>
                <a href="" class="font-semibold text-white hover:text-indigo-800 hover:border-b-2 hover:border-yellow-400">Features</a>
                <a href="" class="font-semibold text-white hover:text-indigo-800 hover:border-b-2 hover:border-yellow-400">About</a>
                <a href="" class="font-semibold text-white hover:text-indigo-800 hover:border-b-2 hover:border-yellow-400">Contact</a>


                        <a href="login.html" class=" px-6 h-10 w-40 font-semibold text-center py-1 shadow-sm rounded-sm bg-indigo-700 text-white hover:bg-indigo-800">Login</a>


                   
            </div>
            <hr class="mt-5 text-gray-300 font-extra-bold  border ">

            <div class="flex gap-3 pt-5 justify-center items-center">
                <i class="fa-regular fa-heart text-4xl text-white/90"></i>
                <i class="fa-solid fa-cart-shopping text-4xl text-white/90"></i>
            </div>
                

        </div>

`;