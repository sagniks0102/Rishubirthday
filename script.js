// let highestZ = 1;

// class Paper {
//   holdingPaper = false;
//   mouseTouchX = 0;
//   mouseTouchY = 0;
//   mouseX = 0;
//   mouseY = 0;
//   prevMouseX = 0;
//   prevMouseY = 0;
//   velX = 0;
//   velY = 0;
//   rotation = Math.random() * 30 - 15;
//   currentPaperX = 0;
//   currentPaperY = 0;
//   rotating = false;

//   init(paper) {
//     document.addEventListener('mousemove', (e) => {
//       if(!this.rotating) {
//         this.mouseX = e.clientX;
//         this.mouseY = e.clientY;
        
//         this.velX = this.mouseX - this.prevMouseX;
//         this.velY = this.mouseY - this.prevMouseY;
//       }
        
//       const dirX = e.clientX - this.mouseTouchX;
//       const dirY = e.clientY - this.mouseTouchY;
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
//         this.prevMouseX = this.mouseX;
//         this.prevMouseY = this.mouseY;

//         paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
//       }
//     })

//     paper.addEventListener('mousedown', (e) => {
//       if(this.holdingPaper) return; 
//       this.holdingPaper = true;
      
//       paper.style.zIndex = highestZ;
//       highestZ += 1;
      
//       if(e.button === 0) {
//         this.mouseTouchX = this.mouseX;
//         this.mouseTouchY = this.mouseY;
//         this.prevMouseX = this.mouseX;
//         this.prevMouseY = this.mouseY;
//       }
//       if(e.button === 2) {
//         this.rotating = true;
//       }
//     });
//     window.addEventListener('mouseup', () => {
//       this.holdingPaper = false;
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
//   mouseTouchX = 0;
//   mouseTouchY = 0;
//   mouseX = 0;
//   mouseY = 0;
//   prevMouseX = 0;
//   prevMouseY = 0;
//   velX = 0;
//   velY = 0;
//   rotation = Math.random() * 30 - 15;
//   currentPaperX = 0;
//   currentPaperY = 0;
//   rotating = false;

//   init(paper) {
//     document.addEventListener('mousemove', (e) => {
//       if (this.holdingPaper && !this.rotating) {
//         this.mouseX = e.clientX;
//         this.mouseY = e.clientY;

//         this.velX = this.mouseX - this.prevMouseX;
//         this.velY = this.mouseY - this.prevMouseY;

//         this.currentPaperX += this.velX;
//         this.currentPaperY += this.velY;

//         this.prevMouseX = this.mouseX;
//         this.prevMouseY = this.mouseY;

//         paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
//       }
//     });

//     paper.addEventListener('mousedown', (e) => {
//       e.preventDefault(); // Prevent default right-click menu for rotation

//       if (!this.holdingPaper) { // Pick up the paper
//         this.holdingPaper = true;
//         paper.style.zIndex = highestZ;
//         highestZ += 1;

//         this.mouseTouchX = e.clientX;
//         this.mouseTouchY = e.clientY;
//         this.prevMouseX = this.mouseTouchX;
//         this.prevMouseY = this.mouseTouchY;
//       } else { // Drop the paper
//         this.holdingPaper = false;
//         this.rotating = false;
//       }

//       if (e.button === 2) { // Right-click to enable rotation
//         this.rotating = true;
//       }
//     });

//     // Prevent context menu on right-click
//     paper.addEventListener('contextmenu', (e) => e.preventDefault());
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
