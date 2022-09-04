import { Recipe } from "./recipe.model";

export class RecipeService {

  private recipes : Recipe[] = [
    new Recipe("A test recipe", "Test description", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZrcEYcq2_NAUJJZpCGoWus7K6zmmCdp2lFA&usqp=CAU"),
    new Recipe("Samosa", "One of the best snacks", "https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800"),
    new Recipe("Sweet Potato", "Great starters", "https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg")
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
