let isStatus = document.querySelector("h4");
let addFriend = document.querySelector("#add");
let isFriend = false;

addFriend.addEventListener("click", function () {
  if (!isFriend) {
    isStatus.innerHTML = "Friends";
    isStatus.style.color = "green";
    addFriend.innerHTML = "Remove Friends";
    isFriend = true;
  } else {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    addFriend.innerHTML = "Add Friends";
    isFriend = false;
  }
});
