---
title: A first look at Svelte for React Developers
date: Feb 28, 2023
cover: https://images.unsplash.com/photo-1577648188599-291bb8b831c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80
excerpt: Svelte is a framework which aims to provide a more efficient way of building web applications compared to traditional frameworks like React.
---

If you're a React developer looking for a new way to build web applications, you may have heard of Svelte. Svelte is a modern framework which aims to provide a more efficient and performant way of building web applications compared to traditional frameworks like React. In this post, we're going to look at some common snippets of react code and their equivalent in Svelte.

`useState()` hook

React
```
let [var, setVar] = useState(initialValue)

// mutate
setVar(newValue)
```

Svelte
```
let var = initialValue

// mutate
var = newValue
```

As we can see here, react uses a useState hook, which has an initial value, a state variable and a function to update the variable. Whereas in svelte, the variable's initial value is declared, and mutated by overwriting the variable, without the need of a function for updating. This results in much cleaner, easier to read code.

`useMemo()` hook

React
```
const memoized = useMemo(() => expression,
[dependancy1, dependancy2, ...]
)
```

Svelte
```
$: memoized = expression
```

Here, the useMemo hook takes 2 arguments, a function that returns the value to be memoized and an array of dependencies that the function depends on. If any of the dependencies change, the memoized value is recomputed, otherwise, it is returned from cache without re-executing the function. Whereas in Svelte, the $ sign is used, which means it is a reactive declaration, which is then used to define a variable that depends on one or more other variables. When any of the variables that the reactive declaration depends on change, the reactive declaration is re-evaluated. This, again, results in a much cleaner, easier to read code.

Iteration when rendering

React
```
<ul>
{list.map(item => {
return <li>{item}</li>
})}
</ul>

// with index
{list.map((item, index) => {
}))

// with key
{list.map(item =>
<div key={item.key}>...</div>
)}
```

Svelte
```
<ul>
{#each list as item}
<li>{item}</li>
{/each}
</ul>

// with index
{#each list as item, index}
...
{/each}

// with key
{#each list as item (item.key)}
...
{/each}
```

Event handlers

React
```
<div onClick={handler} />

const handler = event => {
event.preventDefault()
}

const handler = event => {
event.stopPropagation()
}
```

Svelte
```
<div on:click={handler} />

<div on:click|preventDefault={handler} />

<div on:click|stopPropagation={handler} />
```

In conclusion, Svelte offers a fresh and more efficient approach to building web applications compared to traditional frameworks like React. As we have seen from the snippets of code in this post, Svelte's syntax is simpler and more concise, resulting in cleaner and easier to read code. While there may be a learning curve for React developers transitioning to Svelte, the benefits of improved performance and developer experience make it well worth the effort. Whether you're building a small application or a large-scale project, Svelte's modern approach to web development can help you create better user experiences while saving you time and effort.