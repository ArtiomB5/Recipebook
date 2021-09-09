//App.tsx
export const PATH_ALL_RECIPES = '/allrecipes'
export const PATH_V_RECIPES = '/vegan'
export const PATH_NV_RECIPES = '/nonvegan'
export const PATH_ADD_NEW_RECIPE = '/addnewrecipe'
//App.tsx

//RecipesReducer.ts
//hashtags
export const VEGAN_HT = '#vegan'
export const NON_VEGAN_HT = '#non-vegan'

//actioTypes
export const DEFAULT_RECIPES_AT = 'DEFAULT_RECIPES'
export const ADD_RECIPE_AT = 'ADD_RECIPE'
export const ALL_RECIPES_AT = 'ALL_RECIPES'

//default vegan recipe
export const DEFAULT_VEGAN_RECIPE_TITLE = 'Creamy VeganRecipes Pasta'
export const DEFAULT_VEGAN_RECIPE_IMG_LINK = 'https://cdn.loveandlemons.com/' +
  'wp-content/uploads/2017/10/vegan-pasta.jpg';
export const DEFAULT_VEGAN_RECIPE_INGREDIENTS =
  '2½ cups small shell pasta\n' +
  '1 tablespoon extra-virgin olive oil\n' +
  '1 small yellow onion, chopped\n' +
  '5 cups broccoli florets, chopped stems, and leaves (keep stems separate)\n' +
  '¼ cup toasted pine nuts\n' +
  'lemon wedges, for serving'
export const DEFAULT_VEGAN_RECIPE_PROCESS =
  'Make the sauce: In a blender, combine the white beans, broth, lemon ' +
  'juice, olive oil, nutritional yeast, garlic, onion powder, salt, and ' +
  'pepper, and blend until smooth. Set aside.\n' +
  'Bring a large pot of salted water to a boil. Prepare the pasta according' +
  ' to the instructions on the package, cooking until al dente. Drain and' +
  ' set aside.\n' +
  'Heat 1 tablespoon of olive oil in a large skillet over medium heat.' +
  ' Add the onion and sauté until soft, about 5 minutes.\n' +
  'Stir in the chopped broccoli stems and cook for another 3 to 5 minutes' +
  ' or until tender. Add the broccoli florets and leaves and a splash of' +
  ' water or vegetable broth. Cover and turn off the heat.\n' +
  'Allow the broccoli to steam for 2 to 3 minutes or until tender but still' +
  ' bright green. Add the pasta, then stir in ¾ of the sauce, adding more' +
  ' broth if the sauce is too dry.\n' +
  'Season to taste with more salt, pepper and lemon juice, as desired, and' +
  ' portion into bowls. Divide the remaining sauce onto each bowl. Top with' +
  ' the pine nuts and serve with lemon wedges on the side.'

//default non-vegan recipe
export const DEFAULT_NON_VEGAN_RECIPE_TITLE = 'The Classic Burger'
export const DEFAULT_NON_VEGAN_RECIPE_IMG_LINK = 'https://imagesvc.meredithcorp' +
  '.io/v3/mm/image?url=https%3A%2' +
  'F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2005%2F06%2F2' +
  '2%2Fclassic-burgers-u.jpg'
export const DEFAULT_NON_VEGAN_RECIPE_INGREDIENTS =
  '1 pound ground lean (7% fat) beef\n' +
  '1 large egg\n' +
  '½ cup minced onion\n' +
  '¼ cup fine dried bread crumbs\n' +
  '1 tablespoon Worcestershire\n' +
  '1 or 2 cloves garlic, peeled and minced\n' +
  'About 1/2 teaspoon salt\n' +
  'About 1/4 teaspoon pepper\n' +
  '4 hamburger buns (4 in. wide), split\n' +
  'About 1/4 cup mayonnaise\n' +
  'About 1/4 cup ketchup\n' +
  '4 iceberg lettuce leaves, rinsed and crisped\n' +
  '1 firm-ripe tomato, cored and thinly sliced\n' +
  '4 thin slices red onion\n'
export const DEFAULT_NON_VEGAN_RECIPE_PROCESS =
  'Step 1' +
  'In a bowl, mix ground beef, egg, onion, bread crumbs, Worcestershire, ' +
  'garlic, 1/2 teaspoon salt, and 1/4 teaspoon pepper until well blended. ' +
  'Divide mixture into four equal portions and shape each into a patty ' +
  'about 4 inches wide.\n' +
  'Step 2' +
  'Lay burgers on an oiled barbecue grill over a solid bed of hot coals or ' +
  'high heat on a gas grill (you can hold your hand at grill level only 2 ' +
  'to 3 seconds); close lid on gas grill. Cook burgers, turning once, ' +
  'until browned on both sides and no longer pink inside (cut to test), ' +
  '7 to 8 minutes total. Remove from grill.\n' +
  'Step 3' +
  'Lay buns, cut side down, on grill and cook until lightly toasted, ' +
  '30 seconds to 1 minute.\n' +
  'Step 4' +
  'Spread mayonnaise and ketchup on bun bottoms. Add lettuce, tomato, ' +
  'burger, onion, and salt and pepper to taste. Set bun tops in place.\n'
//RecipesReducer.ts

//Menu.tsx
//buttons titles
export const SHOW_ALL_RECIPES_BTN = 'Show all recipes'
export const ADD_NEW_RECIPE_BTN = 'Add new recipe'
export const SHOW_NV_RECIPES_BTN = 'Show non-vegan recipes'
export const SHOW_V_RECIPES_BTN = 'Show vegan recipes'
export const DELETE_ALL_RECIPES_BTN = 'Delete all added recipes'
//Menu.tsx

//Header.tsx
export const HEADER_TITLE = 'Recipe Book'
//Header.tsx

//AddRecipe.tsx
export const USER_ALERT_MSG = 'Please fill in all the input fields!'
//AddRecipe.tsx