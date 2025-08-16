//   import './firebase.js'
  import{auth,db} from  './firebase.js'
  import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
  import {getFirestore,doc,setDoc,addDoc,collection,query,where,orderBy,limit,getDocs}from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
   function handleSearch(){
        const text=document.body.innerHTML;
        const searchTerm=document.getElementById("searchInput").value.trim();

        //remove previous highlights
        const cleanText=text.replace(/<mark>|<\/mark>/g, "");
            document.body.innerHTML=cleanText;
            if(searchTerm==="")return;
            //Highlight new matches
              const regex = new RegExp(`(${searchTerm})`, "gi");
         document.body.innerHTML = document.body.innerHTML.replace(regex, "<mark>$1</mark>");
    }

    // showcart.html
 const cartContainer = document.getElementById("cart-container");
    const buyNowBtn = document.getElementById("buy-now");

    // Function to display cart items
async function showCart(user) {
  cartContainer.innerHTML = ""; // clear container

  // Query cart items for logged-in user
  const q = query(collection(db, "cart"), where("userId", "==", user.uid));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    cartContainer.innerHTML = "<p>Your cart is empty</p>";
    buyNowBtn.style.display = "none";
    return;
  }

  buyNowBtn.style.display = "inline-block";

  querySnapshot.forEach(docSnap => {
    const data = docSnap.data();
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <span>${data.name}-${data.product}: Quantity: ${data.quantity ?? 1}</span>
    `;
    cartContainer.appendChild(cartItem);
  });
}

// Listen to login state
onAuthStateChanged(auth, (user) => {
  if (user) {
    showCart(user);
  } else {
    cartContainer.innerHTML = "<p>Please login to see your cart.</p>";
    buyNowBtn.style.display = "none";
  }
});


// toggle 
function toggleMenu() {
    const sidebar = document.querySelector('.nav-links');
    sidebar.classList.toggle('show');
}
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', toggleMenu);
});