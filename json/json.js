
const users=[
    {
        name:"Kripa",
        email:"kripa@gmail.com",
        phone:"9876543210",
    },


     {
        name:"Makakmayum Farid Khan",
        email:"farid@gmail.com",
        phone:"811994105",
    },

     {
        name:"Robinson",
        email:"robinson@gmail.com",
        phone:"1234567890",
    },

     {
        name:"Sachikanta",
        email:"sachikanta@gmail.com",
        phone:"6754321900",
    },

     {
        name:"Rojit",
        email:"rojit@gmail.com",
        phone:"9876544456",
    },
    
     {
        name:"Priyanshu",
        email:"Priyanshu@gmail.com",
        phone:"8976543210",
    },

]

const card = document.getElementById("card");
for (let i = 0; i<users.length; i++) {
  card.innerHTML +=`

        <div class="bg-slate-100 py-4 px-4  shadow-sm rounded-sm hover:-translate-y-1 transition-all ">
            <div class="flex gap-2 items-center">
                <div class="h-10 w-10 rounded-full bg-indigo-400 flex justify-center items-center text-2xl text-white  font-semibold hover:bg-indigo-700">
                    ${users[i].name.charAt(0)}
                </div>
                <h1 class="text-xl">${users[i].name}</h1>
            </div>
            <div class="flex flex-col gap-2 py-3 ">
                <p class="font-semibold text-indigo-600"><span class="text-black/80">Email:</span> ${users[i].email}</p>
                <p class="font-semibold text-indigo-600"><span class="text-black/80">Phone:</span> ${users[i].phone}</p>
            </div>


        </div>
  
  `;
    
}

