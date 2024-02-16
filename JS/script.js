const tecladosContainer = document.getElementById('teclados-container');
for(let i = 0; i<9; i++){
    tecladosContainer.innerHTML += `
    <div class="teclado-container col-md-3">
    <div class="row teclado-header">Zouya-GMK67</div>
    <div class="row teclado-img"><img src="TecladoResource.png"></img></div>
    <div class="row teclado-info">Gateron Red Swiches</div>
    <div class="row teclado-info">PVP:50€</div>


</div> 

`;
}
