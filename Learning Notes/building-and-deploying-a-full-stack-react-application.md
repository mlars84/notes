# Carl Peaslee Building and Deploying a Full-Stack React Application
- https://www.linkedin.com/learning/building-and-deploying-a-full-stack-react-application/exercise-files
- React—a popular JavaScript framework—boasts a number of developer-friendly tools that can help you quickly and efficiently turn your ideas into fully-functioning applications. If you already have a solid grasp of the essentials of full-stack JavaScript web development, this practical, project-based course can help you get acquainted with React. Follow Carl Peaslee as he walks through how to plan, configure, create, and deploy a scalable, full-stack React and Relay application. As Carl explains how to lay out a UX roadmap, construct the foundation of an application, implement authentication, and connect your app to a remote database, you can practice what you learn by building a site where users can play simple games.

## Notes:
- graph.cool
  - Relay API
- $ yarn run eject (Eject moves us from being a create React app default configured project to our own special configurable project.)
- $ yarn add babel-plugin-react-relay
  - change cacheDirectory: true, to false in webpack.config.dev.js
- add "plugins": ["react-relay"] in package.json under "babel": { on line 82
- $ yarn add react-router@3.0.2
- create config folder in src and endpoints.js file in config
  - export const relayApi = 'https://api.graph.cool/relay/v1/cj5zp1w97ckmz0104ybzkya8u';
- 
