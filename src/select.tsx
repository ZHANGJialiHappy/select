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

    return (
        <div>
            <div tabIndex={0}
                className="relative w-80 min-h-6 border-2 border-solid  border-yellow-400 flex items-center gap-2 p-2 rounded group focus:border-yellow-200">
                <span className="grow">value</span>
                <button className="btn btn-circle btn-outline btn-warning btn-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="bg-yellow-400 group-focus:bg-yellow-200 self-stretch w-0.5"></div>
                <div className="translate-x-0 translate-y-1/4 border-8 border-solid border-transparent border-t-yellow-400"></div>
                <ul className="m-0 p-0 max-h-60">
                    {options.map(option => (
                        <li key={option.label} className="option">
                            {option.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}