# Closures no React

```js
function Comment(props) {
  const [likes, setLikes] = useState(0);

  function addLikes() {
    setLikes(likes + 1); // Cria uma segunda renderização de contexto
    setLikes(likes + 1); // Utiliza a primeira renderização ainda
    // Os sets criam novos contextos de renderização

    setLikeCount((oldState) => {
      // o parâmetro olValue é o valor mais atualizado disponível do contexto
      return oldState + 1;
      // Sempre que o estado necessitar do seu valor antigo para a atualização do novo, é altamente indicado que utilize o valor provido por uma função
    });
  }
}

Comment(props, 0); // Num primeiro momento de renderização, é como se o React passasse por parâmetros os valores dos estados
Comment(props, 1); // Num segundo momento de renderização, é passado o valor que foi modifico por um set dentro do componente
```
