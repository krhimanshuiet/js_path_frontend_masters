export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


// const avStream = await navigator.mediaDevices.getUserMedia({
//   audio:true,
//   video:true
// })

// // videos 

// const video = document.querySelector("video");
// video.srcObject = avStream
// await video.play();