import React from "react";

interface IInputProps {
    value: string,
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}

interface IFormProps {
    onSubmit: (event:React.FormEvent<HTMLFormElement>) => void
}

export const Input:React.FunctionComponent<IInputProps> =({value, onChange})=>(
    <input type="text" placeholder="Write here" value={value} onChange={onChange}/>
)

export const Form:React.FunctionComponent<IFormProps> = ({children, onSubmit}) => (
    <form onSubmit={onSubmit}>{children}</form>
)