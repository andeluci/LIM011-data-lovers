/* Manejo de data */

// esta es una función de ejemplo

export const showPotterCharacters = (data) => {
  let templatePotter = '';
  data.map(obj => {
    templatePotter += `
    <div class="card flex-container">
        <img src = '${obj.image}' alt = "Image" class="photoCharacter"/>
      <div class="container">
        <p>${obj.name}</p>
      </div>
    </div>`;
  });
  return templatePotter;
};
