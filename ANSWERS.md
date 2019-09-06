- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components can manage state simpler by calling state from React.Component. Class components also use lifecycle hooks, which can wait for specific events to run code.

- [ ] Name three lifecycle methods and their purposes.

render() - has no side effetcs, returns the same thing everytime it's invoked. No browser interaction.

 componentDidMount() - invoked when a componenet is mounted. A good replacement for useEffect when making axios calls using class componenets.

 componentDidUpdate() - Only invoked when the componenet updates. Good for refreshing content without reloading the entire page.

- [ ] What is the purpose of a custom hook?

To store bits of logic in one place so they can be re-used, which follows the D.R.Y. priciple.

- [ ] Why is it important to test our apps?

It can help catch bugs and save time in the long run. Also helps catch edge cases and test for false positives. 