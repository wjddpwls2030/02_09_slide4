//전역변수(원래는 슬라이드마다 썼었는데 이렇게 쓰면 한번만 쓰면됨. 슬라이드 마다 쓰는게 똑같기 때문에)
var $slidewrap = document.getElementsByClassName('slide-wrap');
var $nextbtn   = document.getElementsByClassName('next-btn');
var $prevbtn   = document.getElementsByClassName('prev-btn');

    //console.log( '$slidewrap 객체 배열값 :',$slidewrap.length);
    //console.log( '$slidewra',$slidewrap);
    
var slide = {
    init: function(){
        this.slide1Fn();
        this.slide2Fn();
        this.slide3Fn();
        this.slide4Fn();
    },

    

    slide1Fn: function(){

        var cnt = 0;
        

        function nextslideFn(){
            cnt++;
            cnt > 6 ? cnt=0: cnt; 
            $slidewrap[0].style = 'left:' + (-1200*cnt) + 'px'; 
    
        }


        function prevslideFn(){    
            cnt--;
            cnt < 0 ? cnt=6 :cnt; 
            $slidewrap[0].style = 'left:' + (-1200*cnt) + 'px';
    
        }
        //클릭 이벤트 타겟
        /*
        $nextbtn[0].onclick = function(){
        
            nextslideFn();
        }
        
        $prevbtn[0].onclick = function(){
         
            prevslideFn();
        }
        */
        //버튼 등록 방법2 : 버튼추가(등록)(add) 이벤트(Event) 리스너(Listener)
        //$nextbtn[0].addEventListener('click',nextslideFn,false );밑에랑 똑같음
          $nextbtn[0].addEventListener('click',function(event){
            event.preventDefault();
            nextslideFn();
          },false);
        //$prevbtn[0].addEventListener('click',prevslideFn,false );밑에랑 똑같음
          $prevbtn[0].addEventListener('click',function(event){
            event.preventDefault();
            prevslideFn();
        
          },false);
        
        //버튼 전파 차단

    },

    slide2Fn: function(){
        var cnt = 0;


        function nextslideFn(){
            cnt++;
            cnt > 3 ? cnt=0 : cnt;
            $slidewrap[1].style = 'left:'+ (-400*cnt)+'px';

        }

        function prevslideFn(){
            cnt--;
            cnt < 0 ? cnt=3 : cnt;
            $slidewrap[1].style = 'left:'+ (-400*cnt)+'px';
        }

        /*
        $nextbtn[1].onclick = function(){
            nextslideFn();
        }

        $prevbtn[1].onclick = function(){
            prevslideFn();

        }
        */
       //버튼 추가(add) 이벤트(event) 리스너(listener) 등록
       /*
        $nextbtn[1].addEventListener('click', nextslideFn, false);
        $prevbtn[1].addEventListener('click', prevslideFn, false);
        */
       $nextbtn[1].addEventListener('click',function(e){
        e.preventDefault();
        nextslideFn();
       },false);
       $prevbtn[1].addEventListener('click',function(e){
        e.preventDefault();
        prevslideFn();
       },false);
    },


    slide3Fn: function(){
        var cnt = 0;


        function prevslideFn(){
            cnt++;
            cnt > 2 ? cnt=0 : cnt;
            $slidewrap[2].style = 'top:'+ (-200*cnt)+'px';
        }

        function nextslideFn(){
            cnt--;
            cnt < 0 ? cnt=2 : cnt;
            $slidewrap[2].style = 'top:'+ (-200*cnt)+'px';
        }

        
        $nextbtn[2].addEventListener('click',function(e){
            e.preventDefault();
            nextslideFn();
        },false);
            
        $prevbtn[2].addEventListener('click',function(e){
            e.preventDefault();
            prevslideFn();
        },false);

       
    },

    slide4Fn: function(){
        var cnt = 0;

        function nextslideFn(){
            cnt++;
            cnt > 3 ? cnt=0 : cnt;
            $slidewrap[3].style = 'left:'+ (-400*cnt)+'px';

        }

        function prevslideFn(){
            cnt--;
            cnt < 0 ? cnt=3 : cnt;
            $slidewrap[3].style = 'left:'+ (-400*cnt)+'px';
        }

        
        $nextbtn[3].addEventListener('click',function(e){
            e.preventDefault();
            nextslideFn();
        },false);

        $prevbtn[3].addEventListener('click',function(e){
            e.preventDefault();
            prevslideFn();
        },false); 
    }
};

slide.init();