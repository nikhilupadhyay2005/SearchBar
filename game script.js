const TicTac ={
    cPlayer: "X", state:Array(9).fill(null),gameOver:false,

    init(){
        this.cBoard();
        document.getElementById("reset").addEventListener("click",()=> this.reset());

    },

    cBoard(){
        const board = document.getElementById("board");
        board.innerHTML="";
        

}