const { createApp } = Vue

  createApp({
    data() {
      return {
        slides : [
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ],
        current : 0,
        autoPlayOn : null,
        autoPlayForward : true,
      }
    },
    methods: {
        isHighlighted(index){
            return this.current == index ? 'highlight' : '';
        },
        prevImg(){
            this.current == 0 ? this.current = this.slides.length-1 : this.current --;
        },
        nextImg(){
            this.current == this.slides.length -1 ? this.current = 0 : this.current ++;
        },
        clickOnThumb(index){
            this.current = index;
        },
        autoPlayStart(){
            if (!this.autoPlayOn){
                // versione con alternativa ad arrow function
                // let that = this;
                // this.autoPlayOn = setInterval(function(){
                //     console.log(that);
                //     that.autoPlayForward ? that.nextImg() : that.prevImg();
                this.autoPlayOn = setInterval(()=>{
                    this.autoPlayForward ? this.nextImg() : this.prevImg();
                },3000);
            }
        },
        autoPlayPause(){
            if (this.autoPlayOn){
                clearInterval(this.autoPlayOn);
                this.autoPlayOn = null;
            }
        },
        autoPlayInvert(){
            this.autoPlayForward = !this.autoPlayForward;
        },
    },
    mounted() {
        this.autoPlayStart();
    }
  }).mount('#app')