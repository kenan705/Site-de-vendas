function adicionarAoCarrinho(nomeProduto, preco) {
    alert(`${nomeProduto} foi adicionado ao seu carrinho. Preço: R$${preco.toFixed(2)}`);
}

document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário
    alert('Mensagem enviada com sucesso!');
});
