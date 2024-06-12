export const preloadImages = (selector: string): Promise<void> => {
    return new Promise((resolve) => {
      const images = Array.from(document.querySelectorAll<HTMLElement>(selector));
      const totalImages = images.length;
      let loadedImages = 0;
  
      images.forEach((img) => {
        const tempImg = new Image();
        const backgroundImage = img.style.backgroundImage;
  
        // Extract the URL from the backgroundImage style
        const imageUrl = backgroundImage.slice(5, -2);
  
        tempImg.src = imageUrl;
        tempImg.onload = () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            resolve();
          }
        };
      });
    });
  };
  