let following = document.querySelector(".following")
let followingText = document.querySelector("#followingText")
let followingIcon = document.querySelector("#followingIcon")
let unfollowingIcon = document.querySelector("#unfollowingIcon")
let deleteItem = document.querySelector("#deleteItem")
let part__messenger = document.querySelector(".part__messenger")
let part__share = document.querySelector(".part__share")
let     messengerIcon = document.querySelector("#messengerIcon")
following.addEventListener("click", function(){
    followingText.innerText = "Unfollow"
followingIcon.style.display = "none"
unfollowingIcon.style.display = "block"
})

deleteItem.addEventListener("click",function(){
    part__messenger.style.display = "none"
        part__share.style.width = "100%"
})

messengerIcon.addEventListener("click",function(){
    part__messenger.style.display = "block"
    part__share.style.width = "70%"
})