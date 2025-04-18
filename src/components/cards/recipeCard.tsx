import RatingWidget from '../widgets/ratingWidget'
import TimeWidget from '../widgets/timeWidget'

export type RecipeData = {
    id: number
    title: string
    image: string
    description: string
    ingredients: string[]
    instructions: string
    cookTime: string
    rating: number
}

export default function RecipeCard({ recipe }: { recipe: RecipeData }) {
    return (
        <div className="card p-3 flex flex-col items-center justify-center">
            {/* image  */}
            <img className="size-64 border border-black" src={recipe.image} />

            <div className="flex flex-col h-52 items-center">
                {/* title  */}
                <div className="text-2xl font-bold py-2 text-center">
                    {recipe.title}
                </div>

                {/* rating  */}
                <RatingWidget rating={recipe.rating} />

                {/* time  */}
                <TimeWidget time={recipe.cookTime} />
            </div>
        </div>
    )
}
