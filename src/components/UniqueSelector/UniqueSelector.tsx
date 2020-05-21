import React from 'react';
import * as Style from './UniqueSelector.styles';

interface props {
    options: any[];
}

export default function UniqueSelector({ options }: props) {
    return (
        <Style.Options>
            {options.map(option => (
                <Style.Option>
                    <Style.Text>{option}</Style.Text>
                </Style.Option>
            ))}
        </Style.Options>
    );
}
