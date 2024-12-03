function adjustGridGap() {
    const container = document.querySelector(".grid-container");
    const containerWidth = container.clientWidth;

    // Calculate gap size based on available space
    const totalItems = Math.floor(containerWidth / 210); // 200px item + min 20px gap
    const gapSize = Math.max(10, (containerWidth - totalItems * 250) / (totalItems - 1 || 1));

    container.style.gap = `${gapSize}px`;
}

// Adjust gap on load and resize
//window.addEventListener("load", adjustGridGap);
//window.addEventListener("resize", adjustGridGap);
