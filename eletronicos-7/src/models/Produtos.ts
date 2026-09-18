export class Produtos {
    private codigodebarras: number;
    private fabricante: string;
    private preco: number;

    constructor(
        codigodebarras:number,
        fabricante: string,
        preco: number,
        
    ){
        this.codigodebarras = codigodebarras;
        this.fabricante = fabricante;
        this.preco = preco; 
    }
    public get getCodigodebarras (): number {return this.codigodebarras; }
    public get getFabricante (): string {return this.fabricante; }
    public get getPreco (): number {return this.preco; }

    set setCodigodebarras(novoCodigodebarras: number){
        if(novoCodigodebarras=== 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.codigodebarras= novoCodigodebarras;
        }
            set setFabricante(novoFabricante: string){
        if(novoFabricante.trim(). length === 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.fabricante= novoFabricante;
        }
        set setPreco(novoPreco: number){
            if (novoPreco=== 0) {
                console.log("\n Erro: o campo não pode estar vazio")} 
                this.preco= novoPreco;
            }
        }
    
