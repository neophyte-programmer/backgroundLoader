const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

//percentage of load
let load = 0;
//to make the load increment after every 30ms
let int = setInterval(blurBg, 30);

function blurBg() {
    load++;

    if (load > 99){
        clearInterval(int);
    }
//connecting the increment to the actual html text
    loadText.innerText = `${load}%` ;
//fading out the percentage number
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
//blurring background
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; 
}

//mapping the range of number 0 - 100 to 1 - 0(opacity) so that they are executed within the same amount of time 
const scale = (numLoad, loadFirst, loadLast, opacityFirst, opacityLast ) => {
    return (numLoad-loadFirst) * (opacityLast-opacityFirst) / (loadLast-loadFirst) + opacityFirst; 
}