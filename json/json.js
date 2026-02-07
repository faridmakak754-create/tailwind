const users=[
    {
        name :"Farid",
        phone:8119934105,
        email:"farid@gmail.com",
    },

    {
        name :"Premjit",
        phone:9087654321,
        email:"premjit@gmail.com",
    },
    {
        name :"Ricky",
        phone:6909013635,
        email:"ricky@gmail.com",
    },
    {
        name :"Kripa",
        phone:1234567890,
        email:"kripa@gmail.com",
    },

]
const card=document.getElementById("card");
for (let i = 0; i < users.length; i++) {
   
    card.innerHTML +=`
     <div class="bg-gradient-to-br from-slate-50 to-slate-300 py-4 px-4  shadow-sm rounded-sm hover:-translate-y-1 transition-all ">
            <div class="flex gap-2 items-center">
                <div class="h-10 w-10 rounded-full bg-indigo-400 flex justify-center items-center text-2xl text-white  font-semibold hover:bg-indigo-700">
                  ${users[i].name.charAt(0)}
                </div>
                <h1 class="text-xl">${users[i].name}</h1>
            </div>
            <div class="flex flex-col gap-2 py-3 ">
                <p class="font-semibold text-indigo-900"><span class="text-black/80">Email:</span> ${users[i].email}</p>
                <p class="font-semibold text-indigo-900"><span class="text-black/80">Phone:</span> ${users[i].phone}</p>
            </div>


        </div>
    
    
    `
    
}