```yaml
title: Smoothly Scrollable Videos for Web
cover: https://lms.d.zhan.com/zhanlms/addon_homework/2023/02/846314863eaf7ae27fe2/kvblurred.png
date: 2023-10-31
location: Beijing
tags: [technologies]
```

## TL; DR

- You need more **key-frames**.
- At the cost of increasing video size.

##  The Problem

Scrollable videos are normal muted videos that play forwards and backwards as user scrolling the page. Complex animations, 3D transitions for example, are usually hard to implement with pure JavaScript but relatively easy with video creation softwares and dedicated 3D softwares like Adobe AE and Blender. As a solution, scrollable videos could be applied to create complex while interactive animations in your web page.

Apple provides many good examples in their product pages. For example their page for [Airpods 2](https://www.apple.com/airpods-pro/).   

![Airpods](https://lms.d.zhan.com/zhanlms/addon_homework/2023/10/11238696540efea02daf/apple.gif)

## Implementation

The script to implement this effect is relatively straightforward:

```js 
let video = document.getElementById('v'); 

function play(){  
  var frameNumber  = window.pageYOffset / playbackConst;
  video.currentTime  = frameNumber;
  requestAnimationFrame(scrollPlay);
}

play();
```

```html
<video id="video" src="<SOURCE>" style="" />
```



## References

- [Stack Overflow Question](https://stackoverflow.com/questions/51371160/how-to-use-ffmpeg-to-make-an-html5-webm-video-scroll-smoothly)
- [Video Help Thread](https://forum.videohelp.com/threads/389787-Using-ffmpeg-to-make-an-html5-webm-video-scroll-smoothly)
- [Codepen Example](https://codepen.io/marduklien/pen/MdvdEG)
