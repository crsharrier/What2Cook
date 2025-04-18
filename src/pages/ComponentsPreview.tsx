import Button from '../components/buttons/Button'
import ExpandableButton from '../components/buttons/ExpandableInputButton'
import RecipeCard, { RecipeData } from '../components/cards/recipeCard'

const recipe: RecipeData = {
    id: 1,
    title: 'Spaghetti Bolognese',
    image: 'https://example.com/spaghetti.jpg',
    description: 'A classic Italian pasta dish with a rich meat sauce.',
    ingredients: [
        'spaghetti',
        'ground beef',
        'onion',
        'garlic',
        'tomato sauce',
        'olive oil',
        'salt',
        'pepper',
    ],
    instructions:
        '1. Cook spaghetti according to package instructions.\n2. In a pan, heat olive oil and sauté onion and garlic until soft.\n3. Add ground beef and cook until browned.\n4. Stir in tomato sauce and simmer for 20 minutes.\n5. Season with salt and pepper.\n6. Serve sauce over spaghetti.',
    cookTime: '30 mins',
    rating: 4,
}

export default function ComponentsPreview() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-min flex flex-col space-y-4">
                {/* recipe card  */}
                <RecipeCard recipe={recipe} />

                {/* buttons  */}
                <div className="flex space-x-2">
                    <Button
                        label="edit"
                        bgColor="bg-sky-500"
                        onClick={() => console.log('Button 1 clicked')}
                    />
                    <Button
                        label="add"
                        bgColor="bg-emerald-500"
                        onClick={() => console.log('Button 2 clicked')}
                    />
                    <Button
                        label="undo"
                        bgColor="bg-rose-500"
                        onClick={() => console.log('Button 3 clicked')}
                    />
                    <Button
                        label="redo"
                        bgColor="bg-lime-500"
                        onClick={() => console.log('Button 3 clicked')}
                    />
                    <Button
                        label="checklist"
                        bgColor="bg-yellow-500"
                        onClick={() => console.log('Button 4 clicked')}
                    />
                    <Button
                        label="save"
                        bgColor="bg-emerald-500"
                        onClick={() => console.log('Button 4 clicked')}
                    />
                </div>

                {/* Expandable Buttons  */}
                <div className="flex flex-col space-y-2 items-start">
                    <ExpandableButton
                        label="search"
                        bgColor="bg-orange-400"
                        onClick={() => {}}
                    />
                    <ExpandableButton
                        label="auto_awesome"
                        bgColor="bg-indigo-500"
                        onClick={() => {}}
                        inputPlaceholder="paste link here"
                    />
                </div>
            </div>
        </div>
    )
}
