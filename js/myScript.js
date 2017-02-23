// Create an array to store the images
var i =0;
var arr=new Array();
arr[0]="images/01.png"; 
arr[1]="images/02.png"; 
arr[2]="images/03.png"; 
arr[3]="images/04.png"; 
arr[4]="images/05.png"; 
arr[5]="images/06.png";
arr[6]="images/07.png"; 
arr[7]="images/08.png"; 
arr[8]="images/09.png"; 
arr[9]="images/10.png"; 
arr[10]="images/11.png"; 
arr[11]="images/12.png"; 
arr[12]="images/13.png"; 
arr[13]="images/14.png"; 
arr[14]="images/15.png"; 
arr[15]="images/16.png"; 
arr[16]="images/17.png"; 
arr[17]="images/18.png"; 
arr[18]="images/19.png"; 
arr[19]="images/20.png"; 
arr[20]="images/21.png"; 

// Set an interval to show and change the images every 0.1s
var int = setInterval(changeImg,100); 
function changeImg(){
    var obj=document.querySelector(".food");
    if (i == arr.length-1){
        i = 0;
    }else{
        i += 1;
    };
    obj.src=arr[i];
};

// Create an function to stop and start the image changing process by click on a same button
var change = true;
function stop(){
    if(change){
        change = false;
        bt.value = "Stop";
        bt.innerText = "Start";
        clearInterval(int);
    }else{
        bt.value = "Start";
        int = setInterval(changeImg,100);
        bt.innerText = "Stop";
        change = true;
    };
};
