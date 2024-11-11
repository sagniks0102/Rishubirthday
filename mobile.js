// let highestZ = 1;

// class Paper {
//   holdingPaper = false;
//   touchStartX = 0;
//   touchStartY = 0;
//   touchMoveX = 0;
//   touchMoveY = 0;
//   touchEndX = 0;
//   touchEndY = 0;
//   prevTouchX = 0;
//   prevTouchY = 0;
//   velX = 0;
//   velY = 0;
//   rotation = Math.random() * 30 - 15;
//   currentPaperX = 0;
//   currentPaperY = 0;
//   rotating = false;

//   init(paper) {
//     paper.addEventListener('touchmove', (e) => {
//       e.preventDefault();
//       if(!this.rotating) {
//         this.touchMoveX = e.touches[0].clientX;
//         this.touchMoveY = e.touches[0].clientY;
        
//         this.velX = this.touchMoveX - this.prevTouchX;
//         this.velY = this.touchMoveY - this.prevTouchY;
//       }
        
//       const dirX = e.touches[0].clientX - this.touchStartX;
//       const dirY = e.touches[0].clientY - this.touchStartY;
//       const dirLength = Math.sqrt(dirX*dirX+dirY*dirY);
//       const dirNormalizedX = dirX / dirLength;
//       const dirNormalizedY = dirY / dirLength;

//       const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
//       let degrees = 180 * angle / Math.PI;
//       degrees = (360 + Math.round(degrees)) % 360;
//       if(this.rotating) {
//         this.rotation = degrees;
//       }

//       if(this.holdingPaper) {
//         if(!this.rotating) {
//           this.currentPaperX += this.velX;
//           this.currentPaperY += this.velY;
//         }
//         this.prevTouchX = this.touchMoveX;
//         this.prevTouchY = this.touchMoveY;

//         paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
//       }
//     })

//     paper.addEventListener('touchstart', (e) => {
//       if(this.holdingPaper) return; 
//       this.holdingPaper = true;
      
//       paper.style.zIndex = highestZ;
//       highestZ += 1;
      
//       this.touchStartX = e.touches[0].clientX;
//       this.touchStartY = e.touches[0].clientY;
//       this.prevTouchX = this.touchStartX;
//       this.prevTouchY = this.touchStartY;
//     });
//     paper.addEventListener('touchend', () => {
//       this.holdingPaper = false;
//       this.rotating = false;
//     });

//     // For two-finger rotation on touch screens
//     paper.addEventListener('gesturestart', (e) => {
//       e.preventDefault();
//       this.rotating = true;
//     });
//     paper.addEventListener('gestureend', () => {
//       this.rotating = false;
//     });
//   }
// }

// const papers = Array.from(document.querySelectorAll('.paper'));

// papers.forEach(paper => {
//   const p = new Paper();
//   p.init(paper);
// });




// let highestZ = 1;

// class Paper {
//   holdingPaper = false;
//   touchStartX = 0;
//   touchStartY = 0;
//   touchMoveX = 0;
//   touchMoveY = 0;
//   prevTouchX = 0;
//   prevTouchY = 0;
//   velX = 0;
//   velY = 0;
//   rotation = Math.random() * 30 - 15;
//   currentPaperX = 0;
//   currentPaperY = 0;
//   rotating = false;
//   rotationStartAngle = 0;

//   init(paper) {
//     paper.addEventListener('touchmove', (e) => {
//       e.preventDefault();
      
//       if (this.holdingPaper) {
//         if (e.touches.length === 1) { 
//           this.touchMoveX = e.touches[0].clientX;
//           this.touchMoveY = e.touches[0].clientY;
          
//           this.velX = this.touchMoveX - this.prevTouchX;
//           this.velY = this.touchMoveY - this.prevTouchY;
          
//           this.currentPaperX += this.velX;
//           this.currentPaperY += this.velY;

//           paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;

//           this.prevTouchX = this.touchMoveX;
//           this.prevTouchY = this.touchMoveY;
//         } else if (e.touches.length === 2) {
//           // Implement rotation if two fingers are used
//           this.rotating = true;
//           const [touch1, touch2] = e.touches;
//           const dx = touch2.clientX - touch1.clientX;
//           const dy = touch2.clientY - touch1.clientY;
//           const angle = Math.atan2(dy, dx) * (180 / Math.PI);

//           if (this.rotationStartAngle === 0) this.rotationStartAngle = angle;

//           this.rotation += angle - this.rotationStartAngle;
//           this.rotationStartAngle = angle;

//           paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
//         }
//       }
//     });

//     paper.addEventListener('touchstart', (e) => {
//       if (this.holdingPaper) return;
//       this.holdingPaper = true;

//       paper.style.zIndex = highestZ;
//       highestZ += 1;

//       this.touchStartX = e.touches[0].clientX;
//       this.touchStartY = e.touches[0].clientY;
//       this.prevTouchX = this.touchStartX;
//       this.prevTouchY = this.touchStartY;

//       this.rotationStartAngle = 0;
//     });

//     paper.addEventListener('touchend', () => {
//       this.holdingPaper = false;
//       this.rotating = false;
//       this.rotationStartAngle = 0;
//     });
//   }
// }

// const papers = Array.from(document.querySelectorAll('.paper'));

// papers.forEach(paper => {
//   const p = new Paper();
//   p.init(paper);
// });


// let highestZ = 1;

// class Paper {
//   holdingPaper = false;
//   touchStartX = 0;
//   touchStartY = 0;
//   touchMoveX = 0;
//   touchMoveY = 0;
//   prevTouchX = 0;
//   prevTouchY = 0;
//   velX = 0;
//   velY = 0;
//   rotation = Math.random() * 30 - 15;
//   currentPaperX = 0;
//   currentPaperY = 0;
//   rotating = false;
//   rotationStartAngle = 0;

//   init(paper) {
//     paper.addEventListener('touchstart', (e) => {
//       console.log('touchstart');
//       if (this.holdingPaper) return;
//       this.holdingPaper = true;

//       paper.style.zIndex = highestZ;
//       highestZ += 1;

//       this.touchStartX = e.touches[0].clientX;
//       this.touchStartY = e.touches[0].clientY;
//       this.prevTouchX = this.touchStartX;
//       this.prevTouchY = this.touchStartY;

//       this.rotationStartAngle = 0;
//     });

//     paper.addEventListener('touchmove', (e) => {
//       if (!this.holdingPaper) return;
//       e.preventDefault();
//       console.log('touchmove');

//       if (e.touches.length === 1) { // Single finger for drag
//         this.touchMoveX = e.touches[0].clientX;
//         this.touchMoveY = e.touches[0].clientY;

//         this.velX = this.touchMoveX - this.prevTouchX;
//         this.velY = this.touchMoveY - this.prevTouchY;

//         this.currentPaperX += this.velX;
//         this.currentPaperY += this.velY;

//         // Using requestAnimationFrame for smooth movement
//         requestAnimationFrame(() => {
//           paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
//         });

//         this.prevTouchX = this.touchMoveX;
//         this.prevTouchY = this.touchMoveY;

//       } else if (e.touches.length === 2) { // Two fingers for rotation
//         this.rotating = true;
//         const [touch1, touch2] = e.touches;
//         const dx = touch2.clientX - touch1.clientX;
//         const dy = touch2.clientY - touch1.clientY;
//         const angle = Math.atan2(dy, dx) * (180 / Math.PI);

//         if (this.rotationStartAngle === 0) this.rotationStartAngle = angle;

//         this.rotation += angle - this.rotationStartAngle;
//         this.rotationStartAngle = angle;

//         // Using requestAnimationFrame for smooth rotation
//         requestAnimationFrame(() => {
//           paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
//         });
//       }
//     });

//     paper.addEventListener('touchend', () => {
//       console.log('touchend');
//       this.holdingPaper = false;
//       this.rotating = false;
//       this.rotationStartAngle = 0;
//     });
//   }
// }

// const papers = Array.from(document.querySelectorAll('.paper'));

// papers.forEach(paper => {
//   const p = new Paper();
//   p.init(paper);
// });





// let highestZ = 1;

// class Paper {
//   touchStartX = 0;
//   touchStartY = 0;
//   currentPaperX = 0;
//   currentPaperY = 0;

//   init(paper) {
//     // When touch starts, initialize position
//     paper.addEventListener('touchstart', (e) => {
//       if (e.touches.length === 1) { // Only track single finger touches
//         paper.style.zIndex = highestZ;
//         highestZ += 1;

//         this.touchStartX = e.touches[0].clientX;
//         this.touchStartY = e.touches[0].clientY;
//       }
//     });

//     // Move the paper with touch movement
//     paper.addEventListener('touchmove', (e) => {
//       if (e.touches.length === 1) {
//         const touchX = e.touches[0].clientX;
//         const touchY = e.touches[0].clientY;

//         // Calculate movement difference
//         const deltaX = touchX - this.touchStartX;
//         const deltaY = touchY - this.touchStartY;

//         // Update current position
//         this.currentPaperX += deltaX;
//         this.currentPaperY += deltaY;

//         // Apply transform
//         paper.style.transform = `translate(${this.currentPaperX}px, ${this.currentPaperY}px)`;

//         // Update start positions for the next move
//         this.touchStartX = touchX;
//         this.touchStartY = touchY;
//       }
//     });

//     // Stop tracking when touch ends
//     paper.addEventListener('touchend', () => {
//       // No action needed on touchend as we're not toggling states
//     });
//   }
// }

// const papers = Array.from(document.querySelectorAll('.paper'));

// papers.forEach(paper => {
//   const p = new Paper();
//   p.init(paper);
// });


let highestZ = 1;

// Get the audio element
const birthdayAudio = document.getElementById('birthdayAudio');

class Paper {
  touchStartX = 0;
  touchStartY = 0;
  currentPaperX = 0;
  currentPaperY = 0;
  audioPlayed = false; // To ensure audio only plays once

  init(paper) {
    // When touch starts, initialize position and play audio if not already played
    paper.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) { // Only track single finger touches
        paper.style.zIndex = highestZ;
        highestZ += 1;

        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;

        // Play audio on touchstart if not already played
        this.playAudio();
      }
    });

    // Also listen for a click event for mobile compatibility
    paper.addEventListener('click', () => {
      this.playAudio();
    });

    // Move the paper with touch movement
    paper.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) {
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;

        // Calculate movement difference
        const deltaX = touchX - this.touchStartX;
        const deltaY = touchY - this.touchStartY;

        // Update current position
        this.currentPaperX += deltaX;
        this.currentPaperY += deltaY;

        // Apply transform
        paper.style.transform = `translate(${this.currentPaperX}px, ${this.currentPaperY}px)`;

        // Update start positions for the next move
        this.touchStartX = touchX;
        this.touchStartY = touchY;
      }
    });

    // Stop tracking when touch ends
    paper.addEventListener('touchend', () => {
      // No action needed on touchend as we're not toggling states
    });
  }

  playAudio() {
    // Ensure the audio only plays once
    if (!this.audioPlayed) {
      birthdayAudio.play().catch((error) => {
        console.error('Audio play was prevented:', error);
      });
      this.audioPlayed = true; // Prevents replaying
    }
  }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});
