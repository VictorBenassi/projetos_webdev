interface Produto
{
    nome: string;
    preco: number;
    categoria: string;
}
type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

type ProdutoPagamento = Produto & FormaPagamento;
const fomapagamento: FormaPagamento = 
{
    Produto: 'Detergente',
    FormaPagamento: "pix"
};
    


