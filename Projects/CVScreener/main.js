// data is an array of object
const data = [
  {
    name: "Rohan Das",
    age: 18,
    city: "Kolkata",
    framework: "Django",
    language: "Python",
    Image: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    name: "Shubham sharma",
    age: 25,
    city: "Bangalor",
    framework: "Angular",
    language: "JavaScript",
    Image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Suman sharma",
    age: 20,
    city: "Ahmedabad",
    framework: "laravel",
    language: "PHP",
    Image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Palaki upadhye",
    age: 21,
    city: "Surat",
    framework: "Node.js",
    language: "Javascrpt",
    Image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
];

// CV iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: () => {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const next = document.getElementById("next");
next.addEventListener("click", nextCV);
const candiates = cvIterator(data);
nextCV();
function nextCV() {
  const currentCandidate = candiates.next().value;
  console.log(currentCandidate);
  if (currentCandidate != undefined) {
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    image.innerHTML = `<img src="${currentCandidate.Image}">`;
    profile.innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">${currentCandidate.name}</li>
    <li class="list-group-item"><strong>Age :</strong>${currentCandidate.age}</li>
    <li class="list-group-item"><strong>Lives in :</strong> ${currentCandidate.city}</li>
    <li class="list-group-item"><strong>language :</strong> ${currentCandidate.language}</li>
    <li class="list-group-item"><strong>Use :</strong> ${currentCandidate.framework}</li>
  </ul> `;
  } else {
    alert("End of application");
    window.location.reload();
  }

}
