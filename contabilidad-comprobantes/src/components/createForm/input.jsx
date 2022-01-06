import React from 'react';
import {Input, Label, GrupoInput, LeyendaError, IconValidation} from './createFormStyles'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const InputComponent = ({label, placeholder, name, type, id, required, value, onChange, className}) => {
    return (
        <div>
            <Label htmlFor="nombre">{label}</Label>
            <GrupoInput>
                <Input type="text" placeholder={placeholder} id={id} type={type} name={name} required={required} value={value} onChange={onChange} className={className}/>
                <IconValidation icon={faCheckCircle}/>
            </GrupoInput>
            <LeyendaError>Lorem ipsum dolor sit amet.</LeyendaError>
        </div>

    )
}

export default InputComponent;