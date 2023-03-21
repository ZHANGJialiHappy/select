type SelectOption = {
    label: string,
    value: string,
}

type SelectProps = {
    options: SelectOption[],
    value?: SelectOption,
    onChange: (value: SelectOption | undefined) => void
}

export function Select({ value, onChange, options }: SelectProps) {

    return(
        <div tabIndex={0} 
        className="relative w-80 min-h-6 border-2 border-solid  border-yellow-500 flex items-center gap-2 p-2 rounded focus:border-yellow-200">
            <span className="value">value</span>
            <button className="clear-btn">&times;</button>
            <div className="divider"></div>
            <div className="caret"></div>
            <ul className="options">
                {options.map(option => (
                    <li key={option.label} className="option">
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}