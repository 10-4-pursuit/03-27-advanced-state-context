
## Objective
Learn to manage a complex state using React's Context API. Create a new context for a shopping cart and implement functionality to add, remove, and update items.

## Setup

1. **Create an 'Exercises' Directory** (If not already done):
   - Create a directory on your local machine for exercises using `mkdir Exercises`.

2. **Fork and Clone the Repository**:
   - Fork the repository `03-27-advanced-state-context`.
   - Clone the forked repository to your `Exercises` directory.

3. **Initial Setup**:
   - Navigate to the `03-27-advanced-state-context` directory.
   - Run `npm install` to install dependencies.

## Exercise Instructions

1. **Create ShoppingCartContext**:
   - In the `src` directory, create a file named `ShoppingCartContext.js`.
   - Define a `ShoppingCartContext` using `React.createContext()`.
   - The context should initially contain an empty array for cart items.

2. **Create a ShoppingCartProvider Component**:
   - In the same file, create a `ShoppingCartProvider` component.
   - Use `useState` to manage the cart items array.
   - Implement functions to add items to the cart, remove items, and update quantities.

3. **Creating Consumer Components**:
   - Build components like `Cart`, `AddToCartButton`, and `CartItem` that consume the `ShoppingCartContext`.
   - `Cart` should display all items in the cart.
   - `AddToCartButton` should add a specified item to the cart.
   - `CartItem` should allow for quantity changes and item removal.

4. **Integrate Context in the App**:
   - In `App.js`, import the `ShoppingCartProvider` and the consumer components.
   - Wrap the consumer components with the `ShoppingCartProvider`.

## Expected Outcome

- The shopping cart maintains a cohesive state across all components.
- Actions in one component (like adding an item) reflect across all components using the `ShoppingCartContext`.

## Testing

- Test adding items to the cart and observe the cart updating.
- Modify quantities and remove items, ensuring the cart reflects these changes.

## Submission

- Commit the completed exercise to your forked repository.
- Create a pull request, detailing the implementation and any challenges faced.
