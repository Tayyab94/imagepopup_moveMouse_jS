

// Array of image URLs or file names from your folder
const imageUrls = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1910&q=80"
    // Add more image URLs here
];

// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    let index = 0;

    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        if (now - prev > delay) {
            prev = now;


            // ge the Next Image URl from the array
            const imageUrl = imageUrls[index];

            // update the index for the next call
            index = (index + 1) % imageUrls.length;

            // Call the function with the image URL
            return func(...args, imageUrl);
            //   return func(...args);
        }
    }
}
document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets, imageUrl) => {

    var div = document.createElement("div");

    var img = document.createElement("img");
    // img.setAttribute("src", "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")
    img.setAttribute("src", imageUrl)
    div.appendChild(img)

    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";
    div.classList.add("imageDiv");
    document.body.appendChild(div)


    gsap.to(img, {
        y: "0",
        ease: Power4,
        duration: .3
    });

    gsap.to(img, {
        y: "100%",
        delay: .5,
        ease: Power2,
    });


    setTimeout(function () {
        div.remove()
    }, 1500)
}, 300));