/*
	轮播图的构造函数
	el:指定轮播图效果的元素
	
*/

class Carousel{
    constructor({el, interval=2000}) {
        this.el = el;
        this.interval = interval;

        // 当前按钮的下标，默认为0
        this.index = 0;

        // 获取carousel-control 元素
        this.control = this.el.getElementsByClassName("carousel-control")[0];

        // 添加鼠标进入事件
        this.el.addEventListener("mouseenter", () => {
            clearInterval(this.timer);
            /*this.control.style.display = "block";*/
        });

        // 添加鼠标离开事件
        this.el.addEventListener("mouseleave", () => {
           this.autoMove();
           /* this.control.style.display = "none";*/
        });
        
        //获取图片列表
        this.img = this.el.getElementsByClassName("carousel-img")[0];
        this.imgs = Array.from(this.img.getElementsByTagName("a"));
        
        //获取按钮列表
        this.creatBtns();
        this.btn = this.el.getElementsByClassName("carousel-btn")[0];
        this.btns = Array.from(this.btn.getElementsByTagName("a"));
        
        this.btns.forEach((v, k) => {
        	 v.addEventListener("mouseenter", () => {	
        		if(this.index!=k){
        			this.index = k;
        			this.move();
        		}
        	});
        });
        
        /*//获取左右按钮
        this.prev=this.el.getElementsByClassName("carousel-control-prev")[0];
        this.next=this.el.getElementsByClassName("carousel-control-next")[0];
        
        this.prev.addEventListener("click",()=>{
        	this.leftMove();
        });
        
        this.next.addEventListener("click",()=>{
        	this.rightMove();
        });*/
        
        //自动轮播
        this.autoMove();
	}
    
    //生成按钮列表
    creatBtns(){
    	let oBtn=document.createElement("div");
    	oBtn.className="carousel-btn";
    	this.el.appendChild(oBtn);
    	
    	this.imgs.forEach((v,k)=>{
    		let oA=document.createElement("a");
    		if(k===0){
    			oA.className="active";
    		}
    		oBtn.appendChild(oA);
    	});
    }
    
    //自动运动
    autoMove(){
    	this.timer=setInterval(()=>{
    		this.rightMove();
    	},this.interval);
    }
    
    //向左运动
    leftMove(){
    	this.index--;
        if(this.index<0){
        	this.index=this.btns.length-1;
        }
       	this.move();
    }
    //向右运动
    rightMove(){
    	this.index++;
        if(this.index>=this.btns.length){
        	this.index=0;
        }
        this.move();	
    }
    
    move(){
    	//改变图片
    	this.imgs.forEach((v) => {
    		bufferMove(v,{opacity:0},()=>{
    			v.style.dispaly="none";
    		});
    	});
    	this.imgs[this.index].style.display="block";
    	bufferMove(this.imgs[this.index],{opacity:100});
    	
    	//改变按钮
		this.btns.forEach(v => v.className = "");
		this.btns[this.index].className = "active";
    }
}
