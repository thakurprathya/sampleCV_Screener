console.log(`CV Screener`);

//array of objects, this data should be fetched using api
const data=[
    {
        name: "Rajat Bhatia",
        gender: "male",
        resident: "Chicago",
        language: "python",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        name: "Nathan Adams",
        gender: "male",
        resident: "New Jersey",
        language: "Java",
        image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
        name: "Emily Williams",
        gender: "female",
        resident: "Queens",
        language: "Go",
        image: "https://randomuser.me/api/portraits/women/54.jpg"
    },
    {
        name: "Kevin Heart",
        gender: "male",
        resident: "New York",
        language: "Java",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "Andy Roberts",
        gender: "female",
        resident: "Ontario",
        language: "Java",
        image: "https://randomuser.me/api/portraits/women/24.jpg"
    },
    {
        name: "Camilla Brooks",
        gender: "female",
        resident: "New York",
        language: "C++",
        image: "https://randomuser.me/api/portraits/women/42.jpg"
    }
];

//creating a CV iterator
function CV_iterator(profiles){
    let nextindex=0;
    return{  //returning an object
        next: function(){  //next funct is object ele, returning another object
            return (nextindex<profiles.length) ? {value: profiles[nextindex++], done: false} : {done: true} ;
        }
    };
}
const candidates= CV_iterator(data);

//adding eventlistner to next btn
const btn_next=document.getElementById("btn-next");
btn_next.addEventListener("click", nextCV);

function nextCV(){
    const current_candidate= candidates.next().value;

    let image=document.getElementById("image");
    let profile=document.getElementById("profile");
    if(current_candidate!=undefined){
        image.innerHTML=`<img src="${current_candidate.image}"></img>`;
        profile.innerHTML=`
                            <ul class="list-group">
                                <li class="list-group-item"><b>Name:</b> ${current_candidate.name}</li>
                                <li class="list-group-item"><b>Gender:</b> ${current_candidate.gender}</li>
                                <li class="list-group-item"><b>Resident of:</b> ${current_candidate.resident}</li>
                                <li class="list-group-item"><b>Programming Language:</b> ${current_candidate.language}</li>
                            </ul>
        `;
    }
    else{  //if candidate undefined or not exist
        alert("End of Applications!!!"); //alerting
        window.location.reload();  //reloading the page
    }
}

nextCV();  //calling the function once so that the page always show first profile on reloading instead of nothing