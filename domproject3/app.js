const reviews=[
    {
        id:1,
        name: "monica geller",
        job: "cook",
        img: "domproject3\Courteney_Cox_as_Monica_Geller.jpg",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ipsum porro alias aliquid dolore consequatur soluta dolor quo."
    },
    {
        id:2,
        name:"ross gellar",
        job: "paleontologist aka dinasour xd",
        img:"domproject3\David_Schwimmer_as_Ross_Geller.jpg",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ipsum porro alias aliquid dolore consequatur soluta dolor quo."
    },
    {
        id:3,
        name:"rachel green",
        job: "assistant buyer",
        img:"domproject3\rachel.jpg",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ipsum porro alias aliquid dolore consequatur soluta dolor quo."
    },
    {
        id:4,
        name:"joey tribniani",
        job:"Actor",
        img:"domproject3\JoeyTribbiani.jpg",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ipsum porro alias aliquid dolore consequatur soluta dolor quo."
    },
    {
        id:5,
        name:"chandler bing",
        job:"transponster",
        img:"domproject3\chandler.jpg",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ipsum porro alias aliquid dolore consequatur soluta dolor quo."
    }
]
let x = 0;
let forward=document.querySelector(".forward");
let back=document.querySelector(".back");
forward.addEventListener('click',function () {
    x++;
    console.log(x);
})