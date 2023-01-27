window.addEventListener('DOMContentLoaded', ()=>{
      const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader');
  
      function hideTabContent(){
          tabsContent.forEach(item=>{
              item.style.display = 'none';
          });
          
          tabs.forEach (item => {
              item.classList.remove('tabheader__item_active');
          });
      }    
      function showTabContent(i = 0){
          tabsContent[i].style.display = 'block';
          tabs[i].classList.add('tabheader__item_active')
      }
      hideTabContent();
      showTabContent();
  
      tabsParent.addEventListener('click', (event)=>{
          const target = event.target;
          if(target && target.classList.contains('tabheader__item')){
              tabs.forEach((item, i)=>{
                  if(target == item){
                      hideTabContent();
                      showTabContent(i);
                  }
              });
          }
      });
  
      //timer
      const timeEnd = '2021-11-20';
      function getTimeRemainig(endtime){
          const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t/(1000 * 60 * 60* 24)),
          hours= Math.floor(t/(1000 * 60 * 60) % 24),
          minutes = Math.floor((t/(1000 / 60) % 60),
          seconds =Math.floor((t/ 1000) % 60);
          return{
              'total' : t,
              'days' : days,
              'hours' : hours,
              'minutes' : minutes,
              'seconds' : seconds
          };
      }
  });