export class Veiculo{
    private marca: String;
    private modelo: string;
    private ano: number;
    private cor: string;

    constructor(
        marca:string,
        modelo: string,
        ano: number,
        cor: string
    ){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    public get getMarca (): String {return this.marca; }
    public get getModelo (): string {return this.modelo; }
    public get getAno (): number {return this.ano; }
    public get getCor (): string {return this.cor; }

    set setMarca(novoMarca: string){
        if(novoMarca.trim(). length=== 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.marca= novoMarca;
        }
            set setModelo(novoModelo: string){
        if(novoModelo.trim(), length === 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.modelo= novoModelo;
        }
            set setAno(novoAno: number){
        if(novoAno=== 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.ano= novoAno;
        }
    }
