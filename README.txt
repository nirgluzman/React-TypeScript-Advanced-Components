Udemy course: React & TypeScript - The Practical Guide
https://github.com/academind/react-typescript-course-resources

My GitHub: git@github.com:nirgluzman/React-TypeScript-Advanced-Components.git


React crash course
https://www.youtube.com/watch?v=4baq00tHfmA


React with Vite, https://vitejs.dev/guide/
npm create vite@latest react-ts-basic
npm install


*) TypeScript - tsconfig.json
(*) Strict Mode, https://dev.to/jsdev/strict-mode-typescript-j8p



*) ComponentPropsWithoutRef - for props spreading.
grab all the native attributes of an HTML element as the props type of your component.
https://stackoverflow.com/questions/73049726/what-is-react-componentpropswithoutref-for-react-typescript
https://mortenbarklund.com/blog/react-typescript-props-spread/



*) Type Predicate
Type assertion that checks if an object has a specific property or set of properties. 
This allows TypeScript to narrow (or refine) the type of an object based on the result of the function.


*) Polymorphic component - wraper component to dynamically change its rendered element based on a prop.
Enable customization of the underlying element (e.g., button, a, or div) while preserving the correct type for ref and other props. 
The most common use case when this is handy is a button that could render a or abutton element depending on what props are passed.