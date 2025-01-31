import Button from './buttons/Button'
import ExpandableButton from './buttons/ExpandableInputButton'

export default function ComponentsPreview() {
    return (
        <div className="flex flex-col space-y-4">
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
            <div className="flex flex-col space-y-2">
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
    )
}
