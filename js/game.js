document.addEventListener('DOMContentLoaded', function() {
  const typeBlocks = document.querySelectorAll('.type_block');
  const gameBlocks = document.querySelectorAll('.game_block');
  
  let blockQueue = Array.from(typeBlocks);

  function filterGameBlocks(activeTypeElement) {
    const activeTypeText = activeTypeElement.textContent.trim();
    
    gameBlocks.forEach(gameBlock => {
      const gameTypeText = gameBlock.querySelector('h4').textContent.trim();
      if (activeTypeText === 'Click Here!') {
        resetGameBlocks();
        return;
      }
      if (gameTypeText === activeTypeText) {
        gameBlock.style.display = 'flex';
        console.log('Filtering for type map:', activeTypeText);
      } else {
        gameBlock.style.display = 'none';
        console.log('Filtering for type doesnt map:', activeTypeText);
      }
    });
    
  }

  function resetGameBlocks() {
    gameBlocks.forEach(gameBlock => {
      gameBlock.style.display = 'flex';
    });
  }
  
  function initializeQueue() {
    typeBlocks.forEach(block => block.classList.remove('active'));
    if (blockQueue.length > 0) {
      blockQueue[0].classList.add('active');
    }
    resetGameBlocks()
  }

  typeBlocks.forEach(block => {
    block.addEventListener('click', function() {
      if (this.classList.contains('active')) {
        const clickedBlock = blockQueue.shift();
        blockQueue.push(clickedBlock);
        typeBlocks.forEach(b => b.classList.remove('active'));
        blockQueue[0].classList.add('active');
        filterGameBlocks(document.querySelector('.type_block.active').querySelector('h3'));
      }
    });
  });
  
  initializeQueue();
  resetGameBlocks();

  const filterTitles = document.querySelectorAll('#fliter-bar > li > p');
  const dropdowns = document.querySelectorAll('#fliter-bar > li > ul');
  
  filterTitles.forEach((title, index) => {
    title.addEventListener('click', function() {
      if (title.textContent==="Reset") {
        resetGameBlocks();
        return;
      }
      const dropdown = dropdowns[index];
      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
      } else {
        dropdown.style.display = 'block';
      } 
    });
  });
  
  const options = document.querySelectorAll('#fliter-bar > li > ul > li');
  options.forEach((option) => {
    option.addEventListener('click', function(event) {
      console.log(option);
      filterGameBlocks(option);
    });
  });

});

