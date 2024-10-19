export async function getVideo(){
    const avStream = await navigator.mediaDevices.getUserMedia({
        video:true
    })
    const video = document.querySelector("video");
    try {
        // new browsers
    video.srcObject = avStream;
        
    } catch (error) {
        // old browsers
        console.log(error)
        video.src = window.URL.createObjectURL(avStream);
    }
    await video.play();
    return video;
}
export function drawVideo(video,canvas){
    console.log("drwaing...")
    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video,0,0);
}

