let allData = [];

// data fetching

const loadAllData = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((datas) => {
        allData = datas.data;       
        renderAllData(allData);     
    });
};

let issueCount = document.getElementById("issue-count");
const allSection = document.getElementById("all-section");

// rendering all data

const renderAllData = (infos) => {      
  allSection.innerHTML = '';            
  issueCount.innerText = infos.length;  
  for (let info of infos) {            
    let div = document.createElement("div");
    if(info.status === "open"){
            div.innerHTML = 
    `
 <div class="bg-white rounded-2xl overflow-hidden h-80 w-80 shadow-sm border border-gray-100">
  
  <!-- Top Green Bar -->
  <div class="h-1 bg-green-400 w-full"></div>

  <div class="p-5">
    <!-- Top Row: Icon Image + Priority Badge -->
    <div class="flex justify-between items-center mb-4">
      <!-- Icon Image -->
      <img src="./assets/Open-Status.png" alt="status icon" class="w-9 h-9" />

      <!-- Priority Badge -->
      <span class="bg-red-100 text-red-400 text-xs font-bold px-3 py-1 rounded-full tracking-widest">
        ${info.priority}
      </span>
    </div>

    <!-- Title -->
    <h2 class="text-gray-900 font-bold text-base leading-snug mb-2">
     ${info.title}
    </h2>

    <!-- Description -->
    <p class="text-gray-400 text-sm mb-4">
      ${info.description}
    </p>

    <!-- Labels -->
    <div class="flex gap-2 mb-4">
      <span class="flex items-center gap-1 bg-red-100 text-red-400 text-xs font-semibold px-3 py-1 rounded-full">
         ${info.labels[0]}
      </span>
      <span class="flex items-center gap-1 bg-yellow-100 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full">
        ${info.labels[1]}
      </span>
    </div>

    <!-- Divider -->
    <hr class="border-gray-100 mb-3" />

    <!-- Footer -->
    <div class="text-gray-400 text-xs space-y-1">
      <p><span class="text-gray-500 font-medium">#${info.id}</span> &nbsp; by ${info.assignee}</p>
      <p>${info.createdAt}</p>
    </div>
  </div>

</div>
        `;
    }
    else{
            div.innerHTML = 
    `
 <div class="bg-white rounded-2xl overflow-hidden h-80 w-80 shadow-sm border border-gray-100">
  
  <!-- Top Green Bar -->
  <div class="h-1 bg-[#A855F7] w-full"></div>

  <div class="p-5">
    <!-- Top Row: Icon Image + Priority Badge -->
    <div class="flex justify-between items-center mb-4">
      <!-- Icon Image -->
      <img src="./assets/Closed- Status .png" alt="status icon" class="w-9 h-9" />

      <!-- Priority Badge -->
      <span class="bg-red-100 text-red-400 text-xs font-bold px-3 py-1 rounded-full tracking-widest">
        ${info.priority}
      </span>
    </div>

    <!-- Title -->
    <h2 class="text-gray-900 font-bold text-base leading-snug mb-2">
     ${info.title}
    </h2>

    <!-- Description -->
    <p class="text-gray-400 text-sm mb-4">
      ${info.description}
    </p>

    <!-- Labels -->
    <div class="flex gap-2 mb-4">
      <span class="flex items-center gap-1 bg-red-100 text-red-400 text-xs font-semibold px-3 py-1 rounded-full">
         ${info.labels[0]}
      </span>
      <span class="flex items-center gap-1 bg-yellow-100 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full">
        ${info.labels[1]}
      </span>
    </div>

    <!-- Divider -->
    <hr class="border-gray-100 mb-3" />

    <!-- Footer -->
    <div class="text-gray-400 text-xs space-y-1">
      <p><span class="text-gray-500 font-medium">#${info.id}</span> &nbsp; by ${info.assignee}</p>
      <p>${info.createdAt}</p>
    </div>
  </div>

</div>
        `;
    }
    div.addEventListener('click', () => openModal(info)); // ✅
    allSection.appendChild(div);
  }
};

// button functionallity

let allFilterBtn = document.getElementById('all-btn');
let openFilterBtn = document.getElementById('open-btn');
let closeFilterBtn = document.getElementById('close-btn');

allFilterBtn.addEventListener('click', function(){
    allFilterBtn.classList.add('btn-primary');
    allFilterBtn.classList.remove('btn-base');
    openFilterBtn.classList.remove('btn-primary');
    openFilterBtn.classList.add('btn-base');
    renderAllData(allData);     
})

openFilterBtn.addEventListener('click', function(){
    allFilterBtn.classList.remove('btn-primary');
    allFilterBtn.classList.add('btn-base');
    openFilterBtn.classList.remove('btn-base');
    openFilterBtn.classList.add('btn-primary');
    renderOpenData();
})

closeFilterBtn.addEventListener('click', function(){
  allFilterBtn.classList.remove('btn-primary');
  allFilterBtn.classList.add('btn-base');
  openFilterBtn.classList.remove('btn-primary');
  openFilterBtn.classList.add('btn-base');
  closeFilterBtn.classList.remove('btn-base');
  closeFilterBtn.classList.add('btn-primary');
  renderCloseData();
})


// rendering open data

const renderOpenData = () => {                                              
    let openIssue = allData.filter(issue => issue.status === "open");
    issueCount.innerText = openIssue.length;
    allSection.innerHTML = '';         
    for(let issue of openIssue){  
        let div = document.createElement('div');     
        div.innerHTML =
        `
        <div class="bg-white rounded-2xl overflow-hidden h-80 w-80 shadow-sm border border-gray-100">
  
  <!-- Top Green Bar -->
  <div class="h-1 bg-green-400 w-full"></div>

  <div class="p-5">
    <!-- Top Row: Icon Image + Priority Badge -->
    <div class="flex justify-between items-center mb-4">
      <!-- Icon Image -->
      <img src="./assets/Open-Status.png" alt="status icon" class="w-9 h-9" />

      <!-- Priority Badge -->
      <span class="bg-red-100 text-red-400 text-xs font-bold px-3 py-1 rounded-full tracking-widest">
        ${issue.priority}
      </span>
    </div>

    <!-- Title -->
    <h2 class="text-gray-900 font-bold text-base leading-snug mb-2">
     ${issue.title}
    </h2>

    <!-- Description -->
    <p class="text-gray-400 text-sm mb-4">
      ${issue.description}
    </p>

    <!-- Labels -->
    <div class="flex gap-2 mb-4">
      <span class="flex items-center gap-1 bg-red-100 text-red-400 text-xs font-semibold px-3 py-1 rounded-full">
         ${issue.labels[0]}
      </span>
      <span class="flex items-center gap-1 bg-yellow-100 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full">
        ${issue.labels[1]}
      </span>
    </div>

    <!-- Divider -->
    <hr class="border-gray-100 mb-3" />

    <!-- Footer -->
    <div class="text-gray-400 text-xs space-y-1">
      <p><span class="text-gray-500 font-medium">#${issue.id}</span> &nbsp; by ${issue.assignee}</p>
      <p>${issue.createdAt}</p>
    </div>
  </div>

</div>
        `;
        div.addEventListener('click', () => openModal(issue)); // ✅
        allSection.appendChild(div);
    }
}

// rendering closed data

const renderCloseData = () => {                                              
    let closeIssue = allData.filter(issue => issue.status === "closed");
    issueCount.innerText = closeIssue.length;
    allSection.innerHTML = '';         
    for(let issue of closeIssue){  
        let div = document.createElement('div');     
        div.innerHTML =
        `
        <div class="bg-white rounded-2xl overflow-hidden h-80 w-80 shadow-sm border border-gray-100">
  
  <!-- Top Green Bar -->
  <div class="h-1 bg-[#A855F7] w-full"></div>

  <div class="p-5">
    <!-- Top Row: Icon Image + Priority Badge -->
    <div class="flex justify-between items-center mb-4">
      <!-- Icon Image -->
      <img src="./assets/Closed- Status .png" alt="status icon" class="w-9 h-9" />

      <!-- Priority Badge -->
      <span class="bg-red-100 text-red-400 text-xs font-bold px-3 py-1 rounded-full tracking-widest">
        ${issue.priority}
      </span>
    </div>

    <!-- Title -->
    <h2 class="text-gray-900 font-bold text-base leading-snug mb-2">
     ${issue.title}
    </h2>

    <!-- Description -->
    <p class="text-gray-400 text-sm mb-4">
      ${issue.description}
    </p>

    <!-- Labels -->
    <div class="flex gap-2 mb-4">
      <span class="flex items-center gap-1 bg-red-100 text-red-400 text-xs font-semibold px-3 py-1 rounded-full">
         ${issue.labels[0]}
      </span>
      <span class="flex items-center gap-1 bg-yellow-100 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full">
        ${issue.labels[1]}
      </span>
    </div>

    <!-- Divider -->
    <hr class="border-gray-100 mb-3" />

    <!-- Footer -->
    <div class="text-gray-400 text-xs space-y-1">
      <p><span class="text-gray-500 font-medium">#${issue.id}</span> &nbsp; by ${issue.assignee}</p>
      <p>${issue.createdAt}</p>
    </div>
  </div>

</div>
        `;
        div.addEventListener('click', () => openModal(issue)); // ✅
        allSection.appendChild(div);
    }
}

// modal section



loadAllData();