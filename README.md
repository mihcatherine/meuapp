# Organização Financeira

Aplicativo PWA de organização financeira pessoal com Appwrite TablesDB.

## Arquivos

`index.html` · `app.js` · `appwrite.js` · `style.css` · `manifest.webmanifest` · `sw.js` · `logo.png` · `icon-192.png` · `icon-512.png`

## Appwrite configurado

Endpoint: `https://nyc.cloud.appwrite.io/v1`

Project ID: `6b01e299000b19ac36ce`

Database ID: `6b01e350001ca47807e5`

Tables:

- profiles → `profiles`
- settings → `6b01e569002a228a1c5b`
- transactions → `6b073550002f83558732`
- goals → `6b01e8700035f839daea`
- accounts → `6b01fc9a00179915f55c`
- categories → `6b01fd500025ac427542`
- bills → `6b07370d00009dc4076e`
- cards → `6b073783002f04caddfa`

## Segurança

O cliente não contém API key administrativa. Cada linha criada recebe permissões de leitura, atualização e exclusão para o usuário autenticado. O Appwrite continua sendo a fonte persistente dos dados; o localStorage serve apenas como cache de contingência.

## Regras financeiras implementadas

- saldo disponível considera apenas contas, nunca investimentos;
- livre para usar considera compromissos previstos e limite de crédito disponível;
- compras no cartão não reduzem a conta bancária no momento da compra;
- compras no Pix, receitas e investimentos alteram o saldo da conta vinculada;
- fatura é calculada pelo ciclo de fechamento de cada cartão;
- pagamento da fatura reduz a conta e marca as compras daquele ciclo como pagas;
- parcelas criam as ocorrências futuras mensalmente;
- investimentos lançados alimentam automaticamente o acumulado e o percentual da meta;
- despesas fixas podem ser pagas a partir do cadastro e ficam vinculadas ao lançamento;
- ciclo salarial exibido nas configurações é do dia 21 ao dia 20, com adiantamento configurável.

## Publicação

Publique todos os arquivos na raiz do GitHub Pages, sem pasta `icons/`. O site deve ser acessado por HTTPS para instalação do PWA.
