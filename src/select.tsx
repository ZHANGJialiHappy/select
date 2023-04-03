import { useState } from 'react'
import './custom.css'

export type SelectOption = {
    label: string,
    value: string,
}

type MultipleSelectProps = {
    multiple: true,
    value: SelectOption[],
    onChange: (value: SelectOption[]) => void
}

type SingleSelectProps = {
    multiple?: false,
    value?: SelectOption,
    onChange: (value: SelectOption | undefined) => void
}

type SelectProps = {
    options: SelectOption[],
} & (SingleSelectProps | MultipleSelectProps)

export function Select({ multiple, value, onChange, options }: SelectProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const clearOptions = () => {
        multiple ? onChange([]) : onChange(undefined)
    }

    const selectOption = (option: SelectOption) => {
        if (multiple) {
            if (value?.includes(option)) {
                onChange(value.filter(option => option !== option))
            } else {
                onChange([...value, option])
            }
        } else {
            if (option !== value) onChange(option)
        }
    }

    const isOptionSelected = (option: SelectOption) => {
        return multiple ? value.includes(option) : option === value;
    }

    return (
            <div tabIndex={0}
                className="relative w-80 min-h-6 border-2 border-solid border-yellow-400 flex items-center gap-2 p-2 rounded group focus:border-yellow-200"
                onClick={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
            >
                <span className="grow">{
                    multiple ?
                        value.map(v => (
                        <button 
                            key={v.value}
                            onClick={e => {
                                e.stopPropagation();
                                selectOption(v);
                            }}
                            className="btn btn-warning btn-sm"
                            >{v.label}
                            <span className="text-yellow-200">&times;</span>
                        </button>))
                        : 
                        value?.label}
                </span>
                <button className="btn btn-circle btn-outline btn-warning btn-xs"
                    onClick={e => {
                        e.stopPropagation();
                        clearOptions();
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="bg-yellow-400 group-focus:bg-yellow-200 self-stretch w-0.5"></div>
                <div className="translate-x-0 translate-y-1/4 border-8 border-solid border-transparent border-t-yellow-400 group-focus:border-t-yellow-200"></div>
                <ul className={`absolute-position m-0 p-0 max-h-60 overflow-y-auto border-2 border-solid border-yellow-200 rounded w-full bg-white z-50 ${isOpen ? "" : "hidden"}`}>
                    {options.map((option) => (
                        <li onClick={event => {
                            event.stopPropagation();
                            selectOption(option);
                            setIsOpen(false);
                        }}
                            key={option.value}
                            className={`${isOptionSelected(option) ? "p-2 cursor-pointer bg-yellow-400" : "p-2 cursor-pointer hover:bg-yellow-200"}`}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            </div>

    )
}