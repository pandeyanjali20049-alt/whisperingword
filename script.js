const poemForm = document.getElementById("poemForm");
if(poemForm){
poemForm.addEventListener("submit", function(e){
 e.preventDefault();
 const title=document.getElementById("title").value;
 const content=document.getElementById("content").value;
 const category=document.getElementById("category").value;
 const author=document.getElementById("author").value;
 const poem={title,content,category,author};
 let poems=JSON.parse(localStorage.getItem("poems"))||[];
 poems.push(poem);
 localStorage.setItem("poems",JSON.stringify(poems));
 alert("Poem Submitted Successfully!");
 window.location.href="poems.html";
});}

const poemList=document.getElementById("poemList");
if(poemList){
 let poems=JSON.parse(localStorage.getItem("poems"))||[];
 poems.forEach(function(poem){
 poemList.innerHTML += `<div class="poem-box"><h3>${poem.title}</h3><p><b>Category:</b> ${poem.category}</p><p>${poem.content}</p><p><i>- ${poem.author}</i></p></div>`;
 });
}

const registerForm=document.getElementById("registerForm");
if(registerForm){registerForm.addEventListener("submit",function(e){e.preventDefault();alert("Registration Successful!");window.location.href="login.html";});}

const loginForm=document.getElementById("loginForm");
if(loginForm){loginForm.addEventListener("submit",function(e){e.preventDefault();alert("Login Successful!");window.location.href="index.html";});}

document.getElementById("poemForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log("Form submitted"); // DEBUG

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  console.log(title, content); // DEBUG

  const res = await fetch("http://localhost:5000/api/poems/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, content })
  });

  const data = await res.json();
  console.log("Response:", data);

  alert("Poem submitted successfully!");
});
async function loadPoems() {
  const res = await fetch("http://localhost:5000/api/poems/allpoems");
  const poems = await res.json();

  const container = document.getElementById("poemContainer");
  container.innerHTML = "";

  poems.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${p.title}</h3><p>${p.content}</p>`;
    container.appendChild(div);
  });
}

loadPoems();