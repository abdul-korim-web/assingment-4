const allJobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    jobType: "Full-time",
    salaryMin: 130000,
    salaryMax: 175000,
    status: "Not Applied",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
  },

  {
    id: 2,
    company: "TechNova Ltd",
    position: "Frontend Developer",
    location: "Remote",
    jobType: "Full-time",
    salaryMin: 90000,
    salaryMax: 120000,
    status: "Not Applied",
    description:
      "Develop modern web interfaces using React and Tailwind CSS. Collaborate with design and backend teams.",
  },

  {
    id: 3,
    company: "CodeCraft Studio",
    position: "JavaScript Developer",
    location: "Remote",
    jobType: "Contract",
    salaryMin: 80000,
    salaryMax: 100000,
    status: "Not Applied",
    description:
      "Work on scalable web applications using modern JavaScript frameworks and tools.",
  },

  {
    id: 4,
    company: "NextGen Solutions",
    position: "Full Stack Developer",
    location: "Remote",
    jobType: "Full-time",
    salaryMin: 110000,
    salaryMax: 150000,
    status: "Not Applied",
    description:
      "Develop both frontend and backend systems using Node.js and modern frontend technologies.",
  },

  {
    id: 5,
    company: "BrightTech",
    position: "UI Developer",
    location: "Remote",
    jobType: "Part-time",
    salaryMin: 60000,
    salaryMax: 80000,
    status: "Not Applied",
    description:
      "Create responsive UI components using HTML, CSS, and Tailwind CSS.",
  },

  {
    id: 6,
    company: "Skyline Apps",
    position: "React Developer",
    location: "Remote",
    jobType: "Full-time",
    salaryMin: 100000,
    salaryMax: 140000,
    status: "Not Applied",
    description:
      "Develop scalable single-page applications using React and modern JavaScript.",
  },

  {
    id: 7,
    company: "PixelForge",
    position: "Frontend Engineer",
    location: "Remote",
    jobType: "Full-time",
    salaryMin: 95000,
    salaryMax: 130000,
    status: "Not Applied",
    description:
      "Build highly interactive web applications focusing on performance and accessibility.",
  },

  {
    id: 8,
    company: "InnoSoft",
    position: "Web Developer",
    location: "Remote",
    jobType: "Contract",
    salaryMin: 70000,
    salaryMax: 90000,
    status: "Not Applied",
    description:
      "Maintain and develop company websites using modern web technologies.",
  },

  {
    id: 9,
    company: "DevSphere",
    position: "MERN Stack Developer",
    location: "Remote",
    jobType: "Full-time",
    salaryMin: 120000,
    salaryMax: 160000,
    status: "Not Applied",
    description:
      "Develop full stack applications using MongoDB, Express, React, and Node.js.",
  },

  {
    id: 10,
    company: "DigitalCore",
    position: "Frontend Specialist",
    location: "Remote",
    jobType: "Full-time",
    salaryMin: 85000,
    salaryMax: 110000,
    status: "Not Applied",
    description:
      "Design and implement UI components and improve user experience across platforms.",
  },

  {
    id: 11,
    company: "CloudBridge",
    position: "JavaScript Engineer",
    location: "Remote",
    jobType: "Full-time",
    salaryMin: 105000,
    salaryMax: 145000,
    status: "Not Applied",
    description:
      "Work on cloud-based web applications using modern JavaScript frameworks.",
  },

  {
    id: 12,
    company: "FutureSoft",
    position: "React UI Developer",
    location: "Remote",
    jobType: "Part-time",
    salaryMin: 75000,
    salaryMax: 95000,
    status: "Not Applied",
    description:
      "Create reusable React components and implement responsive layouts.",
  },

  {
    id: 13,
    company: "SoftEdge",
    position: "Web Application Developer",
    location: "Remote",
    jobType: "Full-time",
    salaryMin: 95000,
    salaryMax: 125000,
    status: "Not Applied",
    description:
      "Develop and maintain enterprise web applications with modern technologies.",
  },

  {
    id: 14,
    company: "GlobalTech Hub",
    position: "Frontend React Developer",
    location: "Remote",
    jobType: "Full-time",
    salaryMin: 115000,
    salaryMax: 155000,
    status: "Not Applied",
    description:
      "Build high-performance web applications used by millions of users worldwide.",
  },
];
const interviewJobs = [];
const rejectedJobs= []

//  calculete all job counter 
  let interviewJobsSection = document.getElementById("interviewJobsSection")
  let jobSection = document.getElementById("all-jobs");
  let rejectedSection = document.getElementById("rejectedSection")
const calculateJobs = ()=>{
  const totalJOb = document.getElementById("totalJob")
  const interviewJob = document.getElementById("interviewJob")
  const rejectedJob = document.getElementById("rejectedJob")
  const AvailableJobs = document.getElementById("AvailableJobs")
  totalJOb.innerText = allJobs.length;
  AvailableJobs.innerText = allJobs.length;
  interviewJob.innerText = interviewJobs.length
  rejectedJob.innerText = rejectedJobs.length
}
calculateJobs()
//  all jon section rander


const getAllJobs = () => {
  const jobData = allJobs.map((item) => {
    // const divTag = document.createElement(`div`)
    // divTag.classList.add(card)
    return `
        <div class="card  bg-base-100 card-xs shadow-sm">
        <div class="card-body p-[24px] ">
          <div class="flex justify-between items-center">
            <div>
                <h2 class="text-[18px] font-[600] text-[#002C5C]">${item?.company}</h2>
                <p class="text-[#64748B] text-[16px] ">${item?.position}</p>
            </div>
            <div>
                <button onclick="deleteJob(${item?.id})" class="btn w-[32px] h-[32px] rounded-full border border-[#64748B] bg-white"><i class="fa-regular fa-trash-can"></i></button>
            </div>
          </div>
          <div>
           <h2 class="text-[#64748B] text-[14px] ">${item?.location}
 • 
${item?.jobType} 
•
 <span>${item?.salaryMin}</span> - <span>${item?.salaryMax}</span></h2>
          </div>
          <div class=" mt-5 ">
            <h2 class="text-[14px] font-[500] text-[#002C5C] py-2 px-3 bg-[#EEF4FF] w-[113px]">${item?.status}</h2>
            <p class="text-[14px] text-[#323B49] mt-2">${item?.description}</p>

          </div>
          <div class="flex space-x-2 mt-5 items-center">
            <button  class="btn bg-transparent text-[#10B981] text-[14px] font-[600] px-3 py-2  rounded-[4px] border border-[#10B981] " onclick= "interviewBtn(${item?.id})">interview</button>
            <button onclick= "rejectedCardBtn(${item?.id})" class="btn bg-transparent text-[#EF4444] text-[14px] font-[600] px-3 py-2  rounded-[4px] border border-[#EF4444] ">Rejected</button>
          </div>
      </div>
      </div>
        
        `;
  });
  //  insert data in section
  jobSection.innerHTML = jobData.join("");
};
getAllJobs();
const deleteJob = (id) => {
  console.log(id);
//   const jobDataFilter = allJobs.filter((item) => item?.id !== id);
//  const jobDataInsert = jobDataFilter.map((item) => {
//     // const divTag = document.createElement(`div`)
//     // divTag.classList.add(card)
//     return `
//         <div class="card  bg-base-100 card-xs shadow-sm">
//         <div class="card-body p-[24px] ">
//           <div class="flex justify-between items-center">
//             <div>
//                 <h2 class="text-[18px] font-[600] text-[#002C5C]">${item?.company}</h2>
//                 <p class="text-[#64748B] text-[16px] ">${item?.position}</p>
//             </div>
//             <div>
//                 <button onclick="deleteJob(${item?.id})" class="btn w-[32px] h-[32px] rounded-full border border-[#64748B] bg-white"><i class="fa-regular fa-trash-can"></i></button>
//             </div>
//           </div>
//           <div>
//            <h2 class="text-[#64748B] text-[14px] ">${item?.location}
//  • 
// ${item?.jobType} 
// •
//  <span>${item?.salaryMin}</span> - <span>${item?.salaryMax}</span></h2>
//           </div>
//           <div class=" mt-5 ">
//             <h2 class="text-[14px] font-[500] text-[#002C5C] py-2 px-3 bg-[#EEF4FF] w-[113px]">${item?.status}</h2>
//             <p class="text-[14px] text-[#323B49] mt-2">${item?.description}</p>

//           </div>
//           <div class="flex space-x-2 mt-5 items-center">
//             <button class="btn bg-transparent text-[#10B981] text-[14px] font-[600] px-3 py-2  rounded-[4px] border border-[#10B981] ">interview</button>
//             <button class="btn bg-transparent text-[#EF4444] text-[14px] font-[600] px-3 py-2  rounded-[4px] border border-[#EF4444] ">Rejected</button>
//           </div>
//       </div>
//       </div>
        
//         `;
//   });
//    jobSection.innerHTML = jobDataInsert.join("")
allJobs.unshift()
};
//  button trogoling
const buttonTroggle = (id)=>{
 const AllButton = document.getElementById("AllButton")
 const InterviewButton = document.getElementById("InterviewButton")
 const RejectedButton = document.getElementById("RejectedButton")
 const selectedButton = document.getElementById(id)
//   REMOVE CLASS
 AllButton.classList.remove("text-white" ,"bg-[#3B82F6]")
 InterviewButton.classList.remove("text-white" ,"bg-[#3B82F6]")
 RejectedButton.classList.remove("text-white" ,"bg-[#3B82F6]")
//  add class
 AllButton.classList.add("bg-white" ,"text-[#64748B]")
 InterviewButton.classList.add("bg-white" ,"text-[#64748B]")
 RejectedButton.classList.add("bg-white" ,"text-[#64748B]")
//   target button active style add
 selectedButton.classList.remove("bg-white" ,"text-[#64748B]")
 selectedButton.classList.add("text-white" ,"bg-[#3B82F6]")
}

// jobSection.addEventListener("click",(e)=>{
//   const targetDiv = e.target.parentNode.parentNode
//   if (e.target.classList.contains) {
    
//   }
// })
//  push interview data
const interviewBtn =(id)=>{
  // console.log(id);
  const findData = allJobs.find(item=>item.id===id)
  if (!findData) {
    return alert("something went wrong")
    
  } 
  const exitData = interviewJobs.find(item=>item.id===id)
  if (exitData) {
    return alert(`${exitData?.company} is already exit `)
    
  } 
  interviewJobs.push({...findData,status:"Interview"})
  console.log(interviewJobs);
  calculateJobs()
 
   
}
//  push rejected data 
const rejectedCardBtn = (id)=>{
  const findRejectdData = allJobs.find(item=>item.id===id)
  if (!findRejectdData) {
    return alert("something went wrong")
    
  } 
  const exitRejectdData = rejectedJobs.find(item=>item.id===id)
  if (exitRejectdData) {
    return alert(`${exitData?.company} is already exit `)
    
  } 
  rejectedJobs.push({...findRejectdData,status:"Rejected"})
  console.log(rejectedJobs);
  calculateJobs()
}
const InterviewButton = document.getElementById("InterviewButton")
InterviewButton.addEventListener("click",()=>{
  jobSection.classList.add("hidden")
  rejectedSection.classList.add("hidden")
  interviewJobsSection.classList.remove("hidden")
   const interViewData = interviewJobs.map((item) => {
   
    return `
        <div class="card  bg-base-100 card-xs shadow-sm">
        <div class="card-body p-[24px] ">
          <div class="flex justify-between items-center">
            <div>
                <h2 class="text-[18px] font-[600] text-[#002C5C]">${item?.company}</h2>
                <p class="text-[#64748B] text-[16px] ">${item?.position}</p>
            </div>
            <div>
                <button onclick="deleteJob(${item?.id})" class="btn w-[32px] h-[32px] rounded-full border border-[#64748B] bg-white"><i class="fa-regular fa-trash-can"></i></button>
            </div>
          </div>
          <div>
           <h2 class="text-[#64748B] text-[14px] ">${item?.location}
 • 
${item?.jobType} 
•
 <span>${item?.salaryMin}</span> - <span>${item?.salaryMax}</span></h2>
          </div>
          <div class=" mt-5 ">
            <h2 class="text-[14px] font-[500] text-[#002C5C] py-2 px-3 bg-[#EEF4FF] w-[113px]">${item?.status}</h2>
            <p class="text-[14px] text-[#323B49] mt-2">${item?.description}</p>

          </div>
          <div class="flex space-x-2 mt-5 items-center">
            <button  class="btn bg-transparent text-[#10B981] text-[14px] font-[600] px-3 py-2  rounded-[4px] border border-[#10B981] " onclick= "interviewBtn(${item?.id})">interview</button>
            <button class="btn bg-transparent text-[#EF4444] text-[14px] font-[600] px-3 py-2  rounded-[4px] border border-[#EF4444] ">Rejected</button>
          </div>
      </div>
      </div>
        
        `;
  });
  //  insert data in section
  interviewJobsSection.innerHTML = interViewData.join("");
  
})
const AllButton = document.getElementById("AllButton")
AllButton.addEventListener("click",()=>{
jobSection.classList.remove("hidden")
  rejectedSection.classList.add("hidden")
  interviewJobsSection.classList.add("hidden")
})
const RejectedButton = document.getElementById("RejectedButton")
RejectedButton.addEventListener("click",()=>{
RejectedButton.classList.remove("hidden")
  jobSection.classList.add("hidden")
  interviewJobsSection.classList.add("hidden")
})
