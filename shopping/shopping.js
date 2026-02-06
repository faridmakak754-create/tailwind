

const arrXimg=[
    "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/2252000531/photo/beautiful-christmas-tree-and-other-decor-in-cozy-room-festive-interior-design.jpg?s=612x612&w=0&k=20&c=TZJsa4ME1ys_FvJrQeoAojBKQGFXcsTsaa6SVbcMDZ8=",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1685354218016-3899c9ef79ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9vZGllfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1681433602478-dc69b2b49153?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbiUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
                                
]

const arrXName= [
"Premium White T-Shirt", "Blue- Shirt", "Nike Pink Shoe", "Hp Golden Laptop" , "Head-Set Steel" , "Christ-Mas Tree", "Gym-Equipment" , "Butterfly-Hoodie" ,
"Sport-Shoe", "Yellow-Jacket"

]

const recentlyProduct = document.getElementById("recentlyProduct")
for (let i = 0; i< arrXimg.length ; i++) {
   recentlyProduct.innerHTML +=`
   
                    <div class=" p-2 bg-white min-w-64 rounded-[14px] shadow-sm">
                        <!-- img part -->
                        <div class="relative pb-4">
                            <img class="w-full h-40 rounded-[6px] object-cover "
                                src=${arrXimg[i]}
                                alt="">
                            <div
                                class="absolute top-2 left-2 text-white bg-red-500 h-8 w-14 rounded-sm flex items-center justify-center text-sm font-semibold">
                                -30%</div>
                            <button
                                class="absolute top-2 right-2 h-10 w-10 rounded-full bg-white flex items-center justify-center">
                                <i class="far fa-heart text-gray-600"></i>
                            </button>
                        </div>
                        <div class="flex flex-col gap-2 px-3 ">
                            <div>
                                <h1 class="text-lg font-semibold">${arrXName[i]}</h1>
                                <p class="text-sm text-gray-500 font-semibold">Made From premium cotton with a smooth
                                    finish.</p>
                            </div>
                            <div class="flex items-center gap-3">
                                <p class="text-xl font-bold">&#8377; 499</p>
                                <p class="text-lg line-through text-gray-500 font-semibold">&#8377; 999</p>
                            </div>
                            <button class="bg-indigo-800 py-1 text-white font-semibold rounded-md mb-3">
                                Add to Cart
                            </button>
                        </div>
                    </div>
   
   `;
    
}
