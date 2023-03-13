const towerOfHanoi = (n,s,d,h) => {
    if(n===1){
        console.log(`Move plate from ${s} to ${d}`);
        return;
    }
    towerOfHanoi(n-1,s,h,d);
    console.log(`Move plate from ${s} to ${d}`);
    towerOfHanoi(n-1,h,d,s);
}