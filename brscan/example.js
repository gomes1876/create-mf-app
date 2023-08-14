var a = 0

do {
    setTimeout(()=>{
        console.log("var a: ");
        console.log(a);
    },1000)
} while(a < 1000)
