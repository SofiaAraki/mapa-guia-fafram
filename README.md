# Campus Guia — FAFRAM Campus 1

Protótipo acadêmico de orientação do Campus 1 da FAFRAM.

## Estrutura

- `index.html` — interface usada pelo visitante/aluno.
- `editor.html` — editor visual do mapa.
- `campus1.svg` — planta usada como referência visual.
- `css/style.css` — estilos da aplicação.
- `css/editor.css` — estilos específicos do editor.
- `js/dados.js` — dados editáveis do mapa.
- `js/mapa.js` — motor do mapa e construção do grafo em memória.
- `js/rotas.js` — cálculo da menor rota.
- `js/app.js` — interface principal.
- `js/editorMapa.js` — ferramentas de edição visual.
- `js/personagem.js` — personagem exibido no resultado.
- `js/validate-map.js` — validação automática dos dados.

## O que é editável

O mapa agora separa três elementos:

1. **Locais** — salas, entrada, portaria, biblioteca etc.
2. **Pontos de passagem** — pontos que formam a rede dos corredores.
3. **Conexões** — ligações entre os pontos de passagem que definem por onde a rota pode passar.

Os pontos e conexões iniciais foram extraídos da rede que já existia no projeto. Assim, o comportamento anterior é preservado, mas a rede deixa de depender exclusivamente dos segmentos azuis da planta.

## Como editar

Abra `editor.html`.

### Modo Local
- Selecione um local.
- Clique no mapa ou arraste o marcador.
- Altere nome/tipo, se necessário.
- Clique em **Aplicar alterações**.
- Salve o mapa.

### Modo Ponto
- Arraste um ponto de passagem existente.
- Clique em uma área vazia para criar um novo ponto.
- Use **+ Novo ponto de passagem** para criar um ponto no centro da planta.
- Exclua um ponto quando necessário; suas conexões também serão removidas.

### Modo Conexão
- Clique no primeiro ponto de passagem.
- Clique no segundo ponto.
- A linha azul será criada e passará a fazer parte da rede.
- Clique em uma linha azul para selecioná-la.
- Use **Remover conexão selecionada** para apagá-la.

### Salvar e exportar

- **Salvar mapa** grava a configuração no `localStorage` do navegador.
- **Exportar JSON** cria uma cópia completa da configuração.
- **Importar JSON** carrega uma configuração exportada.
- **Recarregar dados originais** apaga a configuração salva no navegador e volta aos dados do projeto.

O editor não altera fisicamente o `dados.js`. Isso evita edição manual de coordenadas e conexões e deixa a estrutura preparada para, futuramente, trocar o armazenamento por banco de dados ou painel administrativo.

## Validação

No terminal, dentro da pasta do projeto:

```bash
node js/validate-map.js
```

A validação atual confirma que os locais possuem coordenadas e ligações válidas e que todos os pares de locais possuem rota.
